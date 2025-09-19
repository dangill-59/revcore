using commonInterfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Utilities
{
    /*
	public interface IRevEventPublisher
	{
		IModel getChannel();
		Task publishAsync<T>(string routingKey, string userId, string workspaceId, T payload);
	}
	*/

    public class EventPublisher// :IRevEventPublisher
    {
        public class PageAddedEvent
        {
            public string user { get; set; }
            public string workspacename { get; set; }
            public string docId { get; set; }
            public string[] pageIds { get; set; }
        }

        readonly ILogger _logger;

        readonly IConfiguration _configuration;

        public EventPublisher(
            ILogger<EventPublisher> logger,
            IConfiguration configuration
            )
        {
            _configuration = configuration;
            _logger = logger;
        }

        IConnection _rabbitConnection = null;
        IConnection ensureConnection()
        {
            if (null == _rabbitConnection)
            {
                _logger.LogDebug("creating rabbitMQ connection");

                var hostName = _configuration.GetValue<string>("rabbitMQ:hostname");
                if (string.IsNullOrWhiteSpace(hostName))
                    throw new Exception("RabbitMQ hostname is not configured");

                var user = _configuration.GetValue<string>("rabbitMQ:user");
                if (string.IsNullOrWhiteSpace(user))
                    throw new Exception("RabbitMQ user is not configured");

                var pass = _configuration.GetValue<string>("rabbitMQ:pass");
                if (string.IsNullOrWhiteSpace(pass))
                    throw new Exception("RabbitMQ pass is not configured");

                _logger.LogInformation($"RabbitMQ connection: {hostName}:{user}:{pass}");

                var factory = new ConnectionFactory()
                {
                    HostName = hostName,
                    UserName = user,
                    Password = pass,
                    AutomaticRecoveryEnabled = true
                };

                try
                {
                    _rabbitConnection = factory.CreateConnection();
                }
                catch (Exception ex)
                {
                    _logger.LogCritical(ex, "Failed to connect to RabbitMQ");
                    throw ex;
                }
            }

            return _rabbitConnection;
        }

        public static readonly string EXCHANGENAME = "revUpdates";

        IModel _publishChannel = null;
        async Task ensurePublishChannelAsync()
        {
            if (null == _publishChannel)
            {
                //if another thread already created the channel, we will discard the newly created channel
                Interlocked.CompareExchange(ref _publishChannel, getChannel(), null);

                if (null == _publishChannel)
                {
                    throw new Exception("failed to create channel");
                }

            }

            if (!_publishChannel.IsOpen)
            {
                var closeReason = "";
                if (null != _publishChannel.CloseReason)
                    closeReason = _publishChannel.CloseReason.ToString();
                _logger.LogInformation($"publish channel not open, close reason {closeReason}");

                _publishChannel = null;
                await Task.Delay(TimeSpan.FromSeconds(5));

                await ensurePublishChannelAsync();
            }

        }



        public class RevQEvent<T>
        {
            public string userId { get; set; }
            public string workspaceId { get; set; }
            public T payload { get; set; }
        }

        public async Task publishAsync<T>(string routingKey, string userId, string workspaceId, T payload)
        {
            await ensurePublishChannelAsync();

            var data = JsonConvert.SerializeObject(new RevQEvent<T> { userId = userId, workspaceId = workspaceId, payload = payload });

            var properties = _publishChannel.CreateBasicProperties();
            properties.Persistent = true;

            _publishChannel.BasicPublish(exchange: EXCHANGENAME,
                 routingKey: routingKey,
                 basicProperties: properties,
                 body: Encoding.UTF8.GetBytes(data));

            //_publishChannel.WaitForConfirmsOrDie();

        }



        public IModel getChannel()
        {
            var channel = ensureConnection().CreateModel();
            channel.ExchangeDeclare(exchange: EXCHANGENAME, type: "topic", durable: true);

            /*
			if (withConfim)
			{
				channel.ConfirmSelect();
			}
			*/

            return channel;
        }


    }
}
