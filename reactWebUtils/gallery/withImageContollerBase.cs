using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using restUpdate;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using reactBase;

namespace gallery
{

    public interface IHasImages<T> where T : ImageWireModel
    {
        string primaryImagePath { get; set; }

        T[] images { get; set; }
    }

    public interface IHasImages : IHasImages<ImageWireModel>
    {
    }

    public interface ISupportsVideo
    {
        bool isVideo { get; set; }
        string videoURL { get; set; }
    }

    public abstract class ImageTaskBase<T> where T : ImageWireModel
    {
        public IHasImages<T> hasImage { protected get; set; }
        public Func<Task> SaveDelegate { protected get; set; }

        public abstract Task<object> execute(reactBase.IStorageProvider storage, reactBase.ICacheProvider cache, Action<IHasImages<T>> fixDelegate);
    }

    public class DeleteImageTask<T> : ImageTaskBase<T> where T : ImageWireModel
    {
        public string[] ImagePaths { get; }

        public DeleteImageTask(string[] imagePaths)
        {
            ImagePaths = imagePaths;
        }

        public override async Task<object> execute(reactBase.IStorageProvider storage, reactBase.ICacheProvider cache, Action<IHasImages<T>> fixDelegate)
        {
            var imageKeys = await Task.WhenAll(ImagePaths.Select(async p => await storage.DeleteAsync(p)).ToArray());

            hasImage.images = hasImage.images.Where(image => !imageKeys.Contains(image.imageKey)).ToArray();

            await SaveDelegate();

            fixDelegate(hasImage);

            return hasImage.images;
        }
    }

    public class updateImageDetailsTask<T> : ImageTaskBase<T> where T : ImageWireModel
    {
        readonly T[] _topatch;

        public updateImageDetailsTask(T[] topatch)
        {
            _topatch = topatch;
        }

        public override async Task<object> execute(reactBase.IStorageProvider storage, reactBase.ICacheProvider cache, Action<IHasImages<T>> fixDelegate)
        {
            if (null == hasImage.images || hasImage.images.Count() == 0)
                return false;

            var keys = _topatch.ToDictionary(k => storage.getKey(k.imagePath), v => v);


            hasImage.images = hasImage.images.Select(image =>
            {
                if (keys.ContainsKey(image.imageKey))
                {
                    keys[image.imageKey].imageKey = image.imageKey;
                    return keys[image.imageKey];
                }
                else
                {
                    return image;
                }
            }).ToArray();



            await SaveDelegate();


            return true;
        }
    }

    public class AddImageTask<T> : ImageTaskBase<T> where T : ImageWireModel, new()
    {
        public IEnumerable<MultiPartFile> NewFiles { get; }

        public string ProductIdImageFolder { get; }

        public int addOrder { get; }

        public AddImageTask(string productIdImageFolder, IEnumerable<MultiPartFile> newFiles, int order)
        {
            NewFiles = newFiles;
            ProductIdImageFolder = productIdImageFolder;
            addOrder = order;
        }

        static readonly string[] _SupportedImageTypes = new[] { "png", "jpg", "jpeg" };

        public override async Task<object> execute(reactBase.IStorageProvider storage, reactBase.ICacheProvider cache, Action<IHasImages<T>> fixDelegate)
        {
            var existingImages = new T[] { };
            if (null != hasImage && null != hasImage.images)
            {
                existingImages = hasImage.images;
            }

            var productImages = new List<T>(existingImages);
            var publicPaths = new List<string>();


            var order = addOrder;
            foreach (var file in NewFiles)
            {
                if (null == file.ContentType)
                    throw new ExceptionWithCode("ContentType is not set");

                var splitted = file.ContentType.Split(new[] { '/' });
                if (splitted.Count() < 2 || splitted[0] != "image" || !_SupportedImageTypes.Contains(splitted[1]))
                    throw new ExceptionWithCode($"Contenttype {file.ContentType} not supported. Please choose png or jpeg images");

                var imageKey = $"{ProductIdImageFolder}/{Guid.NewGuid()}/original.{splitted[1]}";

                using (var cacheStm = cache.createCacheStream())
                {
                    await file.uploadStream.CopyToAsync(cacheStm);
                    cacheStm.Seek(0, SeekOrigin.Begin);
                    publicPaths.Add(await storage.SaveStreamAsync(imageKey, cacheStm));
                }

                var newT = new T();
                newT.imageKey = imageKey;
                newT.order = order++;

                productImages.Add(newT);
            }

            hasImage.images = productImages.ToArray();
            await SaveDelegate();

            return publicPaths.ToArray();

        }
    }

    public class HasImages : HasImages<ImageWireModel>
    {
        public HasImages(IMongoDbService dbService, reactBase.IStorageProvider storage, reactBase.ICacheProvider cache)
            : base(dbService, storage, cache)
        {
        }
    }

    public class HasImages<T> : HasPropertyBase<IHasImages<T>> where T : ImageWireModel
    {
        readonly reactBase.IStorageProvider _storage;
        readonly reactBase.ICacheProvider _cache;
        readonly IMongoDbService _dbService;

        public HasImages(IMongoDbService dbService, reactBase.IStorageProvider storage, reactBase.ICacheProvider cache)
        {
            _storage = storage;
            _cache = cache;
            _dbService = dbService;
        }




        protected override Dictionary<Type, Func<object, Task<object>>> OtherTasks
        {
            get
            {
                return new Dictionary<Type, Func<object, Task<object>>>
                {
                    {
                        typeof(ImageTaskBase<T>),async o=>
                        {
                            var imageTaskBase = ((ImageTaskBase<T>)o);

                            return await imageTaskBase.execute(_storage,_cache,(f)=>fixForWire(f));

                        }
                    }
                };

            }
        }

        protected override object fixForWire(IHasImages<T> input, Controller controller = null)
        {
            if (null == input || null == input.images || input.images.Count() == 0)
                return input;

            foreach (var image in input.images)
            {

                var isVideo = false;
                if (image is ISupportsVideo)
                {
                    isVideo = ((ISupportsVideo)image).isVideo;
                }

                image.imagePath = isVideo ? image.imageKey : _storage.publicPath(image.imageKey);
            }

            input.primaryImagePath = input.images.First().imagePath;

            return input;
        }


    }

    public abstract class withImageContollerBase<T> : withImageContollerBase<T, ImageWireModel> where T : class, IDbObject, IHasOwner, IHasImages<ImageWireModel>
    {
        public withImageContollerBase(IMongoDbService dbService, IMultipartRequestHandler multipartHandler, string collectionName, string imageFolder)
            : base(dbService, multipartHandler, collectionName, imageFolder)
        {
        }
    }


    public abstract class withImageContollerBase<T, TImage> : restUpdate.OwnedUpdaterContollerBase<T> where T : class, IDbObject, IHasOwner, IHasImages<TImage> where TImage : ImageWireModel, new()
    {

        readonly protected string _imageFolder;
        readonly protected IMultipartRequestHandler _multipartHandler;

        public withImageContollerBase(IMongoDbService dbService, IMultipartRequestHandler multipartHandler, string collectionName, string imageFolder) : base(dbService, collectionName)
        {
            _imageFolder = imageFolder;
            _multipartHandler = multipartHandler;

        }

        protected override void ensureObjectComplete(T existingObject, T newObject)
        {
            if (null != existingObject)
            {
                if (null != newObject.images && null != existingObject.images)
                {
                    var keys = existingObject.images.Select(i => i.imageKey).ToArray();

                    foreach (var image in newObject.images)
                    {
                        var isVideo = false;
                        if (image is ISupportsVideo)
                        {
                            isVideo = ((ISupportsVideo)image).isVideo;
                        }

                        if (isVideo)
                        {
                            image.imageKey = image.imagePath;
                        }
                        else
                        {
                            image.imageKey = keys.Single(k => image.imagePath.Contains(k));
                        }
                    }

                    /* we donot want to delete images here. if the Single fails then we nshow error
                     newObject.images = newObject.images.Where(image => null != image.imageKey).ToArray();
                     */

                }
                else
                {
                    newObject.images = existingObject.images;
                }



            }

        }

        async Task<T1> initTask<T1>(string productId, T1 theTask) where T1 : ImageTaskBase<TImage>
        {
            var collection = _dbService.Database.GetCollection<T>(_collectionName);
            var existing = await collection.FindSync<T>(p => p.id == productId).SingleAsync();

            await ensureOwnershipAsync(_dbService, existing);

            theTask.hasImage = existing;
            theTask.SaveDelegate = async () =>
            {
                await collection.ReplaceOneAsync<T>(p => p.id == existing.id, existing);
            };

            return theTask;
        }



        [Authorize]
        [HttpDelete("images/{productId}")]
        public async Task<DeleteImageTask<TImage>> DeleteImages(string productId, [FromBody] string[] imagePaths)
        {
            return await initTask(productId, new DeleteImageTask<TImage>(imagePaths));
        }

        /// <summary>
        /// Adds images to a product. The images are sent as mulipart STREAM
        /// </summary>
        /// <param name="productId"></param>
        /// <returns>new images public path</returns>
        [Authorize]
        [HttpPost("images/{productId}")]
        [DisableFormValueModelBinding]
        public async Task<AddImageTask<TImage>> AddImages(string productId, [FromQuery] int order = 65000)
        {
            return await initTask(productId, new AddImageTask<TImage>($"{_imageFolder}/{productId}", _multipartHandler.fromMultipart(this), order));
        }


        /// <summary>
        /// current;y not used and tested in bahar's site
        /// </summary>
        /// <param name="productId"></param>
        /// <param name="req"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPatch("images/{productId}")]
        public async Task<updateImageDetailsTask<TImage>> updateImagedetail(string productId, [FromBody] TImage[] req)
        {
            return await initTask(productId, new updateImageDetailsTask<TImage>(req));
        }

        public override async Task<object> deleteAsycn(string productId)
        {
            var existing = (await base.deleteAsycn(productId)) as T;

            var imagePaths = null == existing.images ? new string[] { } : existing.images.Select(i => i.imageKey).ToArray();

            return await initTask(productId, new DeleteImageTask<TImage>(imagePaths));
        }

    }
}
