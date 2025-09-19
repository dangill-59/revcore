using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.searchView
{
    public class FullTextHighLightsReqModel
    {
        public string[] docIds { get; set; }
        public string fullTextTerm { get; set; }
    }
}
