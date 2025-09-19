using System.Collections.Generic;

namespace components.revLogin
{
    public class StatusMessageModel
    {

        public string Version { get; set; }
        public string RevConnect { get; set; }
        public string signOutUrl { get; set; }

        /// <summary>
        /// Map of openId providers Name -> Authentication bredirect URL
        /// </summary>
        public Dictionary<string, string> openIdProviders { get; set; }



        /// <summary>
        /// if true that new workspaces on this instance needs code
        /// </summary>
        public bool restrictedNewWorkspace { get; set; }

        /// <summary>
        /// Keeps track of what session we are using
        /// </summary>
        public string sessionId { get; set; }

        /// <summary>
        /// If we can authenticate the caller then we set this jwt
        /// </summary>
        public string jwt { get; set; }
    }
}
