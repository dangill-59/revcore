using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using reactBase;
using Utilities;

namespace components.external
{
    [Route("api/[controller]")]
    [Authorize]
    public class ExternalController : Controller
    {
        readonly IIntegrationsService _intgService;
        public ExternalController(IIntegrationsService intgService)
        {
            _intgService = intgService;
        }

        [HttpGet("integrations")]
        public IReadOnlyDictionary<string, ExternalIntegrationModel> getAvailableIntegrations()
        {
            return _intgService.availableIntegration;
        }



        [HttpGet("url/{integrationName}")]
        public string getOAuthRequestUrl(string integrationName)
        {
            //we will make this reuable when we support another intergarion
            //search for HARDCODED:XERO
            //HARDCODED:XERO
            return _intgService.getHelper(integrationName).getTokenReqURLifneeded();
        }

        [HttpPost("tokens/{integrationName}")]
        public void setRequestToken(string integrationName, [FromBody] string[] tokens)
        {
            _intgService.getHelper(integrationName).storeAcessToken(tokens);
        }
    }
}
