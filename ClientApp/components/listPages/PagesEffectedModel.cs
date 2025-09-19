using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.listPages
{
    /// <summary>
    /// used as a return type when we change pages. It has the holder plus the litof pages that changed
    /// </summary>
    public class PagesEffectedModel
    {
        public PageHolderModel pageHolder { get; set; }
        public string[] effectedPageIds { get; set; }

        public string completedJobId { get; set; }
    }
}
