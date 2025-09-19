using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.searchView
{
    [commonInterfaces.ForceTypeImport("SearchReqSortModel")]
    public class SearchRequestModel
    {
        public string[] selectedProjects { get; set; }

        /// <summary>
        /// map of search query.
        /// displayName : {[0] main value or from value, [1] to value
        /// </summary>
        public Dictionary<string, string[]> fields { get; set; }

        /// <summary>
        /// map displayName :sortModel
        /// </summary>
        public Dictionary<string, SearchReqSortModel> sortBy { get; set; }

        /// <summary>
        /// if NOT empty do OCR search
        /// </summary>
        public string fullTextOCRTerm { get; set; }
    }
}
