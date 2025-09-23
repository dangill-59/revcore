using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Utilities;

namespace components.workspace
{

    /*
	 * 
	 *THE GOAL IS REMOVE THIS FILE GRADUALLY To The workspaceResolver project 
	 * 
	 * 
	 */
    public struct WorkSpaceDb
    {
        public string workspaceName { get; set; }
        public string dbName { get; set; }
        public string workspaceId { get; set; }
    }


    /// <summary>
    /// used by JWT creater used to avoid cyclic dependency
    /// </summary>
    public interface IAuthWorkspaceResolver
    {
        /// <summary>
        /// gets the workspace from showing login screen 
        /// </summary>
        /// <returns></returns>
        WorkspaceModel getAuthenticationWorkspace();
        string getAuthenticationWorkspaceName();
    }

    /// <summary>
    /// Legacy workspace removed DONOT use for new code
    /// </summary>
    public interface IWorkspaceResolver : IAuthWorkspaceResolver, workspaceResolver.ILegacyResolverComon
    {
        WorkSpaceDb dbNamefromWorkSpace();

        IStorageProvider storageProviderFromWorkspace(reactBase.ICacheProvider cache);

        /// <summary>
        /// gets the current workspace from httpcontext also ensure workspace access
        /// </summary>
        /// <returns></returns>
        //WorkspaceModel getCurrentWorkspace();

        string getCurrentWorkspaceName();




        /// <summary>
        /// Used to allow access to restricted REV servers
        /// </summary>
        /// <param name="wkSpaceName"></param>
        /// <param name="forDuration"></param>
        /// <returns></returns>
        Task AllowServerAccess(string wkSpaceName, TimeSpan forDuration);
    }

    public interface IMQSpaceResolver
    {
        IStorageProvider getStorageProvider(string workspaceId);
        MongoDbService.RevDatabase getRevDb(string workspaceId);
    }

    /// <summary>
    /// This resolved db and storage from workspace id.
    /// Used by IhotsedServices
    /// 
    /// </summary>
    public class MQSpaceResolver : IMQSpaceResolver
    {
        readonly ILogger _logger;
        readonly IConfiguration _configuration;
        readonly reactBase.ICacheProvider _cache;
        readonly commonInterfaces.IRevAuthDatabase _authDb;

        public MQSpaceResolver(
            IConfiguration configuration,
            reactBase.ICacheProvider cache,
            commonInterfaces.IRevAuthDatabase authDb,
            ILogger<MQSpaceResolver> logger
            )
        {
            _logger = logger;
            _configuration = configuration;
            _authDb = authDb;
            _cache = cache;
        }

        public IStorageProvider getStorageProvider(string workspaceId)
        {
            return Resolver.storageProviderFromWorkspaceId(_configuration, _cache, workspaceId);
        }

        public MongoDbService.RevDatabase getRevDb(string workspaceId)
        {
            var workSpace = _authDb.getQueryable<WorkspaceModel>().Single(w => w.id == workspaceId);

            var dbName = components.workspace.Resolver.revdbNameFromWorkspaceId(workSpace.id);
            return new MongoDbService.RevDatabase(Resolver.getMongoConnectionstring(_configuration), dbName, workSpace);
        }

    }

    public class AuthSpaceResolver : IAuthWorkspaceResolver
    {
        protected readonly IHttpContextAccessor _contextAccessor;
        protected readonly string _customDomTemplate;
        protected readonly ILogger _logger;
        protected readonly commonInterfaces.IRevAuthDatabase _authDb;

        public AuthSpaceResolver(
            ILogger<AuthSpaceResolver> logger,
            IHttpContextAccessor contextAccessor,
            IConfiguration configuration,
            commonInterfaces.IRevAuthDatabase wkSpcDb
            )
        {
            _logger = logger;
            _authDb = wkSpcDb;
            _contextAccessor = contextAccessor;

            _customDomTemplate = workspaceResolver.RevWorkspaceResolver.loadCustomDocTemplate(configuration);
        }

        public string getAuthenticationWorkspaceName()
        {
            var httpContext = _contextAccessor.HttpContext;
            var host = httpContext.Request.Host;

            if (string.IsNullOrWhiteSpace(host.Host))
            {
                throw new ExceptionWithCode($"No REV host to sign in");
            }

            _logger.LogDebug($"getAuthenticationWorkspace: host : {host.ToUriComponent()}");


            if (string.IsNullOrWhiteSpace(_customDomTemplate))
            {
                _logger.LogDebug("customDomTemplate not configured ");
                return null;
            }

            var m = Regex.Match(host.Host.ToLower(), _customDomTemplate);
            if (m.Success)
            {
                var wkSpcName = m.Groups[1].Value.ToLower();
                _logger.LogDebug($"getAuthenticationWorkspace: wkSpcName :{wkSpcName}");

                return wkSpcName;
            }

            _logger.LogDebug("hotname didnot match template returning SINGLE workspace");
            return null;

        }

        public WorkspaceModel getAuthenticationWorkspace()
        {
            var wkSpcName = getAuthenticationWorkspaceName();

            var workspaceQ = _authDb.getQueryable<WorkspaceModel>();

            if (!string.IsNullOrWhiteSpace(wkSpcName))
            {
                workspaceQ = workspaceQ.Where(w => w.name == wkSpcName);
            }
            else
            {
                _logger.LogDebug("No Workspace name will return the SINGLE workspace");
            }

            var wkSpace = workspaceQ.SingleOrDefault();

            if (null == wkSpace)
            {
                throw new ExceptionWithCode("workspace not found", System.Net.HttpStatusCode.Ambiguous, "selectWorkSpace");
            }

            return wkSpace;
        }

    }

    public class Resolver : AuthSpaceResolver, IWorkspaceResolver
    {


        readonly IConfiguration _configuration;

        readonly IDistributedCache _distributedCache;

        readonly string _SiteRestrictedTo = null;

        readonly string _currentRevInstance;

        readonly billing.ISubscriberBillingInfo _billingService;

        readonly revLogin.IJWTCreater _jwtCreater;

        public Resolver(IHttpContextAccessor contextAccessor,
            commonInterfaces.IRevAuthDatabase wkSpcDb,
            IConfiguration configuration,
            IDistributedCache distributedCache,
            billing.ISubscriberBillingInfo billingService,
            revLogin.IJWTCreater jwtCreater,
            ILogger<Resolver> logger
            ) : base(logger, contextAccessor, configuration, wkSpcDb)
        {
            _jwtCreater = jwtCreater;
            _currentRevInstance = configuration["multisite:currentInstance"];
            if (string.IsNullOrWhiteSpace(_currentRevInstance))
                throw new Exception("Resolver: multisite:currentInstance not set in configuration");


            _distributedCache = distributedCache;

            _configuration = configuration;


            _billingService = billingService;

            _SiteRestrictedTo = configuration.GetValue<string>("support:restricted");
            if (!string.IsNullOrEmpty(_SiteRestrictedTo))
            {
                logger.LogInformation($"SiteRestrictedTo : {_SiteRestrictedTo}");
            }
            else
            {
                _SiteRestrictedTo = null;
            }
        }

        public IStorageProvider storageProviderFromWorkspace(reactBase.ICacheProvider cache)
        {
            return storageProviderFromWorkspaceId(_configuration, cache, getCurrentWorkspace().id);
        }

        public WorkSpaceDb dbNamefromWorkSpace()
        {
            var currentWorkspace = getCurrentWorkspace();
            return new WorkSpaceDb
            {
                workspaceName = currentWorkspace.name,
                dbName = revdbNameFromWorkspaceId(currentWorkspace.id),
                workspaceId = currentWorkspace.id
            };
        }

        public static IStorageProvider storageProviderFromWorkspaceId(IConfiguration configuration, reactBase.ICacheProvider cache, string id)
        {
            var multiConfig = configuration.GetSection("multisite");
            var storageType = multiConfig["storage"];

            // Default to 'file' if storage configuration is missing or empty
            if (string.IsNullOrWhiteSpace(storageType))
            {
                storageType = "file";
            }

            switch (storageType)
            {
                case "s3":
                    return new S3StorageProvider(configuration, cache, revdbNameFromWorkspaceId(id));
                case "azure":
                    return new AzureBlobStorageProvider(configuration, cache, revdbNameFromWorkspaceId(id));
                case "file":
                default:
                    return new FileStorageProvider(configuration, revdbNameFromWorkspaceId(id));
            }
        }

        public static MongoDbService.revDbBase.connectionInfo getMongoConnectionstring(IConfiguration configuration)
        {
            var config = configuration.GetSection("mongoDb").Get<MongoDbService.revDbBase.connectionInfo>();// new MongoDbService.revDbBase.connectionInfo();
                                                                                                            //var mongoConfig = configuration.GetSection("mongoDb");

            if (string.IsNullOrWhiteSpace(config?.connectionString))
                throw new Exception("Database is not configured");

            return config;
        }


        public static string revdbNameFromWorkspaceId(string id)
        {
            return $"rev_{id}";
        }

        string getSiteRestrictionKey(string workspaceName)
        {
            return $"siteRestriction:{_SiteRestrictedTo}_{workspaceName}";
        }

        /// <summary>
        /// used by support to allow a workspace to be served by a debugging server for a certian duration
        /// </summary>
        /// <param name="wkSpaceName"></param>
        /// <param name="forDuration"></param>
        /// <returns></returns>
        public async Task AllowServerAccess(string wkSpaceName, TimeSpan forDuration)
        {
            if (null == _SiteRestrictedTo)
                throw new ExceptionWithCode("Is not a restricted server");

            var accessKey = getSiteRestrictionKey(wkSpaceName);

            _logger.LogInformation($"granting site access for workspace {accessKey}");

            await _distributedCache.SetStringAsync(
                getSiteRestrictionKey(wkSpaceName), "true",
                new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = forDuration
                });
        }

        public string getCurrentWorkspaceName()
        {
            var httpContext = _contextAccessor.HttpContext;
            var wkSpcName = httpContext.Request.Headers["workspace"].FirstOrDefault();

            _logger.LogTrace($"getCurrentWorkspace: Headers[workspace] = {wkSpcName}");


            if (string.IsNullOrWhiteSpace(wkSpcName))
            {
                if (httpContext.Request.Query.ContainsKey("workspace"))
                    wkSpcName = httpContext.Request.Query["workspace"];
            }

            if (string.IsNullOrWhiteSpace(wkSpcName))
            {
                throw new ExceptionWithCode("No workspace selected",
                    System.Net.HttpStatusCode.Ambiguous,
                    "selectWorkSpace");
            }

            return wkSpcName;

        }


        public commonInterfaces.dbDataTypes.WorkspaceModel getCurrentWorkspace()
        {
            var wkSpace = getAuthenticationWorkspace();

            if (null != _SiteRestrictedTo)
            {
                var accessKey = getSiteRestrictionKey(wkSpace.name);
                if (string.IsNullOrEmpty(_distributedCache.GetString(accessKey)))
                {
                    _logger.LogError($"Server access key {accessKey} not found for workpace {wkSpace.name}");

                    _jwtCreater.invalidateCurrentLogonAsync(wkSpace);

                    throw new ExceptionWithCode($"Server access denied");
                }
            }

            /* We don't care about revInstance any more
			if (string.IsNullOrWhiteSpace(wkSpace.revInstanceName))
			{
				_logger.LogInformation($"getCurrentWorkspace: setting revInstance for workspace {wkSpace.name} to {_currentRevInstance}");
				wkSpace.revInstanceName = _currentRevInstance;
				var saved = _wkSpcDb.AddorUpdateAsync(wkSpace).Result;
			}
			*/
            var user = _contextAccessor.HttpContext.currentLoggedonUser();


            if (wkSpace.users.Contains(user))
            {
                return wkSpace;
            }

            _logger.LogInformation($"Workspace {wkSpace.name} does not conatin user {user}");

            if (support.SupportPeopleAuthHandler.isUserSiteAdmin(user, _configuration, _logger))
            {
                _logger.LogInformation($"getCurrentWorkspace :Support access granted for {wkSpace.name} for SUPPORT personal : {user}");
                return wkSpace;
            }


            if (_contextAccessor.HttpContext.User.Identity is System.Security.Claims.ClaimsIdentity)
            {
                var IssuerClaim = ((System.Security.Claims.ClaimsIdentity)_contextAccessor.HttpContext.User.Identity).Claims.
                    Where(c => c.Type == revLogin.ClaimNames.openIDProvider.ToString()).FirstOrDefault();

                if (null != IssuerClaim)
                {
                    _logger.LogInformation($"user {user} is provisioned by provider {IssuerClaim.Value}. adding to workspace");

                    OpenConnectModel openConnectConfig = null;
                    if (null == wkSpace.openIdProviders || !wkSpace.openIdProviders.TryGetValue(IssuerClaim.Value, out openConnectConfig))
                    {
                        throw new ExceptionWithCode($"Provide {IssuerClaim.Value} not configured for workspace {wkSpace.name}");
                    }


                    {
                        var userDetails = _authDb.getQueryable<User>()
                                        .Where(u => u.UserName == user)
                                        .SingleOrDefault();
                        if (null == userDetails)
                        {
                            throw new Exception($"user {user} not found in authdb user collection");
                        }


                        var revDb = new MongoDbService.RevDatabase(
                            components.workspace.Resolver.getMongoConnectionstring(_configuration),
                            revdbNameFromWorkspaceId(wkSpace.id),
                            wkSpace
                        );

                        var newUserName = userDetails.preferredName ?? userDetails.emailaddress;

                        var exists = revDb.getQueryable<WorkspaceUserModel>()
                            .Where(u => u.id == newUserName)
                            .SingleOrDefault();

                        if (null != exists)
                        {
                            /*_jwtCreater.invalidateCurrentLogonAsync();
							throw new ExceptionWithCode(
								$"the user {newUserName} already exists with a different authentication provider", System.Net.HttpStatusCode.Forbidden);
							*/
                            _logger.LogDebug($" user {newUserName} already exists");
                        }
                        else
                        {
                            var userRole = string.IsNullOrWhiteSpace(openConnectConfig?.userRole) ? null : new[] { openConnectConfig.userRole };
                            var done = revDb.getCollection<WorkspaceUserModel>().UpdateOne(u => u.id == user,
                                Builders<WorkspaceUserModel>.Update
                                .Set(u => u.roles, userRole)
                                .Set(u => u.userId, user)
                                .SetOnInsert(u => u.id, user),
                                new UpdateOptions
                                {
                                    IsUpsert = true
                                }
                                );

                            if (!done.IsAcknowledged)
                                throw new Exception("mongo failed to ack");

                        }

                    }

                    //wkSpace.users = wkSpace.users.Concat(new[] { user }).ToArray();
                    //var done = _authDb.AddorUpdateAsync(wkSpace).Result;
                    {
                        var done = _authDb.getCollection<WorkspaceModel>().UpdateOne(
                            w => w.name == wkSpace.name && !w.users.Contains(user),
                            Builders<WorkspaceModel>.Update.Push(w => w.users, user));

                        if (!done.IsAcknowledged)
                            throw new Exception("Mongo failed to ack");
                    }

                    return wkSpace;
                }
            }

            throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);



        }
    }
}
