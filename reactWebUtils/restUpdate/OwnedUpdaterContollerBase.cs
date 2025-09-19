using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using MongoDB.Driver;
using Microsoft.AspNetCore.Authorization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace restUpdate
{
    public interface IDbObject
    {
        string id { get; set; }
    }

    public interface IHasOwner
    {
        /// <summary>
        /// The users that have permissions to update this object
        /// </summary>
        string[] admins { get; set; }

        /// <summary>
        /// The author of the object
        /// </summary>
        string author { get; set; }

        /// <summary>
        /// if we have edit permission
        /// </summary>
        bool isOwner { get; set; }
    }

    public class HasOwner : HasPropertyBase<IHasOwner>
    {

        readonly protected IMongoDbService _dbService;
        public HasOwner(IMongoDbService dbService)
        {
            _dbService = dbService;
        }


        protected override object fixForWire(IHasOwner value, Controller controller)
        {
            value.isOwner = false;

            var currentIdentity = controller.getUserIdentityAsync(_dbService, true).Result;
            if(null != currentIdentity)
                value.isOwner = null != value.admins && value.admins.Contains(currentIdentity.user_id);

            return value;

        }
    }

    
    [ServiceFilter(typeof(HasOwner))]
    public abstract class OwnedUpdaterContollerBase<T> : Controller where T:IDbObject, IHasOwner 
    {
        readonly protected IMongoDbService _dbService;
        readonly protected string _collectionName;

        public OwnedUpdaterContollerBase(IMongoDbService dbService, string collectionName)
        {
            _dbService = dbService;
            
            _collectionName = collectionName;
            

        }

        [HttpGet("{productId}")]
        public virtual async Task<T> detailsAsync(string productId)
        {
            var collection = _dbService.Database.GetCollection<T>(_collectionName);
            var theProduct = await collection.FindSync<T>(p => p.id == productId).SingleAsync();
            return theProduct;
        }


        [Authorize]
        [HttpDelete("{productId}")]
        public virtual async Task<object> deleteAsycn(string productId)
        {
            var collection = _dbService.Database.GetCollection<T>(_collectionName);

            var existing = await collection.FindSync<T>(p => p.id == productId).SingleAsync();


            await ensureOwnershipAsync(_dbService, existing);

            await collection.DeleteOneAsync(p => p.id == productId);

            return existing;

        }

        protected abstract void ensureObjectComplete(T existingObject, T newObject);

        public virtual async Task ensureOwnershipAsync(IMongoDbService dbService, IHasOwner ownerObject =null)
        {
            if(null != ownerObject)
            {
                var currentUserLogin = await this.getUserIdentityAsync(_dbService);

                if (null == ownerObject.admins || !ownerObject.admins.Contains(currentUserLogin.user_id))
                    throw new reactBase.ExceptionWithCode("admin permission denied");

            }
        }

        /// <summary>
        /// Creates or updates an object
        /// </summary>
        /// <param name="newObject"></param>
        /// <returns>product Id</returns>
        [Authorize]
        [HttpPost]
        public async Task<string> updateAsync([FromBody] T newObject)
        {

            var currentUserLogin = await this.getUserIdentityAsync(_dbService);

            var collection = _dbService.Database.GetCollection<T>(_collectionName);

            T existing = default(T);
            if (!String.IsNullOrWhiteSpace(newObject.id))
            {
                existing = await collection.FindSync<T>(p => p.id == newObject.id).SingleAsync();

                await ensureOwnershipAsync(_dbService, existing);

                newObject.admins = existing.admins;
                newObject.author = existing.author;

            }
            else
            {

                await ensureOwnershipAsync(_dbService);

                newObject.admins = new[] { currentUserLogin.user_id };
                newObject.author = currentUserLogin.user_id;
            }


            ensureObjectComplete(existing,newObject);

            if (!String.IsNullOrWhiteSpace(newObject.id))
            {
                await collection.ReplaceOneAsync<T>(p => p.id == newObject.id, newObject);
            }
            else
            {

                await collection.InsertOneAsync(newObject);
            }

            return newObject.id;
        }



    }
}
