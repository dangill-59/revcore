using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace reactBase
{
    public class Fetch
    {
        //we SHOULD NOT USE this. use httpDownloader
        private Fetch()
        {
        }

        public readonly HttpClient httpClient = new HttpClient();

        public string JWT
        {
            set
            {
                httpClient.DefaultRequestHeaders.Authorization
                        = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", value);

            }
        }

        public async Task<T> GetAsync<T>(T proto, String url) where T : class
        {
            return await PostAsync<T, String>(proto, url, null);
        }

        public class FileUpload
        {
            public System.IO.Stream stream { get; set; }
            public string name { get; set; }
            public string fileName { get; set; }
        }

        public Task<T> PostAsync<T, T1>(T proto, String requestUrl, T1 postData) where T1 : class where T : class
        {
            return InvokeWebMethod(null, proto, requestUrl, postData);
        }

        public static async Task ensureHttpSuccess(HttpResponseMessage response)
        {
            if (!response.IsSuccessStatusCode)
            {
                var resStr = await response.Content.ReadAsStringAsync();
                var e1 = String.IsNullOrWhiteSpace(resStr) ? null : JsonConvert.DeserializeAnonymousType(resStr, new { message = "" });
                throw new Exception(null == e1 || String.IsNullOrWhiteSpace(e1.message) ?
                            ($"server error, status -{response.StatusCode}:{resStr ?? String.Empty}") : e1.message);
            }
        }



        public async Task<T> handleResponse<T>(T proto, HttpResponseMessage response) where T : class
        {
            await ensureHttpSuccess(response);

            var resStr = await response.Content.ReadAsStringAsync();

            //if (response.IsSuccessStatusCode)
            {
                if (String.IsNullOrWhiteSpace(resStr))
                    return default(T);

                if (proto is String)
                    return resStr as T;

                return JsonConvert.DeserializeObject<T>(resStr);
            }

        }

        public async Task<T> InvokeWebMethod<T, T1>(string method, T proto, String requestUrl, T1 postData) where T1 : class where T : class
        {
            MultipartFormDataContent content = null;
            //ProgressableStreamContent sc = null;
            try
            {

                // var results = postData as Models.FileForUpload[];

                HttpResponseMessage response;

                if (null != postData && typeof(IEnumerable<FileUpload>).IsAssignableFrom(postData.GetType()))
                {
                    if (method != null)
                        throw new NotImplementedException();

                    var requestContent = new MultipartFormDataContent();
                    var fileData = postData as IEnumerable<FileUpload>;

                    foreach (var item in fileData)
                    {
                        var streamContent = new StreamContent(item.stream);

                        var fileContent = new ByteArrayContent(streamContent.ReadAsByteArrayAsync().Result);
                        requestContent.Add(fileContent, item.name, item.fileName);

                    }

                    response = await httpClient.PostAsync(requestUrl, requestContent);

                }
                else
                {
                    if (null == method)
                    {
                        if (null != postData)
                            //if you see error for unknown PostAsJsonAsync add reference to Assembly System.Net.Http.Formatting
                            response = await httpClient.PostAsJsonAsync(requestUrl, postData);
                        else
                            response = await httpClient.GetAsync(requestUrl);

                    }
                    else
                    {
                        if (null != postData)
                        {
                            switch (method.ToLower())
                            {
                                case "put":
                                    response = await httpClient.PutAsJsonAsync(requestUrl, postData);
                                    break;
                                default:
                                    throw new NotImplementedException();

                            }
                        }
                        else
                        {
                            throw new NotImplementedException();
                        }
                    }
                }

                return await handleResponse(proto, response);

            }
            finally
            {
                /*if (null != sc)
                {
                    sc.uploadedState -= Sc_uploadedState;
                    sc.Dispose();
                }*/


                if (null != content)
                    content.Dispose();
            }

        }

    }
}
