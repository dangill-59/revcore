using Amazon.S3.Model;
using Amazon.S3.Util;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using MongoDB.Driver.Core.Configuration;
using MailKit.Search;
using Azure.Storage.Sas;
using Azure.Storage;
using DataAnnotationsValidator;

namespace reactBase
{

    public struct StorageMediaDetails
    {
        /// <summary>
        /// The storage Key
        /// </summary>
        public string key { get; set; }

        /// <summary>
        /// Size in bytes
        /// </summary>
        public long size { get; set; }
    }

    /// <summary>
    /// OBSOLETE: Use RevStorage.IStorageService (workspace-agnostic) or RevStorage.IRevStorageService (workspace-scoped) instead.
    /// This interface is kept only for backward compatibility with legacy gallery code.
    /// </summary>
    [Obsolete("Use RevStorage.IStorageService or RevStorage.IRevStorageService instead. This interface will be removed in v5.0.", false)]
    public interface IStorageProvider
    {
        /// <summary>
        /// checks if the key exists, if keys ends with .* extension then check the extensions as well
        /// Throws notfound exception if not exists
        /// </summary>
        /// <param name="publicPathORImageId"></param>
        /// <returns></returns>
        Task<StorageMediaDetails> ensureMediaExistsAsync(string publicPathORImageId);


        /// <summary>
        /// searches media that starts with
        /// </summary>
        /// <param name="publicPathORImageId"></param>
        /// <returns></returns>
        Task<string[]> searchByPrefixAsync(string publicPathORImageId);


        /// <summary>
        /// create a presigned URL that can be GET with no other authorization
        /// </summary>
        /// <param name="publicPathORImageId"></param>
        /// <returns></returns>
        string createPresignedUrl(string publicPathORImageId, bool forUpload = false, string overrideEndPoint = null);

        /// <summary>
        /// Saves a stream and return it's public path
        /// </summary>
        /// <param name="imageId"></param>
        /// <param name="stm"></param>
        /// <returns></returns>
        Task<string> SaveStreamAsync(string imageId, Stream stm);

        /// <summary>
        /// return public path from a key
        /// </summary>
        /// <param name="imageId"></param>
        /// <returns></returns>
        string publicPath(string imageId);


        /// <summary>
        /// returns a Key that can be used for client side direct upload
        /// </summary>
        /// <param name="publicPathORImageId"></param>
        /// <returns></returns>
        string keyForDirectUpload(string publicPathORImageId);


        /// <summary>
        /// get the REV pageId from key used by the storage
        /// </summary>
        /// <param name="storageKey"></param>
        /// <returns></returns>
        string getImagedIdFromStorageKey(string storageKey);


        /// <summary>
        /// return key from public path
        /// </summary>
        /// <param name="publicPathORImageId"></param>
        /// <returns></returns>
        string getKey(string publicPathORImageId);


        /// <summary>
        /// Deeletes an image, input can be key or publicpath
        /// </summary>
        /// <param name="imageId"></param>
        /// <returns></returns>
        Task<String> DeleteAsync(string imageId);


        /// <summary>
        /// Remove all content for this storageroot
        /// </summary>
        /// <returns></returns>
        Task RemoveAllContentsAsync();



        Stream getImageStream(string imageId);

    }

    /// <summary>
    /// OBSOLETE: FileStorageProvider has NotImplementedException on critical methods and is not used in production.
    /// Use RevStorage.WorkspaceAgnosticStorageService instead.
    /// </summary>
    [Obsolete("FileStorageProvider is not fully implemented and not used in production. Will be removed in v5.0.", false)]
    public class FileStorageProvider : IStorageProvider
    {
        /// <summary>
        /// The folder where we store image data
        /// </summary>
        readonly string _imageRoot;

        /// <summary>
        /// The images AP end point
        /// </summary>
        readonly string _pathPrefix;

        readonly string _workSpacePrefix;


        public FileStorageProvider(IConfiguration configuration, string workSpacePrefix = null)
        {
            var section = configuration.GetSection("FileStorage");

            if (string.IsNullOrWhiteSpace(section["StorageRoot"]))
                throw new Exception("FileStorageProvider needs configuration StorageRoot");

            _imageRoot = section["StorageRoot"];

            if (string.IsNullOrWhiteSpace(section["pathPrefix"]))
                throw new Exception("FileStorageProvider needs configuration pathPrefix");
            _pathPrefix = section["pathPrefix"];

            _workSpacePrefix = workSpacePrefix;


            if (null != workSpacePrefix)
            {
                _imageRoot = Path.Combine(_imageRoot, workSpacePrefix);
                _pathPrefix += $"/{workSpacePrefix}";
            }

            //if (!_dirchecked)
            {
                if (!Directory.Exists(_imageRoot))
                    Directory.CreateDirectory(_imageRoot);
                //_dirchecked = true;
            }

        }

        string pathPrefix
        {
            get { return $"/{_pathPrefix}/"; }
        }

        public string getImagedIdFromStorageKey(string storageKey)
        {
            if (null != _workSpacePrefix)
                return storageKey.Replace($"{_workSpacePrefix}/", "");
            return
                storageKey;
        }

        public string keyForDirectUpload(string publicPathOrKey)
        {
            return (null != _workSpacePrefix ? $"{_workSpacePrefix}/" : "") + getKey(publicPathOrKey);
        }

        public string publicPath(string key)
        {
            return $"{pathPrefix}{key}";
        }

        string filePathFromKey(string key)
        {
            return Path.Combine(_imageRoot, key);
        }


        public string getKey(string publicPathORkey)
        {
            var key = publicPathORkey;
            if (key.StartsWith(pathPrefix))
                key = key.Replace(pathPrefix, "");

            return key;
        }

        public Task<string[]> searchByPrefixAsync(string publicPathORImageId)
        {
            throw new NotImplementedException();
        }

        public Task<StorageMediaDetails> ensureMediaExistsAsync(string publicPathORkey)
        {
            var key = getKey(publicPathORkey);
            var resolvedName = filePathFromKey(key);

            if (resolvedName.EndsWith(".*"))
            {

                var folder = System.IO.Path.GetDirectoryName(resolvedName);
                var fileNameOnly = System.IO.Path.GetFileName(resolvedName);
                var found = Directory.GetFiles(@"folder", fileNameOnly);

                if (0 == found.Length)
                    throw new ExceptionWithCode($"media key {publicPathORkey} not found (FileStorage->ensureMediaExistsAsync).");

                var foundExt = System.IO.Path.GetExtension(found.First()).TrimStart('.');

                throw new NotImplementedException("dee: The size here is incorrect. Not fixing it as we are not using file storage for now");

                /*
				return Task.FromResult(new StorageMediaDetails
				{
					key = key.Remove(key.Length - 2) + "." + foundExt,
					size = found.Length
				});
				*/
            }
            else
            {
                if (!File.Exists(resolvedName))
                    throw new ExceptionWithCode($"media key {publicPathORkey} not found (FileStorage->ensureMediaExistsAsync)");
                return Task.FromResult(new StorageMediaDetails
                {
                    key = key,
                    size = new System.IO.FileInfo(resolvedName).Length
                });
            }
        }

        public Stream getImageStream(string publicpath)
        {
            var key = getKey(publicpath);
            var resolvedName = filePathFromKey(key);
            return new FileStream(resolvedName, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);

        }

        public Task RemoveAllContentsAsync()
        {
            throw new NotImplementedException();
        }

        public Task<String> DeleteAsync(string publicpath)
        {
            var key = getKey(publicpath);

            File.Delete(filePathFromKey(key));

            return Task.FromResult(key);


        }

        public async Task<string> SaveStreamAsync(string key, Stream stm)
        {
            var finalPath = filePathFromKey(key);
            var folder = Path.GetDirectoryName(finalPath);
            if (!Directory.Exists(folder))
                Directory.CreateDirectory(folder);

            using (var fs = new FileStream(finalPath, FileMode.Create))
            {
                await stm.CopyToAsync(fs);

                return publicPath(key);
            }
        }

        public string createPresignedUrl(string publicPathORkey, bool forUpload = false, string overrideEndPoint = null)
        {
            throw new NotImplementedException();
        }
    }

    /// <summary>
    /// OBSOLETE: Use RevStorage.WorkspaceAgnosticStorageService for workspace-agnostic operations
    /// or RevStorage.RevStorageService for workspace-scoped operations.
    /// This class is kept only for backward compatibility with legacy gallery code.
    /// </summary>
    [Obsolete("Use RevStorage.WorkspaceAgnosticStorageService or RevStorage.RevStorageService instead. Will be removed in v5.0.", false)]
    public class S3StorageProvider : IStorageProvider
    {
        readonly bool _publicReadable = false;
        readonly string _bucketName;
        readonly string _accessKey;
        readonly string _secretKey;
        readonly string _bucketRegion;
        readonly reactBase.ICacheProvider _cache;
        readonly string _s3customEndpoint;

        readonly bool _s3UsesHttp = false;


        public S3StorageProvider(IConfiguration configuration, reactBase.ICacheProvider cache, string workSpacePrefix = null)
        {
            var section = configuration.GetSection("s3Storage");

            _cache = cache;

            _accessKey = section["accesskey"];
            _bucketName = section["bucket"];
            _bucketRegion = section["region"];
            _secretKey = section["secretkey"];
            _s3customEndpoint = section["customEndpoint"];

            var strs3UsesHttp = section["endPointHttp"];
            if (!string.IsNullOrWhiteSpace(strs3UsesHttp) && strs3UsesHttp.ToLower() == "true")
                _s3UsesHttp = true;

            _storageRoot = section["StorageRoot"];
            if (null != workSpacePrefix)
            {
                _storageRoot = $"{_storageRoot}/{workSpacePrefix}".Trim('/');
            }

            ensureLocalBucket();

        }

        static bool _localBucketChecked = false;
        void ensureLocalBucket()
        {
            if (_localBucketChecked)
                return;


            if (string.IsNullOrWhiteSpace(_s3customEndpoint))
                return;

            if (string.IsNullOrWhiteSpace(_bucketName))
                throw new Exception("s3 bucket name not configured");

            if (string.IsNullOrWhiteSpace(_bucketRegion))
                throw new Exception("s3 bucketRegion name not configured");

            //todo: log
            try
            {
                using (var s3Client = createS3Client())
                {
                    if (AmazonS3Util.DoesS3BucketExistAsync(s3Client, _bucketName).Result)
                        return;

                    var putBucketResponse = s3Client.PutBucketAsync(new PutBucketRequest
                    {
                        BucketName = _bucketName,
                        BucketRegionName = _bucketRegion
                    }).Result;

                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.Assert(false, $"Failed to create local storage bucket {_bucketName}. Please create manually");
                throw ex;
            }

            //we put it here after we have created new bucket if needed
            _localBucketChecked = true;
        }


        readonly string _storageRoot = string.Empty;


        string pathPrefix
        {
            get
            {
                return $"http://{_bucketName}.s3.amazonaws.com/"
                    + (string.IsNullOrWhiteSpace(_storageRoot) ? "" : $"{_storageRoot}/");
            }
        }

        public string keyForDirectUpload(string publicPathOrKey)
        {
            return (string.IsNullOrWhiteSpace(_storageRoot) ? "" : $"{_storageRoot}/") + getKey(publicPathOrKey);
        }

        /// <summary>
        /// get the REV page id from storage absolute key
        /// </summary>
        /// <param name="storageKey"></param>
        /// <returns></returns>
        public string getImagedIdFromStorageKey(string storageKey)
        {
            if (!storageKey.StartsWith(_storageRoot))
                throw new Exception($"not a valid storage key :{storageKey}");

            return storageKey.Replace(_storageRoot + "/", "");
        }

        /// <summary>
        /// return the storageKey from public path or key
        /// </summary>
        /// <param name="publicPathORkey"></param>
        /// <returns></returns>
        public string getKey(string publicPathORkey)
        {
            var key = publicPathORkey;
            if (key.StartsWith(pathPrefix))
                key = key.Replace(pathPrefix, "");

            return key;
        }

        public string publicPath(string key)
        {
            return $"{pathPrefix}{key}";
        }

        public async Task<string[]> searchByPrefixAsync(string publicPathORkey)
        {
            var key = getKey(publicPathORkey);
            using (var s3Client = createS3Client())
            {
                var resolvedName = getStorageKey(key);

                var found = await s3Client.ListObjectsAsync(_bucketName, resolvedName);

                return found.S3Objects.Select(k => getImagedIdFromStorageKey(k.Key)).ToArray();

            }
        }


        public async Task<StorageMediaDetails> ensureMediaExistsAsync(string publicPathORkey)
        {
            var key = getKey(publicPathORkey);
            using (var s3Client = createS3Client())
            {
                var resolvedName = getStorageKey(key);

                if (key.EndsWith(".*"))
                {
                    resolvedName = resolvedName.Remove(resolvedName.Length - 2);
                }

                var found = await s3Client.ListObjectsAsync(_bucketName, resolvedName);

                if (found.S3Objects.Count() == 0)
                    throw new ExceptionWithCode($"media key {publicPathORkey} not found (S3->ensureMediaExistsAsync)");

                var foundObject = found.S3Objects.First();
                var foundKey = key;

                if (key.EndsWith(".*"))
                {
                    var foundExt = System.IO.Path.GetExtension(foundObject.Key).TrimStart('.');
                    foundKey = key.Remove(key.Length - 2) + "." + foundExt;
                }

                return new StorageMediaDetails
                {
                    key = foundKey,
                    size = foundObject.Size
                };

            }
        }

        Amazon.S3.AmazonS3Client createS3Client(string overrideEndPoint = null)
        {
            var awsRegion = Amazon.RegionEndpoint.GetBySystemName(_bucketRegion);
            if (string.IsNullOrWhiteSpace(_s3customEndpoint))
            {
                return new Amazon.S3.AmazonS3Client(_accessKey, _secretKey, awsRegion);
            }
            else
            {
                var r = new Amazon.S3.AmazonS3Config
                {
                    RegionEndpoint = awsRegion,
                    ServiceURL = _s3customEndpoint,
                    ForcePathStyle = true
                };

                if (!string.IsNullOrWhiteSpace(overrideEndPoint))
                    r.ServiceURL = overrideEndPoint;


                return new Amazon.S3.AmazonS3Client(_accessKey, _secretKey, r);
            }

        }




        public string createPresignedUrl(string publicPathORkey, bool forUpload = false, string overrideEndPoint = null)
        {
            var key = getKey(publicPathORkey);
            using (var s3Client = createS3Client(overrideEndPoint))
            {
                var request1 = new GetPreSignedUrlRequest
                {
                    BucketName = _bucketName,
                    Key = getStorageKey(key),
                    Expires = DateTime.Now.AddMinutes(forUpload ? 60 : 5),
                    Verb = forUpload ? Amazon.S3.HttpVerb.PUT : Amazon.S3.HttpVerb.GET,
                };

                if (_s3UsesHttp)
                    request1.Protocol = Amazon.S3.Protocol.HTTP;

                var ret = s3Client.GetPreSignedURL(request1);
                return ret;

            }

        }


        public Stream getImageStream(string publicpath)
        {
            var key = getKey(publicpath);

            using (var s3Client = createS3Client())
            using (var response = s3Client.GetObjectAsync(new GetObjectRequest
            {
                BucketName = _bucketName,
                Key = getStorageKey(key)
            }).Result)
            {
                //the ResponseStream closes when response is disposed to we need to cache it
                var imageStream = _cache.createCacheStream();
                response.ResponseStream.CopyTo(imageStream);


                return imageStream;
            }

        }

        public async Task RemoveAllContentsAsync()
        {
            var request = new ListObjectsRequest
            {
                BucketName = _bucketName,
                Prefix = _storageRoot
            };
            using (var s3Client = createS3Client())
            {
                while (request != null)
                {
                    var response = await s3Client.ListObjectsAsync(request);


                    if (response.S3Objects.Count() > 0)
                    {

                        var deleteResponse = await s3Client.DeleteObjectsAsync(new DeleteObjectsRequest
                        {
                            BucketName = _bucketName,
                            Objects = response.S3Objects.Select(o => new KeyVersion { Key = o.Key }).ToList()
                        });
                    }

                    //we do the length checck cause if s3 is actiing bad we don't want to go in an infinite loop
                    if (response.S3Objects.Count() > 0 && response.IsTruncated)
                    {
                        request.Marker = response.NextMarker;
                    }
                    else
                    {
                        request = null;
                    }
                }
                ;
            }
        }

        public async Task<String> DeleteAsync(string publicpath)
        {
            var key = getKey(publicpath);

            using (var s3Client = createS3Client())
            {
                await s3Client.DeleteObjectAsync(_bucketName, getStorageKey(key));
            }

            return key;

        }

        string getStorageKey(string appKey)
        {
            if (!String.IsNullOrWhiteSpace(_storageRoot))
                appKey = $"{_storageRoot}/{appKey}";

            return appKey;
        }

        public async Task<string> SaveStreamAsync(string key, Stream stm)
        {
            Stream cacheStm = null;
            try
            {
                cacheStm = _cache.createCacheStream();
                await stm.CopyToAsync(cacheStm);

                using (var s3Client = createS3Client())
                {
                    await RevStorage.RevStorageService.savetoS3withRetry(null, s3Client, _cache, cacheStm, getStorageKey(key), _bucketName);



                    return publicPath(key);
                }
            }
            finally
            {
                if (null != cacheStm)
                    cacheStm.Dispose();
            }
        }
    }

    /// <summary>
    /// OBSOLETE: Use RevStorage.WorkspaceAgnosticStorageService for workspace-agnostic operations
    /// or RevStorage.AzureBlobStorageService for workspace-scoped operations.
    /// This class is kept only for backward compatibility with legacy gallery code.
    /// </summary>
    [Obsolete("Use RevStorage.WorkspaceAgnosticStorageService or RevStorage.AzureBlobStorageService instead. Will be removed in v5.0.", false)]
    public class AzureBlobStorageProvider : IStorageProvider
    {
        readonly ICacheProvider _cache;
        readonly string _storageAccountName;
        readonly string _storageAccountKey;
        readonly string _connectionString;
        readonly string _containerName;
        readonly string _storageRoot;

        string pathPrefix
        {
            get
            {
                return $"https://{_storageAccountName}.blob.core.windows.net/{_containerName}/" + (string.IsNullOrWhiteSpace(_storageRoot) ? "" : $"{_storageRoot}/");
            }
        }



        static bool _azureContainerChecked = false;

        BlobServiceClient blobServiceClient;
        BlobContainerClient containerClient;

        //public AzureBlobStorageProvider() { }

        public AzureBlobStorageProvider(IConfiguration configuration, ICacheProvider cache, string workSpacePrefix = null)
        {
            var section = configuration.GetSection("AzureStorage");

            _cache = cache;

            var connectionString = section["ConnectionString"];
            if (!string.IsNullOrEmpty(connectionString))
                _connectionString = connectionString;

            var containerName = section["ContainerName"];
            if (!string.IsNullOrEmpty(containerName))
                _containerName = containerName;

            var storageAccountName = section["StorageAccountName"];
            if (!string.IsNullOrEmpty(storageAccountName))
                _storageAccountName = storageAccountName;

            var storageAccountKey = section["StorageAccountKey"];
            if (!string.IsNullOrEmpty(storageAccountKey))
                _storageAccountKey = storageAccountKey;

            _storageRoot = section["StorageRoot"];
            if (null != workSpacePrefix)
            {
                _storageRoot = $"{_storageRoot}/{workSpacePrefix}".Trim('/');
            }

            ensureAzureConfig();
        }

        void ensureAzureConfig()
        {
            //if (_azureContainerChecked)
            // return;

            try
            {
                blobServiceClient = new BlobServiceClient(_connectionString);
                containerClient = blobServiceClient.GetBlobContainerClient(_containerName);

                if (!containerClient.Exists())
                {
                    containerClient.Create();
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.Assert(false, $"Failed to connect to Azure Blob storage conatiner name {_containerName}. Please check configuration");
                throw ex;
            }

            _azureContainerChecked = true;
        }


        /// <summary>
        /// Generate SAS URI to Access Blob Name using the read permission
        /// </summary>
        /// <param name="blobName">Blob Name</param>
        /// <returns></returns>
        public string GenerateReadBlobSAS(string blobName)
        {
            BlobClient blobClient = containerClient.GetBlobClient(blobName);

            BlobSasBuilder sasBuilder = new BlobSasBuilder
            {
                BlobContainerName = _containerName,
                BlobName = blobName,
                Resource = "b", // "b" represents the blob resource
                StartsOn = DateTimeOffset.UtcNow,
                ExpiresOn = DateTimeOffset.UtcNow.AddMinutes(15),
            };

            sasBuilder.SetPermissions(BlobSasPermissions.Read);
            sasBuilder.IPRange = new SasIPRange(System.Net.IPAddress.None, System.Net.IPAddress.None);

            string sasToken = sasBuilder.ToSasQueryParameters(new StorageSharedKeyCredential(_storageAccountName, _storageAccountKey)).ToString();
            string sasUrl = blobClient.Uri + "?" + sasToken;
            return sasUrl;
        }

        /// <summary>
        /// Generate a Blob Token to be used in order to write a file into the storage
        /// </summary>
        /// <param name="blobName">Blob name</param>
        /// <returns></returns>
        public string GenerateWriteBlobSAS(string blobName)
        {
            BlobClient blobClient = containerClient.GetBlobClient(blobName);
            BlobSasBuilder sasBuilder = new BlobSasBuilder
            {
                BlobContainerName = _containerName,
                BlobName = blobClient.Name,
                Resource = "b",
                StartsOn = DateTimeOffset.UtcNow,
                ExpiresOn = DateTimeOffset.UtcNow.AddHours(1)
            };
            sasBuilder.SetPermissions(BlobSasPermissions.Read | BlobSasPermissions.Write);
            sasBuilder.IPRange = new SasIPRange(System.Net.IPAddress.None, System.Net.IPAddress.None);

            string sasToken = sasBuilder.ToSasQueryParameters(new StorageSharedKeyCredential(_storageAccountName, _storageAccountKey)).ToString();
            string sasUrl = blobClient.Uri + "?" + sasToken;
            return sasUrl;
        }

        public string GetPathPrefixUrl()
        {
            return $"https://{_storageAccountName}.blob.core.windows.net/{_containerName}/" + (string.IsNullOrWhiteSpace(_storageRoot) ? "" : $"{_storageRoot}/");
        }

        /// <summary>
        /// Get an URL to direct upload a file to the Azure Blob storage
        /// </summary>
        /// <param name="publicPathOrKey">Blob Name path</param>
        /// <returns></returns>
        public string keyForDirectUpload(string publicPathOrKey)
        {
            if (!string.IsNullOrWhiteSpace(_storageRoot))
                if (!publicPathOrKey.StartsWith(_storageRoot))
                    return ($"{_storageRoot}/") + getKey(publicPathOrKey);
                else
                    return publicPathOrKey;

            return getKey(publicPathOrKey);
        }

        /// <summary>
        /// get the REV page id from storage absolute key
        /// </summary>
        /// <param name="storageKey"></param>
        /// <returns></returns>
        public string getImagedIdFromStorageKey(string storageKey)
        {
            if (!storageKey.StartsWith(GetPathPrefixUrl()))
                throw new Exception($"not a valid storage key :{storageKey}");

            return storageKey.Replace(GetPathPrefixUrl(), "");
        }

        /// <summary>
        /// return the storageKey from public path or key
        /// </summary>
        /// <param name="publicPathORkey"></param>
        /// <returns></returns>
        /*
        public string getKey(string publicPathORkey)
        {
            var key = publicPathORkey;
            if (key.StartsWith(GetPathPrefixUrl()))
                key = key.Replace(GetPathPrefixUrl(), "");

            return key;
        }*/
        public string getKey(string publicPathORkey)
        {
            var key = publicPathORkey;
            if (key.StartsWith(pathPrefix))
                key = key.Replace(pathPrefix, "");

            return key;
        }

        /*
        public string publicPath(string key)
        {
            return GenerateReadBlobSAS(key);
        }
        */
        public string publicPath(string key)
        {
            return $"{pathPrefix}{key}";
        }

        /// <summary>
        /// Search into a path for a given file
        /// </summary>
        /// <param name="publicPathORkey">Blob name</param>
        /// <returns></returns>
        public async Task<string[]> searchByPrefixAsync(string publicPathORkey)
        {
            var key = getKey(publicPathORkey);
            var resolvedName = getStorageKey(key);
            List<string> matchingBlobNames = new List<string>();

            await foreach (BlobItem blobItem in containerClient.GetBlobsAsync(prefix: resolvedName))
            {
                matchingBlobNames.Add(getImagedIdFromStorageKey(blobItem.Name));
            }

            return matchingBlobNames.ToArray();
        }

        /// <summary>
        /// Search for path or key
        /// </summary>
        /// <param name="publicPathORkey"></param>
        /// <returns></returns>
        /// <exception cref="ExceptionWithCode"></exception>
        public async Task<StorageMediaDetails> ensureMediaExistsAsync(string publicPathORkey)
        {
            var key = getKey(publicPathORkey);
            var resolvedName = getStorageKey(key);

            if (key.EndsWith(".*"))
            {
                resolvedName = resolvedName.Remove(key.Length - 2);
            }
            var found = new List<KeyValuePair<string, long>>();
            await foreach (BlobItem blobItem in containerClient.GetBlobsAsync(prefix: resolvedName))
            {
                found.Add(
                    new KeyValuePair<string, long>(blobItem.Name, blobItem.Properties.ContentLength.GetValueOrDefault())
                );
            }

            if (found.Count == 0)
                throw new ExceptionWithCode($"media key {publicPathORkey} not found (Azure->ensureMediaExistsAsync)");

            var foundObject = found.First();
            var foundKey = key;

            if (foundKey.EndsWith(".*"))
            {
                var foundExt = Path.GetExtension(foundObject.Key).TrimStart('.');
                foundKey = foundKey.Remove(key.Length - 2) + "." + foundExt;
            }

            return new StorageMediaDetails
            {
                key = foundKey,
                size = foundObject.Value
            };
        }

        public string createPresignedUrl(string publicPathORkey, bool forUpload = false, string overrideEndPoint = null)
        {
            var blobName = getKey(publicPathORkey);
            blobName = keyForDirectUpload(blobName);

            string result = string.Empty;
            /*
            if (forUpload)
                result = this.GenerateWriteBlobSAS(blobName);
            else
                result = this.GenerateReadBlobSAS(blobName);
            */
            result = this.GenerateWriteBlobSAS(blobName);

            return result;
        }

        public Stream getImageStream(string publicpath)
        {
            var key = keyForDirectUpload(publicpath);//getKey(publicpath);
            BlobClient blobClient = containerClient.GetBlobClient(key);
            var imageStream = _cache.createCacheStream();
            blobClient.DownloadTo(imageStream);

            return imageStream;
        }

        /// <summary>
        /// Remove all elements on a container
        /// </summary>
        /// <returns></returns>
        public async Task RemoveAllContentsAsync()
        {
            await foreach (BlobItem blobItem in containerClient.GetBlobsAsync())
            {
                BlobClient blobClient = containerClient.GetBlobClient(blobItem.Name);
                await blobClient.DeleteAsync();
            }
        }

        string getStorageKey(string appKey)
        {
            if (!String.IsNullOrWhiteSpace(_storageRoot))
                appKey = $"{_storageRoot}/{appKey}";

            return appKey;
        }

        /// <summary>
        /// Remove a specific file from storage
        /// </summary>
        /// <param name="publicpath"></param>
        /// <returns></returns>
        public async Task<String> DeleteAsync(string publicpath)
        {
            var key = getKey(publicpath);
            BlobClient blobClient = containerClient.GetBlobClient(key);

            if (await blobClient.ExistsAsync())
            {
                await blobClient.DeleteAsync();
            }

            return key;
        }

        /// <summary>
        /// Save stream
        /// </summary>
        /// <param name="key"></param>
        /// <param name="stm"></param>
        /// <returns></returns>
        public async Task<string> SaveStreamAsync(string key, Stream stm)
        {
            var storageKey = keyForDirectUpload(key);
            BlobClient blobClient = containerClient.GetBlobClient(storageKey);

            using (var cacheStm = _cache.createCacheStream())
            {
                await stm.CopyToAsync(cacheStm);

                if (cacheStm.Position != 0 && cacheStm.CanSeek)
                    cacheStm.Seek(0, SeekOrigin.Begin);

                await blobClient.UploadAsync(cacheStm, true);
            }

            return publicPath(key);
        }
    }
}
