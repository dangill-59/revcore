using commonInterfaces.dbDataTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.printApp
{
    public class MailReqModel
    {
        public string[] mailtoList { get; set; }
        public string[] ccList { get; set; }

        public string message { get; set; }
        public string subject { get; set; }

        public string attachmentName { get; set; }

        /// <summary>
        /// The id of the job that would be cretae the pdf to send
        /// </summary>
        [reactBase.ExportAsOptional]
        public PreparePdfresultModel pdfJobResult { get; set; }
    }
}
