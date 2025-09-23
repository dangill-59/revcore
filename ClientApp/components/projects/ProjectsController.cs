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
using MongoDB.Driver;
using reactBase;
using revMQAbstractions;
using Utilities;

namespace components.Projects
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProjectsController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly revElasticSearch.IESMapper _esMapper;
        private readonly ILogger _logger;
        readonly IWorkspaceResolver _resolver;
        readonly IRevMQBus _mq;
        readonly RevRepositoryServices.IRepositoryManager _repoManager;

        public ProjectsController(commonInterfaces.IRevDatabase revDb,
            revElasticSearch.IESMapper esMapper,
            IRevMQBus mq,
            IConfiguration config,
            IWorkspaceResolver resolver,
            RevRepositoryServices.IRepositoryManager repoManager,
            ILogger<ProjectsController> logger)
        {
            _revDb = revDb;
            _logger = logger;
            _esMapper = esMapper;
            _resolver = resolver;
            _mq = mq;
            _repoManager = repoManager;
        }

        [HttpGet("details/{projectName}")]
        public commonInterfaces.dbDataTypes.ProjectModel OneProjectDetails(string projectName)
        {
            var allProjects = getAllProjects();
            var found = allProjects.Single(p => p.Value.name == projectName);
            return found.Value;
        }

        [HttpPost("addField/{projectName}")]
        public async Task<commonInterfaces.dbDataTypes.ProjectModel> AddFieldAsync(string projectName, [FromBody] ProjectFieldModel newField)
        {
            var allProjects = getAllProjects();
            var found = allProjects.Single(p => p.Value.name == projectName);
            var theProject = found.Value;


            theProject.fields = theProject.fields.Concat(new[] { newField }).ToArray();

            return await SaveProjectAsync(theProject);
        }

        readonly static string SELF_PERMNAME = "self";


        [HttpGet]
        public IDictionary<string, commonInterfaces.dbDataTypes.ProjectModel> getAllProjects()
        {
            var theProjects = _revDb.getQueryable<commonInterfaces.dbDataTypes.ProjectModel>().ToArray();

            if (null == this.ensureWorkspaceAdmin(_resolver, true))
            {
                //we are NOT workspace owners 
                var userId = this.currentLoggedonUser();
                var spcUser = _revDb.getQueryable<WorkspaceUserModel>()
                    .Where(wu => wu.userId == userId)
                    .SingleOrDefault();

                //we might not have the user here at all
                var userRoles = null != spcUser ? spcUser.roles : null;


                theProjects = theProjects.Where(p =>
                {
                    var permissions = p.permissions;

                    //we send SELF permissions to non admins
                    p.permissions = new Dictionary<string, PermissionsModel> { { SELF_PERMNAME, new PermissionsModel { canEdit = true, canView = true } } };

                    if (null == permissions || permissions.Count() == 0)
                        return true;

                    if (null != userRoles)
                    {
                        var canView = userRoles.FirstOrDefault(role => permissions.ContainsKey(role) && permissions[role].canView);
                        if (null != canView)
                        {
                            p.permissions[SELF_PERMNAME].canEdit = null != userRoles.FirstOrDefault(role => permissions.ContainsKey(role) && permissions[role].canEdit);
                            p.permissions[SELF_PERMNAME].canDelete = null != userRoles.FirstOrDefault(role => permissions.ContainsKey(role) && permissions[role].canDelete);

                            p.disableEdit = !p.permissions[SELF_PERMNAME].canEdit;

                            return true;
                        }

                    }

                    return false;
                }).ToArray();
            }

            foreach (var p in theProjects)
            {
                if (null != p.fields)
                {
                    p.fields = p.fields.OrderBy(f => f.indexSortOrder);
                }

            }

            return theProjects.ToDictionary(k => k.id, v => v);
        }



        /// <summary>
        /// reindex all documents
        /// </summary>
        [HttpGet("ReIndexAll")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task<long> ReIndexAll()
        {
            var collection = _revDb.getCollection<PageHolderModel>();
            var filter = Builders<PageHolderModel>.Filter.Eq(x => x.catalogued, true);
            var update = Builders<PageHolderModel>.Update.Set(x => x.catalogued, false);
            var t = await collection.UpdateManyAsync(filter, update);

            _logger.LogDebug($"{t.ModifiedCount} documents marked unCatalogued");

            try
            {
                await _esMapper.deleteIndexAsync();
            }
            catch (Exception ex)
            {
                if (!ex.Message.Contains("index_not_found_exception"))
                    throw;

                _logger.LogError($"the ES index didnot exist");
            }

            var allProjects = _revDb.getQueryable<ProjectModel>().ToArray();
            foreach (var p in allProjects)
                await _esMapper.updateProjectMappingAsync(p);

            return t.ModifiedCount;
        }

        [HttpPost("saveForSupport")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task<ProjectModel>
            SaveProjectForSupportPeopleAsync([FromBody] ProjectModel project,
            [FromQuery] string confirmedFieldsToDelete = null,
            [FromQuery] string confirmedFieldsToChange = null,
            [FromQuery] bool reIndexAll = false
            )
        {
            var currentWorkSpace = this.ensureWorkspaceAdmin(_resolver);
            var updatedProject = await _repoManager.SaveProjectAsync(project, confirmedFieldsToDelete, confirmedFieldsToChange);


            if (reIndexAll /*fieldnamesToChange.Count() > 0*/)
            {
                //NO need to wait for this to finish
                await ReIndexAll();
            }

            return updatedProject;
        }



        [HttpPost]
        public async Task<ProjectModel>
            SaveProjectAsync([FromBody] ProjectModel project,
            [FromQuery] string confirmedFieldsToDelete = null,
            [FromQuery] string confirmedFieldsToChange = null
            )
        {
            if (!string.IsNullOrWhiteSpace(confirmedFieldsToChange))
            {
                throw new ExceptionWithCode($"For renaming an index please contact customer support at this link https://scanrev.freshdesk.com/a/tickets/new");
            }

            var currentWorkSpace = this.ensureWorkspaceAdmin(_resolver);
            var updatedProject = await _repoManager.SaveProjectAsync(project, confirmedFieldsToDelete, confirmedFieldsToChange);

            return updatedProject;
        }


    }
}
