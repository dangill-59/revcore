using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gallery
{
    public class ImageWireModel
    {
        [JsonIgnore]
        public string imageKey { get; set; }

        [BsonIgnore]
        public string imagePath { get; set; }

        public string name { get; set; }

        public string description { get; set; }

        public int order { get; set; }
    }
}
