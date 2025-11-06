using commonInterfaces;
using commonInterfaces.dbDataTypes;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoDbService;
using RevStorage;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using workspaceResolver;

namespace revCore2site.Services
{
    /// <summary>
    /// Background service that polls for unprocessed pages and converts them to web-displayable images.
    /// This replaces the need for a separate imageProcMQ worker and RabbitMQ dependency.
    /// </summary>
    public class ImageProcessingBackgroundService : BackgroundService
    {
        private readonly ILogger<ImageProcessingBackgroundService> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly IConfiguration _configuration;
        private readonly bool _enabled;
        private readonly int _pollingIntervalMs;
        private readonly int _maxConcurrentJobs;
        private readonly HashSet<string> _pagesBeingProcessed = new HashSet<string>();
        private readonly object _lock = new object();

        // Cached MongoClient for auth database (reuse connection pool)
        private MongoClient _authMongoClient;
        private IMongoDatabase _authDatabase;

        public ImageProcessingBackgroundService(
            ILogger<ImageProcessingBackgroundService> logger,
            IServiceProvider serviceProvider,
            IConfiguration configuration)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
            _configuration = configuration;

            // Configuration
            _enabled = configuration.GetValue<bool>("ImageProcessing:InProcess:Enabled", true);
            _pollingIntervalMs = configuration.GetValue<int>("ImageProcessing:InProcess:PollingIntervalMs", 5000);
            _maxConcurrentJobs = configuration.GetValue<int>("ImageProcessing:InProcess:MaxConcurrentJobs", 2);

            if (!_enabled)
            {
                _logger.LogInformation("ImageProcessingBackgroundService is DISABLED (using distributed processing via RabbitMQ)");
            }
            else
            {
                _logger.LogInformation($"ImageProcessingBackgroundService is ENABLED (polling every {_pollingIntervalMs}ms, max {_maxConcurrentJobs} concurrent jobs)");
            }
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            if (!_enabled)
            {
                _logger.LogInformation("ImageProcessingBackgroundService is disabled, exiting");
                return;
            }

            _logger.LogInformation("ImageProcessingBackgroundService started");

            // Wait a bit on startup to let the application fully initialize
            await Task.Delay(5000, stoppingToken);

            var activeTasks = new List<Task>();

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    _logger.LogDebug($"Polling for pages to process (active tasks: {activeTasks.Count})");

                    // Clean up completed tasks
                    activeTasks.RemoveAll(t => t.IsCompleted);

                    // If we have capacity, check for more work
                    if (activeTasks.Count < _maxConcurrentJobs)
                    {
                        // Get all active workspaces from the global auth database
                        var workspaces = await GetActiveWorkspacesAsync();
                        _logger.LogDebug($"Found {workspaces.Count} active workspaces to check");

                        // For each workspace, check for pages that need processing
                        foreach (var workspace in workspaces)
                        {
                            if (activeTasks.Count >= _maxConcurrentJobs)
                                break;

                            try
                            {
                                // Create RevDatabase instance directly for this workspace
                                var connInfo = new MongoDbService.revDbBase.connectionInfo
                                {
                                    connectionString = _configuration.GetSection("mongoDb:connectionString").Value,
                                    Database = $"rev_{workspace.id}"
                                };

                                var revDb = new RevDatabase(connInfo, workspace.id);

                                // Find pages that need processing in this workspace
                                var pagesNeedingProcessing = await FindPagesNeedingProcessing(revDb);
                                _logger.LogDebug($"Workspace {workspace.id}: Found {pagesNeedingProcessing.Count} pages needing processing");

                                foreach (var pageInfo in pagesNeedingProcessing)
                                {
                                    if (activeTasks.Count >= _maxConcurrentJobs)
                                        break;

                                    // Check if this page is already being processed
                                    bool shouldProcess = false;
                                    lock (_lock)
                                    {
                                        if (!_pagesBeingProcessed.Contains(pageInfo.pageId))
                                        {
                                            _pagesBeingProcessed.Add(pageInfo.pageId);
                                            shouldProcess = true;
                                        }
                                    }

                                    if (!shouldProcess)
                                    {
                                        _logger.LogDebug($"Skipping page {pageInfo.pageId} - already being processed");
                                        continue;
                                    }

                                    // Start processing in background
                                    var task = Task.Run(async () =>
                                    {
                                        try
                                        {
                                            await ProcessPageAsync(pageInfo.pageId, pageInfo.workspaceId);
                                        }
                                        catch (Exception ex)
                                        {
                                            _logger.LogError(ex, $"Error in background processing task for page {pageInfo.pageId}");
                                        }
                                        finally
                                        {
                                            // Remove from tracking when done
                                            lock (_lock)
                                            {
                                                _pagesBeingProcessed.Remove(pageInfo.pageId);
                                            }
                                        }
                                    }, stoppingToken);

                                    activeTasks.Add(task);
                                }
                            }
                            catch (Exception ex)
                            {
                                _logger.LogError(ex, $"Error checking workspace {workspace.id} for pages to process");
                            }
                        }
                    }

                    // Wait before next poll
                    await Task.Delay(_pollingIntervalMs, stoppingToken);
                }
                catch (OperationCanceledException)
                {
                    _logger.LogInformation("ImageProcessingBackgroundService is stopping");
                    break;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error in ImageProcessingBackgroundService polling loop");
                    await Task.Delay(10000, stoppingToken); // Wait longer on error
                }
            }

            // Wait for active tasks to complete on shutdown
            _logger.LogInformation($"Waiting for {activeTasks.Count} active processing tasks to complete...");
            await Task.WhenAll(activeTasks);

            _logger.LogInformation("ImageProcessingBackgroundService stopped");
        }

        private async Task<List<WorkspaceModel>> GetActiveWorkspacesAsync()
        {
            try
            {
                // Initialize cached MongoClient on first use (lazy initialization)
                if (_authMongoClient == null)
                {
                    var authConnectionString = _configuration.GetSection("authDb:connectionString").Value;
                    var authDatabaseName = _configuration.GetSection("authDb:database").Value ?? "globalAuth";

                    _authMongoClient = new MongoClient(authConnectionString);
                    _authDatabase = _authMongoClient.GetDatabase(authDatabaseName);

                    _logger.LogInformation("Initialized cached MongoClient for auth database");
                }

                var workspacesCollection = _authDatabase.GetCollection<WorkspaceModel>("workspaces");

                // Get all workspaces
                var workspaces = await workspacesCollection
                    .Find(w => true) // Get all workspaces
                    .Limit(100) // Process up to 100 workspaces per poll
                    .ToListAsync();

                return workspaces;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting active workspaces");
                return new List<WorkspaceModel>();
            }
        }

        private async Task<List<(string pageId, string workspaceId)>> FindPagesNeedingProcessing(IRevDatabase revDb)
        {
            try
            {
                var pageHolders = revDb.getCollection<PageHolderModel>();

                // Find pages with pageType = unprocessed, identifying, or processing
                // These are pages that need to be converted to web-displayable images
                var filter = Builders<PageHolderModel>.Filter.Or(
                    Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.pageType == PageImageTypeModel.unprocessed),
                    Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.pageType == PageImageTypeModel.identifying),
                    Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.pageType == PageImageTypeModel.processing)
                );

                var docs = await pageHolders.Find(filter)
                    .Limit(10) // Process up to 10 documents per poll
                    .ToListAsync();

                var result = new List<(string pageId, string workspaceId)>();

                foreach (var doc in docs)
                {
                    foreach (var page in doc.pages)
                    {
                        if (page.pageType == PageImageTypeModel.unprocessed ||
                            page.pageType == PageImageTypeModel.identifying ||
                            page.pageType == PageImageTypeModel.processing)
                        {
                            result.Add((page.id, revDb.workspaceId));
                        }
                    }
                }

                if (result.Count > 0)
                {
                    _logger.LogInformation($"Found {result.Count} pages needing processing");
                }

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error finding pages needing processing");
                return new List<(string pageId, string workspaceId)>();
            }
        }

        private async Task ProcessPageAsync(string pageId, string workspaceId)
        {
            var stopwatch = System.Diagnostics.Stopwatch.StartNew();
            _logger.LogInformation($"[START] Processing page: {pageId}, workspace: {workspaceId}");

            try
            {
                // Create RevDatabase instance directly for this workspace (no HTTP context needed)
                var connInfo = new MongoDbService.revDbBase.connectionInfo
                {
                    connectionString = _configuration.GetSection("mongoDb:connectionString").Value,
                    Database = $"rev_{workspaceId}"
                };
                var revDb = new RevDatabase(connInfo, workspaceId);

                using var scope = _serviceProvider.CreateScope();

                // Set workspace context for this operation (like imageProcMQ does)
                var workspaceResolver = scope.ServiceProvider.GetRequiredService<IRevWorkspaceResolver>();
                workspaceResolver.revContext = new RevWorkspaceContext(workspaceId);

                var storage = scope.ServiceProvider.GetRequiredService<IRevStorageService>();

                // 1. Get page from MongoDB
                var pageHolders = revDb.getCollection<PageHolderModel>();
                var pagesInDocs = await pageHolders.findPageinDocsAsync(pageId);

                if (pagesInDocs == null || pagesInDocs.page == null)
                {
                    _logger.LogWarning($"Page not found in any document: {pageId}");
                    return;
                }

                var page = pagesInDocs.page;
                var docIds = pagesInDocs.docIds;

                // 2. Check for duplicate processing
                if (page.pageType == null && page.width > 0 && page.height > 0)
                {
                    _logger.LogInformation($"Page {pageId} already processed, skipping");
                    return;
                }

                // 3. Update status to processing
                await UpdatePageInDocuments(revDb, pageId, docIds, p =>
                {
                    p.pageType = PageImageTypeModel.processing;
                    p.modified = DateTime.Now;
                });
                _logger.LogInformation($"Page {pageId} marked as processing");

                // 4. Download PDF from S3
                _logger.LogInformation($"Downloading PDF from S3: {pageId}");
                var localPdfPath = await storage.ensureLocalFileAsync(pageId);
                _logger.LogInformation($"Downloaded PDF to: {localPdfPath}");

                if (!File.Exists(localPdfPath))
                {
                    _logger.LogError($"Failed to download PDF from S3: {pageId}");
                    await UpdatePageInDocuments(revDb, pageId, docIds, p =>
                    {
                        p.pageType = PageImageTypeModel.nonweb;
                        p.processingError = "Failed to download from S3";
                        p.modified = DateTime.Now;
                    });
                    return;
                }

                _logger.LogInformation($"[TIMING] PDF download completed: {stopwatch.ElapsedMilliseconds}ms");

                // 5. Convert PDF to images using Ghostscript
                var outputDir = Path.Combine(Path.GetTempPath(), $"imgproc_{Guid.NewGuid():N}");
                Directory.CreateDirectory(outputDir);

                try
                {
                    _logger.LogInformation($"Converting PDF to images: {pageId}");
                    var imageFiles = await ConvertPdfToImages(localPdfPath, outputDir);

                    if (imageFiles == null || imageFiles.Length == 0)
                    {
                        _logger.LogError($"Failed to convert PDF to images: {pageId}");
                        await UpdatePageInDocuments(revDb, pageId, docIds, p =>
                        {
                            p.pageType = PageImageTypeModel.nonweb;
                            p.processingError = "Failed to convert PDF to images";
                            p.modified = DateTime.Now;
                        });
                        return;
                    }

                    _logger.LogInformation($"[TIMING] PDF→Image conversion completed: {stopwatch.ElapsedMilliseconds}ms (generated {imageFiles.Length} images)");

                    // 6. Upload images to S3
                    _logger.LogInformation($"Uploading {imageFiles.Length} images to S3");
                    await UploadImagesToS3(storage, pageId, imageFiles, workspaceId);
                    _logger.LogInformation($"[TIMING] S3 upload completed: {stopwatch.ElapsedMilliseconds}ms total");

                    // 7. Update page status to processed
                    int imgWidth = 0;
                    int imgHeight = 0;
                    if (imageFiles.Length > 0)
                    {
                        using (var img = System.Drawing.Image.FromFile(imageFiles[0]))
                        {
                            imgWidth = img.Width;
                            imgHeight = img.Height;
                        }
                    }

                    await UpdatePageInDocuments(revDb, pageId, docIds, p =>
                    {
                        p.pageType = null; // null means "web displayable"
                        p.processingError = null;
                        p.modified = DateTime.Now;
                        if (imgWidth > 0) p.width = imgWidth;
                        if (imgHeight > 0) p.height = imgHeight;
                    });
                    _logger.LogInformation($"Page {pageId} successfully processed");

                    // 8. If multi-page PDF, create separate page entries
                    if (imageFiles.Length > 1)
                    {
                        _logger.LogInformation($"Multi-page PDF with {imageFiles.Length} pages. Creating split page entries.");
                        await CreateSplitPageEntries(revDb, pageId, imageFiles, docIds, workspaceId);
                    }

                    _logger.LogInformation($"[SUCCESS] Completed processing page {pageId} in {stopwatch.ElapsedMilliseconds}ms, images: {imageFiles.Length}");
                }
                finally
                {
                    // Cleanup temp files
                    if (Directory.Exists(outputDir))
                    {
                        try
                        {
                            Directory.Delete(outputDir, true);
                        }
                        catch (Exception ex)
                        {
                            _logger.LogWarning($"Failed to cleanup temp directory {outputDir}: {ex.Message}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"[FAILED] Error processing page {pageId}");

                try
                {
                    // Create RevDatabase instance directly for this workspace (no HTTP context needed)
                    var connInfo = new MongoDbService.revDbBase.connectionInfo
                    {
                        connectionString = _configuration.GetSection("mongoDb:connectionString").Value,
                        Database = $"rev_{workspaceId}"
                    };
                    var revDb = new RevDatabase(connInfo, workspaceId);

                    var pageHolders = revDb.getCollection<PageHolderModel>();
                    var pagesInDocs = await pageHolders.findPageinDocsAsync(pageId);

                    if (pagesInDocs != null && pagesInDocs.page != null)
                    {
                        var errorMessage = $"{ex.GetType().Name}: {ex.Message}";
                        if (errorMessage.Length > 500)
                            errorMessage = errorMessage.Substring(0, 497) + "...";

                        await UpdatePageInDocuments(revDb, pageId, pagesInDocs.docIds, p =>
                        {
                            p.pageType = PageImageTypeModel.nonweb;
                            p.processingError = errorMessage;
                            p.proccessingFailureCount++;
                            p.modified = DateTime.Now;
                        });
                    }
                }
                catch (Exception innerEx)
                {
                    _logger.LogError(innerEx, $"[CRITICAL] Failed to update page status after error for page: {pageId}");
                }
            }
        }

        private async Task UpdatePageInDocuments(IRevDatabase revDb, string pageId, string[] docIds, Action<PageImageModel> updateAction)
        {
            var pageHolders = revDb.getCollection<PageHolderModel>();

            foreach (var docId in docIds)
            {
                var filter = Builders<PageHolderModel>.Filter.And(
                    Builders<PageHolderModel>.Filter.Eq(d => d.id, docId),
                    Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.id == pageId)
                );

                var doc = await pageHolders.Find(filter).FirstOrDefaultAsync();
                if (doc != null)
                {
                    var page = doc.pages.FirstOrDefault(p => p.id == pageId);
                    if (page != null)
                    {
                        updateAction(page);

                        var updateBuilder = Builders<PageHolderModel>.Update;
                        var updates = new List<UpdateDefinition<PageHolderModel>>();

                        if (page.pageType != null)
                            updates.Add(updateBuilder.Set("pages.$.pageType", page.pageType));
                        else
                            updates.Add(updateBuilder.Unset("pages.$.pageType"));

                        if (!string.IsNullOrEmpty(page.processingError))
                            updates.Add(updateBuilder.Set("pages.$.processingError", page.processingError));
                        else
                            updates.Add(updateBuilder.Unset("pages.$.processingError"));

                        if (page.width > 0)
                            updates.Add(updateBuilder.Set("pages.$.width", page.width));

                        if (page.height > 0)
                            updates.Add(updateBuilder.Set("pages.$.height", page.height));

                        updates.Add(updateBuilder.Set("pages.$.modified", page.modified));

                        if (page.proccessingFailureCount > 0)
                            updates.Add(updateBuilder.Set("pages.$.proccessingFailureCount", page.proccessingFailureCount));

                        var update = updateBuilder.Combine(updates);
                        await pageHolders.UpdateOneAsync(filter, update);
                    }
                }
            }
        }

        private async Task<string[]> ConvertPdfToImages(string pdfPath, string outputDir)
        {
            string gsPath = FindGhostscript();

            if (gsPath == null)
            {
                _logger.LogError("Ghostscript not found");
                return null;
            }

            _logger.LogInformation($"Using Ghostscript: {gsPath}");

            var outputPattern = Path.Combine(outputDir, "page-%d.png");

            var startInfo = new ProcessStartInfo
            {
                FileName = gsPath,
                Arguments = $"-dNOPAUSE -dBATCH -sDEVICE=png16m -r150 \"-sOutputFile={outputPattern}\" \"{pdfPath}\"",
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                CreateNoWindow = true
            };

            _logger.LogInformation($"Ghostscript command: {gsPath} {startInfo.Arguments}");

            using (var process = new Process { StartInfo = startInfo })
            {
                var outputLines = new List<string>();
                var errorLines = new List<string>();

                process.OutputDataReceived += (sender, e) =>
                {
                    if (e.Data != null)
                    {
                        outputLines.Add(e.Data);
                        _logger.LogDebug($"GS stdout: {e.Data}");
                    }
                };

                process.ErrorDataReceived += (sender, e) =>
                {
                    if (e.Data != null)
                    {
                        errorLines.Add(e.Data);
                        _logger.LogDebug($"GS stderr: {e.Data}");
                    }
                };

                process.Start();
                process.BeginOutputReadLine();
                process.BeginErrorReadLine();

                await process.WaitForExitAsync();

                if (process.ExitCode != 0)
                {
                    _logger.LogError($"Ghostscript exited with code {process.ExitCode}. Errors: {string.Join("\n", errorLines)}");
                    return null;
                }
            }

            var imageFiles = Directory.GetFiles(outputDir, "page-*.png")
                .OrderBy(f => f)
                .ToArray();

            return imageFiles;
        }

        private string FindGhostscript()
        {
            var possiblePaths = new[]
            {
                @"C:\Program Files\gs\gs10.05.1\bin\gswin64c.exe",
                @"C:\Program Files\gs\gs10.04.0\bin\gswin64c.exe",
                @"C:\Program Files\gs\gs10.03.1\bin\gswin64c.exe",
                @"C:\Program Files\gs\gs10.03.0\bin\gswin64c.exe",
                @"C:\Program Files\gs\gs10.02.1\bin\gswin64c.exe",
                @"C:\Program Files\gs\gs10.02.0\bin\gswin64c.exe",
                @"C:\Program Files (x86)\gs\gs10.05.1\bin\gswin32c.exe",
                @"C:\Program Files (x86)\gs\gs10.04.0\bin\gswin32c.exe",
                @"C:\Program Files (x86)\gs\gs10.03.1\bin\gswin32c.exe"
            };

            foreach (var path in possiblePaths)
            {
                if (File.Exists(path))
                    return path;
            }

            var programFiles = @"C:\Program Files\gs";
            if (Directory.Exists(programFiles))
            {
                var gsExe = Directory.GetFiles(programFiles, "gswin64c.exe", SearchOption.AllDirectories).FirstOrDefault();
                if (gsExe != null && File.Exists(gsExe))
                    return gsExe;
            }

            return null;
        }

        private async Task UploadImagesToS3(IRevStorageService storage, string pageId, string[] imageFiles, string workspaceId)
        {
            var storageRoot = _configuration.GetSection("s3Storage:StorageRoot").Value ?? "rev_dev";
            var workspaceStorageRoot = $"{storageRoot}/rev_{workspaceId}";

            // Upload all images in parallel for better performance
            var uploadTasks = imageFiles.Select(async (imagePath, i) =>
            {
                var imageId = i == 0
                    ? pageId.Replace("/original.pdf", "/web.png")
                    : pageId.Replace("/original.pdf", $"/web-{i}.png");

                var fullS3Key = $"{workspaceStorageRoot}/{imageId}";

                _logger.LogDebug($"Uploading image {i + 1}/{imageFiles.Length}: {fullS3Key}");

                using (var stream = File.OpenRead(imagePath))
                {
                    await storage.SaveStreamAsync(fullS3Key, stream);
                }
            });

            await Task.WhenAll(uploadTasks);

            _logger.LogInformation($"Successfully uploaded {imageFiles.Length} images for page: {pageId}");
        }

        private async Task CreateSplitPageEntries(IRevDatabase revDb, string originalPageId, string[] imageFiles, string[] docIds, string workspaceId)
        {
            try
            {
                var pageHolders = revDb.getCollection<PageHolderModel>();

                foreach (var docId in docIds)
                {
                    var filter = Builders<PageHolderModel>.Filter.And(
                        Builders<PageHolderModel>.Filter.Eq(d => d.id, docId),
                        Builders<PageHolderModel>.Filter.ElemMatch(d => d.pages, p => p.id == originalPageId)
                    );

                    var doc = await pageHolders.Find(filter).FirstOrDefaultAsync();
                    if (doc == null)
                    {
                        _logger.LogWarning($"Document {docId} not found when creating split pages");
                        continue;
                    }

                    var originalPage = doc.pages.FirstOrDefault(p => p.id == originalPageId);
                    if (originalPage == null)
                    {
                        _logger.LogWarning($"Original page {originalPageId} not found in document {docId}");
                        continue;
                    }

                    var newPages = new List<PageImageModel>();
                    for (int i = 1; i < imageFiles.Length; i++)
                    {
                        int pageWidth = 0;
                        int pageHeight = 0;
                        using (var img = System.Drawing.Image.FromFile(imageFiles[i]))
                        {
                            pageWidth = img.Width;
                            pageHeight = img.Height;
                        }

                        var newPageId = originalPageId.Replace("/original.pdf", $"/web-{i}.png");

                        var newPage = new PageImageModel
                        {
                            id = newPageId,
                            originalId = originalPageId,
                            originalPageName = $"{originalPage.originalPageName} (Page {i + 1})",
                            orderNumber = originalPage.orderNumber + i,
                            pageType = null,
                            processingError = null,
                            created = DateTime.Now,
                            modified = DateTime.Now,
                            width = pageWidth,
                            height = pageHeight,
                            size = new FileInfo(imageFiles[i]).Length,
                            offLineProcessingOnly = false
                        };

                        newPages.Add(newPage);
                    }

                    if (newPages.Count > 0)
                    {
                        var update = Builders<PageHolderModel>.Update.PushEach(d => d.pages, newPages);
                        var result = await pageHolders.UpdateOneAsync(filter, update);

                        if (result.IsAcknowledged && result.ModifiedCount > 0)
                        {
                            _logger.LogInformation($"Added {newPages.Count} split page entries to document {docId}");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error creating split page entries for {originalPageId}");
            }
        }
    }
}
