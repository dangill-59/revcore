using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using MongoDB.Driver;
using Microsoft.AspNetCore.Authorization;

using Microsoft.Extensions.Options;
using System.Net;
using MongoDB.Bson.Serialization.Attributes;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using MongoDB.Bson;

namespace components.login
{

    public class Auth0ApiConnectConfig
    {
        public string client_id { get; set; }
        public string client_secret { get; set; }
        public string audience { get; set; }
        public string endpoint { get; set; }
    }

    public class Auth0Settings
    {
        public string Domain { get; set; }
        public string ApiIdentifier { get; set; }
    }

    [BsonIgnoreExtraElements]
    public class UserProfile<T> : restUpdate.UserIdentity where T : UserInfoModel, new()
    {
        public T userControlledInfo { get; set; }
        /// <summary>
        /// time after which we should check the profile details again
        /// </summary>
        [JsonIgnore]
        public DateTime expiration { get; set; }
    }

    /// <summary>
    /// Used to get authors of Owned object
    /// </summary>
    public class SearchProfileReq
    {
        /// <summary>
        /// The object type blog|storeProduct
        /// </summary>
        public string type { get; set; }

        /// <summary>
        /// list of object Ids
        /// </summary>
        public string[] ids { get; set; }
    }


    public class LoginControllerT<TUserChangableInfo> : LoginControllerT<UserProfile<TUserChangableInfo>, TUserChangableInfo>
            where TUserChangableInfo : UserInfoModel, new()
    {
        public LoginControllerT(restUpdate.IMongoDbService dbService, IOptions<Auth0ApiConnectConfig> config,
                                                                            ILogger<LoginControllerT<UserProfile<TUserChangableInfo>, TUserChangableInfo>> logger)
            : base(dbService, config, logger)
        {
        }
    }


    public class LoginControllerT<TUserRecord, TUserChangableInfo> : Controller
            where TUserRecord : UserProfile<TUserChangableInfo>, new()
            where TUserChangableInfo : UserInfoModel, new()
    {
        readonly restUpdate.IMongoDbService _dbService;
        readonly Auth0ApiConnectConfig _config;
        readonly ILogger<LoginControllerT<TUserRecord, TUserChangableInfo>> _logger;



        public LoginControllerT(restUpdate.IMongoDbService dbService, IOptions<Auth0ApiConnectConfig> config,
                                                                            ILogger<LoginControllerT<TUserRecord, TUserChangableInfo>> logger)
        {
            _dbService = dbService;
            _config = config.Value;
            _logger = logger;
        }

        [BsonIgnoreExtraElements]
        class OwnerWrap : restUpdate.IHasOwner, restUpdate.IDbObject
        {
            public string[] admins { get; set; }

            public string author { get; set; }

            [BsonIgnore]
            public bool isOwner { get; set; }

            [BsonId]
            [BsonRepresentation(BsonType.ObjectId)]
            public string id { get; set; }
        }

        reactBase.Fetch _fetch = null;
        readonly object _fetchCreateLock = new object();

        async Task<TUserRecord> profileFromAuth0Async(string user_id)
        {

            lock (_fetchCreateLock)
            {
                if (null == _fetch)
                {
                    throw new NotImplementedException();

                    /*
                    var fetch = new reactBase.Fetch();
                    var JWT = fetch.PostAsync(new
                    {
                        access_token = ""
                    }, _config.endpoint,
                    new
                    {
                        grant_type = "client_credentials",
                        client_id = _config.client_id,
                        client_secret = _config.client_secret,
                        audience = _config.audience
                    }
                    ).Result;


                    fetch.JWT = JWT.access_token;
                    _fetch = fetch;
					*/
                }

            }

            if (null == _fetch)
                throw new reactBase.ExceptionWithCode("failed to get authorization to fetch user profile");


            var results = await _fetch.GetAsync(new[] { new { nickname = "", picture = "" } }, $"https://scanrev.auth0.com/api/v2/users?q=user_id.raw" + WebUtility.UrlEncode($": \"{user_id}\"") + "&search_engine=v2");

            var t = results.Single();

            return new TUserRecord
            {
                user_id = user_id,
                expiration = DateTime.Now.AddDays(1),
                userControlledInfo = new TUserChangableInfo
                {
                    nickname = t.nickname,
                    picture = t.picture
                }

            };
        }

        /// <summary>
        /// upadates user controlled information
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize]
        public async Task updateMyProfileAsync([FromBody] TUserChangableInfo req)
        {
            //var user_id = this.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier).Value;
            var user = await restUpdate.IdentityExtension.getUserIdentityAsync(this, _dbService);

            var userCollection = _dbService.Database.GetCollection<TUserRecord>(restUpdate.IdentityExtension.IdentityCollection);
            var theUser = await userCollection.FindSync<TUserRecord>(u => u.user_id == user.user_id).SingleOrDefaultAsync();

            theUser.expiration = DateTime.Now.AddDays(1);
            theUser.userControlledInfo = req;

            await userCollection.FindOneAndReplaceAsync(u => u.user_id == theUser.user_id, theUser);

        }

        /// <summary>
        /// I believe we are trying to find who are authors of a object for listing
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost("search")]
        public async Task<Dictionary<string, TUserRecord>> getUserProfilesAsync([FromBody] SearchProfileReq req)
        {
            var collection = _dbService.Database.GetCollection<OwnerWrap>(req.type);

            var idsToFind = req.ids.Distinct();

            var list = await collection.FindSync<OwnerWrap>(o => idsToFind.Contains(o.id)).ToListAsync();

            var grouped = from w in list
                          group w by w.author into g
                          select new { owner = g.Key, ids = g.Select(go => go.id).ToArray() };


            var userCollection = _dbService.Database.GetCollection<TUserRecord>(restUpdate.IdentityExtension.IdentityCollection);

            var owners = await Task.WhenAll(grouped.Select(async oGroup =>
            {
                var theUser = await userCollection.FindSync<TUserRecord>(o => o.user_id == oGroup.owner).SingleOrDefaultAsync();

                if (null == theUser || theUser.expiration < DateTime.Now)
                {
                    var userExists = null != theUser;

                    try
                    {
                        theUser = await profileFromAuth0Async(oGroup.owner);

                        if (userExists)
                            await userCollection.ReplaceOneAsync<TUserRecord>(u => u.user_id == oGroup.owner, theUser);
                    }
                    catch (Exception ex)
                    {
                        _logger.LogWarning(default(EventId), ex, $"user_id: {oGroup.owner} not found in OAuth2");

                        if (null == theUser)
                        {
                            theUser = new TUserRecord
                            {
                                //try lookup in another 6 hours
                                user_id = oGroup.owner,
                                expiration = DateTime.Now.AddHours(6)
                            };
                        }
                    }

                    if (!userExists)
                    {
                        await userCollection.InsertOneAsync(theUser);
                    }



                }

                return new { oGroup.ids, theUser };
            }));

            var ungrouped = owners.SelectMany(o => o.ids.Select(id => new { id, o.theUser }));

            return ungrouped.ToDictionary(k => k.id, v => v.theUser);
        }
    }
}
