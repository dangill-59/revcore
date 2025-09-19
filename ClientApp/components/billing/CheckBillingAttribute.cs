using Microsoft.AspNetCore.Mvc.Filters;
using reactBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace components.billing
{
    public class CheckBilling : ActionFilterAttribute
    {
        readonly ISubscriberBillingInfo _billingService;
        readonly workspace.IWorkspaceResolver _resolver;

        public CheckBilling(workspace.IWorkspaceResolver resolver, ISubscriberBillingInfo billingService)
        {
            _resolver = resolver;
            _billingService = billingService;
        }

        public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //logging logic goes here
            await base.OnActionExecutionAsync(context, next);

            var subscription = await _billingService.getCachedSubscription(_resolver.getCurrentWorkspaceName());
            if (SubscriptionStatusModel.canceled == subscription.status || SubscriptionStatusModel.unpaid == subscription.status)
            {
                throw new ExceptionWithCode($"Your subscription is {subscription.status}",
                    System.Net.HttpStatusCode.PaymentRequired,
                    "unpaid");
            }

        }


    }
}
