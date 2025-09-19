using commonInterfaces.dbDataTypes;
using components.licensing;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using MoreLinq;
using NeoSmart.AsyncLock;
using Nest;
using Newtonsoft.Json;
using reactBase;
using revMQAbstractions;
using StackExchange.Redis.Extensions.Core.Abstractions;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Utilities;

namespace components.revLogin
{


    public class ParsedOAuthToken
    {
        public JwtSecurityToken castedToken { get; set; }
        public string jwtToken { get; set; }
        public string access_token { get; set; }
        public string refresh_token { get; set; }
    }

    public interface IJWTCreater
    {
        string create(String location, string Login,
            IEnumerable<KeyValuePair<ClaimNames, string>> requestedClaims,
            TimeSpan? validSec = null, Guid? recycleJtiId = null);

        TokenValidationParameters getMyTokenValidationParameter();



        Task<OpenIdConnectConfiguration> getconfigFromOpenIdAuthorityAsync(string authority);

        Task<ParsedOAuthToken> saveOAuthtoCacheAsync(string JWTstringObtainedfromTokenProvider, WorkspaceModel workspace);
        Task<T> getOAuthStrfromCacheAsync<T>(T proto, WorkspaceModel workspace);

        Task invalidateCurrentLogonAsync(WorkspaceModel workspace);

        /// <summary>
        /// Get the current Rev Session from JWT
        /// </summary>
        //string revHttpSession { get; }

        Task<Dictionary<string, LicenseLocksModel>> releaseLock(WorkspaceModel workspace, string key);

        string createForInteractive(User user, string location, int? validSec = null, string claims = null, string openIdProvider = null, string externalEcess = null);
    }

    public partial class JWTCreater : JWTBase, IJWTCreater
    {




        //JWT creator cannot use REV DB
        //revdb is context based and JWT needs to be global
        //we might need another db....
        //readonly commonInterfaces.IRevDatabase _revDb;


        readonly IeffectiveLicense _effectiveLic;
        readonly IHttpContextAccessor _contextAccessor;
        readonly workspace.IAuthWorkspaceResolver _workSpaceResolver;




        readonly commonInterfaces.IRevAuthDatabase _revAuthDb;
        readonly IConfiguration _configuration;

        private readonly ILogger _logger;

        readonly IRevAudit _revAudit;

        readonly IRedisCacheClient _redis;




        readonly ITaskSignerservice _signer;

        readonly IRevMQBus _mq;


        public JWTCreater(
            ITimeServer timesvr, IeffectiveLicense effectiveLic, commonInterfaces.IRevAuthDatabase revDb,
            IHttpContextAccessor contextAccessor, workspace.IAuthWorkspaceResolver workSpaceResolver,
            IConfiguration configuration,

            IRevMQBus mq,
            IRevAudit revAudit,
            IRedisCacheClient redis,
            ITaskSignerservice signer,
            ILogger<JWTCreater> logger
            ) : base(timesvr, configuration)

        {
            _revAudit = revAudit;
            _revAuthDb = revDb;
            _configuration = configuration;

            _effectiveLic = effectiveLic;
            _redis = redis;
            _signer = signer;
            _mq = mq;





            _contextAccessor = contextAccessor;
            _workSpaceResolver = workSpaceResolver;



            _logger = logger;




        }

        static readonly Prometheus.Counter _workspaceLoginCounter =
            Prometheus.Metrics.CreateCounter("api_call", "total api calls", new Prometheus.CounterConfiguration
            {
                LabelNames = new[] { "workspace" }
            });



        /// <summary>
        /// Saves the JWT string obtained for a user in the cache
        /// </summary>
        /// <param name="JWTstringObtainedfromTokenProvider"></param>
        /// <returns></returns>
        public async Task<ParsedOAuthToken> saveOAuthtoCacheAsync(string JWTstringObtainedfromTokenProvider, WorkspaceModel workspace)
        {
            var ret = JsonConvert.DeserializeAnonymousType(JWTstringObtainedfromTokenProvider, new { id_token = "", access_token = "", refresh_token = "" });
            var castedToken = new JwtSecurityToken(ret.id_token);

            if (null == workspace)
            {
                throw new ArgumentNullException(nameof(workspace));
            }

            //var loginIdentifier = cacheKeyFromIdToken(castedToken.Subject, castedToken.RawSignature, workspace?.name);

            //_revAudit.Log(AuditAction.signedIn, castedToken.Subject,loginIdentifier.genericKey,workspace:$"rev_{workspace?.id}");
            _logger.LogDebug($"saveJWTinCacheAsync: saving token for {castedToken.Subject} ");

            await saveJWTToCache(castedToken, JWTstringObtainedfromTokenProvider, workspace);

            return new ParsedOAuthToken
            {
                access_token = ret.access_token,
                refresh_token = ret.refresh_token,
                jwtToken = ret.id_token,
                castedToken = castedToken
            };

        }

        TimeSpan workspaceInactivityTimeout(WorkspaceModel workspace)
        {
            if (null == workspace)
            {
                throw new ArgumentNullException(nameof(workspace));
            }

            TimeSpan ret;
            if (null != workspace.inactivityTimeoutMin && 0 != workspace.inactivityTimeoutMin.Value)
            {
                _logger.LogDebug($"using inactivityTimeoutMin {workspace.inactivityTimeoutMin} for workspace {workspace.name}");
                ret = TimeSpan.FromMinutes((double)workspace.inactivityTimeoutMin);
            }
            else
            {
                _logger.LogDebug($"using default for workspace {workspace.name}");
                ret = _defaultInactivityTimeOut;
            }

            _mapWorkspaceSlidigExpirations[workspace.name] = ret;

            return ret;
        }


        static readonly string ALL_LICENSE_INUSE = @"ALL_LICENSE_INUSE";




        readonly static ConcurrentDictionary<string, DateTime> _activatedWorkspaces
                                            = new ConcurrentDictionary<string, DateTime>();
        readonly AsyncLock _workspaceActivatorLock = new AsyncLock();
        async Task ActivateWorkspace(string workspaceName)
        {
            try
            {
                using (await _workspaceActivatorLock.LockAsync())
                {
                    if (string.IsNullOrWhiteSpace(workspaceName))
                        throw new ArgumentNullException(nameof(workspaceName));

                    DateTime lastActivated;
                    if (!_activatedWorkspaces.TryGetValue(workspaceName, out lastActivated))
                    {
                        _logger.LogDebug($"workspace {workspaceName} never activated");
                        lastActivated = DateTime.MinValue;
                    }

                    if (DateTime.Now < lastActivated.AddMinutes(30))
                    {
                        _logger.LogDebug($"workspace {workspaceName} already activating in the last 30 min");
                        return;
                    }


                    _logger.LogDebug($"Activating workspace {workspaceName}");

                    await _mq.ActivateWorkspace(workspaceName);

                    _activatedWorkspaces[workspaceName] = DateTime.Now;

                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exception while activating workspace {workspaceName}. : {ex}");
            }


        }



        public string createForInteractive(User user, string location, int? validSec = null, string claims = null, string openIdProvider = null, string externalEcess = null)
        {
            var revAccessValues = new[] { JWTCreater.RevAccessClaimValues.All };

            /*
            if (null!=user.roles && user.roles.Contains(commonInterfaces.dbDataTypes.User.SYSTEM_ADMIN_ROLE_NAME))
                revAccessValues = revAccessValues.Concat(new[] { JWTCreater.RevAccessClaimValues.Admin }).ToArray();
            */

            if (null != claims)
            {
                var requestedClaims = claims.Split(new[] { ',' });
                revAccessValues = revAccessValues.Where(c => requestedClaims.Contains(c.ToString())).ToArray();
                if (revAccessValues.Count() == 0)
                    throw new reactBase.ExceptionWithCode("invalid claims requested",
                                                        System.Net.HttpStatusCode.BadRequest);
            }

            var jwtClaims = new List<KeyValuePair<ClaimNames, string>>(revAccessValues.Select(a => new KeyValuePair<ClaimNames, string>(ClaimNames.RevAppAccess, a.ToString())));

            jwtClaims.Add(new KeyValuePair<ClaimNames, string>(ClaimNames.name, user.preferredName ?? user.emailaddress ?? user.UserName));

            if (!string.IsNullOrWhiteSpace(openIdProvider))
            {
                jwtClaims.Add(new KeyValuePair<ClaimNames, string>(ClaimNames.openIDProvider, openIdProvider));
            }

            if (!string.IsNullOrWhiteSpace(externalEcess))
            {
                jwtClaims.Add(new KeyValuePair<ClaimNames, string>(ClaimNames.serverAccessJWT, externalEcess));
            }


            var id_token = create(
                    location: location,
                    Login: user.UserName, validSec: null != validSec ? TimeSpan.FromSeconds(validSec.Value) : (TimeSpan?)null,
                    requestedClaims: jwtClaims);


            return id_token;



        }

        public string create(String location, string Login,
            IEnumerable<KeyValuePair<ClaimNames, string>> requestedClaims,
            TimeSpan? validSec = null, Guid? recycleJtiId = null)
        {
            return createForWorkspace(_workSpaceResolver.getAuthenticationWorkspace(), Login, requestedClaims, validSec, recycleJtiId);
        }



        public async Task<OpenIdConnectConfiguration> getconfigFromOpenIdAuthorityAsync(string authority)
        {
            OpenIdConnectConfiguration ret;
            if (!_openIdConfigs.TryGetValue(authority, out ret))
            {
                var configurationManager = new ConfigurationManager<OpenIdConnectConfiguration>($"{authority.TrimEnd('/') + "/"}.well-known/openid-configuration",
                                                new OpenIdConnectConfigurationRetriever());
                ret = await configurationManager.GetConfigurationAsync(System.Threading.CancellationToken.None);
                _openIdConfigs[authority] = ret;
            }

            return ret;
        }




        readonly ConcurrentDictionary<string, OpenIdConnectConfiguration> _openIdConfigs = new ConcurrentDictionary<string, OpenIdConnectConfiguration>();

        //An expired token can be renewed for 3 days
        internal const int MAX_EXP_RENWAL_HOURS = 24 * 3;



    }

}
