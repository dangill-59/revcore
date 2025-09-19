using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces;
using commonInterfaces.dbDataTypes;
using components.listPages;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Nest;
using Newtonsoft.Json;
using reactBase;
using restUpdate;
using revElasticSearch;
using revMQAbstractions;
using revWorkflow;
using Utilities;
using workspaceResolver;

namespace components.workflow
{
    [Route("api/[controller]")]
    [Authorize]

    public class WorkflowController : Controller
    {
        readonly IRevDatabase _revDb;
        readonly ILogger _logger;
        readonly IRevMQBus _mq;

        public WorkflowController(IRevDatabase revDb,
            IRevMQBus mq,
            ILogger<WorkflowController> logger)
        {
            _logger = logger;
            _revDb = revDb;
            _mq = mq;
        }


        [HttpPost("run/{escapedWorkflowName}")]
        public async Task<string> uiTrigger(string escapedWorkflowName, [FromBody] string uiState)
        {
            var name = Uri.UnescapeDataString(escapedWorkflowName);
            _logger.LogDebug($"ui workflow trigger for {name}");

            var workFlowConfig = (await listWorkflows()).SingleOrDefault(w => w.name == name);
            if (null == workFlowConfig)
                throw new ExceptionWithCode($"task {name} not found for current user");

            if (string.IsNullOrWhiteSpace(workFlowConfig?.stateType))
                throw new ExceptionWithCode($"flowtype for task {name} is null");

            await _mq.publishMessageAsync((new WorkflowUITrigger(_revDb.workspaceId, name, uiState)), new FlowStateBase(), workFlowConfig.stateType);

            return "done";
        }


        [HttpGet("list")]
        public async Task<WorkFlowConfigModel[]> listWorkflows()
        {
            var userId = this.currentLoggedonUser();
            var workflows = _revDb.db.GetCollection<WorkFlowConfigModel>(WorkFlowConfigModel.COLLECTION_NAME);

            var workspceUser = _revDb.getQueryable<WorkspaceUserModel>().SingleOrDefault(u => u.userId == userId);

            var roles = workspceUser?.roles ?? new string[] { };

            var mySearches = await workflows.Find(s => s.uiTriggered &&
                (s.roles == null || s.roles.Any(r => roles.Contains(r))
             )).ToListAsync();


            return mySearches.ToArray();

        }
    }
}
