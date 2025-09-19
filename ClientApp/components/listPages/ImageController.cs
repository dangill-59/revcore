using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Nest;
using Newtonsoft.Json;
using reactBase;
using restUpdate;
using Utilities;

namespace components.listPages
{
    [Route("api/[controller]")]
    public class ImageController : Controller
    {

        readonly IStorageProvider _storage;
        readonly bool _useS3;
        readonly bool _useAzure;
        readonly ITaskSignerservice _signer;
        readonly IDistributedCache _distributedCache;
        readonly IConfiguration _configuration;
        readonly ILogger _logger;

        public ImageController(IConfiguration configuration,
            ITaskSignerservice signer,
            reactBase.ICacheProvider cache,
            IDistributedCache distributedCache,
            ILogger<ImageController> logger)
        {
            _signer = signer;
            var multiConfig = configuration.GetSection("multisite");

            _configuration = configuration;

            _useS3 = multiConfig["storage"] == "s3";
            _useAzure = multiConfig["storage"] == "azure";

            //create my own file storage provider, as for multi site this contoller is called without user logged in
            switch (multiConfig["storage"])
            {
                case "s3":
                    _storage = new S3StorageProvider(configuration, cache);
                    break;
                case "azure":
                    _storage = new AzureBlobStorageProvider(configuration, cache);
                    break;
                default:
                    _storage = new FileStorageProvider(configuration);
                    break;
            }

            _distributedCache = distributedCache;

            _logger = logger;


        }


        [AllowAnonymous]
        [HttpGet("{path0}/{path1?}/{path2?}/{path3?}")]
        public async Task<IActionResult> getPage(string path0,
            [FromQuery] long ticks, [FromQuery] string hash, [FromQuery] string grant,

            string path1 = null, string path2 = null, string path3 = null)
        {

            //in production we use s2 anyway. assuming path won't have more folder then 4
            var pathAr = new List<string>();
            pathAr.Add(Uri.UnescapeDataString(path0));
            if (null != path1)
                pathAr.Add(Uri.UnescapeDataString(path1));
            if (null != path2)
                pathAr.Add(Uri.UnescapeDataString(path2));
            if (null != path3)
                pathAr.Add(Uri.UnescapeDataString(path3));

            if (_useS3)
            {
                var path = string.Join("/", pathAr);


                await _distributedCache.ensurePageAccess(_logger, grant, path);

                /*
				_signer.verifyHash(path, 
					new SignedHash { hash = hash, ticks = ticks }, TimeSpan.FromMinutes(15));
				*/
                var overRidenEP = String.Empty;
                var options = uploadOptions(_configuration);

                if (!string.IsNullOrWhiteSpace(options.aws_url))
                {
                    //we are using minio.. set up 
                    overRidenEP = this.originFromURL("/api/Image", _logger);

                }

                return new RedirectResult(_storage.createPresignedUrl(publicPathORImageId: path, overrideEndPoint: overRidenEP));
            }
            else if (_useAzure)
            {
                var key = Uri.UnescapeDataString(path0);
                key = _storage.keyForDirectUpload(key);
                var imageUrl = _storage.createPresignedUrl(key);
                return new RedirectResult(imageUrl);

            }
            else
            {
                var path = System.IO.Path.Combine(pathAr.ToArray());
                var imageStream = _storage.getImageStream(_storage.getKey(path));
                return new FileStreamResult(imageStream, ContentTypefromExt(System.IO.Path.GetExtension(path)));
            }
        }

        static string ContentTypefromExt(string ext)
        {
            return String.Format("image/{0}", ext.TrimStart('.'));
        }

        static ChunkUploadModel _chunkUploadModel = null;
        public static ChunkUploadModel uploadOptions(IConfiguration config)
        {
            if (null == _chunkUploadModel)
            {
                var configSection = config.GetSection("s3Storage");

                var usingS3 = config["multisite:storage"] == "s3";
                var usingAzure = config["multisite:storage"] == "azure";

                _chunkUploadModel = new ChunkUploadModel
                {
                    usings3 = usingS3,
                    usingazure = usingAzure,
                    awsRegion = usingS3 ? configSection["region"] : null,
                    aws_key = usingS3 ? configSection["accesskey"] : null,
                    bucket = usingS3 ? configSection["bucket"] : null,
                    aws_url = usingS3 ? configSection["customEndpoint"] : null
                };
            }

            return _chunkUploadModel;

        }

    }
}
