using commonInterfaces;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.revLogin
{
    public interface IApplianceUserManager
    {
        Task<User> EnsureValidCredentialsAsync(LoginCredsModel creds);
    }

    public class UPConfig
    {
        /// <summary>
        /// map of users and resetpin
        /// </summary>
        public Dictionary<string, string> users { get; set; }
    }

    public class ApplianceUserManager : IApplianceUserManager
    {
        readonly bool _usingAuth0 = true;

        readonly ILogger _logger;
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        //readonly string configFileName;

        readonly workspace.IWorkspaceResolver _workSpaceResolver;

        readonly Services.ISendSMSService _smsService;
        readonly IDistributedCache _distributedCache;

        readonly IRevDatabase _revDb;


        public ApplianceUserManager(
            commonInterfaces.IRevAuthDatabase authDb,
            Services.ISendSMSService smsService,
            IWebHostEnvironment hostingEnvironment,

            IDistributedCache distributedCache,
            IRevDatabase revDb,


            IConfiguration configuration,
            components.workspace.IWorkspaceResolver workSpaceResolver,
            ILogger<ApplianceUserManager> logger)
        {
            _usingAuth0 = !((configuration["authentication:useAuth0"] ?? "").ToLower() == "true");

            _logger = logger;
            _authDb = authDb;
            _smsService = smsService;
            _distributedCache = distributedCache;

            _workSpaceResolver = workSpaceResolver;

            _revDb = revDb;

        }


        /// <summary>
        /// Verifies user credentials or throws Exception
        /// </summary>
        /// <returns></returns>
        public async Task<User> EnsureValidCredentialsAsync(LoginCredsModel creds)
        {
            var workspace = _workSpaceResolver.getAuthenticationWorkspace();
            var user = await workspaceResolver.RevWorkspaceResolver.EnsureUserExistsAndCredentials(_logger, _authDb, creds, workspace.id);

            if (null != user)
            {
                if (null != workspace.features && workspace.features.ContainsKey(BillableFeaturesModel.twofactorAuth.ToString()))
                {
                    await ensureTwofactor(user, creds.twoFactorCode, creds.sessionId);
                }
            }


            return user;

        }



        async Task ensureTwofactor(User user, string twofactorCode, string sessionId)
        {
            var wkUsercollection = _revDb.getCollection<WorkspaceUserModel>();

            var existing = await wkUsercollection.Find(u => u.userId == user.UserName).FirstOrDefaultAsync();

            if (null == existing)
            {
                throw new Exception($"user {user.UserName} not found in WorkspaceUserModel collection");
            }

            if (string.IsNullOrWhiteSpace(existing.phoneNumber) || existing.phoneNumber.Length < 10)
            {
                throw new ExceptionWithCode("There is no known phone number for this Account. " +
                    "A phone number is required so that we can send out your aurorization code via SMS. Please contact your system administrator. ");
            }

            var err = $"Please enter the autorization code that was sent via SMS to your registered phone number ending in XXX-XXX-{existing.phoneNumber.Substring(existing.phoneNumber.Length - 4, 4)}";

            if (string.IsNullOrWhiteSpace(sessionId))
                new ExceptionWithCode("SessionID cannot be null");

            var redisKey = $"rev_2factor_code_{user.UserName}_{sessionId}";
            var redisTrialleftKey = $"rev_2factor_code_{user.UserName}_{sessionId}_trailleft";

            if (string.IsNullOrWhiteSpace(twofactorCode))
            {
                _logger.LogDebug($"sending two factor code for use {user.id}:{user.UserName}");


                var revcode = new Random().Next(10000, 99999).ToString();

                await _distributedCache.SetStringAsync(redisKey, revcode, new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
                });

                await _distributedCache.SetStringAsync(redisTrialleftKey, "3", new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
                });

                await _smsService.sendTextMessageAsync(existing.phoneNumber, $"Your rev authorization code is {revcode}");

                //send out the sms
                throw new ExceptionWithCode(
                        message: err,
                        reason: "2factor code required"
                        );

            }
            else
            {
                var trialLeftStr = await _distributedCache.GetStringAsync(redisTrialleftKey);

                int trialLeft;
                if (!int.TryParse(trialLeftStr ?? "", out trialLeft))
                {
                    trialLeft = 0;
                }

                if (trialLeft <= 0)
                {
                    throw new ExceptionWithCode("too many retries");
                }

                var revcode = await _distributedCache.GetStringAsync(redisKey);
                if (twofactorCode != revcode)
                {

                    await _distributedCache.SetStringAsync(redisTrialleftKey, (--trialLeft).ToString(), new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
                    });

                    throw new ExceptionWithCode(
                        message: "Authorization code does not match. " + err,
                        reason: "2factor code required"
                    );
                }
            }


        }
    }



}
