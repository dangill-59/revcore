using System;
using System.Collections.Generic;
using System.Diagnostics;
//using System.Drawing.Imaging;
//using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;
using reactBase;
using restUpdate;
using RevStorage;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;
using Utilities;

namespace components.annotations
{
    [Route("api/[controller]")]
    [Authorize]
    public class AnnotationsController : Controller
    {
        readonly IRevStorageService _storage;
        private readonly ILogger _logger;
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly IWorkspaceResolver _resolver;

        public AnnotationsController(
            commonInterfaces.IRevDatabase revDb,
            IWorkspaceResolver resolver,
            IRevStorageService storage,
            ILogger<AnnotationsController> logger)
        {
            _logger = logger;
            _storage = storage;
            _resolver = resolver;
            _revDb = revDb;
        }

        struct SAnnoNames
        {
            /// <summary>
            /// image with juat the annotation layover
            /// </summary>
            public string annoId { get; set; }

            /// <summary>
            /// original Image with no Annotations
            /// </summary>
            public string noAnnoId { get; set; }

            /// <summary>
            /// unescaped pageid
            /// </summary>
            public string pageId { get; set; }

            /// <summary>
            /// Extension for the originakl page
            /// </summary>
            public string ext { get; set; }

            /// <summary>
            /// original Image with no rotation
            /// </summary>
            public string noRotId { get; set; }

            public string originalNoMutations { get; set; }

            public SAnnoNames(string escapedPageId)
            {
                pageId = Uri.UnescapeDataString(escapedPageId);

                var pageStub = Path.GetFileNameWithoutExtension(pageId);
                var pageFolder = Path.GetDirectoryName(pageId);

                ext = Path.GetExtension(pageId).TrimStart('.').ToLower();

                annoId = Path.Combine(pageFolder, $"{pageStub}_annotations.png").Replace('\\', '/');

                noAnnoId = Path.Combine(pageFolder, $"{pageStub}_noAnnotations.{ext}").Replace('\\', '/');

                noRotId = Path.Combine(pageFolder, $"{pageStub}_noRotations.{ext}").Replace('\\', '/');

                originalNoMutations = Path.Combine(pageFolder, $"{pageStub}_noMutations.{ext}").Replace('\\', '/');
            }

        }

        static string StreamToDataURL(Stream stm)
        {
            stm.Seek(0, SeekOrigin.Begin);
            byte[] bytes;
            using (var memoryStream = new MemoryStream())
            {
                stm.CopyTo(memoryStream);
                bytes = memoryStream.ToArray();
            }

            string base64 = Convert.ToBase64String(bytes);

            return $"data:image/png;base64,{base64}";
        }

        void ensureWriteAccess(string escapedPageId)
        {

            var pageId = Uri.UnescapeDataString(escapedPageId);

            var cartsQ = _revDb.getQueryable<PageHolderModel>()
                    .Where(c => c.pages.Any(p => p.id == pageId));

            var carts = cartsQ.ToArray();

            if (null == carts || carts.Length == 0)
            {
                throw new Exception($"pageId -> {pageId} not found in any cart");
            }

            var allPages = carts.SelectMany(c => c.pages.Where(p => p.id == pageId)).ToArray();

            var nonWebCount = allPages.Where(p => p.pageType != null).Count();

            if (nonWebCount > 0)
                throw new ExceptionWithCode("Annotaion is only supported for images");

            foreach (var cart in carts)
            {
                this.EnsurePageHolderAccess(cart, _resolver, _revDb, _logger, PermissionType.edit);
            }

        }

        [HttpGet("annotate/{pageId}")]
        public async Task<AnnoDataModel> GetAnnotation(string pageId)
        {
            if (string.IsNullOrWhiteSpace(pageId))
                throw new ArgumentNullException();

            ensureWriteAccess(pageId);

            var anno = new SAnnoNames(pageId);

            var orginalImageId = anno.noAnnoId;
            var found = await _storage.searchByPrefixAsync(orginalImageId);
            if (found.Length < 1)
            {
                _logger.LogDebug($"No image found for {orginalImageId} using original image");
                orginalImageId = anno.pageId;
            }

            var annoData = new AnnoDataModel
            {
                imageDataUrl = StreamToDataURL(await _storage.getImageStreamAsync(orginalImageId))
            };

            found = await _storage.searchByPrefixAsync(anno.annoId);
            if (found.Length < 1)
            {
                _logger.LogDebug($"No annotations found for {anno.annoId}");
                return annoData;
            }

            annoData.dataUrl = StreamToDataURL(await _storage.getImageStreamAsync(anno.annoId));

            return annoData;
        }

        async Task<Stream> ensureOriginalisSavedAsync(SAnnoNames anno)
        {
            ensureWriteAccess(anno.pageId);

            var pageStream = await _storage.getImageStreamAsync(anno.pageId);

            var found = await _storage.searchByPrefixAsync(anno.originalNoMutations);
            if (found.Length < 1)
            {
                _logger.LogDebug($"No anno.originalNoMutations -> {anno.originalNoMutations} Saving image");
                pageStream.Seek(0, SeekOrigin.Begin);
                await _storage.SaveStreamAsync(anno.originalNoMutations, pageStream);
            }

            return pageStream;
        }

        async Task rotateAndSave(Stream inStream, string targetId, bool left)
        {
            inStream.Seek(0, SeekOrigin.Begin);
            using (var pageImage = Image.Load<Rgba32>(inStream))
            using (var outputStream = new MemoryStream())
            {
                inStream.Seek(0, SeekOrigin.Begin);
                var format = Image.DetectFormat(inStream);

                if (pageImage.Width > 10000 || pageImage.Height > 10000)
                    throw new Exception("Image dimensions are too large.");

                // Rotate the image
                //pageImage.RotateFlip(left ? System.Drawing.RotateFlipType.Rotate270FlipNone : System.Drawing.RotateFlipType.Rotate90FlipNone);
                pageImage.Mutate(o => o.Rotate(90f + (left ? 180f : 0f)));

                // Save the rotated image to the output stream
                //pageImage.Save(outputStream, System.Drawing.Imaging.ImageFormat.Png);
                pageImage.Save(outputStream, format);

                outputStream.Seek(0, SeekOrigin.Begin);
                await _storage.SaveStreamAsync(targetId, outputStream);
            }
        }


        [HttpGet("rotate/{pageId}")]
        public async Task Rotate(string pageId, [FromQuery] bool left = false)
        {
            if (string.IsNullOrWhiteSpace(pageId))
                throw new ArgumentNullException();

            var anno = new SAnnoNames(pageId);
            var pageStream = await ensureOriginalisSavedAsync(anno);

            var found = await _storage.searchByPrefixAsync(anno.noRotId);
            if (found.Length < 1)
            {
                _logger.LogDebug($"No anno.noRotId -> {anno.noRotId} Saving image");
                pageStream.Seek(0, SeekOrigin.Begin);
                await _storage.SaveStreamAsync(anno.noRotId, pageStream);
            }

            //junk the current width and heigh
            {
                var filter = Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.id == anno.pageId);
                var update = Builders<PageHolderModel>.Update
                    .Unset("pages.$.width")
                    .Unset("pages.$.height");

                var mCollection = _revDb.getCollection<PageHolderModel>();

                var done = await mCollection.UpdateManyAsync(filter, update);

                if (done.ModifiedCount < 1)
                {
                    _logger.LogWarning("Failed to update width and height");
                    //throw new ExceptionWithCode("Failed to update width and height");
                }
            }

            await rotateAndSave(pageStream, anno.pageId, left);

            found = await _storage.searchByPrefixAsync(anno.noAnnoId);
            if (found.Length == 1)
            {
                _logger.LogDebug($"anno.noAnnoId -> {anno.noAnnoId} exisis we need to rotate that as well");
                await rotateAndSave(await _storage.getImageStreamAsync(anno.noAnnoId), anno.noAnnoId, left);
            }

            found = await _storage.searchByPrefixAsync(anno.annoId);
            if (found.Length == 1)
            {
                _logger.LogDebug($"anno.annoId -> {anno.annoId} exisis we need to rotate that as well");
                await rotateAndSave(await _storage.getImageStreamAsync(anno.annoId), anno.annoId, left);
            }

        }


        [HttpPost("annotate/{pageId}")]
        public async Task<AnnoDataModel> UpdateAnnotation(string pageId, [FromBody] AnnoDataModel data)
        {
            if (string.IsNullOrWhiteSpace(pageId) || null == data || string.IsNullOrWhiteSpace(data.dataUrl))
                throw new ArgumentNullException();

            var matched = Regex.Match(data.dataUrl, @"data:image/(?<type>.+?),(?<data>.+)");

            if (!matched.Success)
                throw new ExceptionWithCode("invalid annotation image");

            if (matched.Groups["type"].Value.ToLower() != "png;base64")
            {
                throw new ExceptionWithCode($"annotation image of type {matched.Groups["type"].Value} not supported");
            }

            var anno = new SAnnoNames(pageId);
            await ensureOriginalisSavedAsync(anno);

            var base64Data = matched.Groups["data"].Value;
            using (var annoStream = new MemoryStream(Convert.FromBase64String(base64Data)))
            {
                await _storage.SaveStreamAsync(anno.annoId, annoStream);

                var orginalImageId = anno.noAnnoId;
                var found = await _storage.searchByPrefixAsync(orginalImageId);
                if (found.Length < 1)
                {
                    _logger.LogDebug($"No image found for {orginalImageId} using original image");
                    orginalImageId = anno.pageId;
                }


                annoStream.Seek(0, SeekOrigin.Begin);

                var orgStream = await _storage.getImageStreamAsync(orginalImageId);

                orgStream.Seek(0, SeekOrigin.Begin);
                using (var originalImage = Image.Load<Rgba32>(orgStream))
                using (var annoImage = Image.Load<Rgba32>(annoStream))
                using (var outputImage = new Image<Rgba32>(originalImage.Width, originalImage.Height))
                using (var outputStream = new MemoryStream())
                {
                    orgStream.Seek(0, SeekOrigin.Begin);
                    var format = Image.DetectFormat(orgStream);

                    annoImage.Mutate(o => o.Resize(new Size(originalImage.Width, originalImage.Height)));

                    outputImage.Mutate(o => o
                    .DrawImage(originalImage, new Point(0, 0), 1f)
                    .DrawImage(annoImage, new Point(0, 0), 1f)
                    );

                    outputImage.Save(outputStream, format);

                    outputStream.Seek(0, SeekOrigin.Begin);
                    orgStream.Seek(0, SeekOrigin.Begin);

                    if (orginalImageId == anno.pageId)
                    {
                        await _storage.SaveStreamAsync(anno.noAnnoId, orgStream);
                    }

                    //Debug.Assert(outputStream.Length > 50 * 1024);
                    await _storage.SaveStreamAsync(anno.pageId, outputStream);

                }

            }

            return await GetAnnotation(pageId);

        }
    }
}
