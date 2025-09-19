using System;
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
using Microsoft.Extensions.Logging;
using reactBase;
using Utilities;

namespace components.mainNav
{
    [Route("api/[controller]")]
    public class HelpController
    {
        readonly IDownLoaderService _downloader;
        IConfiguration _configuration;
        readonly ILogger _logger;

        public HelpController(
            IDownLoaderService downloader,
            IConfiguration configuration,
            ILogger<HelpController> logger
            )
        {
            _downloader = downloader;
            _configuration = configuration;
            _logger = logger;
        }

        SupportTopicsModel _templates = null;

        [HttpGet]
        public async Task<SupportTopicsModel> getTopicsAsync()
        {
            if (null == _templates || null == _templates.routeTopics)
            {
                try
                {
                    var templateURL = _configuration["support:helpTopics"];
                    if (String.IsNullOrWhiteSpace(templateURL))
                        throw new Exception("support:helpTopics not configured");

                    _templates = await _downloader.downloadObjectAsync(templateURL, new SupportTopicsModel { });
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "failed to get help topics");
                    _templates = new SupportTopicsModel { };
                }
            }

            return _templates;
        }


    }
}
