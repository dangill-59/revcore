using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace commonInterfaces.dbDataTypes
{
    /// <summary>
    /// Denotes the configurations for a saved workflow
    /// </summary>
    [BsonIgnoreExtraElements]
    public class WorkFlowConfigModel
    {
        public static readonly string COLLECTION_NAME = @"workflowConfigs";

        /// <summary>
        /// We want this to be a human readable workflow Name
        /// </summary>
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        public string name { get; set; }

        /// <summary>
        /// This workflow is trigerred via UI
        /// </summary>
        public bool uiTriggered { get; set; }

        /// <summary>
        /// The roles this saved search is available for
        /// If this is null then This is available for all users
        /// </summary>
        public string[] roles { get; set; }

        /// <summary>
        /// assembly wualified type of the State of this workflow
        /// </summary>
        public string stateType { get; set; }


        /// <summary>
        /// Config variables for the workflow
        /// </summary>
        public Dictionary<string, string> metaData { get; set; }


    }
}
