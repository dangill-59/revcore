using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace reactWebUtils.login
{
    /// <summary>
    /// read from appsettings config
    /// </summary>
    public class Auth0SettingsModel
    {
        public string ApiIdentifier { get; set; }
        public string Domain { get; set; }

        /// <summary>
        /// BIG security warning, never send this out on wire
        /// </summary>
        [JsonIgnore]
        public string ClientSecret { get; set; }

        /// <summary>
        /// list connections from the applications/settings/connection page carefully choose the 1st column
        /// </summary>
        [JsonIgnore]
        public string[] availableConnections { get; set; }

        /// <summary>
        /// Workspace specific connectin if set
        /// </summary>
        public string useConnection { get; set; }

        /// <summary>
        /// Auth0 doesn't ask for username for new Auth0 tenats unless this is set to TRUE.
        /// We need to revisit this as we upgrade Auth0 from the current v9 to v11
        /// For installs using new test realms turn this to true
        /// </summary>
        public bool ignoreCurrentSession { get; set; }

    }
}
