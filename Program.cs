using System;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Polly;
using Polly.Extensions.Http;
using reactBase;
using Utilities;
using Microsoft.AspNetCore.Builder;
using MongoDbService;
using RevRepositoryServices;
using Microsoft.AspNetCore.Http;
using components.launchNative;
using components.workspace;
using revMQAbstractions;
using Microsoft.AspNetCore.Diagnostics;
using Newtonsoft.Json;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Net.Http.Headers;
using Prometheus;
using revCore2site.Controllers;
using Microsoft.OpenApi.Models;
using System.Linq;

var builder = WebApplication.CreateBuilder(args);

//builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
//builder.Configuration.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true);
builder.Configuration.AddJsonFile(components.licensing.InstalConfig.LICENSE_FILENAME, optional: true, reloadOnChange: true);
builder.Configuration.AddJsonFile(Utilities.TaskSignerservice.KEYCONFIGFILE, optional: true, reloadOnChange: true);

#if DEBUG

builder.Configuration.AddJsonFile("appsettings.devCommon.json", optional: false, reloadOnChange: false);
builder.Configuration.AddJsonFile("appsettings.noSVN.json", optional: false, reloadOnChange: false);

var customMode = Environment.GetEnvironmentVariable("DEV_APPMODE");
if (!string.IsNullOrWhiteSpace(customMode))
{
    builder.Configuration.AddJsonFile($"appsettings.Development.{customMode}.json", optional: true, reloadOnChange: true);
}

#endif


bool useSwagger = false;
bool.TryParse(builder.Configuration["useSwagger"], out useSwagger);

if (useSwagger)
{
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Rev API", Version = "v1" });
        c.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());
        var filePath = Path.Combine(System.AppContext.BaseDirectory, "revCore2site.xml");
        c.IncludeXmlComments(filePath);

        // Add Bearer JWT token support
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.Http,
            Scheme = "bearer"
        });

        c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                    },
                    new string[] {}
                }
            });
    });
}


static IAsyncPolicy<HttpResponseMessage> GetRetryPolicy()
{
    return HttpPolicyExtensions
        .HandleTransientHttpError()
        .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
        .WaitAndRetryAsync(6, retryAttempt => TimeSpan.FromSeconds(Math.Pow(2,
                                                                    retryAttempt)));
}

bool SetupMultiSite(IServiceCollection services)
{
    var multiConfig = builder.Configuration.GetSection("multisite");

    var enabled = multiConfig["enabled"];
    var storageType = multiConfig["storage"];
    if (String.IsNullOrWhiteSpace(enabled) || enabled.ToLower() != "true")
        return false;

    services.AddSingleton<components.workspace.IWorkspaceResolver, components.workspace.Resolver>();
    services.AddSingleton<components.workspace.IAuthWorkspaceResolver, components.workspace.AuthSpaceResolver>();

    services.AddTransient<IStorageProvider>(provider =>
    {
        return provider.GetService<components.workspace.IWorkspaceResolver>().storageProviderFromWorkspace(provider.GetService<ICacheProvider>());
    });

    if (storageType == "azure")
        builder.Services.AddScoped<RevStorage.IRevStorageService, RevStorage.AzureBlobStorageService>();
    else //s3
        builder.Services.AddScoped<RevStorage.IRevStorageService, RevStorage.RevStorageService>();

    services.AddTransient<ICustomDomainMgr, Route53DomainManager>();
    services.AddTransient<IRevAudit, Audit>();


    return true;
}


/*
            builder.Services.AddNodeServices(options => {
                options.LaunchWithDebugging = true;
                options.DebuggingPort = 9229;
            });
			*/

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.AddConsole(c =>
    {
        c.TimestampFormat = "[yyyy-MM-dd HH:mm:ss] ";
        // c.UseUtcTimestamp = true; // something to consider
    });

});

builder.Services.Configure<components.revLogin.UPConfig>(builder.Configuration.GetSection("upAuth"));


builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    components.messaging.Utilites.ParseJWTinQueryString(options, "/messaging");
});

builder.Services.ConfigureOptions<components.revLogin.ConfigureJwtBearerOptions>();

builder.Services.AddAuthorization(options =>
{
    options.DefaultPolicy = new AuthorizationPolicyBuilder()
        .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .AddRequirements(new components.launchNative.AllAccessOrJobRequirement())
        //.AddAuthenticationSchemes("Auth0", "myOwn")
        .Build();


    options.AddPolicy("SupportPeopleOnly", new AuthorizationPolicyBuilder()
        .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
        .RequireAuthenticatedUser()
        .AddRequirements(new components.support.SupportPeopleRequirement())
        .Build());
});





builder.Services.AddHttpClient<components.workspace.IMessagingService, components.workspace.MessagingService>()
    .SetHandlerLifetime(TimeSpan.FromMinutes(5))  //Set lifetime to five minutes
    .AddPolicyHandler(GetRetryPolicy());


builder.Services.AddSingleton<components.revLogin.IJWTCreater, components.revLogin.JWTCreater>();

builder.Services.AddSingleton<ITimeServer, TimeServer>();

builder.Services.AddSingleton<IDistributedLockService, RedLockService>();
//services.AddTransient<IDistributedLockService, DistributedLockService>();


builder.Services.AddSingleton<components.licensing.IConnectCall, components.licensing.connectCall>();

builder.Services.AddSingleton<ITaskSignerservice, TaskSignerservice>();

if (!SetupMultiSite(builder.Services))
{
    //throw new NotImplementedException();
}

builder.Services.addRevServices(builder.Configuration);

builder.Services.addRepositoryService(builder.Configuration);

builder.Services.AddScoped<components.billing.CheckBilling>();

builder.Services.AddTransient<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddTransient<reactBase.ICacheProvider, reactBase.CacheProvider>();

//builder.Services.AddTransient<Utilities.hasRevImages>();

builder.Services.AddTransient<components.external.IIntegrationsService, components.external.IntegrationsService>();

/*
builder.Services.AddHttpClient<components.external.IIntegrationsService, components.external.IntegrationsService>()
	.SetHandlerLifetime(TimeSpan.FromMinutes(5))  //Set lifetime to five minutes;
	.AddPolicyHandler(components.external.IntegrationsService.GetRetryPolicy());
	*/

builder.Services.AddTransient<components.licensing.IeffectiveLicense, components.licensing.effectiveLicense>();

builder.Services.AddTransient<restUpdate.IMultipartRequestHandler, restUpdate.MultipartRequestHandler>();

builder.Services.AddTransient<IAuthorizationHandler, AllAccessOrJobAuthHandler>();

builder.Services.AddTransient<components.billing.ISubscriberBillingInfo, components.billing.BillingService>();

builder.Services.AddTransient<components.revLogin.IApplianceUserManager, components.revLogin.ApplianceUserManager>();

builder.Services.AddControllersWithViews().AddNewtonsoftJson();
builder.Services.AddRazorPages().AddNewtonsoftJson();

/*
builder.Services.AddMvc()
	.AddJsonOptions(options => {
		options.SerializerSettings.Error = (sender, args) =>
		{
			//Log args.ErrorContext.Error details...
			_logger.Error(args.ErrorContext.Error, $"Failed_to_serialize");

		};
	});
;
*/
/* Dsiable OCR service for now
builder.Services.AddSingleton<IHostedService, components.listDocuments.FullTextOCRService>();
*/



builder.Services.AddTransient<components.listPages.IPageDeleteService, components.listPages.PageDeleteService>();

/* Sto pthe page delete TASK .. we are creating more support pages and need to find out how not to delete
services.AddSingleton<IHostedService, components.listPages.PageDeleteTask>();
*/


builder.Services.AddSingleton<IAuthorizationHandler, components.support.SupportPeopleAuthHandler>();

builder.Services.AddSignalR().AddRedis(builder.Configuration["redis:Configuration"]);


///OLD RabbitQ services
builder.Services.AddTransient<components.workspace.IMQSpaceResolver, components.workspace.MQSpaceResolver>();


builder.Services.AddRevMQ<RevSiteWorkspaceChanged>("revServer", cfg =>
{
    cfg.AddConsumer<components.listPages.ObservePageTask>(new MQConsumerOptions
    {
        isNotification = true,
        preFetchCout = builder.Configuration.GetValue("pageObserver:PreFetchCount", (ushort)12)
    });

});

builder.Services.AddTransient<IUserIMService, components.messaging.UserImService>();

builder.Services.AddScoped<IWaitforJob, JobWaiterService>();

builder.Services.AddScoped<RevSiteWorkspaceChanged>();

builder.Services.AddScoped<components.listPages.ObservePageTask>();


builder.Services.AddTransient<Utilities.IEmailSenderService, Utilities.EmailSenderService>();
builder.Services.AddTransient<components.permissions.IProvisionAuthProvider, components.permissions.ProvisionAuthProvider>();

builder.Services.AddScoped<revElasticSearch.IESMapper, revElasticSearch.ProjectMapper>();
builder.Services.AddTransient<revElasticSearch.IRevEsClient, revElasticSearch.ESClient>();

//builder.Services.addRevWorkspaceResolver(Configuration);


builder.Services.AddTransient<Services.ISendSMSService, Services.SendSMSService>();

var app = builder.Build();

app.UseExceptionHandler(
              builder =>
              {
                  builder.Run(
                    async context =>
                    {

                        var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;
                        ILoggerFactory loggerFactory = LoggerFactory.Create(builder =>
                        {
                            builder.AddConsole();
                            builder.AddDebug();
                        });

                        var error = reactBase.ErrorMessage.SetStatusGetResult(context, exception, loggerFactory.CreateLogger("Global-Exception"));
                        context.Response.ContentType = "application/json";

                        await context.Response.WriteAsync(JsonConvert.SerializeObject(error)).ConfigureAwait(false);
                    });
              });

if (useSwagger)
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Rev API V1");
    });
}

var customStorage = builder.Configuration["s3Storage:customEndpoint"];
if (!string.IsNullOrWhiteSpace(customStorage))
{

    var uri = new Uri(customStorage);

    //app.UseMiddleware<Utilities.ReverseProxyMiddleware>();

    /*
	app.MapWhen(httpContext =>
	{
		return httpContext.Request.Path.Value.StartsWith(@"/revstorage/", StringComparison.OrdinalIgnoreCase);
	}, builder => builder.RunProxy(new ProxyOptions
	{
		Host = uri.Host,
		Port = uri.Port.ToString(),
		Scheme = uri.Scheme
	}));
	*/

}


var provider = new FileExtensionContentTypeProvider();
// Add new mappings
provider.Mappings[".scanrev"] = "application/scanrev";
provider.Mappings[".exe"] = "application/octet-stream";

app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider,

    OnPrepareResponse = ctx =>
    {
        const int durationInSeconds = 60 * 60 * 24;
        ctx.Context.Response.Headers[HeaderNames.CacheControl] =
            "public,max-age=" + durationInSeconds;
    }
});

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();



//app.UseMetricServer(Configuration.GetValue<int>("metrics:port", 8021));

app.UseMetricServer();

app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<components.messaging.RevChatHub>("/messaging");

    endpoints.MapControllerRoute(
        name: "authredirect",
        pattern: HomeController.AuthRedirectPattern,
        defaults: new { controller = "Home", action = "authredirect" }
        ); ;


    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");

    endpoints.MapFallbackToController("Index", "Home");
});

app.Run();
