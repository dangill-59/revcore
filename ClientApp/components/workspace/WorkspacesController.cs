using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.revLogin;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;
using reactBase;
using revMQAbstractions;
using Utilities;

namespace components.workspace
{
    [Route("api/[controller]")]
    [Authorize]
    public class WorkspacesController : Controller
    {
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        readonly IWorkspaceResolver _resolver;
        readonly string _customDomTemplate;
        readonly IJWTCreater _jwtCreater;
        readonly ITaskSignerservice _signer;
        IConfiguration _configuration;
        readonly long? _maxWorkspaces = null;
        readonly IServiceProvider _provider;
        readonly IMessagingService _messaging;
        readonly ILogger _logger;
        readonly ICustomDomainMgr _customDomainMgr;
        readonly billing.ISubscriberBillingInfo _billingService;
        readonly string _currentInstanceFQN = null;
        readonly permissions.IProvisionAuthProvider _userProvisioner;
        readonly IRevMQBus _mq;

        readonly IRevAudit _audit = null;

        public WorkspacesController(
            commonInterfaces.IRevAuthDatabase authDb,
            ITaskSignerservice signer,
            IConfiguration configuration, IWorkspaceResolver resolver,
            IJWTCreater jwtCreater,
            permissions.IProvisionAuthProvider userProvisioner,

            ICustomDomainMgr customDomainMgr,
            ILogger<WorkspacesController> logger,
            IRevAudit audit,
            IRevMQBus mq,
            //we are injecting the serviceProvider, cause this conroller might need access to revDb and all on a per call basis
            IServiceProvider provider,
            billing.ISubscriberBillingInfo billingService,

            IMessagingService messaging)
        {
            _logger = logger;
            _userProvisioner = userProvisioner;

            _billingService = billingService;

            var multiConfig = configuration.GetSection("multisite");
            _jwtCreater = jwtCreater;
            _signer = signer;
            _messaging = messaging;
            _provider = provider;
            _customDomainMgr = customDomainMgr;

            _audit = audit;

            var enabled = multiConfig["enabled"];
            if (String.IsNullOrWhiteSpace(enabled) || enabled.ToLower() != "true")
                throw new Exception("Workspaces not supported");

            _customDomTemplate = multiConfig["custdomainTemplate"];

            if (!string.IsNullOrWhiteSpace(multiConfig["maxWorkspaces"]))
            {
                _maxWorkspaces = long.Parse(multiConfig["maxWorkspaces"]);
            }

            _authDb = authDb;
            _resolver = resolver;
            _configuration = configuration;

            _mq = mq;

            var currentRevInstance = configuration["multisite:currentInstance"];
            if (!string.IsNullOrWhiteSpace(currentRevInstance))
            {
                _currentInstanceFQN = new Uri(currentRevInstance).DnsSafeHost;
            }

        }

        static string displayNameforResource(string key)
        {
            switch (key)
            {
                case "googleOCR":
                    return "OCR";
                default:
                    return "unknown";
            }

        }

        [HttpGet("messages")]
        public async Task<Dictionary<MessageToShowTypesModel, Dictionary<string, MessageToShowModel>>> getMessagesforWorkspace()
        {
            var messages = await _messaging.getMessagesforWorkspace();

            var messageId = 1;

            var ret = (from m in messages
                       group m by m.type into g
                       select new { g.Key, Value = g.ToDictionary(k => $"message_{messageId++}", v => v) })
                      .ToDictionary(k => k.Key, v => v.Value);

            try
            {
                //if (_billingService.billingSupported)
                {

                    var subscription = await _billingService.getCachedSubscription(_resolver.getCurrentWorkspaceName());
                    if (billing.SubscriptionStatusModel.trialing == subscription.status)
                    {
                        if (!ret.ContainsKey(MessageToShowTypesModel.warning))
                        {
                            ret[MessageToShowTypesModel.warning] = new Dictionary<string, MessageToShowModel>();
                        }

                        var dayText = "day";
                        if (subscription.trialDaysLeft != 1)
                        {
                            dayText = dayText + "s";
                        }

                        ret[MessageToShowTypesModel.warning][$"message_trail"] = new MessageToShowModel
                        {
                            details = $"{subscription.trialDaysLeft} {dayText} of your free trial left",
                            heading = "Free trial",
                            type = MessageToShowTypesModel.warning
                        };
                    }

                }

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"getMessagesforWorkspace: failed to check for trial");
            }

            try
            {
                var workspace = _resolver.getCurrentWorkspace();

                if (null != workspace.quotas)
                {

                    var low = workspace.quotas.Where(q => q.Value.creditsLeft() < 50).ToDictionary(q => $"low_credit_{displayNameforResource(q.Key)}", q => new MessageToShowModel
                    {
                        details = $"There are only {q.Value.creditsLeft()} credits left for {displayNameforResource(q.Key)}",
                        heading = $"low credit alert for {displayNameforResource(q.Key)}",
                        type = MessageToShowTypesModel.warning
                    });

                    if (low.Count() > 0)
                    {
                        if (!ret.ContainsKey(MessageToShowTypesModel.warning))
                        {
                            ret[MessageToShowTypesModel.warning] = new Dictionary<string, MessageToShowModel>();
                        }

                        ret[MessageToShowTypesModel.warning] = ret[MessageToShowTypesModel.warning].Concat(low).ToDictionary(k => k.Key, v => v.Value);

                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"getMessagesforWorkspace: failed to check for trial");
            }

            try
            {
                var workspace = _resolver.getCurrentWorkspace();
                var dbName = components.workspace.Resolver.revdbNameFromWorkspaceId(workspace.id);
                var revDb = new MongoDbService.RevDatabase(
                    components.workspace.Resolver.getMongoConnectionstring(_configuration),
                    dbName,
                    workspace);
                var collection = revDb.getCollection<DocumentModel>();
                var pendinQ = collection.Find(d => d.catalogued != true && d.isPlaceHolder != true);
                var pedning = await pendinQ.CountDocumentsAsync();

                if (pedning > 0)
                {

                    if (!ret.ContainsKey(MessageToShowTypesModel.warning))
                    {
                        ret[MessageToShowTypesModel.warning] = new Dictionary<string, MessageToShowModel>();
                    }

                    ret[MessageToShowTypesModel.warning]["indexing_pending"] = new MessageToShowModel
                    {
                        details = $"There are {pedning} documents yet to be catalogued. Search results would be incomplete",
                        heading = $"Indexing in progress",
                        type = MessageToShowTypesModel.warning
                    };
                }

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"getMessagesforWorkspace: failed to check for trial");
            }


            return ret;
        }

        #region administration

        [HttpPost("mailSettings")]
        public async Task updateEmailSettings([FromBody] MailSettingsModel mailSettings, [FromQuery] bool remove = false)
        {
            if (null == mailSettings)
                throw new ArgumentNullException("mailSettings");

            var currentWorkspace = this.ensureWorkspaceAdmin(_resolver);

            if (remove)
            {
                _logger.LogInformation($"removing mail settings from workspace {currentWorkspace.name}");
                mailSettings = null;
            }

            if (null != mailSettings && !String.IsNullOrWhiteSpace(mailSettings.passWordEncrypted))
            {
                mailSettings.passWordEncrypted = _signer.EncryptData(mailSettings.passWordEncrypted);
            }

            currentWorkspace.mailSettings = mailSettings;

            await _authDb.AddorUpdateAsync(currentWorkspace);


        }

        readonly static string AUTHPROVIDEROPENID = "OpenId Connect";

        /// <summary>
        /// The current object only if the calling user is an owner
        /// </summary>
        /// <returns></returns>
        [HttpGet("AdminDetails")]
        public WorkspaceForEditModel AdminDetails()
        {
            var currentWorkspace = this.ensureWorkspaceAdmin(_resolver);
            var ret = new WorkspaceForEditModel
            {
                workSpace = currentWorkspace,

                /*allowedConnections =  
                    (_configuration.GetSection("Auth0:availableConnections").Get<string[]>()??new string[] { })
                    .Concat(new string[] { AUTHPROVIDEROPENID })
                    .ToArray()
				*/
            };

            return ret;
        }


        public class JoinRSVPReq { public string invitation; public string hash; public long ticks; }

        [HttpPost("join")]
        public async Task<string> handleJoinRSVP([FromBody] JoinRSVPReq req)
        {
            if (null == req.invitation || null == req.hash)
                throw new ExceptionWithCode("null parameters");

            //Invitation is valid for 7 days
            _signer.verifyHash(req.invitation, new SignedHash { hash = req.hash, ticks = req.ticks }, TimeSpan.FromDays(7));

            var invitationObj = JsonConvert.DeserializeObject<permissions.JoinInvitationModel>(req.invitation);

            var workspace = _authDb.getQueryable<WorkspaceModel>()
                .Where(w => w.name == invitationObj.workspace)
                .Single();

            var dbName = components.workspace.Resolver.revdbNameFromWorkspaceId(workspace.id);
            var revDb = new MongoDbService.RevDatabase(
                            components.workspace.Resolver.getMongoConnectionstring(_configuration), dbName, workspace);

            await _userProvisioner.handleJoinInvitation(invitationObj, revDb, this.currentLoggedonUser());

            return invitationObj.workspace;
        }



        /// <summary>
        /// creates a JWT used for access for external scripts using the current logged on USER
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost("createAccessToken")]
        public string createExternalAccessToken([FromBody] ExternalUseTokenReqModel req)
        {
            var user = this.currentLoggedonUser();
            return createImpersonationToken(user, req);
        }

        [HttpPost("feature/{name}")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task updateLicenseFeature(string name, [FromBody] LicFeatureModel feature)
        {
            var currentWorkspace = _resolver.getCurrentWorkspace();

            if (null == currentWorkspace.features)
                currentWorkspace.features = new Dictionary<string, LicFeatureModel>();

            if (null == feature)
            {
                if (currentWorkspace.features.ContainsKey(name))
                    currentWorkspace.features.Remove(name);
            }
            else
            {
                currentWorkspace.features[name] = feature;
            }



            await _authDb.AddorUpdateAsync(currentWorkspace);
        }

        [HttpGet("syncfromstripe/{workspaceName}")]
        [AllowAnonymous]
        public async Task SyncFromStripe(string workspaceName)
        {
            if (string.IsNullOrWhiteSpace(workspaceName))
                throw new ArgumentNullException(nameof(workspaceName));

            await _mq.publishMessageAsync(new MQUpdateBilling(workspaceName, MQUpdateBilling.BillingTasks.syncFromStripe));
        }

        /// <summary>
        /// Used by support people to impoersonate a user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost("createImpersonationToken")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public string createImpersonationToken([FromQuery] string user, [FromBody] ExternalUseTokenReqModel req)
        {
            return _jwtCreater.create(
                    location: this.clientLocation(),
                    Login: user, validSec: (req.tokenExpirationTime - DateTime.Now),
                    requestedClaims: new Dictionary<ClaimNames, string>
                    {
                        { ClaimNames.RevAppAccess, JWTCreater.RevAccessClaimValues.All.ToString() },
                        {ClaimNames.ExternalProgram,req.name  },
                        {ClaimNames.serverAccessJWT, req.name }
                    });
        }

        #endregion

        #region User Workspace
        /// <summary>
        /// Get the workspace names that the current logged in user has access to
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<WorkspaceAccessModel> getUserWorkspaces()
        {
            var user = this.currentLoggedonUser();

            //if it's a custom doman, then the choice is made we only send that domain out

            var authenticationWorkspace = _resolver.getAuthenticationWorkspace();
            if (null == authenticationWorkspace)
            {
                throw new ExceptionWithCode("You have a reached a REV workspace that does not exist");
            }

            return new[] { new WorkspaceAccessModel(authenticationWorkspace, user) };

        }

        public static bool isCustomDomainName(string name)
        {
            //it is custom domain if the name is not a Guid
            Guid t;
            return !Guid.TryParse(name, out t);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="workspace"></param>
        /// <returns>cust domain FQN or null if not a custom domain</returns>
        public static string customDomainFQN(string customDomTemplate, string name)
        {
            if (!isCustomDomainName(name))
                return null;

            var uri = new Uri(customDomTemplate.Replace("{custom}", name));
            return uri.DnsSafeHost;
        }


        [HttpDelete("{confirmationCode}")]
        public Task RemoveWorkpace(string confirmationCode)
        {
            throw new NotImplementedException();
            /*
			var staticDeletecode = _configuration["support:workspaceDeleteCode"];

			if (staticDeletecode != confirmationCode)
			{
				_logger.LogWarning($"RemoveWorkpace: confirmationCode:{confirmationCode} != staticDeletecode:{staticDeletecode}");
				throw new ExceptionWithCode("Invalid confirmation code", System.Net.HttpStatusCode.Forbidden);
			}


			var user = this.currentLoggedonUser();
			var existing = this.ensureWorkspaceAdmin(_resolver);

			_logger.LogInformation($"RemoveWorkpace: called for workpsace {existing.name}");

			if (existing.ownerUser != user)
			{
				throw new ExceptionWithCode("Only owner can remove the workpace", System.Net.HttpStatusCode.Forbidden);
			}

			//remove in order so that we can call again even if we fail any step

			if (isCustomDomainName(existing.name) && _customDomainMgr.customRoutingAvavilable)
			{
				await _customDomainMgr.updateCustomDomainAsync(removeDomain: customDomainFQN(existing.name));
			}


			try
			{
				_logger.LogInformation($"RemoveWorkpace : deleting ES index for workspace: {existing.name}" );
				var esHelper = _provider.GetRequiredService<IRevEsHelper_OBSELETE>();
				throw new NotImplementedException();
				//await esHelper.deleteIndexAsync();
			}
			catch (Exception ex)
			{
				if (!ex.Message.Contains("index_not_found_exception"))
					throw ex;

				_logger.LogCritical($"the ES index didnot exist");
			}

			try
			{
				_logger.LogInformation($"RemoveWorkpace : deleting images for workspace: {existing.name}");
				var storage = _provider.GetRequiredService<RevStorage.IRevStorageService>();
				await storage.RemoveAllContentsAsync();
			}
			catch (Exception ex)
			{
				_logger.LogCritical(ex, $"RemoveWorkpace: failed to remoe images for workspace {existing.name}");
			}

			//_audit.Log(AuditAction.workspaceDeleted, user, existing.name, existing.name);

			try
			{
				_logger.LogInformation($"RemoveWorkpace : deleting database for workspace: {existing.name}");
				var db = _provider.GetRequiredService<commonInterfaces.IRevDatabase>();
				await db.DeleteDatabaseAsync();
			}
			catch (Exception ex)
			{
				_logger.LogCritical(ex, $"RemoveWorkpace: failed to remove database for workspace {existing.name}");
			}


			//*********************** IMPORTANT *******************************
			//delete the subscription just befew removing the workspace
			//as db and storage delete operations need the susbscription
			try
			{
				await _billingService.removeSubscriptionAsync(existing.name);
			}
			catch(Exception ex)
			{
				_logger.LogCritical(ex, $"Failed to remove subscription for {existing.name}");
			}



			await _authDb.DeleteAsync<WorkspaceModel>(new[] { existing.id });
			*/
        }


        /// <summary>
        /// used to rename or other modify workspace properties, can only be used by the workspace owner
        /// </summary>
        /// <param name="workspace"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<WorkspaceForEditModel> Save([FromBody] WorkspaceForEditModel model)
        {
            var user = this.currentLoggedonUser();
            var existing = this.ensureWorkspaceAdmin(_resolver);

            var collection = _authDb.getCollection<WorkspaceModel>();

            //fornow the onlt thing we change is inactivityTimeoutMin
            if (existing.inactivityTimeoutMin != model.workSpace?.inactivityTimeoutMin)
            {
                var done = await collection.UpdateOneAsync(w => w.id == existing.id,
                    Builders<WorkspaceModel>.Update.Set(w => w.inactivityTimeoutMin, model.workSpace?.inactivityTimeoutMin)
                );

                if (!done.IsAcknowledged)
                    throw new Exception("mongo failed to ack");

            }

            return AdminDetails();

        }




        /// <summary>
        /// used to create  workspace
        /// </summary>
        /// <param name="newName"></param>
        /// <returns>the dnsname for the workspace</returns>
        [HttpGet("createNew")]
        public async Task<string> createNew([FromQuery] string authCode)
        {
            if (null != _resolver.getAuthenticationWorkspace())
                throw new ExceptionWithCode("cannot create new workspace in a custom domain", System.Net.HttpStatusCode.Forbidden);

            var restrictricedNewWorkspaceCode = _configuration["authentication:newWorkSpaceRestriction"];

            if (string.IsNullOrWhiteSpace(restrictricedNewWorkspaceCode))
                throw new ExceptionWithCode("You have reached a REV server that is not in service to create new workspaces. Please check the URL", System.Net.HttpStatusCode.Forbidden);

            if (restrictricedNewWorkspaceCode != authCode)
                throw new ExceptionWithCode("Cannot create Workspace. Invalid AuthorizationCode", System.Net.HttpStatusCode.Forbidden);


            if (null != _maxWorkspaces)
            {
                if (_authDb.getQueryable<WorkspaceModel>().Count() >= _maxWorkspaces.Value)
                    throw new ExceptionWithCode($"cannot create more workspaces", System.Net.HttpStatusCode.Forbidden);
            }

            var user = this.currentLoggedonUser();


            var workSpaceCollection = _authDb.getQueryable<WorkspaceModel>();
            var workSpace = workSpaceCollection
                .Where(w => w.ownerUser == user)
                .SingleOrDefault();

            if (null == workSpace)
            {
                workSpace = new WorkspaceModel
                {
                    ownerUser = user,
                    users = new[] { user }
                };
            }


            workSpace.name = Guid.NewGuid().ToString();

            await _authDb.AddorUpdateAsync(workSpace);

            _audit.Log(AuditAction.workspaceCreated, user, workSpace.name, workSpace.name);


            return workSpace.name;
        }
        #endregion

        #region WORKSPACE MIGRATION
        //methods used for importing and managing workpaces 


        /// <summary>
        /// usedd to suspend image processing while doing bulk imports
        /// </summary>
        /// <param name="wokspaceName"></param>
        /// <param name="suspend"></param>
        /// <returns></returns>
        [HttpGet("suspendbackgroundimageproc/{wokspaceName}")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task SuspendBackGroundImageProcessing(string wokspaceName, [FromQuery] bool suspend = true)
        {
            //var user = this.currentLoggedonUser();
            var existing = _authDb.getQueryable<WorkspaceModel>()
                .Where(w => w.name == wokspaceName)
                .Single();

            /*
			if (existing.ownerUser != user)
				throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
			*/

            existing.suspendBackGroundImageProcessing = suspend;

            await _authDb.AddorUpdateAsync(existing);

        }

        [HttpGet("moveToInstance/{wokspaceName}")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task<WorkspaceModel> moveToInstance(string wokspaceName, [FromQuery] string instance)
        {
            var existing = _authDb.getQueryable<WorkspaceModel>()
                .Where(w => w.name == wokspaceName)
                .Single();

            if (string.IsNullOrWhiteSpace(instance))
                throw new ExceptionWithCode("instance name is empty");

            _logger.LogInformation($"moveWorkspaceInstance: name :{existing.name}, instance:{existing.revInstanceName} ->{instance}");
            existing.revInstanceName = instance;

            return await _authDb.AddorUpdateAsync(existing);

        }

        /// <summary>
        /// Get all workspace names
        /// </summary>
        /// <returns></returns>
        [HttpGet("getAll")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public string[] getAllWorkspaces()
        {
            return _authDb.getQueryable<WorkspaceModel>()
                .Select(w => w.name)
                .ToArray();
        }


        #endregion


    }
}
