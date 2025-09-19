using Microsoft.Extensions.Configuration;
using Polly;
using Polly.Extensions.Http;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace components.external
{
    public interface IIntegrationsService
    {
        IReadOnlyDictionary<string, ExternalIntegrationModel> availableIntegration { get; }
        commonInterfaces.IExternalIntegration getHelper(string integrationName);
    }


    public class IntegrationsService : IIntegrationsService
    {
        readonly IReadOnlyDictionary<string, ExternalIntegrationModel> _integrations;

        readonly IServiceProvider _provider;

        static readonly ConcurrentDictionary<string, commonInterfaces.IExternalIntegration> _IntegrationHelpers
                                        = new ConcurrentDictionary<string, commonInterfaces.IExternalIntegration>();


        public IntegrationsService(IConfiguration config, IServiceProvider provider)
        {
            var integrations = new Dictionary<string, ExternalIntegrationModel>();

            config.GetSection("deepLinkIntegrations").Bind(integrations);
            _integrations = integrations;
            _provider = provider;
        }

        public static IAsyncPolicy<HttpResponseMessage> GetRetryPolicy()
        {
            return HttpPolicyExtensions
                .HandleTransientHttpError()
                .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
                .WaitAndRetryAsync(6, retryAttempt => TimeSpan.FromSeconds(Math.Pow(2,
                                                                            retryAttempt)));
        }



        public IReadOnlyDictionary<string, ExternalIntegrationModel> availableIntegration { get { return _integrations; } }

        public commonInterfaces.IExternalIntegration getHelper(string integrationName)
        {
            commonInterfaces.IExternalIntegration helper;
            if (_IntegrationHelpers.TryGetValue(integrationName, out helper))
                return helper;

            var integtaionclass = Type.GetType(_integrations[integrationName].handler);
            if (null == integtaionclass)
                throw new Exception($"Type string {_integrations[integrationName].handler} for integration {integrationName} cannot be resolved");

            _IntegrationHelpers[integrationName] = Activator.CreateInstance(integtaionclass,
                new object[] { _provider })
                as commonInterfaces.IExternalIntegration;

            if (null == _IntegrationHelpers[integrationName])
                throw new Exception($"type {integtaionclass.GetType()} cannot be instantialted");

            return _IntegrationHelpers[integrationName];
        }

    }
}
