using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.revLogin
{
    public class ConfigureJwtBearerOptions : IConfigureNamedOptions<JwtBearerOptions>
    {

        readonly IJWTCreater _jwtCreater;
        public ConfigureJwtBearerOptions(IJWTCreater jwtCreater)
        {
            _jwtCreater = jwtCreater;
        }

        public void Configure(JwtBearerOptions options)
        {
            options.TokenValidationParameters = _jwtCreater.getMyTokenValidationParameter();
        }

        public void Configure(string name, JwtBearerOptions options)
        {
            Configure(options);
        }
    }
}
