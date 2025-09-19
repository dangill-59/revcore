using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using components.revLogin;
using System.Security.Claims;
using commonInterfaces.dbDataTypes;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Utilities;

namespace components.support
{
    public class SupportPeopleRequirement : IAuthorizationRequirement { }

    public class SupportPeopleAuthHandler : AuthorizationHandler<SupportPeopleRequirement>
    {

        readonly ILogger _logger;
        readonly commonInterfaces.IRevAuthDatabase _authDb;
        readonly IConfiguration _configuration;

        public SupportPeopleAuthHandler(
            IConfiguration configuration,
            commonInterfaces.IRevAuthDatabase authDb,
            ILogger<SupportPeopleAuthHandler> logger
            )
        {
            _logger = logger;
            _authDb = authDb;
            _configuration = configuration;



        }

        public static bool isUserSiteAdmin(string userId, IConfiguration configuration, ILogger logger)
        {
            var configSection = configuration.GetSection("support");
            var siteAdmins = configSection.GetSection("siteadmins").Get<string[]>();

            if (null == siteAdmins)
                siteAdmins = new string[] { };

            logger.LogInformation($"using support site admins : {string.Join(", ", siteAdmins)}");

            var ret = siteAdmins.Contains(userId);
            if (!ret)
            {
                logger.LogError($"user {userId} is NOT one of support site admins : {string.Join(", ", siteAdmins)}");
            }

            return ret;
        }



        static readonly Task CompletedTask = Task.FromResult(false);

        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context, SupportPeopleRequirement requirement)
        {
            var userId = context.User.currentLoggedonUser();

            if (isUserSiteAdmin(userId, _configuration, _logger))
            {
                context.Succeed(requirement);
                return CompletedTask;

            }

            return CompletedTask;
        }

    }

}