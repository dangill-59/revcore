using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Org.BouncyCastle.Asn1.X509.Qualified;

//https://damienbod.com/2017/12/05/sending-direct-messages-using-signalr-with-asp-net-core-and-angular/

namespace components.messaging
{
    [Authorize]
    public class RevChatHub : Hub
    {
        private readonly ILogger _logger;

        public RevChatHub(
            ILogger<RevChatHub> logger
            )
        {
            _logger = logger;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            _logger.LogDebug($"OnConnectedAsync: {Context.UserIdentifier}");
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);

            if (null != exception)
            {
                _logger.LogError(exception, $"OnDisconnectedAsync: {Context.UserIdentifier} has exception");
            }

            _logger.LogDebug($"OnDisconnectedAsync: {Context.UserIdentifier}");
        }

        /*
		public async Task SendNativeTalk(string user, string message)
		{
			await Clients.All.SendAsync("jobStatusUpdated", user, message);
		}
		*/
    }

    public class UserImService : workspace.IUserIMService
    {
        readonly IHubContext<components.messaging.RevChatHub> _hub;
        public UserImService(IHubContext<messaging.RevChatHub> hub)
        {
            _hub = hub;
        }

        public async Task SendAsync<T>(string userId, T message)
        {
            var hubUser = _hub.Clients.User(userId);
            if (null == hubUser)
                return;

            if (message is listPages.PagesEffectedModel)
            {
                await hubUser.SendAsync("pagesUpdated", message);
            }
        }
    }
}
