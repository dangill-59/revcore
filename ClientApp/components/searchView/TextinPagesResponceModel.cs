using commonInterfaces;
using revElasticSearch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.searchView
{
    public class TextinPagesResponceModel
    {
        public FullTextOCRBlockVerticeModel[] boundingBox { get; set; }
        public string[] highlights { get; set; }
    }
}
