using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.listPages
{
    public class ImageReorderReqModel
    {
        public string droppedImageId { get; set; }
        public string targetImageId { get; set; }
    }
}
