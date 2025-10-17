using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MimeKit;
using reactBase;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Utilities
{
    public interface IEmailSenderService
    {
        Task sendEmailAsync(string[] mailtoList, string subject, string messageText,
            IReadOnlyDictionary<string, Stream> attachmentStreams = null,
            string[] mailbCcList = null
            );

        Task sendServerEmailAsync(string[] mailtoList, string subject, string messageText,
                    string emailSendername = null,
                    string emailSenderEmail = null,
                    IReadOnlyDictionary<string, Stream> attachmentStreams = null,
                    string[] mailbCcList = null,
                    Action<MailSettingsModel> ensureMailAllowed = null
                    );
    }

    /// <summary>
    /// sends out emails using a workspaces email sender
    /// </summary>
    public class EmailSenderService : IEmailSenderService
    {
        readonly IHttpContextAccessor _contextAccessor;
        readonly commonInterfaces.IRevAuthDatabase _revAuthDb;
        readonly components.workspace.IWorkspaceResolver _resolver;
        private readonly ILogger _logger;
        readonly IConfiguration _configuration;
        readonly commonInterfaces.IRevDatabase _revDb;
        readonly ITaskSignerservice _taskSigner;

        public EmailSenderService(
            IHttpContextAccessor contextAccessor,
            commonInterfaces.IRevAuthDatabase revAuthDb,
            components.workspace.IWorkspaceResolver resolver,
            IConfiguration configuration,
            commonInterfaces.IRevDatabase revDb,
            ITaskSignerservice taskSigner,
            ILogger<EmailSenderService> logger
            )
        {
            _contextAccessor = contextAccessor;
            _revAuthDb = revAuthDb;
            _resolver = resolver;
            _logger = logger;
            _configuration = configuration;
            _revDb = revDb;
            _taskSigner = taskSigner;

        }

        public async Task sendServerEmailAsync(string[] mailtoList, string subject, string messageText,
                    string emailSendername = null,
                    string emailSenderEmail = null,
                    IReadOnlyDictionary<string, Stream> attachmentStreams = null,
                    string[] mailbCcList = null,
                    Action<MailSettingsModel> ensureMailAllowed = null
                    )
        {

            var mailSettings = _resolver.getAuthenticationWorkspace().mailSettings;

            if (null == mailSettings || string.IsNullOrWhiteSpace(mailSettings.smtpHost))
            {
                _logger.LogDebug("No mail settings for workspace using systemwide");
                mailSettings = _configuration.GetSection("mailSettings").Get<MailSettingsModel>();
            }
            else
            {
                ///in workspace we store the password encrypted
                mailSettings.passWordEncrypted = _taskSigner.DecryptData(mailSettings.passWordEncrypted);
            }

            if (null == mailSettings || string.IsNullOrWhiteSpace(mailSettings.smtpHost))
            {
                throw new ExceptionWithCode("sending emails is not configured");
            }

            if (null != ensureMailAllowed)
                ensureMailAllowed(mailSettings);

            var message = new MimeMessage();

            message.To.AddRange(mailtoList.Select(x => new MailboxAddress(x, x)));

            if (null != mailbCcList)
            {
                //message.Bcc.AddRange(mailbCcList.Select(x => new MailboxAddress(x)));
                message.Cc.AddRange(mailbCcList.Select(x => new MailboxAddress(x, x)));
            }

            if (string.IsNullOrWhiteSpace(emailSendername))
                emailSendername = mailSettings.defaultMailFromName;

            if (string.IsNullOrWhiteSpace(emailSenderEmail))
                emailSendername = mailSettings.defaultMailFromEmail;

            var prefferedName = (string.IsNullOrWhiteSpace(emailSendername) ? emailSenderEmail : emailSendername);

            {
                var mailFrom = mailSettings.defaultMailFromEmail;
                if (string.IsNullOrWhiteSpace(mailFrom))
                    mailFrom = mailSettings.userName;

                var mailFromName = mailSettings.defaultMailFromName;
                if (string.IsNullOrWhiteSpace(mailFromName))
                    mailFromName = mailSettings.userName;


                if (mailSettings.mailFromIsLoggedinUser)
                {
                    mailFrom = emailSenderEmail;
                    mailFromName = prefferedName;
                }

                _logger.LogDebug($"User:{emailSendername} sendMail: FROM - {mailFromName}<{mailFrom}>");

                if (string.IsNullOrWhiteSpace(mailFromName) || string.IsNullOrWhiteSpace(mailFrom))
                {
                    throw new ExceptionWithCode("default mail sender address is not configured");
                }

                message.From.Add(new MailboxAddress(mailFromName, mailFrom));
            }


            if (mailSettings.replyToIsLoggedinUser)
            {
                message.ReplyTo.Add(new MailboxAddress(prefferedName, emailSenderEmail));
            }

            message.Subject = subject;

            var builder = new BodyBuilder();
            builder.TextBody = messageText;

            if (null != attachmentStreams)
            {
                foreach (var kv in attachmentStreams)
                {
                    builder.Attachments.Add(kv.Key, kv.Value);
                }
            }


            message.Body = builder.ToMessageBody();

            using (var emailClient = new MailKit.Net.Smtp.SmtpClient())
            {
                try
                {
                    var secOptions = MailKit.Security.SecureSocketOptions.None;
                    if (mailSettings.useTLS)
                        secOptions = mailSettings.needsAuthentication ? MailKit.Security.SecureSocketOptions.StartTlsWhenAvailable : MailKit.Security.SecureSocketOptions.Auto;

                    await emailClient.ConnectAsync(
                            mailSettings.smtpHost,
                            0 == mailSettings.smtpPort ? 25 : mailSettings.smtpPort,
                            secOptions
                            //
                            ); //.ConfigureAwait(false);

                    //emailClient.AuthenticationMechanisms.Remove("XOAUTH2");

                    if (mailSettings.needsAuthentication)
                    {
                        if (string.IsNullOrWhiteSpace(mailSettings.userName))
                            throw new Exception("SMTP username is empty");
                        if (string.IsNullOrWhiteSpace(mailSettings.passWordEncrypted))
                            throw new Exception("SMTP password is empty");

                        await emailClient.AuthenticateAsync(mailSettings.userName, mailSettings.passWordEncrypted);
                    }
                    _logger.LogDebug($"sendig mail {DateTime.Now}");
                    await emailClient.SendAsync(message);

                    _logger.LogInformation($"email sent to {string.Join(",", mailtoList)} {DateTime.Now}");

                    await emailClient.DisconnectAsync(true);
                }
                catch (Exception ex)
                {
                    if (null == mailSettings)
                        throw ex;
                    else if (ex.Message.Contains($"Your message exceeded Google's message size limits"))
                    {
                        throw new ExceptionWithCode($"This email cannot be sent because the attachment size exceeds 20 MB. You can download a 'printable pdf' for this document.");
                    }
                    else
                    {
                        throw new ExceptionWithCode(message: $"Failed to send message :{ex.Message}", innerException: ex);
                    }
                }

            }
        }


        public async Task sendEmailAsync(string[] mailtoList, string subject, string messageText,
                IReadOnlyDictionary<string, Stream> attachmentStreams = null,
                string[] mailbCcList = null
                )
        {
            var userName = _contextAccessor.HttpContext.currentLoggedonUser();
            var dbUser = _revAuthDb.getQueryable<User>().Single(u => u.UserName == userName);
            if (String.IsNullOrWhiteSpace(dbUser.emailaddress))
                throw new ExceptionWithCode(
                    "Your email address is not configured. Please enter your email address in your profile before sending emails",
                    HttpStatusCode.ServiceUnavailable,
                    "email not set"
                    );

            await sendServerEmailAsync(mailtoList, subject, messageText,
                attachmentStreams: attachmentStreams, mailbCcList: mailbCcList,
                emailSendername: dbUser.preferredName, emailSenderEmail: dbUser.emailaddress,
                ensureMailAllowed: mailSettings =>
                {
                    if (null != mailSettings.allowedRoles && mailSettings.allowedRoles.Length > 0)
                    {
                        _logger.LogDebug("allowedRoles exist. Checking");

                        var spcUser = _revDb.getQueryable<WorkspaceUserModel>()
                        .Where(wu => wu.userId == userName)
                        .SingleOrDefault();

                        //we might not have the user here at all
                        var userRoles = null != spcUser ? spcUser.roles : null;

                        if (null == userRoles || null == mailSettings.allowedRoles.FirstOrDefault(r => userRoles.Contains(r)))
                        {
                            throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);
                        }

                    }


                });




        }
    }
}
