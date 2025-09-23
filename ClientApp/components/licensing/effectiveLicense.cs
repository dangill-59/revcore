using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Utilities;

namespace components.licensing
{
    /// <summary>
    /// used to send create license requests
    /// </summary>
    public class LicReqData
    {
        [JsonIgnore]
        public string privateKey { get; set; }

        public connectCommon.LicCheckReq checkReq { get; set; }

        public string revConnectURL { get; set; }

        public string publicKey
        {
            set { }
            get
            {
                if (string.IsNullOrWhiteSpace(privateKey))
                    return null;

                var crypto = RSA.Create();
                crypto.FromXmlStringCore(privateKey);
                return crypto.ToXmlStringCore(false);
            }
        }
    }

    public interface IeffectiveLicense
    {
        Task<connectCommon.LicenseModel> getLicenseAsync();
        connectCommon.LicenseModel setLicense(String licXML);

        LicReqData LicenseCreationData { get; }
    }

    public class InstalConfig
    {
        public Guid installationId { get; set; }
        public string myPrivateKey { get; set; }
        public string revconnect { get; set; }

        //not really used just for legacy support
        public Guid HWID { get; set; }

        /// <summary>
        /// Stores the last known HWID that was licenses. Used to renew License whih Fingureprint changes
        /// </summary>
        public String LicensensedHWID { get; set; }

        public string License { get; set; }

        public readonly static string LICENSE_FILENAME = @"config/licenseConfig.json";

        public void Save(String rootpath)
        {
            var configStr = JsonConvert.SerializeObject(new { licensing = this });
            var configFileName = System.IO.Path.Combine(rootpath, LICENSE_FILENAME);

            var configFolder = System.IO.Path.GetDirectoryName(configFileName);
            if (!System.IO.Directory.Exists(configFolder))
            {
                System.IO.Directory.CreateDirectory(configFolder);
            }

            System.IO.File.WriteAllText(configFileName, configStr);
        }
    }

    public class effectiveLicense : IeffectiveLicense
    {
        static DateTime? _BuildDate;
        public static DateTime Builddate
        {
            get
            {
                if (null == _BuildDate)
                {
                    var bstr = commonInterfaces.Resources.buildDate;
                    _BuildDate = DateTime.Parse(bstr, new System.Globalization.CultureInfo("en-US", false));
                }
                return _BuildDate.Value;
            }
        }


#if DEBUG
        //Used for Unit testing
        public static void setBuildDate_TESTONLY(DateTime? value) { _BuildDate = value; }
#endif

        static connectCommon.LicenseModel _effectiveLicense = null;

        //readonly Models.MyConfig _config;
        readonly IWebHostEnvironment _hostingEnvironment;
        readonly IConnectCall _connectCall;
        readonly InstalConfig _config;

        public effectiveLicense(IWebHostEnvironment hostingEnvironment, IConnectCall connectCall, IConfiguration configuration)
        {
            _hostingEnvironment = hostingEnvironment; _connectCall = connectCall;
            _config = new InstalConfig();
            configuration.GetSection("licensing").Bind(_config);
        }

        static LicReqData _creationInfo = null;
        readonly static Object _CreationLock = new Object();

        public LicReqData LicenseCreationData
        {
            get
            {
                var configChanged = false;

                var revConnect = _config.revconnect;
                if (String.IsNullOrWhiteSpace(revConnect))
                    revConnect = "http://scan-rev.com";

                lock (_CreationLock)
                {
                    if (null == _creationInfo)
                    {
                        if (Guid.Empty == _config.installationId)
                        {
                            _config.installationId = Guid.NewGuid();
                            configChanged = true;
                        }

                        if (Guid.Empty == _config.HWID)
                        {
                            _config.HWID = Guid.NewGuid();
                            configChanged = true;
                        }

                        if (String.IsNullOrWhiteSpace(_config.myPrivateKey))
                        {
                            var key = RSA.Create();
                            _config.myPrivateKey = key.ToXmlStringCore(true);
                            configChanged = true;
                        }

                        if (configChanged)
                        {
                            _config.Save(_hostingEnvironment.ContentRootPath);
                        }


                        _creationInfo = new LicReqData
                        {
                            checkReq = new connectCommon.LicCheckReq
                            {
                                HWID = _config.HWID.ToString(),
                                systemId = _config.installationId
                            },

                            privateKey = _config.myPrivateKey,
                            revConnectURL = _config.revconnect
                        };
                    }
                }

                //this we need to keep updating
                _creationInfo.checkReq.LicensedHWID = _config.LicensensedHWID;
                return _creationInfo;
            }
        }

        public connectCommon.LicenseModel setLicense(String licXML)
        {

            var lm = connectCommon.LicenseModel.parseXML(licXML, Builddate, _config.HWID.ToString());
            if (!String.IsNullOrWhiteSpace(lm.LicParsingError))
                throw new reactBase.ExceptionWithCode(lm.LicParsingError, System.Net.HttpStatusCode.BadRequest);
            _effectiveLicense = lm;

            /*
            if (lm.Subject.StartsWith("DEMO:"))
                throw new filters.ExceptionWithCode("Demo licenses cannot be added", System.Net.HttpStatusCode.BadRequest);
            */

            if (_config.LicensensedHWID != lm.HWId)
            {
                _config.LicensensedHWID = lm.HWId;
                _config.Save(_hostingEnvironment.ContentRootPath);
            }

            return lm;
        }

        /// <summary>
        /// get the current effective license. If not loaded yet it initiliazes the effective license
        /// </summary>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<connectCommon.LicenseModel> getLicenseAsync()
        {
            if (null == _effectiveLicense)
            {
                if (!string.IsNullOrWhiteSpace(_config.License))
                {
                    var lm = connectCommon.LicenseModel.parseXML(_config.License, Builddate, _config.HWID.ToString());
                    if (String.IsNullOrWhiteSpace(lm.LicParsingError))
                        _effectiveLicense = lm;
                }

                if (null == _effectiveLicense)
                {
                    setLicense(await _connectCall.getmyLicenseAsync(LicenseCreationData));
                }

            }

            return _effectiveLicense;
        }


    }
}
