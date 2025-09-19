using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.workspace
{
    /// <summary>
    /// sent out when clinet asks for workspace it has access to
    /// </summary>
    [commonInterfaces.ForceTypeImport("LicFeatureModel")]
    public class WorkspaceAccessModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public string revInstance { get; set; }
        public bool isOwner { get; set; }

        /// <summary>
        /// Features and number of licenses for that feature
        /// </summary>
        public Dictionary<string, LicFeatureModel> features { get; set; }


        public WorkspaceAccessModel(WorkspaceModel workspace, string user)
        {
            id = workspace.id;
            name = workspace.name;
            isOwner = workspace.ownerUser == user;
            revInstance = workspace.revInstanceName;
            features = workspace.features;
        }
    }
}
