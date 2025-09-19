using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using Newtonsoft.Json;
using MongoDB.Bson;

namespace restUpdate
{
    [BsonIgnoreExtraElements]
    public class UserIdentity
    {
        /// <summary>
        /// Unique ID created with id
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string user_id { get; set; }

        //used for establishing identities
        [JsonIgnore]
        public string[] idenitities { get; set; }

        [BsonIgnore]
        public string[] roleClaims { get; set; }
    }


    public static class IdentityExtension
    {
        public static readonly string IdentityCollection = "userIdentities";


        public static async Task<UserIdentity> getUserIdentityAsync(this Controller controller, IMongoDbService dbService, bool returnNullifNotAuthenticated = false)
        {
            string userAuthId = null;

            if (null != controller && controller.User.Identity.IsAuthenticated)
            {
                var nameClaim = controller.User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
                if (null != nameClaim)
                    userAuthId = nameClaim.Value;

                if (String.IsNullOrWhiteSpace(userAuthId))
                    userAuthId = ((System.Security.Claims.ClaimsIdentity)(controller.User.Identity)).Name;
            }

            if (null == userAuthId)
            {
                if (returnNullifNotAuthenticated)
                    return null;
                else
                    throw new reactBase.ExceptionWithCode("user not authenticated", System.Net.HttpStatusCode.Unauthorized);

            }


            var userCollection = dbService.Database.GetCollection<UserIdentity>(IdentityCollection);

            var update = Builders<UserIdentity>.Update.SetOnInsert(u => u.idenitities, new[] { userAuthId });
            var options = new FindOneAndUpdateOptions<UserIdentity> { ReturnDocument = ReturnDocument.After, IsUpsert = true };
            var filter = Builders<UserIdentity>.Filter.Where(u => u.idenitities.Contains(userAuthId));

            var user = await userCollection.FindOneAndUpdateAsync(filter, update, options);

            /*

            var user = await userCollection.FindSync<UserIdentity>(i => i.idenitities.Contains(userAuthId)).SingleOrDefaultAsync();

            if (null == user)
            {
                user = new UserIdentity
                {
                   // user_id = Guid.NewGuid().ToString(),
                    idenitities = new[] { userAuthId }
                };

                await userCollection.InsertOneAsync(user);
            }
            */

            user.roleClaims = controller.User.Claims.Where(c => c.Type == "https://mybiz/roles").Select(c => c.Value).ToArray();

            return user;
        }


    }

    public interface IFixSSRState
    {
        void fixObject(ObjectResult result, Controller controller);
    }

    public abstract class HasPropertyBase<I> : IActionFilter, IFixSSRState
    {

        /// <summary>
        /// Gives derived classes a chance to mutate the action result object to be fit for wire transfer
        /// </summary>
        /// <param name="value"></param>
        /// <param name="controller"></param>
        /// <returns></returns>
        protected abstract object fixForWire(I value, Controller controller);

        protected virtual void FixForWireOtherTypes(object value, Controller controller) { }


        protected virtual Dictionary<Type, Func<object, Task<object>>> OtherTasks { get { return null; } }


        public void fixObject(ObjectResult result, Controller controller)
        {
            if (null == result || null == result.Value)
                return;

            if (result.Value is I)
            {
                result.Value = fixForWire((I)result.Value, controller);
            }
            else if (result.Value is IEnumerable<I>)
            {
                result.Value = ((IEnumerable<I>)result.Value).Select(r => fixForWire((I)r, controller));
            }
            else
            {
                FixForWireOtherTypes(result.Value, controller);

                if (null != OtherTasks)
                {
                    foreach (var kv in OtherTasks)
                    {
                        if (kv.Key.IsAssignableFrom(result.Value.GetType()))
                        {
                            var newRes = kv.Value(result.Value).Result;

                            if (null != newRes)
                                result.Value = newRes;
                            break;
                        }
                    }
                }
            }
        }


        public void OnActionExecuted(ActionExecutedContext context)
        {
            var result = context.Result as ObjectResult;

            fixObject(result, context.Controller as Controller);

        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            //not Needed
        }
    }
}
