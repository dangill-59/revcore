using Elasticsearch.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using revElasticSearch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Utilities
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum AuditAction
    {
        signedIn, signedOut,

        workspaceCreated, workspaceDeleted,

        documentCreated, documentUpdated, documentDeleted,

        imageUploaded, imageDeleteRequested,

        searchExecuted,

        subscriptionUpdated

    }

    public interface IRevAudit
    {
        void Log(AuditAction action, string user, string context = null, string workspace = null, Dictionary<string, string> metadata = null);
    }

    /// <summary>
    /// Logs important actions to Audit db
    /// </summary>
    public class Audit : IRevAudit
    {

        readonly bool _auditOn = false;

        //we use monthly Audit instances
        readonly string _ESinstance;

        readonly string _revInstance;
        readonly IRevEsClient _esClient;

        public Audit(
            IConfiguration configuration,
            IRevEsClient esClient
            )
        {

            _ESinstance = configuration.GetValue<string>("audit:esInstance");

            _revInstance = configuration.GetValue<string>("multisite:currentInstance");

            if (string.IsNullOrWhiteSpace(_revInstance))
                _revInstance = "default";


            _auditOn = !string.IsNullOrWhiteSpace(_ESinstance);

            _esClient = esClient;

        }


        public void Log(AuditAction action, string user, string context = null, string workspace = null, Dictionary<string, string> metadata = null)
        {
            if (!_auditOn)
                return;


            //Running as Task as to not block calling context
            Task.Run(async () =>
            {
                try
                {


                    var response = (await _esClient.lowlevelCient.IndexAsync<StringResponse>(
                        $"{_ESinstance.ToLower()}_{DateTime.Now.ToString("yyyy_MM")}", "auditLog", ESClient.ESJsonfromObject(new
                        {
                            action,
                            user,
                            context,
                            workspace,
                            timeStamp = DateTime.Now,
                            revInstance = _revInstance,
                            metadata
                        }))).Body;
                }
                catch (Exception ex)
                {
                    //in case we fail we will libe not muhc to do here
                    var t = ex;
                }
            });
        }
    }
}
