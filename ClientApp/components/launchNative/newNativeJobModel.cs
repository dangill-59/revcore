using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.launchNative
{
    public class newNativeJobModel
    {
        /// <summary>
        /// The code for the new job
        /// </summary>
        public string jobCode { get; set; }

        /// <summary>
        /// whihc server this job code originated in
        /// </summary>
        public string origin { get; set; }
    }
}
