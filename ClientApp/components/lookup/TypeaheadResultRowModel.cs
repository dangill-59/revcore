using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.lookup
{
    public class TypeaheadResultRowModel
    {
        public string id { get; set; }

        public string suggested { get; set; }

        public string withHighLight { get; set; }

        /// <summary>
        /// if true the result is fuzzy match
        /// </summary>
        public bool isFuzzy { get; set; }
    }
}
