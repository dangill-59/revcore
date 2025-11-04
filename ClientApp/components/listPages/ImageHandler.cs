using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using restUpdate;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Utilities;

namespace components.listPages
{
    public class hasRevImages : restUpdate.HasPropertyBase<PageHolderModel>
    {
        readonly reactBase.ICacheProvider _cache;
        readonly RevStorage.IRevStorageService _storage;
        readonly IDistributedCache _distributedCache;
        readonly ILogger _logger;
        readonly workspaceResolver.IRevWorkspaceResolver _workspaceResolver;

        public hasRevImages(
            reactBase.ICacheProvider cache,
            RevStorage.IRevStorageService storage,
            IDistributedCache distributedCache,
            IConfiguration configuration,
            ILogger<hasRevImages> logger,
            workspaceResolver.IRevWorkspaceResolver workspaceResolver
            )
        {
            _storage = storage;
            _cache = cache;
            _distributedCache = distributedCache;
            _logger = logger;
            _workspaceResolver = workspaceResolver;
        }

        protected override void FixForWireOtherTypes(object value, Controller controller)
        {

            if (value is PageImageModel || value is IEnumerable<PageImageModel>)
            {
                System.Diagnostics.Debug.Assert(false, "Code not following pattern");
                throw new Exception("PageImageModel return type not supported, as we need pageholder for proper path");
            }

        }


        /// <summary>
        /// Static method to be called from outside controllers
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static PageHolderModel FixPageHolderForWireStatic(ILogger logger, PageHolderModel value,
            IDistributedCache distributedCache, Func<string, string> publicPathFromId, string workspaceId)
        {
            if (null == value)
                return value;

            //sure we will send these sorted.
            if (null != value.pages)
            {

                if (null == value.pageOrders)
                {
                    //load pageorders from pages
                    value.pageOrders = value.pages.ToDictionary(k => k.id, v => v.orderNumber);
                }

                var pageAccessGrant = $"imageHandler:PageAccessGrant_{Guid.NewGuid()}";

                var escapedGrant = Uri.EscapeDataString(pageAccessGrant);

                var allPathsInGrant = value.pages.Select(page =>
                {
                    // Phase 4: Use web-displayable PNG version if page has been processed
                    var pageIdForDisplay = page.id;
                    if (page.pageType == null && page.id.Contains("/original.pdf"))
                    {
                        // Page has been processed (pageType == null means web-displayable)
                        // Use the converted PNG image instead of original PDF
                        pageIdForDisplay = page.id.Replace("/original.pdf", "/web.png");
                    }

                    // Phase 4 Extension: Prepend workspace prefix to match imageProcMQ upload path
                    // imageProcMQ uploads to: rev_dev/rev_{workspaceId}/page/.../web.png
                    // We pass: rev_{workspaceId}/page/.../web.png (WorkspaceAgnosticStorageService adds rev_dev/)
                    var workspaceScopedPath = $"rev_{workspaceId}/{pageIdForDisplay}";

                    // Phase 4: Pass the workspace-scoped key to /api/image/
                    // The /api/image/ endpoint uses WorkspaceAgnosticStorageService which adds StorageRoot
                    page.path = $"/api/image/{Uri.EscapeDataString(workspaceScopedPath)}?holder={value.id}&grant={escapedGrant}";

                    page.orderNumber = value.pageOrders.ContainsKey(page.id) ? value.pageOrders[page.id] : value.pages.Count();

                    // Phase 4 Extension: Return the workspace-scoped key for the access grant
                    return workspaceScopedPath;

                }).ToArray();

                distributedCache.GrantAccessToPages(logger, pageAccessGrant, allPathsInGrant);

                value.pages = value.pages.OrderBy(p => p.orderNumber);
            }


            return value;
        }

        public PageHolderModel FixPageHolderForWire(PageHolderModel value)
        {
            var workspaceId = _workspaceResolver.revContext?.workspaceId ?? throw new InvalidOperationException("Workspace context not available");
            return FixPageHolderForWireStatic(_logger, value, _distributedCache, pid => _storage.publicPath(pid), workspaceId);
        }

        protected override object fixForWire(PageHolderModel value, Controller controller)
        {
            return FixPageHolderForWire(value);
        }

        protected override Dictionary<Type, Func<object, Task<object>>> OtherTasks
        {
            get
            {
                return new Dictionary<Type, Func<object, Task<object>>>
                {
                    {
                        typeof(components.listPages.PagesEffectedModel),o=>
                        {
                            var pagesEffected = ((components.listPages.PagesEffectedModel)o);

                            this.fixForWire( pagesEffected.pageHolder, null);

                            return Task.FromResult<object>(pagesEffected);

                        }
                    },
                    {
                        typeof(components.searchView.SearchResultsModel),o =>
                        {
                            var model = ((components.searchView.SearchResultsModel)o);

                            if (null!= model.documents)
                            {
                                foreach(var d in model.documents)
                                {
                                    this.fixForWire(d,null);
                                }
                            }

                            return Task.FromResult<object>(model);
                        }
                    }
                };

            }
        }
    }
}
