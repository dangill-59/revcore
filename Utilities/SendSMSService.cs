using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Twilio;
using Twilio.AspNet.Core;
using Twilio.Rest.Api.V2010.Account;
using Twilio.TwiML;
using Twilio.Types;

namespace Services
{
    public interface ISendSMSService
    {
        Task sendTextMessageAsync(string phoneNumber, string message);
    }

    /// <summary>
    /// sends SMS Messages
    /// </summary>
    public class SendSMSService : ISendSMSService
    {
        class TextMessageConfig
        {
            public string smtpServer { get; set; }
            public int smtpPort { get; set; }

            public string from { get; set; }

            /// <summary>
            /// phone numbers used with this prefix uses mail hog and not real text messages
            /// </summary>
            public string testPrefix { get; set; }

            public TextMessageConfig()
            {
                from = "support@newearth.local";
                smtpPort = 25;
            }

            public void ensureValid()
            {
                if (string.IsNullOrWhiteSpace(smtpServer))
                    throw new Exception("TextCOnfig::smtpServer is null");
            }
        }

        class TwilioConfig
        {
            public string sid { get; set; }
            public string authtoken { get; set; }
            public string servicePhoneNumber { get; set; }
        }

        readonly TextMessageConfig _textConfig = new TextMessageConfig();
        readonly TwilioConfig _twilioCfg = new TwilioConfig();

        readonly ILogger _logger;
        readonly IHttpClientFactory _clientFactory;


        public SendSMSService(
           IHttpClientFactory clientFactory,
           IConfiguration configuration,
           ILogger<SendSMSService> logger
           )
        {
            _logger = logger;

            configuration.Bind("textConfig", _textConfig);
            _textConfig.ensureValid();

            configuration.Bind("twilio", _twilioCfg);

            if (string.IsNullOrWhiteSpace(_twilioCfg.sid))
            {
                _logger.LogDebug("Twilio  not configured");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(_twilioCfg.servicePhoneNumber))
                    throw new Exception("Twilio servicePhoneNumber not configured");
            }


            _clientFactory = clientFactory;


        }

        public async Task sendTextMessageAsync(string phoneNumber, string message)
        {
            _logger.LogDebug($"sendTextMessageAsync Entered -> {phoneNumber}");

            if (message.Length > 160)
            {
                _logger.LogWarning("sendTextMessageAsync called withmessage length =ver 160 characters");
                message = message.Substring(0, 160);
            }

            if (!string.IsNullOrWhiteSpace(_textConfig.testPrefix) && phoneNumber.StartsWith(_textConfig.testPrefix))
            {
                if (string.IsNullOrWhiteSpace(_textConfig.smtpServer))
                    throw new Exception("test Text smtp server not configured");

                using (var client = new SmtpClient(_textConfig.smtpServer, _textConfig.smtpPort))
                {
                    client.UseDefaultCredentials = false;

                    using (var mailMessage = new MailMessage())
                    {
                        mailMessage.From = new MailAddress(_textConfig.from);
                        mailMessage.To.Add($"{phoneNumber.Replace(" ", string.Empty)}@smsServer.local");
                        mailMessage.Body = message;
                        mailMessage.Subject = "sms message";
                        await client.SendMailAsync(mailMessage);
                    }
                }

            }
            else
            {
                if (string.IsNullOrWhiteSpace(_twilioCfg.sid))
                    throw new ExceptionWithCode("sms messaging is not configured");


                TwilioClient.Init(_twilioCfg.sid, _twilioCfg.authtoken);

                try
                {
                    var done = MessageResource.Create(
                        body: message,
                        to: new PhoneNumber(phoneNumber),
                        from: new PhoneNumber(_twilioCfg.servicePhoneNumber));

                    _logger.LogTrace($"sent message id {done.Sid} to -> {phoneNumber} ");

                }
                catch (Exception ex)
                {
                    throw new reactBase.ExceptionWithCode("Failed to send text, try again in a short while please", innerException: ex);
                }


            }

        }
    }


}
