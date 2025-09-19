using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.lookup
{
    public class TypeaheadResultsModel
    {
        public long total { get; set; }
        public TypeaheadResultRowModel[] hits { get; set; }
    }
}
