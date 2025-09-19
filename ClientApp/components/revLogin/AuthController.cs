using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using Newtonsoft.Json;
using reactBase;
using Utilities;

//https://medium.com/@ozgurgul/asp-net-core-2-0-webapi-jwt-authentication-with-identity-mysql-3698eeba6ff8 

namespace components.revLogin
{
    [Route("api/[controller]")]
    [Authorize]
    public class AuthController : Controller
    {
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        readonly IJWTCreater _jwtCreater;
        readonly workspace.IWorkspaceResolver _workSpaceResolver;
        IConfiguration _configuration;

        readonly IDownLoaderService _downloader;
        private readonly ILogger _logger;

        readonly IWebHostEnvironment _hostingEnvironment;
        readonly IApplianceUserManager _applianceMgr;

        readonly IEmailSenderService _emailService;

        readonly IDistributedCache _distributedCache;

        public AuthController(commonInterfaces.IRevAuthDatabase revDb,
            IJWTCreater jwtCreater,
            ITaskSignerservice signer,
            IWebHostEnvironment hostingEnvironment,
            IDistributedCache distributedCache,
            IDownLoaderService downloader,
            IConfiguration configuration,
            workspace.IWorkspaceResolver workSpace,
            IApplianceUserManager applianceMgr,
            IEmailSenderService emailService,
            ILogger<AuthController> logger)
        {
            _authDb = revDb;

            _hostingEnvironment = hostingEnvironment;
            _jwtCreater = jwtCreater;
            _workSpaceResolver = workSpace;
            _configuration = configuration;
            _downloader = downloader;
            _applianceMgr = applianceMgr;
            _logger = logger;
            _emailService = emailService;
            _distributedCache = distributedCache;
        }





        /// <summary>
        /// This is first thing normal clients will call to find out how things are
        /// </summary>
        /// <param name="context"> is used to pass in context data</param>
        /// <param name="apikey"> used to pass in unsercured API credentials. Should only be turned ON fore view permission accounts</param>
        /// <returns></returns>
        [HttpGet]
        [AllowAnonymous]
        public async Task<StatusMessageModel> Status([FromQuery] string context)
        {
            //var config = _configuration.GetSection("authentication");
            var settings = new StatusMessageModel
            {
                Version = $"{typeof(commonInterfaces.LivesInCommonInterfaces).Assembly.GetName().Version}",

                RevConnect = _configuration.GetValue<string>("authentication:revConnect"),
                signOutUrl = _configuration.GetValue<string>("authentication:signouturl"),

                restrictedNewWorkspace = !string.IsNullOrWhiteSpace(_configuration.GetValue<string>("authentication:newWorkSpaceRestriction")),
                sessionId = Guid.NewGuid().ToString()
            };

            //this is also used to find templates
            if (String.IsNullOrWhiteSpace(settings.RevConnect))
                throw new ExceptionWithCode("rev connect not defined", System.Net.HttpStatusCode.ServiceUnavailable);

            var authenicationWorkspace = _workSpaceResolver.getAuthenticationWorkspace();


            if (authenicationWorkspace?.openIdProviders?.Count() > 0)
            {
                _logger.LogDebug($"workspace {authenicationWorkspace.name} is using open Connect");

                var addedContext = String.Empty;
                if (!string.IsNullOrWhiteSpace(context))
                {
                    try
                    {
                        var stateCacheKey = $"redirected_{Guid.NewGuid()}";

                        await _distributedCache.SetStringAsync(stateCacheKey,
                            context,
                            new DistributedCacheEntryOptions
                            {
                                AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1),
                            });

                        addedContext += $"&state={stateCacheKey}";

                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"Failed to se app context to cache: {ex}");
                    }
                }

                settings.openIdProviders = (await Task.WhenAll(authenicationWorkspace?.openIdProviders.Select(async kv =>
                {
                    var authorityConfig = await _jwtCreater.getconfigFromOpenIdAuthorityAsync(kv.Value.authority);

                    //https://login.salesforce.com/services/oauth2/authorize?scope=openid&response_type=code&client_id=gyw9hJS815EPBhCQw50fjBj&redirect_uri=https%3A%2F%2Finsight.testrev.com%3A8079%2F
                    //settings.oAuthUrl = $"{authorityConfig.AuthorizationEndpoint}?scope=openid&response_type=code&client_id={workspace.openConnectClientId}&redirect_uri={redirectUrl}";

                    var scopeToget = "openid";
                    if (kv.Value.scopes?.Length > 0)
                    {
                        //nice to have api refresh_token
                        scopeToget = $"{scopeToget}  {string.Join(" ", kv.Value.scopes)}";

                        _logger.LogDebug($"asking for scopes {scopeToget}");
                    }

                    var redirectUrl = WebUtility.UrlEncode(revCore2site.Controllers.HomeController
                                    .getOpenIdRedirectURL(_configuration, kv.Key, authenicationWorkspace.name, _logger));


                    return new
                    {
                        kv.Key,
                        oAuthUrl = $"{authorityConfig.AuthorizationEndpoint}?scope={scopeToget}&response_type=code&client_id={kv.Value.clientId}&redirect_uri={redirectUrl}{addedContext}"
                    };
                }))).ToDictionary(k => k.Key, v => v.oAuthUrl);

            }


            string preAuthenticatedUser = null;


            if (context != null)
            {
                //check if workspaces metadata AuthAPKeys dictionary contains this key.
                //if so create JWT for this user and send it with settings.

                //preAuthenticatedUser = XXXXXXXXX;
                _logger.LogDebug($"context is {context}");
                var apikey = HttpUtility.ParseQueryString(new Uri(context).Query)["apikey"];
                if (apikey != null)
                {
                    var authKeys = authenicationWorkspace.metaData;
                    if (authKeys.ContainsKey($"authkey_{apikey}"))
                    {
                        preAuthenticatedUser = authKeys[$"authkey_{apikey}"];
                        _logger.LogDebug($"user is {preAuthenticatedUser}");

                    }
                }


            }


            var sslVarified = Request.Headers["ssl-client-verify"].FirstOrDefault();
            if (@"SUCCESS" == sslVarified)
            {
                _logger.LogDebug($"Status called with ssl-client-verify -> SUCCESS");

                var sslClient = Request.Headers["ssl-client-subject-dn"].FirstOrDefault();

                if (string.IsNullOrWhiteSpace(sslClient))
                {
                    _logger.LogError("no ssl-client-subject-dn found with ssl-client-verify -> SUCCESS. There is issues with ingress parameters");
                }
                else
                {
                    var userDetails = revClientAuth.Factory.parseCLientDn(sslClient);
                    if (string.IsNullOrWhiteSpace(userDetails?.workspaceName) || string.IsNullOrWhiteSpace(userDetails?.UserName))
                    {
                        _logger.LogError($"invalid ssl-client-subject-dn:  {sslClient}");
                    }
                    else if (authenicationWorkspace.name != userDetails?.workspaceName)
                    {
                        _logger.LogError($"certificate workspace {userDetails?.workspaceName} does not match authentication workspace {authenicationWorkspace.name}");
                    }
                    else
                    {
                        preAuthenticatedUser = userDetails.UserName;


                    }
                }


            }

            if (null != preAuthenticatedUser)
            {
                var user = await _authDb.getCollection<User>().Find(u => u.UserName == preAuthenticatedUser).SingleOrDefaultAsync();

                if (null == user)
                {
                    _logger.LogError($"certificate user {preAuthenticatedUser} not found in users collection");
                }
                else
                {
                    settings.jwt = _jwtCreater.createForInteractive(user, this.clientLocation(), externalEcess: "certAuth");
                }

            }

            return settings;
        }

        public static async Task<User> createNewUseAsync(commonInterfaces.IRevAuthDatabase authDb, string userName, Action<User> extraInfoDel = null)
        {
            var dbUser = new User
            {
                UserName = userName,
                pwdDigest = $"cannotuse_{Guid.NewGuid()}"
            };

            if (null != extraInfoDel)
                extraInfoDel(dbUser);

            await authDb.AddorUpdateAsync(dbUser);

            return dbUser;


        }



        /// <summary>
        /// used to hydrate JWT cache with tokens so that salesforce lookup will work
        /// </summary>
        /// <param name="authStr"></param>
        /// <param name="forMinutes"></param>
        /// <returns></returns>
        [HttpGet("setCache")]
        public async Task setCache([FromQuery] string authStr, [FromQuery] int forMinutes = 30)
        {
            var oAuthToken = await _jwtCreater.saveOAuthtoCacheAsync(authStr, _workSpaceResolver.getCurrentWorkspace());
            //TimeSpan.FromMinutes(forMinutes));
        }



        [HttpGet("serverAuths")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public RefreshToken[] userTokens([FromQuery] string user)
        {
            var dbUser = _authDb.getQueryable<User>().Single(u => u.UserName == user);
            return dbUser.refreshTokens ?? new RefreshToken[] { };
        }

        [HttpGet("logoff")]

        public async Task<string> logoff()
        {
            var workspace = _workSpaceResolver.getAuthenticationWorkspace();
            await _jwtCreater.invalidateCurrentLogonAsync(workspace);

            return "done";
        }

        [AllowAnonymous]
        [HttpGet("releaseLock/{key}")]
        public async Task<Dictionary<string, LicenseLocksModel>> releaseLock(string key)
        {
            if (string.IsNullOrWhiteSpace(key))
                throw new ArgumentNullException(nameof(key));

            var authWorkspace = _workSpaceResolver.getAuthenticationWorkspace();

            return await _jwtCreater.releaseLock(authWorkspace, Uri.UnescapeDataString(key));

        }

        [HttpGet("forgotpassword/{userId}")]
        [AllowAnonymous]
        public async Task<string> forgotpassword(string userId)
        {
            var collection = _authDb.getCollection<User>();

            var userQ = collection.Find(u => u.UserName.ToLower() == userId.ToLower() || u.emailaddress.ToLower() == userId.ToLower());

            var q = userQ.ToString();

            var user = await userQ.SingleOrDefaultAsync();

            var revcode = new Random().Next(10000, 99999).ToString();

            if (null == user)
            {
                //check if the user was from auth0
                var auth0Collection = _authDb.db.GetCollection<Auth0User>(Auth0User.COLLECTION_NAME);
                var auth0User = await auth0Collection.Find(u => u.Email.ToLower() == userId.ToLower()).SingleOrDefaultAsync();

                if (null != auth0User)
                {
                    _logger.LogInformation($"user {userId} found in Auth0 create user in rev");

                    var authWorkspace = _workSpaceResolver.getAuthenticationWorkspace();

                    var creds = new LoginCredsModel
                    {
                        login = userId.ToLower(),

                    };

                    if (null == authWorkspace.users || (!authWorkspace.users.Contains(auth0User.Id) && !authWorkspace.users.Contains(creds.login)))
                    {
                        _logger.LogWarning($"the for user {userId}: Auth0user -> {auth0User.Id} is not a user in the authetication workspace {authWorkspace.id}");
                        return "done";
                    }



                    var workspaceCollection = _authDb.getCollection<WorkspaceModel>();

                    if (!authWorkspace.users.Contains(creds.login))
                    {
                        //mongo doen't allow psh and pull for same prop
                        var userUpdater = Builders<WorkspaceModel>.Update
                            .Push(w => w.users, creds.login)
                            //.Pull(w => w.users, auth0User.Id)
                            ;


                        if (auth0User.Id == authWorkspace.ownerUser)
                        {
                            userUpdater = userUpdater.Set(w => w.ownerUser, creds.login);
                        }

                        var userDOne = await workspaceCollection.UpdateOneAsync(w => w.id == authWorkspace.id, userUpdater);

                        if (!userDOne.IsAcknowledged)
                            throw new Exception("mongo did not ack");

                    }

                    var removed = await workspaceCollection.UpdateOneAsync(w => w.id == authWorkspace.id,
                        Builders<WorkspaceModel>.Update.Pull(w => w.users, auth0User.Id));

                    if (!removed.IsAcknowledged)
                        throw new Exception("mongo did not ack");



                    await workspaceResolver.RevWorkspaceResolver.EnsureUserExistsAndCredentials(_logger,
                        _authDb, creds
                        ,
                    setResetPin: revcode,
                    auth0Id: auth0User.Id,
                    emailAddress: userId.ToLower(),
                    workspaceId: authWorkspace.id
                    );

                    user = await collection.Find(u => u.UserName == userId.ToLower()).SingleAsync();
                }
            }

            if (null == user)
            {
                //we don't want to send out info
                _logger.LogWarning($"Reset password called for user {userId} not found");
                throw new ExceptionWithCode("Please contact your administration or customer support at this link https://scanrev.freshdesk.com/a/tickets/new");
                //return "done";
            }

            if (string.IsNullOrWhiteSpace(user.emailaddress))
            {
                throw new ExceptionWithCode("You have no email address on file. Please contact customer support at this link https://scanrev.freshdesk.com/a/tickets/new");
            }


            //if there is already a reset pin then just update the reset pin
            var updater = string.IsNullOrWhiteSpace(user.resetPin) ?
                    Builders<User>.Update.Set(u => u.passResetToken, revcode) :
                    Builders<User>.Update.Set(u => u.resetPin, revcode);

            {
                var done = await collection.UpdateOneAsync(
                    u => u.id == user.id, updater);

                if (!done.IsAcknowledged)
                {
                    throw new ExceptionWithCode("failed to send reset code");
                }
            }

            await _emailService.sendServerEmailAsync(new[] { user.emailaddress }, "Rev password reset pin", $"Your password reset pin is {revcode}");


            return "done";


        }

        /// <summary>
        /// Creates JWT token after validating credentials
        /// </summary>
        /// <param name="value">User Credentials</param>
        /// <param name="validSec">how many seconds we need the JWT for. defaults to 15 min</param>
        /// <returns>JWT token</returns>
        [HttpPost]
        [AllowAnonymous]
        public async Task<string> LoginAsync([FromBody] LoginCredsModel creds,
            [FromQuery] int? validSec = null,
            [FromQuery] String claims = null)
        {
            var user = await _applianceMgr.EnsureValidCredentialsAsync(creds);

            var id_token = _jwtCreater.createForInteractive(user, this.clientLocation(), validSec, claims);

            var oAuthToken = await _jwtCreater.saveOAuthtoCacheAsync(JsonConvert.SerializeObject(new { id_token }), _workSpaceResolver.getAuthenticationWorkspace());

            return oAuthToken.jwtToken;
        }

    }


    [BsonIgnoreExtraElements]
    public class Auth0User
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string _id { get; set; }

        [BsonElement("Id")]
        public string Id { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public readonly static string COLLECTION_NAME = @"auth0Users";
    }

}
