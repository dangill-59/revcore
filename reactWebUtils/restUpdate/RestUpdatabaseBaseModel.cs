using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using restUpdate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace restUpdate
{
    [BsonIgnoreExtraElements]
    public abstract class RestUpdatabaseBaseModel :IDbObject, IHasOwner, gallery.IHasImages
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }

        [JsonIgnore]
        [BsonRequired]
        public string[] admins { get; set; }

        [JsonIgnore]
        [BsonRequired]
        public string author { get; set; }

        [BsonIgnore]
        public bool isOwner { get; set; }

        [BsonIgnore]
        public string primaryImagePath { get; set; }

        [BsonIgnoreIfNull]
        public gallery.ImageWireModel[] images { get; set; }

    }
}
