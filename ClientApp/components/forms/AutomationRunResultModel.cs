using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.forms
{
    [commonInterfaces.ForceTypeImport("DetectReqResultModel")]
    public class AutomationRunResultModel
    {
        public DocumentModel[] docs { get; set; }
        public Dictionary<string, DetectReqResultModel[]> detected { get; set; }
        public PageImageModel[] pagesLeft { get; set; }
    }
}
