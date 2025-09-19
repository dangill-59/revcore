using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.AspNetCore.Authorization;

using System.Collections.Generic;
using Microsoft.Extensions.Options;
using System.Transactions;
using System.Security.Claims;
using Utilities;
using components.revLogin;
using commonInterfaces.dbDataTypes;
using System.Threading.Tasks;
using reactBase;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Diagnostics;
using Microsoft.Extensions.Configuration;

namespace components.launchNative
{
    [Route("api/[controller]")]
    //[Authorize(Policy = "AllAccessOrJob")]
    [Authorize]
    public class jobCodeController : Controller
    {

        readonly commonInterfaces.IRevAuthDatabase _authDb;
        private readonly ITimeServer _timeSvr;
        readonly IJWTCreater _jwtCreater;

        private static DateTime _lastCleaupTime = DateTime.MinValue;

        readonly IHubContext<components.messaging.RevChatHub> _hub;
        private readonly ILogger _logger;

        readonly IDistributedLockService _lockService;
        IConfiguration _configuration;


        public jobCodeController(commonInterfaces.IRevAuthDatabase revDb,
            IJWTCreater jwtCreater,
            ITimeServer timeSvr,
            IDistributedLockService lockService,
            IHubContext<components.messaging.RevChatHub> hub,
            ILogger<jobCodeController> logger, IConfiguration configuration
            )
        {
            _lockService = lockService;
            _authDb = revDb;
            _jwtCreater = jwtCreater;
            _timeSvr = timeSvr;
            _logger = logger;
            _hub = hub;
            _configuration = configuration;
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (_timeSvr.currentTime > _lastCleaupTime.AddHours(1))
                {
                    try
                    {
                        CleanExpiredJobsAsync(_timeSvr.currentTime).Wait();
                        _lastCleaupTime = DateTime.Now;
                    }
                    catch { }
                }
            }
        }

        async Task CleanExpiredJobsAsync(DateTime expirationTime)
        {
            var toDelele = _authDb.getQueryable<JobContext>(true)
                    .Where(j => j.expiration <= expirationTime)
                    .Select(j => j.id)
                    .ToArray();

            await _authDb.DeleteAsync<JobContext>(toDelele);
        }

        JobContext FromId(string id, bool checkOwnership = true)
        {
            var job = _authDb.getQueryable<JobContext>(true).Single(j => j.id == id);

            if (checkOwnership)
            {
                var user = this.currentLoggedonUser();
                if (job.userLogin != user)
                    throw new ExceptionWithCode("invalid job ownership");
            }

            return job;
        }

        /// <summary>
        /// update JOB status, called by Native Client to tell everyone where it is at
        /// </summary>
        /// <param name="jobIdStr"></param>
        /// <param name="req"></param>
        [HttpPost("Status/{jobId}")]
        public Task UpdateStatus(String jobId, [FromBody] JobExecutionStatusModel req)
        {
            return UpdateStatusInternal(jobId, req, true);
        }



        async Task UpdateStatusInternal(String jobId, JobExecutionStatusModel req, bool checkOwnerShip)
        {

            _logger.LogDebug($"UpdateStatus :{jobId} :{JsonConvert.SerializeObject(req)}");
            using (var withLock = await _lockService.withLock(() => Task.FromResult(FromId(jobId, checkOwnerShip))))
            {
                var job = withLock.lockedObject;
                job.executionStatus = req;
                await _authDb.AddorUpdateAsync(job);


                _logger.LogDebug($"UpdateStatus :{jobId} pushing event to user:{job.userLogin}");

                //returns the same as [HttpGet("Status/{jobId}")] method
                var hubUser = _hub.Clients.User(job.userLogin);
                if (null != hubUser)
                    await hubUser.SendAsync("jobStatusUpdated", job.executionStatus);
                //await _hub.Clients.All.SendAsync("jobStatusUpdated", job);
            }

        }

        /// <summary>
        /// get current job status
        /// </summary>
        /// <param name="jobIdStr"></param>
        /// <returns></returns>
        [HttpGet("Status/{jobId}")]
        public JobExecutionStatusModel Status(String jobId)
        {
            var job = FromId(jobId);
            return job.executionStatus;
        }



        /// <summary>
        /// called by client to fetch a job, allows annynomous access. so that the external client can get the job
        /// </summary>
        /// <param name="jobIdStr"></param>
        /// <param name="clientVersion"></param>
        /// <returns></returns>
        [HttpGet("{jobId}")]
        [AllowAnonymous]
        public async Task<JobDataWithTokenModel> get(String jobId, [FromQuery] String clientVersion)
        {
            _logger.LogDebug($"GET :JobId:{jobId} called");

            if (!String.IsNullOrWhiteSpace(clientVersion))
            {
                var verAssembly = typeof(commonInterfaces.LivesInCommonInterfaces).Assembly.GetName().Version;

                var clVer = Version.Parse(clientVersion);
                if (clVer.Major != verAssembly.Major
                    || clVer.Build != verAssembly.Build
                    || clVer.Minor != verAssembly.Minor)
                {
                    throw new ExceptionWithCode($"Version mismatch: The app version {clVer} is not compatible with the current REV version {verAssembly}. Please reinstall/update the native client");
                }
            }

            var job = FromId(jobId, false);


            if (jobStatusModel.created != job.executionStatus.status)
                throw new ExceptionWithCode("The task is already assigned");

            job.executionStatus.status = jobStatusModel.fetched;
            await UpdateStatusInternal(job.id, job.executionStatus, false);

            var jobData = job.jobData as JobDataModel;
            Debug.Assert(null != jobData);

            return new JobDataWithTokenModel
            {
                jobData = jobData,
                JWT = _jwtCreater.create(
                        location: this.clientLocation(),
                        Login: job.userLogin,
                        requestedClaims: new[] { new KeyValuePair<ClaimNames, string>
                        (ClaimNames.ForJob, jobId.ToString())})
            };

        }

        /// <summary>
        /// Create a new Job
        /// </summary>
        /// <param name="req"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<newNativeJobModel> create([FromBody] JobDataModel req)
        {
            if (null == req)
                throw new ExceptionWithCode("job request is null");

            var user = this.currentLoggedonUser();

            var wkSpcName = this.Request.Headers["workspace"].FirstOrDefault();

            //bit of a trick. result urls is hostless but uribuilder needs host
            var builder = new UriBuilder($"http://localhost{req.resultURL}");
            builder.Query += $"workspace={wkSpcName}";
            req.resultURL = builder.Uri.ToString().Replace("http://localhost/", "");

            var newJob = new JobContext
            {
                userLogin = user,
                expiration = DateTime.Now.AddDays(1),
                jobData = req,
            };


            newJob = await _authDb.AddorUpdateAsync(newJob);

            var origin = this.originFromURL("api/jobCode", _logger, _configuration["overrideUrlScheme"]);
            _logger.LogDebug($"url to download native app {origin}");
            return new newNativeJobModel
            {
                jobCode = newJob.id,
                origin = this.originFromURL("api/jobCode", _logger, _configuration["overrideUrlScheme"])

            };


        }

    }
}
