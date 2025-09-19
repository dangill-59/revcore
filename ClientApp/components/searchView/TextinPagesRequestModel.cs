using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.searchView
{
    /// <summary>
    /// Used to request pages with OCT text in a document
    /// </summary>
    public class TextinPagesRequestModel
    {
        public string docId { get; set; }
        public string ocrTextTerm { get; set; }
    }
}
