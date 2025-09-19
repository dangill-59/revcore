using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.revLogin
{
    public class LicenseLocksModel
    {
        public string userId { get; set; }
        public DateTime created { get; set; }

        public LicenseLocksModel()
        {
            created = DateTime.Now;
        }
    }
}
