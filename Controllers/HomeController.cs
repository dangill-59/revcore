using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.revLogin;
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


namespace revCore2site.Controllers
{
    public class HomeController : Controller
    {
        readonly IConfiguration _configuration;
        readonly ILogger _logger;
        readonly IDistributedCache _distributedCache;

        readonly IJWTCreater _jwtCreater;
        readonly ITaskSignerservice _signer;
        readonly IDownLoaderService _downloader;
        readonly commonInterfaces.IRevAuthDatabase _authDb;

        public HomeController(IConfiguration configuration,
            IJWTCreater jwtCreater,
            IDistributedCache distributedCache,
            ITaskSignerservice signer,
            IDownLoaderService downloader,
            commonInterfaces.IRevAuthDatabase authDb,
            ILogger<HomeController> logger)
        {
            _jwtCreater = jwtCreater;
            _signer = signer;
            _downloader = downloader;
            _authDb = authDb;
            _configuration = configuration;
            _distributedCache = distributedCache;
            _logger = logger;
        }


        public IActionResult Index()
        {
            var jsList = new List<string>();
            if ("stripe" == _configuration.GetValue<string>("billing:provider"))
            {
                jsList.Add("https://js.stripe.com/v3/");
            }

            ViewData["JSIncludes"] = jsList.ToArray();

#if DEBUG
			ViewData["includeVendorStyle"] = true;
#else
            ViewData["includeVendorStyle"] = false;
#endif

            return View();
        }

        public static string AuthRedirectPattern => "authredirect/{provider}/{workspaceName}";

        public static string getOpenIdRedirectURL(IConfiguration _configuration, string provider, string workspaceName, ILogger _logger, bool NODebugRediret = false)
        {
            var customDomTemplate = _configuration["multisite:custdomainTemplate"];
            if (string.IsNullOrWhiteSpace(customDomTemplate))
            {
                throw new Exception("multisite:custdomainTemplate not configured");
            }

            var host = components.workspace.WorkspacesController.customDomainFQN(customDomTemplate, workspaceName);

            var scheme = @"https";
            if (!string.IsNullOrWhiteSpace(_configuration["overrideUrlScheme"]))
            {
                scheme = _configuration["overrideUrlScheme"].Split(':').First();
                _logger.LogDebug($"Setting scheme from overrideUrlScheme {_configuration["overrideUrlScheme"]}");
            }


            host = $"{scheme}://{host}";

#if DEBUG
			var debugRedirectUrl = _configuration.GetValue<string>("authentication:debugOAuthRedirect");
			if (!NODebugRediret && !string.IsNullOrWhiteSpace(debugRedirectUrl))
			{
				_logger.LogInformation($"using debug redirect origin {debugRedirectUrl}");
				host = debugRedirectUrl.TrimEnd('/');
			}
#endif
            return $"{host}/authredirect/{provider}/{workspaceName}";


        }

        public async Task<IActionResult> authredirect(string workspaceName, string provider, [FromQuery] string code, [FromQuery] string state)
        {
            _logger.LogDebug($"authredirect invoked with {provider}:{workspaceName}  code {code}, state: {state}");

            var customDomTemplate = _configuration["multisite:custdomainTemplate"];
            if (string.IsNullOrWhiteSpace(customDomTemplate))
            {
                throw new Exception("multisite::custdomainTemplate not configured");
            }

            var domainRedrect = components.workspace.WorkspacesController.customDomainFQN(customDomTemplate, workspaceName);

#if DEBUG
			var debugRedirectUrl = _configuration.GetValue<string>("authentication:debugOAuthRedirect");
			if (!string.IsNullOrWhiteSpace(debugRedirectUrl))
			{
				_logger.LogInformation($"using debug redirect");
				//we ned to redirect it to the real domain

				var rawURlstr = Microsoft.AspNetCore.Http.Extensions.UriHelper.GetDisplayUrl(this.Request);
				var rawURI = new Uri(rawURlstr);


				if (rawURI.DnsSafeHost != domainRedrect)
				{
					var redirecTo = rawURlstr.Replace($"{rawURI.DnsSafeHost}:{rawURI.Port}", domainRedrect);
					return new RedirectResult(redirecTo);
				}

			}

#endif
            try
            {
                if (string.IsNullOrWhiteSpace(code))
                    throw new ExceptionWithCode("no code returned from Auth Provider");

                if (string.IsNullOrWhiteSpace(workspaceName))
                    throw new ExceptionWithCode("no workspaceName returned from Auth Provider");

                if (string.IsNullOrWhiteSpace(provider))
                    throw new ExceptionWithCode("no provider returned from Auth Provider");

                var config = _configuration.GetSection("authentication");

                //var workspace = _workSpaceResolver.getAuthenticationWorkspace();
                var workspace = await _authDb.getCollection<WorkspaceModel>().Find(w => w.name == workspaceName).SingleAsync();

                OpenConnectModel openConnectConfig = null;
                if (!workspace.openIdProviders?.TryGetValue(provider, out openConnectConfig) ?? false)
                {
                    throw new ExceptionWithCode($"{provider} not configured for access");
                }


                var authorityConfig = await _jwtCreater.getconfigFromOpenIdAuthorityAsync(openConnectConfig.authority);

                var dict = new Dictionary<string, string>()
                {
                    {"code", code },
                    {"grant_type","authorization_code" },
                    {"client_id", openConnectConfig.clientId},
                    {"client_secret", _signer.DecryptData( openConnectConfig.secret) },
                    {"redirect_uri", getOpenIdRedirectURL(_configuration,provider,workspaceName,_logger) }
                };

                var response = await _downloader.httpClient.SendAsync(
                        new HttpRequestMessage(HttpMethod.Post, authorityConfig.TokenEndpoint) { Content = new FormUrlEncodedContent(dict) });

                var resStr = await response.Content.ReadAsStringAsync();
                _logger.LogDebug($"received authorization  from openid for workspace {workspaceName}  StatusCode : {response.StatusCode}  -> {resStr}");

                if (!response.IsSuccessStatusCode)
                {
                    throw new ExceptionWithCode($"Failed to sign in to OpenId Provider. Err {resStr}");
                }

                var openIdAuthToken = await _jwtCreater.saveOAuthtoCacheAsync(resStr, workspace: workspace);


                var dbUser = _authDb.getQueryable<User>().SingleOrDefault(u => u.UserName == openIdAuthToken.castedToken.Subject);
                if (dbUser == null && openIdAuthToken.castedToken.Claims != null && openIdAuthToken.castedToken.Claims.Any(x => x.Type == "preferred_username"))
                {
                    var prefferedUsername = openIdAuthToken.castedToken.Claims.Where(x => x.Type == "preferred_username").Select(x => x.Value).FirstOrDefault();
                    dbUser = _authDb.getQueryable<User>().SingleOrDefault(u => u.UserName == prefferedUsername);
                }

                if (null == dbUser)
                {
                    response = await _downloader.httpClient.GetAsync($"{authorityConfig.UserInfoEndpoint}?access_token={openIdAuthToken.access_token}");
                    var userInfo = await response.handleResponseAsync(new { name = "", email = "" });

                    dbUser = await AuthController.createNewUseAsync(_authDb, openIdAuthToken.castedToken.Subject, user =>
                    {
                        user.preferredName = userInfo.name;
                        user.emailaddress = userInfo.email;
                    });

                }

                if (!string.IsNullOrEmpty(openIdAuthToken.refresh_token))
                {
                    if (null == dbUser.refreshTokens)
                        dbUser.refreshTokens = new RefreshToken[] { };

                    var authRfreshToken = dbUser.refreshTokens.SingleOrDefault(t => t.authority == openConnectConfig.authority);
                    if (null == authRfreshToken)
                    {
                        authRfreshToken = new RefreshToken { authority = openConnectConfig.authority };
                        dbUser.refreshTokens = dbUser.refreshTokens.Concat(new[] { authRfreshToken }).ToArray();
                    }

                    authRfreshToken.token = openIdAuthToken.refresh_token;

                    await _authDb.AddorUpdateAsync(dbUser);

                }

                var id_token = _jwtCreater.createForInteractive(dbUser, this.clientLocation(), openIdProvider: provider);

                //Now we replace the jwt with our own
                var oAuthToken = await _jwtCreater.saveOAuthtoCacheAsync(JsonConvert.SerializeObject(new { id_token }), workspace: workspace);

                var ret = new OAuthRedirected
                {
                    jwt = oAuthToken.jwtToken
                };

                if (!string.IsNullOrWhiteSpace(state))
                {
                    var context = await _distributedCache.GetStringAsync(state);

                    if (!string.IsNullOrWhiteSpace(state))
                        ret.redirect = Uri.UnescapeDataString(context);
                }

                if (string.IsNullOrWhiteSpace(ret.redirect))
                {
                    ret.redirect = domainRedrect;
                }

                return View(ret);
            }
            catch (ExceptionWithCode ex)
            {
                _logger.LogError($"Failed in AuthRedirect {ex}");
                return View(new OAuthRedirected { error = ex.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed in AuthRedirect {ex}");
                return View(new OAuthRedirected { error = "Failed with server error" });
            }
            ;

        }



        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }

    public class OAuthRedirected
    {
        /// <summary>
        /// The URL to go to
        /// </summary>
        public string redirect { get; set; }

        public string jwt { get; set; }

        public string error { get; set; }
    }
}
