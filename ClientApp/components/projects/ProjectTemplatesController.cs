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
using RevRepositoryServices;
using Utilities;


namespace components.projects
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProjectTemplatesController : Controller
    {
        readonly ILogger _logger;
        readonly ITemplatesManager _repoManager;

        public ProjectTemplatesController(
            ITemplatesManager repoManager,
            ILogger<ProjectTemplatesController> logger)
        {
            _logger = logger;
            _repoManager = repoManager;

        }

        [HttpGet]
        public async Task<ProjectTemplateModel[]> getTemplatesAsync([FromQuery] String like = null)
        {
            return await _repoManager.getTemplatesAsync(like);
        }
    }
}
