using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.searchView
{
    public class SearchResultsModel
    {
        public DocumentModel[] documents { get; set; }
        public long totalCount { get; set; }
    }
}
