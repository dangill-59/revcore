using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.listPages
{
    public class NewPageDirectModel
    {
        public string id { get; set; }

        /// <summary>
        /// the storage key to use OR the presigned upload URL
        /// </summary>
        public string keyForDirectUpload { get; set; }

    }
}
