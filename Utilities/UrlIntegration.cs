using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Microsoft.Extensions.Configuration;

namespace Utilities
{
    public class UrlIntegration : commonInterfaces.IExternalIntegration
    {
        public UrlIntegration(IConfiguration config)
        {
        }

        public string getTokenReqURLifneeded()
        {
            throw new NotImplementedException();
        }

        public Task<ExternalIndexModel> parseFromUserinputAsync(string input, string resource, string revlink)
        {
            // throw new NotImplementedException();

            return Task.FromResult(new ExternalIndexModel
            {
                displayValue = input,
                externalUrl = input
            });
        }

        public void storeAcessToken(string[] tokens)
        {
            throw new NotImplementedException();
        }

        public Task<ExternalIndexModel[]> search(string user, string searchParameters, string input)
        {
            throw new NotImplementedException();
        }
    }
}
