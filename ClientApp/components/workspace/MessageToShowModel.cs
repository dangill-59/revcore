using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.workspace
{
    /// <summary>
    /// These are announcements etc, shown to the users when the get in the system
    /// </summary>
    public class MessageToShowModel
    {

        [JsonConverter(typeof(StringEnumConverter))]
        public MessageToShowTypesModel type { get; set; }


        /// <summary>
        /// message header
        /// </summary>
        public string heading { get; set; }


        /// <summary>
        /// supports HTML tags
        /// </summary>
        public string details { get; set; }
    }
}
