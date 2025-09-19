using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.permissions
{
    /// <summary>
    /// used to store role related data in UI
    /// </summary>
    public class MyRolesModel
    {
        /// <summary>
        /// This user is workspace admin
        /// </summary>
        public bool isAdmin { get; set; }

        /// <summary>
        /// Other roles the use has
        /// </summary>
        public string[] roles { get; set; }
    }
}
