using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using commonInterfaces.dbDataTypes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using reactBase;
using Stripe;
using Utilities;

namespace components.billing
{

    [Route("api/[controller]")]
    [Authorize]
    public class BillingController : Controller
    {
        private readonly ILogger _logger;
        readonly ISubscriberBillingInfo _billingService;
        readonly IConfiguration _configuration;

        readonly workspace.IWorkspaceResolver _resolver;

        public BillingController(
            IConfiguration configuration,

            ISubscriberBillingInfo billingService,
            workspace.IWorkspaceResolver respolver,
            ILogger<BillingController> logger
            )
        {
            _billingService = billingService;
            _configuration = configuration;

            _logger = logger;

            _resolver = respolver;

        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            var currentWorkspace = this.ensureWorkspaceAdmin(_resolver);
        }

        #region subscription

        [HttpGet("plans")]
        public async Task<Dictionary<BillableFeaturesModel, AvailablePlanModel[]>> availablePlansAsync()
        {
            return await _billingService.availablePlansAsync();
        }

        /// <summary>
        /// 
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet("subscription")]
        public async Task<SubscriptionModel> mySubscription()
        {

            var WorkspaceName = _resolver.getCurrentWorkspaceName();

            var subscription = await _billingService.getCachedSubscription(WorkspaceName);

            return subscription;
        }

        [HttpGet("invoices")]
        public async Task<InvoiceModel[]> getInvoices([FromQuery] string from = null, [FromQuery] string to = null)
        {
            var ToDate = DateTime.Now;
            if (!string.IsNullOrWhiteSpace(to))
            {
                DateTime t;
                if (!DateTime.TryParse(to, out t))
                {
                    throw new ExceptionWithCode("Invalid To date");
                }

                ToDate = t;
            }


            var FromDate = DateTime.Now - TimeSpan.FromDays(90);
            if (!string.IsNullOrWhiteSpace(from))
            {
                DateTime t;
                if (!DateTime.TryParse(from, out t))
                {
                    throw new ExceptionWithCode("Invalid From date");
                }

                FromDate = t;
            }

            return await _billingService.getInvoices(_resolver.getCurrentWorkspaceName(), FromDate, ToDate);
        }

        [HttpPost("preview")]
        public async Task<PreviewResultModel>
                previewSubscriptionChangesAsync([FromBody] SubscriptionModel req, [FromQuery] string coupon = null)
        {
            try
            {
                return await _billingService.previewSubscriptionChanges(_resolver.getCurrentWorkspaceName(), req, coupon);
            }
            catch (StripeException ex)
            {
                //if (ex.Message.ToLower().Contains("coupon"))
                {
                    throw new ExceptionWithCode(ex.Message, innerException: ex);
                }

                //throw ex;
            }


        }


        [HttpPost("subscription")]
        public async Task<SubscriptionModel>
                updateSubscriptionAsync([FromBody] SubscriptionModel req = null, [FromQuery] string coupon = null)
        {

            try
            {
                await _billingService.updateSubscriptioninStripeAsync(_resolver.getCurrentWorkspaceName(), req, coupon);

                return await mySubscription();
            }
            catch (StripeException ex)
            {
                //if (ex.Message.ToLower().Contains("coupon"))
                {
                    throw new ExceptionWithCode(ex.Message, innerException: ex);
                }

                //throw ex;
            }
        }

        #endregion


        #region creditcard

        [HttpDelete("card/{cardId}")]
        public async Task<CardEditModel> deleteCardAsync(string cardId)
        {
            var currentWorkspaceName = _resolver.getCurrentWorkspaceName();
            var customer = await _billingService.getStripeCustomer(currentWorkspaceName);
            if (null == customer)
            {
                throw new ExceptionWithCode($"no stripe customer for workspace {currentWorkspaceName}");
            }


            var service = new CardService();

            var deleted = await service.DeleteAsync(customer.Id, cardId);
            if (null == deleted)
                throw new ExceptionWithCode("Failed deleting card, please try later", HttpStatusCode.InternalServerError,
                    innerException: new Exception("service retured null response"));

            _logger.LogInformation($"deleteCard: deleted {deleted.Id} for customer {customer.Id}");

            return await listAllCardsAsync();
        }

        [HttpGet("defaultCard/{id}")]
        public async Task<CardEditModel> chooseDefaultAsync(string id)
        {

            var currentWorkspaceName = _resolver.getCurrentWorkspaceName();
            var customer = await _billingService.getStripeCustomer(currentWorkspaceName);
            if (null == customer)
            {
                throw new ExceptionWithCode($"no stripe customer for workspace {currentWorkspaceName}");
            }
            var service = new CustomerService();

            var updated = await service.UpdateAsync(customer.Id, new CustomerUpdateOptions { DefaultSource = id });
            if (null == updated)
                throw new ExceptionWithCode("Failed updating deafult card", HttpStatusCode.InternalServerError,
                    innerException: new Exception("service retured null response"));

            return await listAllCardsAsync();

        }

        [HttpGet("newCard/{token}")]
        public async Task<CardEditModel> createNewCardAsync(string token)
        {
            try
            {
                var currentWorkspaceName = _resolver.getCurrentWorkspaceName();
                var customer = await _billingService.getStripeCustomer(currentWorkspaceName);
                if (null == customer)
                {
                    throw new ExceptionWithCode($"no stripe customer for workspace {currentWorkspaceName}");
                }
                var service = new CardService();

                var card = await service.CreateAsync(customer.Id, new CardCreateOptions { Source = token });

                return await listAllCardsAsync();
            }
            catch (StripeException ex)
            {
                throw new ExceptionWithCode(ex.Message, innerException: ex);
            }

        }

        [HttpGet("cards")]
        public async Task<CardEditModel> listAllCardsAsync()
        {
            var currentWorkspaceName = _resolver.getCurrentWorkspaceName();
            var customer = await _billingService.getStripeCustomer(currentWorkspaceName);
            if (null == customer)
            {
                throw new ExceptionWithCode($"no stripe customer for workspace {currentWorkspaceName}");
            }

            var service = new CardService();
            var options = new CardListOptions
            {
                Limit = 3,
            };

            var cards = await service.ListAsync(customer.Id, new CardListOptions { Limit = 10 });

            var allCards = cards
                .OrderByDescending(c => new DateTime((int)c.ExpYear, (int)c.ExpMonth, 1))
                .Select(c => new CustomerCardModel
                {
                    brand = c.Brand,
                    last4 = c.Last4,
                    expiration = $"{c.ExpMonth}/{c.ExpYear}",
                    isExpired = new DateTime((int)c.ExpYear, (int)c.ExpMonth, 1).AddMonths(1) < DateTime.Now,
                    id = c.Id,
                    isDefault = c.Id == customer.DefaultSourceId
                })
                .ToArray();

            return new CardEditModel
            {
                stripePubKey = _billingService.stripePupKey,
                currentCards = allCards
            };
        }
        #endregion


    }
}
