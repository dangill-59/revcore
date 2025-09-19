using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace components.workspace
{
    public interface IMessagingService
    {
        Task<MessageToShowModel[]> getMessagesforWorkspace();
    }

    public class MessagingConfig
    {
        public string url { get; set; }
    }

    public class MessagingService : IMessagingService
    {
        readonly IWorkspaceResolver _resolver;
        readonly HttpClient _httpClient;
        readonly MessagingConfig _config = new MessagingConfig();
        private readonly ILogger _logger;

        public MessagingService(IConfiguration configuration, IWorkspaceResolver resolver,
            HttpClient httpClient,
            ILogger<MessagingService> logger)
        {
            _resolver = resolver;
            _httpClient = httpClient;
            _logger = logger;

            configuration.GetSection("Messages").Bind(_config);
        }

        public async Task<MessageToShowModel[]> getMessagesforWorkspace()
        {
            if (string.IsNullOrWhiteSpace(_config.url))
            {
                _logger.LogDebug("config.url is null");
                return new MessageToShowModel[] { };
            }

            var responseString = await _httpClient.GetStringAsync(_config.url);

            var messages = JsonConvert.DeserializeAnonymousType(responseString, new MessageToShowModel[] { });

            return messages;

        }
    }
}
