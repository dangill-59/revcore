using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.workspace
{
    public class ExternalUseTokenReqModel
    {
        public DateTime tokenExpirationTime { get; set; }

        /// <summary>
        /// Name of the token
        /// </summary>
        public string name { get; set; }
    }
}
