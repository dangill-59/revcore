using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.listPages
{
    /// <summary>
    /// manages grants code for pages search results
    /// with this code a NON autheticated url can be opened in ReV
    /// </summary>
    public static class PagesGrantStore
    {
        static readonly MemoryCache _grants = new MemoryCache(new MemoryCacheOptions
        {
            // SizeLimit = 100 * 1024 * 1024
        });

        public static async Task ensurePageAccess(this IDistributedCache _distributedCache, ILogger logger, string grant, string path)
        {
            string pagesInGrantStr;
            if (!_grants.TryGetValue(grant, out pagesInGrantStr))
            {
                logger.LogDebug($"grant {grant} not found in mem cache looking in redis");

                pagesInGrantStr = await _distributedCache.GetStringAsync(grant);
            }

            if (string.IsNullOrWhiteSpace(pagesInGrantStr))
                throw new ExceptionWithCode("URL expired", System.Net.HttpStatusCode.Forbidden);

            var pagesInGrant = JsonConvert.DeserializeObject<string[]>(pagesInGrantStr);
            if (!pagesInGrant.Contains(path))
                throw new ExceptionWithCode("access denied", System.Net.HttpStatusCode.Forbidden);

        }

        public static void GrantAccessToPages(this IDistributedCache distributedCache, ILogger logger, string pageAccessGrant, string[] allPathsInGrant)
        {
            ///redis is unreliable. ALso since we expect server afinity, most grant requests will be verified using server it was created on.

            var expiration = TimeSpan.FromMinutes(15);
            var pagesInGrantStr = JsonConvert.SerializeObject(allPathsInGrant);


            _grants.Set<string>(pageAccessGrant, pagesInGrantStr, expiration);

            Task.Run(() =>
            {
                try
                {
                    distributedCache.SetString(pageAccessGrant, pagesInGrantStr, new DistributedCacheEntryOptions
                    {
                        AbsoluteExpirationRelativeToNow = expiration
                    });

                }
                catch (Exception ex)
                {
                    logger.LogError($"Failed to set grant credentials in cache {ex}");
                }
            });
        }


    }
}
