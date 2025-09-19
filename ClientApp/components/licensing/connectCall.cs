using Newtonsoft.Json;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace components.licensing
{
    public interface IConnectCall
    {
        Task<String> getmyLicenseAsync(LicReqData creationData);
    }

    public class connectCall : IConnectCall
    {
        public async Task<String> getmyLicenseAsync(LicReqData creationData)
        {
            var connectCheckReq = new
            {
                XmlData = connectCommon.LicenseModel.SerializeToSignedXMLString(creationData.checkReq, creationData.privateKey)
            };

            using (var client = new HttpClient(/*new WebRequestHandler()
            {
                CachePolicy = new HttpRequestCachePolicy(HttpRequestCacheLevel.NoCacheNoStore)
            }*/))
            {
                var response = await client.PostAsync($"{creationData.revConnectURL.TrimEnd(new[] { '/' })}/api/check",
                        new StringContent(
                            JsonConvert.SerializeObject(connectCheckReq), System.Text.Encoding.UTF8, "application/json"));

                var resStr = await response.Content.ReadAsStringAsync();

                if (!response.IsSuccessStatusCode)
                {
                    if (!String.IsNullOrWhiteSpace(resStr))
                    {
                        var error = JsonConvert.DeserializeAnonymousType(resStr, new { Message = "" });
                        if (null != error && !String.IsNullOrWhiteSpace(error.Message))
                            throw new Exception(error.Message);
                    }
                }

                try
                {
                    //let HTTP exceptions propagate
                    response.EnsureSuccessStatusCode();
                    return resStr;

                }
                catch (Exception ex)
                {
                    throw new ExceptionWithCode(message: "Failed to get license information from REV connect.", innerException: ex);
                }

            }
        }
    }

}
