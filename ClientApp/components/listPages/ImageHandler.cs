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
        //readonly reactBase.IStorageProvider _storage;
        readonly reactBase.ICacheProvider _cache;

        //readonly ITaskSignerservice _signer;
        readonly IServiceProvider _serviceProvider;
        //readonly IWorkspaceResolver _resolver;
        readonly IDistributedCache _distributedCache;
        readonly ILogger _logger;

        public hasRevImages(
            reactBase.ICacheProvider cache,
             IServiceProvider serviceProvider,
            //  ITaskSignerservice signer,
            IDistributedCache distributedCache,
            //IWorkspaceResolver resolver,
            IConfiguration configuration,
            ILogger<hasRevImages> logger
            )
        {
            _serviceProvider = serviceProvider;
            _cache = cache;
            //_signer = signer;
            //_resolver = resolver;
            _distributedCache = distributedCache;
            _logger = logger;
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
            IDistributedCache distributedCache, Func<string, string> publicPathFromId)
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
                    //var publicPath = _storage.publicPath(page.id);

                    var publicPath = publicPathFromId(page.id);

                    //creating signed hash takes way to long.
                    /*var signedHash = _signer.createSignedHash(publicPath);
					page.path = $"/api/image/{Uri.EscapeDataString(publicPath)}?holder={value.id}&ticks={signedHash.ticks}&hash={signedHash.hash}";
					*/

                    page.path = $"/api/image/{Uri.EscapeDataString(publicPath)}?holder={value.id}&grant={escapedGrant}";

                    page.orderNumber = value.pageOrders.ContainsKey(page.id) ? value.pageOrders[page.id] : value.pages.Count();
                    return publicPath;

                }).ToArray();

                distributedCache.GrantAccessToPages(logger, pageAccessGrant, allPathsInGrant);


                value.pages = value.pages.OrderBy(p => p.orderNumber);

                /*
				value.ocrStatus = OCRStatusModel.compelete;
				if (null != value.pages.Where(p => p.ocrStatus != OCRStatusModel.compelete).FirstOrDefault())
				{
					value.ocrStatus = OCRStatusModel.none;

					if (null != value.pages.Where(p => p.ocrStatus == OCRStatusModel.started).FirstOrDefault())
					{
						value.ocrStatus = OCRStatusModel.started;
					}

				}
				*/
            }


            return value;
        }

        public PageHolderModel FixPageHolderForWire(PageHolderModel value)
        {
            var _storage = _serviceProvider.GetService(typeof(RevStorage.IRevStorageService)) as RevStorage.IRevStorageService;
            return FixPageHolderForWireStatic(_logger, value, _distributedCache, pid => _storage.publicPath(pid));
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
