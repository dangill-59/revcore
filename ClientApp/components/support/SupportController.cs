using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using reactBase;
using Utilities;

namespace components.support
{
    [Route("api/[controller]")]
    [Authorize(Policy = "SupportPeopleOnly")]
    public class SupportController : Controller
    {
        readonly IWorkspaceResolver _resolver;

        public SupportController(IWorkspaceResolver resolver)
        {
            _resolver = resolver;
        }

        [HttpGet("allow/{wkspaceName}")]
        public async Task<string> allow(string wkspaceName, int? forMinutes = null)
        {
            var forDuration = TimeSpan.FromMinutes(forMinutes ?? 60);
            await _resolver.AllowServerAccess(wkspaceName, forDuration);

            return $"access allowed for {forDuration}";
        }
    }
}
