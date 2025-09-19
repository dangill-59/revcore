using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;

namespace Utilities
{
    public class SalesForceIntegartion : commonInterfaces.IExternalIntegration
    {
        readonly IDownLoaderService _downloader;
        readonly ILogger _logger;
        readonly IHttpContextAccessor _contextAccessor;
        readonly components.revLogin.IJWTCreater _jwtCreater;
        readonly workspaceResolver.IRevWorkspaceResolver _resolver;


        public SalesForceIntegartion(IServiceProvider provider)
        {
            _downloader = provider.GetRequiredService<IDownLoaderService>();
            _logger = provider.GetRequiredService<ILogger<SalesForceIntegartion>>();
            _contextAccessor = provider.GetRequiredService<IHttpContextAccessor>();
            _jwtCreater = provider.GetRequiredService<components.revLogin.IJWTCreater>();
            _resolver = provider.GetRequiredService<workspaceResolver.IRevWorkspaceResolver>();
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="user"></param>
        /// <param name="searchParameters">soql template ex: SELECT Id, Name FROM Account WHERE RecordTypeId = '0123600000075N3AAI' AND Name LIKE '%raj%'</param>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<ExternalIndexModel[]> search(string user, string searchParameters, string input)
        {
            var soql = string.Format(searchParameters, input);

            if (!user.Contains("salesforce"))
                throw new ExceptionWithCode("The current user is not logged in with saleforce authentication");

            var tokens = await _jwtCreater.getOAuthStrfromCacheAsync(new { access_token = "", instance_url = "" }, _resolver.getCurrentWorkspace());

            if (string.IsNullOrWhiteSpace(tokens.access_token))
                throw new Exception("The current user access token is not set");

            var soqlURL = tokens.instance_url
                + $"/services/data/v20.0/query/?q={HttpUtility.UrlEncode(soql)}"
                ;

            _logger.LogDebug($"search : running soql {soqlURL}");

            var request = new HttpRequestMessage()
            {
                RequestUri = new Uri(soqlURL),
                Method = HttpMethod.Get,
            };


            //var currentJWT = _contextAccessor.HttpContext.Request.Headers["Authorization"]

            request.Headers.Add("Authorization", $"Bearer {tokens.access_token}");


            var response = await _downloader.httpClient.SendAsync(request);

            var found = await response.handleResponseAsync(new
            {
                totalSize = 0,
                records = new[] { new {
                    attributes = new
                    {
                        url = ""
                    },
                    Name = "",
                    Id = ""
                } }
            });


            return found.records.Select(r => new ExternalIndexModel
            {
                displayValue = $"{r.Name} ({r.Id})",
                externalId = r.Id,
                //	externalUrl = $"{tokens.instance_url}/{r.attributes.url}"
                externalUrl = $"{tokens.instance_url}/{r.Id}"
            }).ToArray();

        }


        public string getTokenReqURLifneeded()
        {
            throw new NotImplementedException();
        }

        public Task<ExternalIndexModel> parseFromUserinputAsync(string input, string resource, string revlink)
        {
            throw new NotImplementedException();
        }


        public void storeAcessToken(string[] tokens)
        {
            throw new NotImplementedException();
        }
    }
}
