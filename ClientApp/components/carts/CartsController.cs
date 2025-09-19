using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using components.workspace;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using reactBase;
using restUpdate;
using Utilities;

namespace components.listPages
{
    [Route("api/[controller]")]
    [Authorize]
    //[ServiceFilter(typeof(hasRevImages))]
    [TypeFilter(typeof(hasRevImages))]
    public class CartsController : Controller
    {
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly ILogger _logger;
        readonly IWorkspaceResolver _resolver;


        public CartsController(commonInterfaces.IRevDatabase revDb,
                IWorkspaceResolver resolver,
                ILogger<CartsController> logger
        )
        {
            _revDb = revDb;
            _logger = logger;
            _resolver = resolver;
        }

        [HttpDelete("{cartId}")]
        public async Task DeleteEmptyCart(string cartId)
        {
            var user = this.currentLoggedonUser();

            var cart = _revDb.getQueryable<ScanBatchModel>()
                .Where(c => c.owner == user && c.id == cartId)
                .Single();

            if (null != cart.pages && cart.pages.Count() > 0)
                throw new ExceptionWithCode("Scn batch is not empty");

            var count = await _revDb.DeleteAsync<ScanBatchModel>(new[] { cartId });

            _logger.LogDebug($"DeleteEmptyCart: {cartId} effected {count} records");

        }

        [HttpGet("id/{cartId}")]
        public ScanBatchModel cartbyId(string cartId)
        {
            var user = this.currentLoggedonUser();

            var cart = _revDb.getQueryable<ScanBatchModel>()
                .Where(c => c.owner == user && c.id == cartId)
                .Single();

            return cart;
        }


        [HttpGet]
        public async Task<ScanBatchModel[]> getmyCarts([FromQuery] string name = null)
        {
            return await getmyCartsInternal(name);
        }

        [HttpGet("searchAllusers/{name}")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public async Task<ScanBatchModel[]> searchAllUserCarts(string name)
        {
            return await getmyCartsInternal(name, true);
        }

        public static async Task<ScanBatchModel> EnsurePrimaryCart(commonInterfaces.IRevDatabase _revDb, string user)
        {
            var collection = _revDb.getCollection<ScanBatchModel>();
            var primary = await collection.Find(p => p.isPrimary && p.owner == user).FirstOrDefaultAsync();
            if (null != primary)
            {
                return primary;
            }


            var done = await collection.UpdateOneAsync(p => p.isPrimary && p.owner == user,
                Builders<ScanBatchModel>.Update
                .SetOnInsert(p => p.isPrimary, true)
                .SetOnInsert(p => p.owner, user),
                new UpdateOptions
                {
                    IsUpsert = true
                });

            if (!done.IsAcknowledged)
                throw new Exception("mongo failed to ack");

            return await collection.Find(p => p.isPrimary && p.owner == user).FirstAsync();

        }

        async Task<ScanBatchModel[]> getmyCartsInternal(string name, bool cartsFromAllUsers = false)
        {
            var user = this.currentLoggedonUser();

            var query = _revDb.getQueryable<ScanBatchModel>();

            if (cartsFromAllUsers)
            {
                //we are only here for support 
                //this.ensureWorkspaceAdmin(_resolver);
            }
            else
            {
                query = query.Where(c => c.owner == user || c.authorizedUsers.Contains(user));
            }

            if (null == name)
            {
                query = query.Where(c => c.name == null);
            }
            else
            {
                query = query.Where(c => c.name.StartsWith(name));
            }

            var ret = query.ToArray();

            if (ret.Length == 0)
            {
                if (string.IsNullOrWhiteSpace(name))
                {
                    _logger.LogDebug("user has no primary cart creating one now");
                    return new[] { await EnsurePrimaryCart(_revDb, user) };
                }
            }

            return ret;



        }

        [HttpPost]
        public async Task<ScanBatchModel> createOrUpdateNewCart([FromBody] ScanBatchModel cart)
        {
            var user = this.currentLoggedonUser();

            cart.isPrimary = false;
            cart.owner = user;

            var existing = string.IsNullOrWhiteSpace(cart.id) ?
                    null :
                    _revDb.getQueryable<ScanBatchModel>().Where(c => c.id == cart.id).Single();

            if (null != existing && user != existing.owner /*&&
						null == existing.authorizedUsers && !existing.authorizedUsers.Contains(user)*/)
            {
                throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
            }

            await _revDb.AddorUpdateAsync(cart);

            return cart;
        }

        #region support
        [HttpGet("owner/{cartId}")]
        [Authorize(Policy = "SupportPeopleOnly")]
        public string getCartOwner(string cartId)
        {
            var cart = _revDb.getQueryable<ScanBatchModel>().Single(c => c.id == cartId);
            return cart.owner;
        }
        #endregion

    }
}
