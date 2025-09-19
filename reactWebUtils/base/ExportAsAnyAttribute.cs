using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace reactBase
{
    /// <summary>
    /// denotes an attribute to be exported as any by typewriter
    /// </summary>
    [System.AttributeUsage(System.AttributeTargets.Property)] public class ExportAsAnyAttribute : System.Attribute { }

    [System.AttributeUsage(System.AttributeTargets.Property)] public class ExportAsOptionalAttribute : System.Attribute { }

}
