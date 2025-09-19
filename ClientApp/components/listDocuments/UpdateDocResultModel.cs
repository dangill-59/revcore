using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.listDocuments
{
    public class UpdateDocResultModel
    {
        public string error { get; set; }
        public DocumentModel document { get; set; }
    }
}
