using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Text;

namespace components.searchView
{
    [BsonIgnoreExtraElements]
    public class SavedSearchModel
    {
        /// <summary>
        /// Unique name for this saved search
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string id { get; set; }

        /// <summary>
        /// TODO: change this to be roles.. it's stupid to restrict to users
        /// The userIds of the users this saved search is available for
        /// </summary>
        public string[] userIds { get; set; }

        public SearchRequestModel searchReq { get; set; }

    }
}
