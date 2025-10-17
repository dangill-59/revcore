using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace components.revLogin
{

    public partial class JWTCreater
    {

        public TokenValidationParameters getMyTokenValidationParameter()
        {
            return new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = REV2_ISS,

                ValidateAudience = true,
                ValidAudience = REV2_ISS,

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                // Temporarily disable custom lifetime validation to debug authentication issues
                ValidateLifetime = false, // Changed from true to false
                RequireExpirationTime = false,

                /*
                RequireExpirationTime = false,
                ValidateLifetime = false,
                */


                ClockSkew = TimeSpan.FromSeconds(5),
                //ClockSkew = TimeSpan.Zero,

                LifetimeValidator = null // Temporarily disabled
                /*LifetimeValidator = (notBefore, expires, securityToken, validationParameters) =>
                {
                    try
                    {


                        var castedToken = securityToken as JwtSecurityToken;
                        if (castedToken == null)
                        {
                            _logger.LogWarning("LifetimeValidator: securityToken is null or not a JwtSecurityToken");
                            return false;
                        }

                        var httpContext = _contextAccessor.HttpContext;
                        //var workspaceName = httpContext.Request.Headers["workspace"].FirstOrDefault();

                        _logger.LogDebug($"invoked LifetimeValidator for {castedToken.Subject}");

                        var workspaceName = castedToken.Claims.SingleOrDefault(c => c.Type == ClaimNames.workspaceName.ToString())?.Value;

                        if (string.IsNullOrWhiteSpace(workspaceName))
                            throw new Exception($"Workspace claim not found in token {castedToken.Subject}");

                        var authWorkspaceName = _workSpaceResolver.getAuthenticationWorkspaceName();

                        if (!string.IsNullOrWhiteSpace(authWorkspaceName) && authWorkspaceName != workspaceName)
                        {
                            throw new Exception($"Workspace claim  {workspaceName} does not match Auth Workspace {authWorkspaceName} in token {castedToken.Subject}");
                        }

                        var reqPath = _contextAccessor.HttpContext.Request.Path.ToString().Trim(new[] { '/' });

                        if ("api/auth/renew" == reqPath.ToLowerInvariant())
                        {
                            return DateTime.Now <= (expires.Value.ToLocalTime()
                                                    + TimeSpan.FromHours(MAX_EXP_RENWAL_HOURS));
                        }

                        var allowed = null != expires &&
                                DateTime.Now <= (expires.Value.ToLocalTime() + validationParameters.ClockSkew);

                        if (allowed)
                        {

                            var revAccessClaim = castedToken.Claims?.SingleOrDefault(c =>
                                c.Type == ClaimNames.RevAppAccess.ToString()
                                && c.Value == RevAccessClaimValues.All.ToString()
                                );

                            var serverAccessClaim = castedToken.Claims?.SingleOrDefault(c =>
                                c.Type == ClaimNames.serverAccessJWT.ToString()
                                );

                            if (null != serverAccessClaim)
                            {
                                _logger.LogDebug($"this is server access use JWT. don't check in cache -> {castedToken.Subject}");
                            }
                            else if (null != revAccessClaim)
                            {
                                _logger.LogDebug($"checking expiration from cache -> {castedToken.Subject}");

                                try
                                {

                                    var existsIncache = getOAuthStrfromCacheAsync(castedToken, new { }, workspaceName).Result;
                                    if (null == existsIncache)
                                    {
                                        _logger.LogDebug($"ValidationParameter: inactivity timeout for  {castedToken.Subject}");
                                        return false;
                                    }

                                }
                                catch (Exception ex)
                                {
                                    _logger.LogError($"failed to check for expiration in cache {ex}");
                                    throw ex;
                                }
                            }
                            else
                            {
                                _logger.LogDebug("this is a special use JWT. don't check in cache");
                            }
                        }
                        else
                        {
                            _logger.LogDebug($"tokenValidationParameter: token expired for {castedToken.Subject}");

                            InvalidateJWtsinCache(castedToken).Wait();
                        }

                        _logger.LogDebug($"tokenValidationParameter: login {allowed} for {castedToken.Subject}");
                        return allowed;
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError($"Got exception while checking for LifeTimevalidation : {ex}");
                        throw ex;
                    }
                },*/
            };
        }

        /*
        readonly static string REV_HTTP_JWTSESSION = @"REV_HTTP_JWTSESSION";
        void addLoggedInContext(SecurityToken token)
        {
            var castedToken = token as JwtSecurityToken;

            var genericTTokenKey = cacheKeyFromIdToken(castedToken.Subject, castedToken.RawSignature, null);

            _contextAccessor.HttpContext.Items[REV_HTTP_JWTSESSION] = genericTTokenKey.genericKey;
        }

        public string revHttpSession => (_contextAccessor.HttpContext.Items[REV_HTTP_JWTSESSION] ?? "").ToString();
        */
    }
}
