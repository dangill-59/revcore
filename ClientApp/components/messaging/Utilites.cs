using Microsoft.AspNetCore.Authentication.JwtBearer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace components.messaging
{
    public static class Utilites
    {
        /// <summary>
        /// We have to hook the OnMessageReceived event in order to
        /// allow the JWT authentication handler to read the access
        /// token from the query string when a WebSocket or 
        /// Server-Sent Events request comes in.
        /// https://docs.microsoft.com/en-us/aspnet/core/signalr/authn-and-authz?view=aspnetcore-2.1
        /// </summary>
        /// <param name="options"></param>
        /// <param name="forPath">The path for which we will check for JWT</param>
        public static void ParseJWTinQueryString(this JwtBearerOptions options, string forPath)
        {
            options.Events = new JwtBearerEvents
            {
                OnMessageReceived = context =>
                {
                    var path = context.HttpContext.Request.Path;
                    if (path.ToString().Contains("messaging"))
                    {
                        //var g = 0;
                    }


                    var accessToken = context.Request.Query["access_token"];

                    // If the request is for our hub...
                    //var path = context.HttpContext.Request.Path;
                    if (!string.IsNullOrEmpty(accessToken) &&
                        (path.StartsWithSegments(forPath)))
                    {
                        // Read the token out of the query string
                        context.Token = accessToken;
                    }
                    return Task.CompletedTask;
                }
            };
        }
    }
}
