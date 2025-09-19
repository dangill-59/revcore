using commonInterfaces;
using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.permissions
{
    /// <summary>
    /// Used to send out user info for association in a workspace
    /// </summary>
    public class UserEditModel
    {
        /// <summary>
        /// The association of the user with a workspace
        /// </summary>
        public WorkspaceUserModel workspaceUser { get; set; }

        public string email { get; set; }

        [ExportAsOptional]
        public string prefferedName { get; set; }


        [ExportAsOptional]
        public bool isAdmin { get; set; }

        public bool inviteToJoin { get; set; }
    }
}
