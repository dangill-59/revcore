using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.annotations
{
    /// <summary>
    /// Used to post Anootation images
    /// </summary>
    public class AnnoDataModel
    {
        /// <summary>
        /// The Data URL of the annotation Image
        /// </summary>
        public string dataUrl { get; set; }

        /// <summary>
        /// original image data with no annotations
        /// </summary>
        [reactBase.ExportAsOptional]
        public string imageDataUrl { get; set; }
    }
}
