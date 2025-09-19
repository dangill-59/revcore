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
    public partial class JWTCreater
    {

        /// <summary>
        /// These keys keesp the JWTs alive using redis
        /// </summary>
        class TokenCacheKeys
        {

            /// <summary>
            /// The JWT for user accross all workspaces
            /// </summary>
            public string genericKey { get; set; }

            /// <summary>
            /// The JWT for a specific workspace
            /// </summary>
            public string workspaceKey { get; set; }

            public LicenseLocksModel licLock { get; set; }
        }

        /// <summary>
        /// Saves the JWT keys to Redis with sliding Expiration
        /// </summary>
        /// <param name="tokenKeys"></param>
        /// <param name="castedToken"></param>
        /// <param name="access_token_str"></param>
        /// <param name="inactivityTimeout"></param>
        /// <param name="dbWorkspace"></param>
        /// <returns></returns>
        async Task saveJWTToCache(JwtSecurityToken castedToken, string access_token_str,
                WorkspaceModel dbWorkspace)
        {
            /*
			var tokenValidity = castedToken.ValidTo - DateTime.Now;
			if (tokenValidity < TimeSpan.FromSeconds(1))
			{
				_logger.LogDebug("casted token validity is under 1 sec");
				tokenValidity = TimeSpan.FromSeconds(1);
			}
			*/
            var tokenKeys = cacheKeyFromIdToken(castedToken, dbWorkspace.name);


            var inactivityTimeout = workspaceInactivityTimeout(dbWorkspace);

            try
            {
                //we also want to rest the generic token cahce to be in sync with the active workspace
                //else if the workspace exprire time is less the generic time, it won't work
                await _redis.Db0.AddAsync(tokenKeys.genericKey,
                    access_token_str,
                    inactivityTimeout
                    );

                if (string.IsNullOrWhiteSpace(tokenKeys.workspaceKey))
                {
                    _logger.LogDebug("no workspaceKey token");
                    return;
                }

                await _redis.Db0.AddAsync(tokenKeys.workspaceKey,
                            access_token_str, inactivityTimeout);

                Debug.Assert(null != dbWorkspace);
                if (null == dbWorkspace)
                {
                    _logger.LogDebug("called without workspace. Not checking license");
                    return;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save JWT in redis");
            }


            var revClaim = castedToken.Claims?.SingleOrDefault(c =>
                    c.Type == ClaimNames.RevAppAccess.ToString()
                    && c.Value == RevAccessClaimValues.All.ToString()
                    );

            if (null == revClaim)
            {
                _logger.LogDebug("RevAccessClaimValues.All not found in JWT No license check");
                return;
            }

            try
            {
                await ensureLicenseAvailable(dbWorkspace, tokenKeys);
            }
            catch (ExceptionWithCode ex)
            {
                if (System.Net.HttpStatusCode.Unauthorized == ex.errCode)
                {
                    throw ex;
                }

                _logger.LogError($"failed to check for licenses: {ex} ");
            }
            catch (Exception ex)
            {
                _logger.LogError($"failed to check for licenses: {ex} ");
            }



            _logger.LogTrace("License check verified");
        }


        //whe we cretae a JWT for a workspace we update this 
        readonly static ConcurrentDictionary<string, TimeSpan> _mapWorkspaceSlidigExpirations = new ConcurrentDictionary<string, TimeSpan>();


        /// <summary>
        /// get the saved access_token. Also adds time to the inactivity timeout. Called every API call
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="castedToken"></param>
        /// <param name="proto"></param>
        /// <param name="workspaceName">token for workspace takes priority. </param>
        /// <returns></returns>
        async Task<T> getOAuthStrfromCacheAsync<T>(JwtSecurityToken castedToken, T proto, string workspaceName)
        {
            var tokenKeys = cacheKeyFromIdToken(castedToken, workspaceName);

            {
                _workspaceLoginCounter.WithLabels(workspaceName).Inc();
                await ActivateWorkspace(workspaceName);

            }

            TimeSpan slidingExpiration;
            if (!_mapWorkspaceSlidigExpirations.TryGetValue(workspaceName, out slidingExpiration))
            {
                _logger.LogDebug($"sliding expiration not found getting from DB");
                var dbWorkspace = _revAuthDb.getQueryable<WorkspaceModel>().Single(w => w.name == workspaceName);
                slidingExpiration = workspaceInactivityTimeout(dbWorkspace);
            }

            //get the generic access Token eveytime so that we keep renewsing it's LifeTime
            //the workspace specific token exists to control custime workspace token expiration time
            var access_token_str = await _redis.Db0.GetAsync<string>(tokenKeys.genericKey, slidingExpiration);


            if (!string.IsNullOrWhiteSpace(tokenKeys.workspaceKey))
            {
                access_token_str = await _redis.Db0.GetAsync<string>(tokenKeys.workspaceKey, slidingExpiration);

                if (string.IsNullOrWhiteSpace(access_token_str))
                {
                    _logger.LogDebug("we don't have a workspace specific token. Creating new ONE");
                    access_token_str = await _redis.Db0.GetAsync<string>(tokenKeys.genericKey, slidingExpiration);

                    if (!string.IsNullOrWhiteSpace(access_token_str))
                    {
                        //we need to save it for the workspace
                        _logger.LogDebug($"saveJWTinCacheAsync: saving workspace {workspaceName} token for {castedToken.Subject} ");

                        var dbWorkspace = _revAuthDb.getQueryable<WorkspaceModel>().SingleOrDefault(w => w.name == workspaceName);

                        if (null == dbWorkspace)
                        {
                            throw new ExceptionWithCode($"Workspace name {workspaceName} not found");
                        }
                        await saveJWTToCache(castedToken, access_token_str, dbWorkspace);

                    }
                    else
                    {
                        _logger.LogDebug($"No token found for generic key {tokenKeys.genericKey}");
                    }

                }
                else
                {
                    _logger.LogDebug($"found token for key {tokenKeys.workspaceKey}");
                }
            }

            if (string.IsNullOrWhiteSpace(access_token_str))
            {
                _ = Task.Run(async () =>
                {
                    _logger.LogDebug($"token expired for workspace {workspaceName}");
                    await updateWorkspaceLoggedInTokens(_revAuthDb.getQueryable<WorkspaceModel>().Single(w => w.name == workspaceName));
                });

                _logger.LogDebug($"tokenValidationParameter: inactivity timeout for  {castedToken.Subject}");
                throw new ExceptionWithCode("session expired", System.Net.HttpStatusCode.Unauthorized);
            }

            return JsonConvert.DeserializeAnonymousType(access_token_str, proto);

        }


        /// <summary>
        /// Checks if License is Available and add That to the Workspace locked License Radis Set
        /// </summary>
        /// <param name="workspace"></param>
        /// <param name="currentUserTokens"></param>
        /// <returns></returns>
        async Task ensureLicenseAvailable(WorkspaceModel workspace, TokenCacheKeys currentUserTokens)
        {
            if (null == workspace)
                throw new ArgumentNullException(nameof(workspace));

            if (null == currentUserTokens.workspaceKey)
                throw new ArgumentNullException(nameof(currentUserTokens.workspaceKey));

            var currentLocks = await updateWorkspaceLoggedInTokens(workspace);

            var licensedCount = 1;
            if (workspace.features?.ContainsKey(BillableFeaturesModel.revSeats.ToString()) ?? false)
            {
                licensedCount = workspace.features[BillableFeaturesModel.revSeats.ToString()].count;
            }

            if (licensedCount < 1)
                licensedCount = 1;

            if (currentLocks.Length >= licensedCount)
            {
                var additionanInfo = workspace.isAdmin(currentUserTokens.licLock.userId) ?
                    licLockData(currentLocks)
                    .ToDictionary(k => k.Key, v => JsonConvert.SerializeObject(v.Value))
                     : null;

                throw new ExceptionWithCode($"All {licensedCount} user license(s) are in use.",
                    code: System.Net.HttpStatusCode.Unauthorized,
                    reason: ALL_LICENSE_INUSE,
                    additionalInformation: additionanInfo
                    );
            }

            var licSetKey = getworkSpaceLicSetKey(workspace.name);

            await _redis.Db0.SetAddAsync(licSetKey, currentUserTokens);

            _workspaceLicenseGauge.WithLabels(workspace.name).Set(currentLocks.Length + 1);
        }




        /// <summary>
        /// Given a workspace The key with whihc licnese lock information is stored in Redis
        /// </summary>
        /// <param name="workspaceName"></param>
        /// <returns></returns>
        static string getworkSpaceLicSetKey(string workspaceName) { return $"workspaceLicenses_{workspaceName}"; }

        /// <summary>
        /// Used for force rmove keys
        /// </summary>
        /// <param name="workspace"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public async Task<Dictionary<string, LicenseLocksModel>> releaseLock(WorkspaceModel workspace, string key)
        {
            if (null == workspace)
                throw new ArgumentNullException(nameof(workspace));


            var currentLocks = await updateWorkspaceLoggedInTokens(workspace);

            var keyToRemove = _signer.DecryptData(key);

            _logger.LogDebug($"releasing lock for key {keyToRemove}");

            var found = currentLocks.SingleOrDefault(k => k.workspaceKey == keyToRemove);
            if (null == found)
            {
                throw new ExceptionWithCode("the selected license lock was not found");
            }

            await _redis.Db0.RemoveAsync(found.genericKey);
            await _redis.Db0.RemoveAsync(found.workspaceKey);

            var licSetKey = getworkSpaceLicSetKey(workspace.name);
            await _redis.Db0.SetRemoveAsync(licSetKey, found.workspaceKey);

            currentLocks = currentLocks.Where(k => k.workspaceKey != keyToRemove).ToArray();
            _workspaceLicenseGauge.WithLabels(workspace.name).Set(currentLocks.Length);

            return licLockData(currentLocks);

        }

        Dictionary<string, LicenseLocksModel> licLockData(IEnumerable<TokenCacheKeys> tokens)
        {
            return tokens.GroupBy(t => t.workspaceKey).Select(g => g.First()).ToDictionary(k => _signer.EncryptData(k.workspaceKey), k => k.licLock);
        }

        static readonly Prometheus.Gauge _workspaceLicenseGauge =
            Prometheus.Metrics.CreateGauge("licenseUse", "Current license use for workspace", new Prometheus.GaugeConfiguration
            {
                LabelNames = new[] { "workspace" }
            });

        /// <summary>
        /// updates workspace logged in tokens for a workspace. removed the expired ones
        /// </summary>
        /// <param name="licSetKey"></param>
        /// <returns>active tokens</returns>
        async Task<TokenCacheKeys[]> updateWorkspaceLoggedInTokens(WorkspaceModel workspace)
        {
            if (null == workspace)
                throw new ArgumentNullException(nameof(workspace));

            var licSetKey = getworkSpaceLicSetKey(workspace.name);

            var currentLocks = (await _redis.Db0.SetMembersAsync<TokenCacheKeys>(licSetKey)).ToArray();

            var workspaceTokens = (await Task.WhenAll(currentLocks.Select(async key =>
            {
                var ret = new
                {
                    key,
                    access_token = await _redis.Db0.GetAsync<string>(key.workspaceKey)
                };

                if (null == ret.access_token)
                {
                    await _redis.Db0.SetRemoveAsync(licSetKey, key.workspaceKey);
                }

                return ret;
            })))
            .ToArray()
            ;

            var ret = workspaceTokens.Where(k => null != k.access_token).Select(k => k.key).ToArray();

            _workspaceLicenseGauge.WithLabels(workspace.name).Set(ret.Length);

            return ret;

        }

        async Task InvalidateJWtsinCache(JwtSecurityToken castedToken)
        {
            var workspace = _workSpaceResolver.getAuthenticationWorkspace();

            var tokens = cacheKeyFromIdToken(castedToken, workspace.name);

            _logger.LogDebug($"INvalidtaing casted token {tokens.licLock.userId} for workspace {workspace.name}");

            await _redis.Db0.RemoveAsync(tokens.genericKey);

            if (!string.IsNullOrWhiteSpace(tokens.workspaceKey))
            {
                await _redis.Db0.RemoveAsync(tokens.workspaceKey);
            }

            ///We call this to update any license locks
            await updateWorkspaceLoggedInTokens(workspace);

        }


        /// <summary>
        /// burns the JWT effectivly forcing user to sign on again
        /// </summary>
        /// <returns></returns>
        public async Task invalidateCurrentLogonAsync(WorkspaceModel workspace)
        {
            var userId = _contextAccessor.HttpContext.currentLoggedonUser();
            var accessToken = _contextAccessor.HttpContext.Request.Headers["Authorization"].FirstOrDefault();


            if (string.IsNullOrWhiteSpace(accessToken) || !accessToken.StartsWith("Bearer"))
            {
                throw new Exception("no bearer token in header");
            }

            await InvalidateJWtsinCache(new JwtSecurityToken(accessToken.Replace("Bearer ", "")));
        }


        /// <summary>
        /// get the caced JWT, this method also extends the silidingExpirtaion
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="userId"></param>
        /// <param name="proto"></param>
        /// <returns></returns>
        public async Task<T> getOAuthStrfromCacheAsync<T>(T proto, WorkspaceModel workspace)
        {
            var userId = _contextAccessor.HttpContext.currentLoggedonUser();
            var accessToken = _contextAccessor.HttpContext.Request.Headers["Authorization"].FirstOrDefault();


            if (string.IsNullOrWhiteSpace(accessToken) || !accessToken.StartsWith("Bearer"))
            {
                throw new Exception("no bearer token in header");
            }

            var castedToken = new JwtSecurityToken(accessToken.Replace("Bearer ", ""));

            return await getOAuthStrfromCacheAsync(castedToken, proto, workspace.name);
        }




        /// <summary>
        /// Creates The keys that are uses to Save a JWT hash in Redis Cache
        /// </summary>
        /// <param name="subject"></param>
        /// <param name="rawSignature"></param>
        /// <param name="workspaceName"></param>
        /// <returns></returns>
        TokenCacheKeys cacheKeyFromIdToken(JwtSecurityToken castedToken, string workspaceName)
        {
            var tokenHash = Farmhash.Sharp.Farmhash.Hash64(castedToken.RawSignature);
            var genericKey = $"access_token_string:{castedToken.Subject}:{tokenHash}";

            return new TokenCacheKeys
            {
                licLock = new LicenseLocksModel { userId = castedToken.Subject },
                genericKey = genericKey,
                workspaceKey = string.IsNullOrWhiteSpace(workspaceName) ? null : $"{genericKey}_{workspaceName}",
            };
        }
    }
}
