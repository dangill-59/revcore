using commonInterfaces;
using commonInterfaces.dbDataTypes;
using components.workspace;
using ConcurrentCollections;
using MassTransit;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using Newtonsoft.Json;
using reactBase;
using revMQAbstractions;
using RevRepositoryServices;
using RevStorage;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Utilities;

namespace components.listPages
{
    /// <summary>
    /// For legacy reasons this class started as ObservePageTask and we are keeping this name till we refractor the code
    /// </summary>
    public partial class ObservePageTask : MassTransit.IConsumer<MQNewRepositories>
    {
        readonly ITemplatesManager _templatesManager;
        public async Task Consume(ConsumeContext<MQNewRepositories> context)
        {
            try
            {
                if (null == context?.Message?.templateNames)
                    throw new ArgumentNullException(nameof(context.Message.templateNames));

                var newTemplates = (await _templatesManager.getTemplatesAsync()).Where(t => context.Message.templateNames.Contains(t.name)).ToArray();

                if (newTemplates.Length != context.Message.templateNames.Length)
                {
                    var foundTemplates = newTemplates.Select(t => t.templateName);
                    var missing = context.Message.templateNames.Where(n => !foundTemplates.Contains(n)).ToArray();

                    throw new ExceptionWithCode($"templates {String.Join(", ", missing)} are not saved repo templates");
                }

                _logger.LogInformation($"creating new repositories {String.Join(", ", context.Message.templateNames)} workspaceId -> {context.Message.workspaceId}");


                var existing = (await _revDb.getCollection<ProjectModel>().Find(p => true).Project(p => p.name.ToLower()).ToListAsync());

                var done = await Task.WhenAll(newTemplates.Select(async template =>
                {
                    var projectName = template.name;
                    if (existing.Contains(projectName.ToLower()))
                        return $"{projectName} already exists";

                    template.templateName = template.templateName;
                    template.name = projectName;
                    await _repoManager.SaveProjectAsync(template);

                    return $"created {projectName}";
                }));

                await context.RespondAsync(new AdminCmdResultModel
                {
                    result = String.Join("\n", done)
                }); ;
            }
            catch (Exception ex)
            {
                throw new RevMQNoRetryFailure(ex.Message ?? "failed to complete", ex);
            }
        }
    }
}
