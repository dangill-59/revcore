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
using System.Diagnostics;

namespace components.launchNative
{
    public class AllAccessOrJobRequirement : IAuthorizationRequirement { }

    public class AllAccessOrJobAuthHandler : AuthorizationHandler<AllAccessOrJobRequirement>
    {
        private readonly IHttpContextAccessor _contextAccessor;
        readonly commonInterfaces.IRevAuthDatabase _authDb;

        public AllAccessOrJobAuthHandler(IHttpContextAccessor contextAccessor,
            commonInterfaces.IRevAuthDatabase liteContext,
            IConfiguration configuration)
        {
            _contextAccessor = contextAccessor;
            _authDb = liteContext;

        }

        static readonly Task CompletedTask = Task.FromResult(false);

        protected override Task HandleRequirementAsync(
            AuthorizationHandlerContext context, AllAccessOrJobRequirement requirement)
        {
            if (null == context.User)
                throw new InvalidOperationException("null context.User");

            if (context.User.HasClaim(c => c.Type == ClaimNames.RevAppAccess.ToString()))
            {
                var AllAccess = context.User.FindFirst(
                        c => c.Type == ClaimNames.RevAppAccess.ToString()
                            && c.Value == JWTCreater.RevAccessClaimValues.All.ToString()
                        );

                if (null != AllAccess)
                {
                    context.Succeed(requirement);
                    return CompletedTask;
                }
            }

            if (context.User.HasClaim(c => c.Type == ClaimNames.ForJob.ToString()))
            {
                var jobId = context.User.FindFirst(
                        c => c.Type == ClaimNames.ForJob.ToString()).Value;

                var currentUserLogin = context.User.FindFirst(ClaimTypes.NameIdentifier).Value;


                var job = _authDb.getQueryable<JobContext>(true).Single(j => j.id == jobId);

                if (job.userLogin == currentUserLogin)
                {
                    if (null == _contextAccessor.HttpContext.Request)
                        throw new InvalidOperationException("null _contextAccessor.HttpContext.Request");
                    if (null == _contextAccessor.HttpContext.Request.Path)
                        throw new InvalidOperationException("null _contextAccessor.HttpContext.Request.Path");
                    if (null == _contextAccessor.HttpContext.Request.Method)
                        throw new InvalidOperationException("_contextAccessor.HttpContext.Request.Method");

                    var p = _contextAccessor.HttpContext.Request.Path.ToString().Trim(new[] { '/' });
                    var m = _contextAccessor.HttpContext.Request.Method;

                    if (jobStatusModel.fetched == job.executionStatus.status
                        || jobStatusModel.inprogress == job.executionStatus.status
                        /*&& "POST" == m*/)
                    {
                        var allowedPaths = new[] { $"api/jobCode/Status/{jobId}" };

                        var jobData = job.jobData as JobDataModel;
                        Debug.Assert(null != jobData, "this should be the right class");

                        if (null == jobData)
                        {
                            //dee: I am changing the ay this works. if it break here let me know
                            throw new Exception("error in job data implementation");
                        }

                        if (!String.IsNullOrWhiteSpace(jobData.resultURL))
                        {
                            var resultPath = jobData.resultURL.Split('?')[0];

                            allowedPaths = allowedPaths.Concat(new[] { resultPath.Trim(new[] { '/' }) }).ToArray();
                        }

                        if (null != jobData.permissions)
                            allowedPaths = allowedPaths.Concat(jobData.permissions).ToArray();


                        if (allowedPaths.Contains(p))
                        {
                            context.Succeed(requirement);
                            return CompletedTask;

                        }
                    }

                }

            }

            return CompletedTask;

        }
    }
}
