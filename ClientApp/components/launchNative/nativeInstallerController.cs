using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Authorization;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Linq;
using Utilities;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Threading.Tasks;

namespace components.launchNative
{
    [Route("api/[controller]")]
    //[Authorize(Policy = "AllAccessOrJob")]
    [Authorize]
    public class nativeInstallerController : Controller
    {

        readonly IWebHostEnvironment _hostingEnvironment;
        private readonly ILogger _logger;
        IConfiguration _configuration;

        public nativeInstallerController(IWebHostEnvironment hostingEnvironment, ILogger<nativeInstallerController> logger, IConfiguration configuration)
        {
            _hostingEnvironment = hostingEnvironment;
            _logger = logger;
            _configuration = configuration;
        }

        static readonly string SEPERATOR = "$$_$$";

        [HttpGet("{jobIdStr}")]
        [AllowAnonymous]
        public async Task<FileStreamResult> get(String jobIdStr)
        {
            _logger.LogInformation($"Get native installer for job: {jobIdStr} ");
            var nativeInstallerUrl = _configuration["nativeInstallerUrl"];

            if (string.IsNullOrEmpty(nativeInstallerUrl))
                throw new Exception("Installer URL is not set");

            var origin = this.originFromURL("/api/nativeInstaller", _logger, _configuration["overrideUrlScheme"]);
            _logger.LogDebug(origin);
            origin = origin.Replace(':', '_');

            using (var httpClient = new HttpClient())
            {
                var httpResponse = await httpClient.GetAsync(nativeInstallerUrl);
                if (httpResponse.IsSuccessStatusCode == false)
                    _logger.LogError("Failed to download installer");

                var ms = new MemoryStream();
                await httpResponse.Content.CopyToAsync(ms);
                ms.Position = 0;

                return new FileStreamResult(ms, "application/octet-stream")
                {
                    FileDownloadName = $"revWinInstall{SEPERATOR}{origin}/{SEPERATOR}{jobIdStr}{SEPERATOR}end.exe"
                };
            }
        }
    }
}
