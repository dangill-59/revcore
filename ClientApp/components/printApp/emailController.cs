using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MimeKit;
using MimeKit.Text;
using MongoDB.Driver;
using reactBase;
using restUpdate;
using revCore2site.Controllers.Models;
using revMQAbstractions;
using StackExchange.Redis.Extensions.Core.Abstractions;
using Utilities;
using workspaceResolver;

namespace components.printApp
{
    /// <summary>
    /// This controller emails out revImages
    /// </summary>
    [Route("api/[controller]")]
    [Authorize]
    public class emailController : Controller
    {

        readonly reactBase.ICacheProvider _cache;

        readonly IStorageProvider _storage;

        private readonly ILogger _logger;

        readonly IConfiguration _configuration;

        readonly IWaitforJob _pageadoneWaiter;


        readonly IEmailSenderService _emailSender;
        readonly commonInterfaces.IRevDatabase _revDb;

        readonly commonInterfaces.IRevAuthDatabase _authDb;

        readonly IRedisCacheClient _redis;


        public emailController(

            reactBase.ICacheProvider cache,
            IDownLoaderService downloader,
            IStorageProvider storage,
            commonInterfaces.IRevAuthDatabase authDb,

            IWaitforJob pageadoneWaiter,
            commonInterfaces.IRevDatabase revDb,
            IEmailSenderService emailSender,
            IRedisCacheClient redis,
            ILogger<emailController> logger,
            IConfiguration configuration)
        {
            _cache = cache;
            _storage = storage;
            _logger = logger;
            _authDb = authDb;
            _redis = redis;
            _pageadoneWaiter = pageadoneWaiter;
            _revDb = revDb;
            _configuration = configuration;
            _emailSender = emailSender;

        }

        class PreparedStream
        {
            public Stream stream { get; set; }

            public CombineToPdfResultModel result { get; set; }
        }

        async Task<PreparedStream> getPdfStream(string jobId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(jobId))
                    throw new ArgumentNullException(nameof(jobId));

                var result = new PreparedStream
                {
                    result = await _pageadoneWaiter.waitForJobDone<CombineToPdfJob, CombineToPdfResultModel>(this.currentLoggedonUser(), jobId)
                };

                if (!string.IsNullOrWhiteSpace(result.result.resultPath))
                {

                    result.stream = _storage.getImageStream(result.result.resultPath);

                    if (result.stream.Position != 0)
                    {
                        result.stream.Seek(0, SeekOrigin.Begin);
                    }

                }

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                if (ex.Message.Contains("This email cannot be sent because the attachment size exceeds"))
                {
                    await _redis.Db0.AddAsync($"emailJob_${jobId}", "size_exceeds", TimeSpan.FromMinutes(15));
                }
                //throw new Exception(ex.Message);
                throw ex;
            }
            //return result;
        }

        async Task<PreparedStream> getArchiveStream(string jobId)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(jobId))
                    throw new ArgumentNullException(nameof(jobId));

                var result = new PreparedStream
                {
                    result = await _pageadoneWaiter.waitForJobDone<CreatePdfAcrhiveJob, CombineToPdfResultModel>(this.currentLoggedonUser(), jobId)
                };

                if (!string.IsNullOrWhiteSpace(result.result.resultPath))
                {

                    result.stream = _storage.getImageStream(result.result.resultPath);

                    if (result.stream.Position != 0)
                        result.stream.Seek(0, SeekOrigin.Begin);
                }

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        [HttpGet("printablePdf/{jobId}")]
        public async Task<IActionResult> printablePdf(string jobId)
        {
            var done = await getPdfStream(jobId);

            if (null == done.stream)
            {
                throw new ExceptionWithCode("No printable page found. Please download original document");
            }

            return new FileStreamResult(done.stream, "application/pdf")
            {
                FileDownloadName = "Rev Images.pdf"
            };
        }

        [HttpPost("createPrintablePdf/{isMail?}/{isOriginalDocs?}")]
        public async Task<PreparePdfresultModel> preparePdfJob([FromBody] PageImageModel[] images, bool isMail = false, bool isOriginalDocs = false)
        {
            if (null == images || 0 == images.Length)
                throw new ExceptionWithCode("No images to prepare");

            var imagesToAttach = images.Where(p => p.pageType == null).Select(im => im.id).ToArray();

            if (!isMail)
            {
                var unProcessedFiles = images.Where(p => p.pageType == PageImageTypeModel.unprocessed).Select(im => im.id).ToArray();

                if (unProcessedFiles.Length > 0)
                {
                    throw new ExceptionWithCode("Some images in the selected document are not ready. Please open the document and then download this pdf.");
                }
            }

            if (isOriginalDocs)
            {
                var pngFiles = images.Where(p => p.originalId == null).Select(p => p.id).ToArray();
                return new PreparePdfresultModel
                {
                    pdfId = null,
                    orginalpageIds = images.Where(p => p.originalId != null).Select(i => i.originalId).Distinct().ToArray().Concat(pngFiles).ToArray()
                };
            }
            //if all orginals orginalpageIds ={};

            _logger.LogDebug($"preparePdf: preparing {imagesToAttach.Length} images");

            var jobResult = await _pageadoneWaiter.CreateJob<CombineToPdfJob, CombineToPdfResultModel>(this.currentLoggedonUser(), new CombineToPdfJob
            {
                pagesId = imagesToAttach,
                isEmail = isMail
            });

            return new PreparePdfresultModel
            {
                pdfId = jobResult,
                orginalpageIds = null
            };

        }

        [HttpPost("createPrintablePdfForDocIds")]
        public async Task<string> createPrintablePdfForDocIds([FromBody] string[] selectedIds)
        {
            if (null == selectedIds || 0 == selectedIds.Length)
                throw new ExceptionWithCode("No docs to prepare");

            var imagesToAttach = selectedIds.ToArray();
            _logger.LogDebug($"preparePdf: preparing {imagesToAttach.Length} docs");

            return await _pageadoneWaiter.CreateJob<CombineToPdfJob, CombineToPdfResultModel>(this.currentLoggedonUser(), new CombineToPdfJob
            {
                pagesId = imagesToAttach
            });
        }

        [HttpPost("createPdfArchiveForDocIds")]
        public async Task<string> createPdfArchiveForDocIds([FromBody] CreatePdfArchiveRequest request)
        {
            if (request.DocIds is null || request.DocIds.Length == 0)
                throw new ExceptionWithCode("No docs to prepare");

            _logger.LogDebug($"createPdfArchiveForDocIds: preparing {request.DocIds.Length} docs");

            return await _pageadoneWaiter.CreateJob<CreatePdfAcrhiveJob, CombineToPdfResultModel>(this.currentLoggedonUser(), new CreatePdfAcrhiveJob
            {
                docIds= request.DocIds,
                indexesToNameWith = request.IndexesToNameWith
            });
        }

        [HttpGet("pdfArchiveForDocIds/{jobId}")]
        public async Task<IActionResult> pdfArchiveForDocIds(string jobId)
        {
            var done = await getArchiveStream(jobId);

            if (done.stream is null)
                throw new ExceptionWithCode("No archive found.");

            return new FileStreamResult(done.stream, "application/zip")
            {
                FileDownloadName = "RevArchivedDocuments.zip"
            };
        }

        [HttpPost]
        public async Task sendMail([FromBody] MailReqModel req)
        {
            if (null == req)
                throw new ArgumentNullException(nameof(req));

            if (req.pdfJobResult == null)
                throw new ExceptionWithCode("no images to send");

            if (req.mailtoList.Length == 0)
                throw new ExceptionWithCode("To address not set");
            var limit = _configuration.GetSection("mailSizeLimit").Get<mailSizeLimit>();

            if (!string.IsNullOrWhiteSpace(req.pdfJobResult.pdfId))
            {
                for (var i = 0; i < 20; i++)
                {
                    var exists = await _redis.Db0.GetAsync<string>($"emailJob_${req.pdfJobResult.pdfId}");
                    if (string.IsNullOrWhiteSpace(exists))
                    {
                        _logger.LogInformation($"{$"emailJob_${req.pdfJobResult.pdfId}"} does not exists in reddis catch");
                        break;
                    }

                    if (exists == "finished")
                    {
                        _logger.LogInformation($"{$"emailJob_${req.pdfJobResult.pdfId}"} job is completed and email has been sent");
                        return;
                    }
                    else if (exists.StartsWith("size_exceeds"))
                    {
                        //failed to send email size exceeded
                        throw new ExceptionWithCode($"This email cannot be sent because the attachment size exceeds {limit.attachmentSize} MB. You can download a 'printable pdf' for this document.");

                    }

                    //else the previous command is still going on
                    await Task.Delay(TimeSpan.FromSeconds(30));

                }
            }
            try
            {
                var attachments = new Dictionary<string, Stream>();

                if (!string.IsNullOrWhiteSpace(req.pdfJobResult.pdfId))
                {
                    var rediskey = $"emailJob_${req.pdfJobResult.pdfId}";
                    await _redis.Db0.AddAsync(rediskey, "started", TimeSpan.FromMinutes(15));

                    var preparedData = await getPdfStream(req.pdfJobResult.pdfId);
                    if (preparedData.stream.Length > (limit.attachmentSize * 1024 * 1024))
                    {
                        await _redis.Db0.AddAsync(rediskey, "size_exceeds", TimeSpan.FromMinutes(15));
                        throw new Exception($"This email cannot be sent because the attachment size exceeds {limit.attachmentSize} MB");
                    }

                    if (null != preparedData.stream)
                    {

                        var attachmentFileName = Path.GetFileNameWithoutExtension(req.attachmentName);
                        if (string.IsNullOrEmpty(attachmentFileName))
                            attachmentFileName = "revImage";
                        attachmentFileName += ".pdf";

                        _logger.LogDebug($"sendMail: added attachment {attachmentFileName}");

                        attachments[attachmentFileName] = preparedData.stream;
                    }
                    _logger.LogDebug($"checking for nonweeb files {DateTime.Now}");
                    if (null != preparedData.result.nonWebFiles && preparedData.result.nonWebFiles.Length > 0)
                    {
                        _logger.LogDebug($"sendMail: has {preparedData.result.nonWebFiles.Length} nonWeb files");

                        var nonWbadded = await Task.WhenAll(preparedData.result.nonWebFiles.Select(async (pId, i) =>
                        {
                            var ext = Path.GetExtension(pId);
                            var imageStm = _storage.getImageStream(_storage.getKey(pId));

                            var cachestm = imageStm;
                            if (imageStm.CanSeek)
                            {
                                _logger.LogDebug($"sendMail: imageStream is seekable , length: {imageStm.Length} , pos: {imageStm.Position}");
                            }
                            else
                            {
                                if (imageStm.Position > 0)
                                {
                                    _logger.LogError($"image stream position {imageStm.Position} and cannot seek. We can't use this stream");
                                    throw new Exception("image stream cannot be used");
                                }

                                cachestm = _cache.createCacheStream(ext);
                                await imageStm.CopyToAsync(cachestm);

                                _logger.LogDebug($"sendMail: coy to async completed {cachestm.Length} - {cachestm.Position}");
                            }

                            cachestm.Seek(0, SeekOrigin.Begin);

                            var attachmentFileName = Path.GetFileNameWithoutExtension(req.attachmentName);
                            if (string.IsNullOrEmpty(attachmentFileName))
                                attachmentFileName = "revImage";

                            attachmentFileName = $"{attachmentFileName}_{i}{ext}";

                            attachments[attachmentFileName] = cachestm;

                            _logger.LogDebug($"sendMail: added attachment {attachmentFileName}");

                            return pId;
                        }));
                    }
                }
                else if (req.pdfJobResult.orginalpageIds != null)
                {
                    long attachmentSize = 0;
                    _logger.LogInformation($"Sending {req.pdfJobResult.orginalpageIds.Length} original files");

                    var originaladded = await Task.WhenAll(req.pdfJobResult.orginalpageIds.Select(async (pId, i) =>
                    {
                        var ext = Path.GetExtension(pId);
                        var imageStm = _storage.getImageStream(_storage.getKey(pId));
                        var cachestm = imageStm;
                        if (imageStm.CanSeek)
                        {
                            _logger.LogDebug($"sendMail: imageStream is seekable , length: {imageStm.Length} , pos: {imageStm.Position}");
                        }
                        else
                        {
                            if (imageStm.Position > 0)
                            {
                                _logger.LogError($"image stream position {imageStm.Position} and cannot seek. We can't use this stream");
                                throw new Exception("image stream cannot be used");
                            }

                            cachestm = _cache.createCacheStream(ext);
                            await imageStm.CopyToAsync(cachestm);

                            _logger.LogDebug($"sendMail: coy to async completed {cachestm.Length} - {cachestm.Position}");
                        }
                        cachestm.Seek(0, SeekOrigin.Begin);

                        var attachmentFileName = Path.GetFileNameWithoutExtension(req.attachmentName);
                        if (string.IsNullOrEmpty(attachmentFileName))
                            attachmentFileName = "revImage";

                        attachmentFileName = $"{attachmentFileName}_{i}{ext}";

                        attachments[attachmentFileName] = cachestm;
                        attachmentSize = attachmentSize + cachestm.Length;
                        _logger.LogDebug($"sendMail: added attachment {attachmentFileName}");

                        return pId;
                    }
                    ));
                    if (attachmentSize > limit.attachmentSize * 1024 * 1024)
                    {
                        throw new Exception($"This email cannot be sent because the attachment size exceeds {limit.attachmentSize} MB");
                    }
                }




                _logger.LogDebug($"checking for nonweeb files done {DateTime.Now}");
                await _emailSender.sendEmailAsync(req.mailtoList, req.subject, req.message, attachments, req.ccList);

                await _redis.Db0.AddAsync($"emailJob_${req.pdfJobResult.pdfId}", "finished", TimeSpan.FromMinutes(15));
            }
            catch (Exception ex)
            {
                if (ex.Message.Contains("This email cannot be sent because the attachment size exceeds"))
                {
                    throw new ExceptionWithCode(message: ex.Message, innerException: ex);
                }
                else if (ex.Message != "Still waiting for Job to finish")
                {
                    _logger.LogInformation($"Removing {$"emailJob_${req.pdfJobResult.pdfId}"} from catch");
                    await _redis.Db0.RemoveAsync($"emailJob_${req.pdfJobResult.pdfId}");
                }
                _logger.LogError($"failed with exception {ex.Message}");
            }
        }
    }
}
