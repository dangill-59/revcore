using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.external
{
    public class ExternalIntegrationModel
    {
        [JsonIgnore]
        public string handler { get; set; }

        /// <summary>
        /// should be relative to wwwroot/plugins
        /// </summary>
        public string icon { get; set; }

        /// <summary>
        /// map of option names and values that can be chose for this option
        /// </summary>
        public Dictionary<string, string[]> options { get; set; }
    }
}
