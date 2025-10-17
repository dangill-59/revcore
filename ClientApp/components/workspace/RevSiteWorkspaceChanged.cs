using commonInterfaces.dbDataTypes;
using components.billing;
using MassTransit;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;
using revMQAbstractions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace components.workspace
{
    public class RevSiteWorkspaceChanged : WorkspacesChangedTask
    {
        readonly ISubscriberBillingInfo _billing;

        public RevSiteWorkspaceChanged(
            IRevMQBus mq,
            commonInterfaces.IRevAuthDatabase authDb,
            ISubscriberBillingInfo billing,
            ILogger<WorkspacesChangedTask> logger) : base(mq, authDb, logger)
        {
            _billing = billing;
        }


    }
}
