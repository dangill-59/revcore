using Amazon.Route53;
using Amazon.Route53.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Utilities
{
    public interface ICustomDomainMgr
    {
        Task updateCustomDomainAsync(string domain = null, string cname = null, string removeDomain = null);
        Task<bool> isDomainTakenAsync(string domain);

        bool customRoutingAvavilable { get; }
    }



    public class Route53DomainManager : ICustomDomainMgr
    {
        readonly string _accessKey;
        readonly string _secretKey;

        readonly string _hostedZoneId;

        readonly ILogger _logger;

        public Route53DomainManager(
            IConfiguration config,
            ILogger<Route53DomainManager> logger)
        {
            _logger = logger;
            _secretKey = config["s3Storage:secretkey"];
            _accessKey = config["s3Storage:accesskey"];


            _hostedZoneId = config["multisite:HostedZoneId"];
            if (string.IsNullOrWhiteSpace(_hostedZoneId))
            {
                _hostedZoneId = null;
                _logger.LogDebug("Route53DomainManager HostedZoneId is empty");
                return;

            }



            if (string.IsNullOrWhiteSpace(_secretKey))
                throw new Exception("Route53DomainManager secretkey is empty");
            if (string.IsNullOrWhiteSpace(_accessKey))
                throw new Exception("Route53DomainManager accesskey is empty");



        }

        public bool customRoutingAvavilable => !string.IsNullOrWhiteSpace(_hostedZoneId);

        AmazonRoute53Client createRoute53Client()
        {
            return new AmazonRoute53Client(_accessKey, _secretKey, Amazon.RegionEndpoint.USEast1);
        }

        public async Task updateCustomDomainAsync(string domain = null, string cname = null, string removeDomain = null)
        {
            if (null == _hostedZoneId)
                throw new NotSupportedException();

            var changeList = new List<Change>();
            if (null != removeDomain)
            {
                _logger.LogInformation($"updateCustomDomain: removing :{removeDomain}");
                changeList.Add(new Change(ChangeAction.DELETE, new ResourceRecordSet(domain + ".", RRType.CNAME)));
            }

            if (null != domain)
            {
                if (null == cname)
                    throw new InvalidArgumentException($"updateCustomDomain: no cname provided");

                changeList.Add(new Change(ChangeAction.CREATE, new ResourceRecordSet
                {
                    Name = domain + ".",
                    Type = RRType.CNAME,
                    TTL = 60,
                    ResourceRecords = (new[] { new ResourceRecord(cname) }).ToList()

                }));
            }

            if (changeList.Count == 0)
                throw new InvalidArgumentException($"updateCustomDomain: called with nothing to do");

            using (var client = createRoute53Client())
            {
                var done = await client.ChangeResourceRecordSetsAsync(new ChangeResourceRecordSetsRequest
                {
                    HostedZoneId = _hostedZoneId,
                    ChangeBatch = new ChangeBatch(changeList)
                });
            }

        }

        public async Task<bool> isDomainTakenAsync(string domain)
        {
            if (null == _hostedZoneId)
                throw new NotSupportedException();

            using (var client = createRoute53Client())
            {
                var records = await client.ListResourceRecordSetsAsync(new ListResourceRecordSetsRequest
                {
                    HostedZoneId = _hostedZoneId,
                    StartRecordName = domain
                });

                return null != records.ResourceRecordSets.FirstOrDefault(r => r.Name == (domain + "."));
            }
        }
    }
}
