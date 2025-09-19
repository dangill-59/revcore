import * as _ from 'lodash';
import * as moment from 'moment';

import { handleAction, handleActions } from 'redux-actions';

import { AvailablePlanModel } from '../../generated/AvailablePlanModel';
import { CardEditModel } from '../../generated/CardEditModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { InvoiceModel } from '../../generated/InvoiceModel';
import { PreviewResultModel } from '../../generated/PreviewResultModel';
import ReducerBase from 'base/baseReducer';
import { SubscriptionModel } from '../../generated/SubscriptionModel';
import { SubscriptionStatusModel } from '../../generated/SubscriptionStatusModel';
import { checkFetchError } from 'base//asyncLoader';
import ensureConfirmBox from '../confirmation/reducer';
import ensureWaitBox from '../waitBox/reducer';
import momentPropTypes from 'react-moment-proptypes';
import { push } from 'react-router-redux';

export type PlanMap = {
  [key: string]: AvailablePlanModel[];
};

export type momentDateRange = { start: momentPropTypes.momentObj; end: momentPropTypes.momentObj };

export interface IBillingState {
  readonly subscriptionAsync: IAsyncResult<SubscriptionModel>;
  readonly cardsOnFileAsync: IAsyncResult<CardEditModel>;

  readonly enteringNewCard: boolean;

  readonly availablePlansAsync: IAsyncResult<PlanMap>;

  readonly showingUpdateView: boolean;

  readonly newRevSeatCount: number;

  readonly invDateRange?: momentDateRange;

  readonly invoiceListAsync?: IAsyncResult<InvoiceModel[]>;

  readonly coupon?: string;
}

type myActions = {
  loadSubscription: (loadPromise: PromiseLike<SubscriptionModel>) => PromiseLike<SubscriptionModel>;
  loadCards: (loadPromise: PromiseLike<CardEditModel>) => PromiseLike<CardEditModel>;

  showCardForm: (show: boolean) => boolean;
  showUpdateView: (show: boolean) => boolean;

  setCoupon: (value: string) => string;

  loadPlans: () => PromiseLike<PlanMap>;

  setNewRevSeatCount: (value: number) => number;

  setInvDateRange: (value: momentDateRange) => momentDateRange;
  loadInvoiceList: (value: momentDateRange) => PromiseLike<InvoiceModel[]>;
};

class BillingReducer extends ReducerBase<IBillingState, myActions> {
  createActionList() {
    return {
      loadPlans: [
        () =>
          fetch('/api/billing/plans')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<PlanMap>),
        () => ({ Async: true }),
      ],

      loadInvoiceList: [
        (value: momentDateRange) => {
          const from = moment(value.start).format('MMMM DD YYYY');
          const to = moment(value.end).format('MMMM DD YYYY');
          return fetch(
            `/api/billing/invoices?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`,
          )
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<InvoiceModel[]>);
        },
        () => ({ Async: true }),
      ],

      loadSubscription: [
        (loadPromise: PromiseLike<SubscriptionModel>) => loadPromise,
        () => ({ Async: true }),
      ],

      loadCards: [
        (loadPromise: PromiseLike<CardEditModel>) => loadPromise,
        () => ({ Async: true }),
      ],

      setNewRevSeatCount: (value: number) => value,

      showUpdateView: (show: boolean) => show,

      showCardForm: (show: boolean) => show,

      setInvDateRange: (value: momentDateRange) => value,

      setCoupon: (value: string) => value,
    };
  }

  reducers() {
    const enteringNewCardHandlers = {};

    const newRevSeatCountHandlers = {};

    newRevSeatCountHandlers[this._myActions.setNewRevSeatCount.toString()] = (state, action) =>
      action.payload;

    //rseset changed seats if we load the subscription
    newRevSeatCountHandlers[this._myActions.loadSubscription.toString()] = (state, action) => 0;

    enteringNewCardHandlers[this._myActions.showCardForm.toString()] = (state, action) =>
      action.payload;

    enteringNewCardHandlers[this._myActions.loadCards.toString()] = (state, action) => {
      if (action.payload && action.payload.result) {
        const cards = action.payload.result as CardEditModel;
        if (cards && cards.currentCards && cards.currentCards.length == 0) {
          return true;
        }
      }

      return false;
    };

    return {
      invDateRange: handleAction(
        this._myActions.setInvDateRange,
        (state, action) => action.payload,
        { end: moment(), start: moment().subtract(90, 'days') },
      ),
      invoiceListAsync: handleAction(
        this._myActions.loadInvoiceList,
        (state, action) => action.payload,
        null,
      ),

      coupon: handleAction(this._myActions.setCoupon, (state, action) => action.payload, null),

      availablePlansAsync: handleAction(
        this._myActions.loadPlans,
        (state, action) => action.payload,
        null,
      ),
      subscriptionAsync: handleAction(
        this._myActions.loadSubscription,
        (state, action) => action.payload,
        null,
      ),
      cardsOnFileAsync: handleAction(
        this._myActions.loadCards,
        (state, action) => action.payload,
        null,
      ),
      enteringNewCard: handleActions(enteringNewCardHandlers, false),
      showingUpdateView: handleAction(
        this._myActions.showUpdateView,
        (state, action) => action.payload,
        false,
      ),

      newRevSeatCount: handleActions(newRevSeatCountHandlers, 0),
    };
  }

  increaseRevSeatCount(increase: boolean) {
    const _mine = this;
    return (dispatch, getState) => {
      const { subscriptionAsync, newRevSeatCount } = _mine.getCurrentState(getState());

      if (!subscriptionAsync || !subscriptionAsync.result) {
        console.error('subscriptionAsync not initialized');
        return;
      }

      const revPlan = _.find(
        subscriptionAsync.result.details,
        (detail) => 'revSeats' == detail.forProduct,
      );
      if (!revPlan) {
        console.error('no rev plan found');
      }

      let currentQuatity = newRevSeatCount || revPlan.quantity;

      if (increase) {
        if (currentQuatity < 100) currentQuatity++;
      } else {
        if (currentQuatity > 1) currentQuatity--;
      }

      if (currentQuatity == revPlan.quantity) {
        //set to 0 we are marking the quanity not changed
        currentQuatity = 0;
      }

      return dispatch(_mine._myActions.setNewRevSeatCount(currentQuatity));
    };
  }

  loadPlans() {
    const _mine = this;
    return (dispatch, getState) => {
      const { availablePlansAsync } = _mine.getCurrentState(getState());

      if (availablePlansAsync && (availablePlansAsync.result || availablePlansAsync.isLoading))
        return Promise.resolve(availablePlansAsync);

      return dispatch(_mine._myActions.loadPlans());
    };
  }

  showInvoices(value?: momentDateRange) {
    return (dispatch, getState) => {
      if (value) dispatch(this._myActions.setInvDateRange(value));

      const { invDateRange } = this.getCurrentState(getState());

      dispatch(this._myActions.loadInvoiceList(value || invDateRange));
    };
  }

  setCoupon = (value: string) => this._myActions.setCoupon(value);

  showCardForm = (show: boolean) => this._myActions.showCardForm(show);

  showUpdateView = (show: boolean) => this._myActions.showUpdateView(show);

  makeDefault = (id: string) =>
    this._myActions.loadCards(
      fetch(encodeURI(`/api/billing/defaultCard/${id}`))
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<CardEditModel>),
    );

  removeCard = (id: string) =>
    this._myActions.loadCards(
      fetch(encodeURI(`/api/billing/card/${id}`), {
        method: 'delete',
      })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<CardEditModel>),
    );

  updateRevSeats() {
    const _mine = this;
    return (dispatch, getState) => {
      return dispatch(_mine.updateSubscription());
    };
  }

  applyCoupon() {
    return (dispatch, getState) => {
      const { coupon } = this.getCurrentState(getState());
      if (!coupon || coupon.length < 5) return;

      return dispatch(this.updateSubscription());
    };
  }

  //actually subscribes to the new plans
  private updateSubscription() {
    const _mine = this;
    return (dispatch, getState) => {
      //we need to make sure there is payment
      const { cardsOnFileAsync, subscriptionAsync, coupon, newRevSeatCount } =
        _mine.getCurrentState(getState());

      if (!subscriptionAsync || !subscriptionAsync.result) {
        console.error('subscriptionAsync not initialized');
        return;
      }

      const newSubscription = _.cloneDeep(subscriptionAsync.result);

      if (!cardsOnFileAsync || !cardsOnFileAsync.result) {
        console.error('cardsOnFileAsync  not initialized');
        return;
      }

      const revPlan = _.find(newSubscription.details, (detail) => 'revSeats' == detail.forProduct);
      if (!revPlan) {
        console.error('no rev plan found');
      }

      let hasChanges = false;
      //newRevSeatCount stays at 0 unless we are trying to change seats
      if (newRevSeatCount && newRevSeatCount != revPlan.quantity) {
        revPlan.quantity = newRevSeatCount;
        hasChanges = true;
      }

      const couponAdd =
        (coupon && coupon.length) >= 5 ? `?coupon=${encodeURIComponent(coupon)}` : '';

      if (!hasChanges && !couponAdd) {
        console.error('no changes for subscription');
        return;
      }

      dispatch(
        ensureWaitBox().doWait(
          'Updating subscription',
          fetch('/api/billing/preview' + couponAdd, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSubscription),
          })
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<PreviewResultModel>)
            .then((prevResult) => {
              let prompt = `Your new subscription price would be $${prevResult.monthly.toFixed(2)}/month.`;

              if (prevResult.nextInvAmount) {
                prompt += ` Your next invoice will be $${prevResult.nextInvAmount.toFixed(2)}`;

                if (prevResult.includesDiscount) {
                  prompt += ` after applying a credit of $${prevResult.discount.toFixed(2)}.`;
                } else prompt += '.';
              }

              return dispatch(ensureConfirmBox().ask(`${prompt} Continue`, 'Confirm changes'));
            })

            .then(() => {
              if (
                !cardsOnFileAsync.result.currentCards ||
                cardsOnFileAsync.result.currentCards.length == 0
              ) {
                throw 'Please enter your payment source to continue';
              }

              const trialConfirmation =
                subscriptionAsync &&
                subscriptionAsync.result &&
                'trialing' == subscriptionAsync.result.status
                  ? dispatch(
                      ensureConfirmBox().ask(
                        'This action will terminate your trial and upgrade to a subscription, continue',
                        'End trial',
                      ),
                    )
                  : Promise.resolve(true);

              return trialConfirmation.then(() => {
                return dispatch(
                  this._myActions.loadSubscription(
                    fetch('/api/billing/subscription' + couponAdd, {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(newSubscription),
                    })
                      .then((response) => checkFetchError(response))
                      .then((response) => response.json() as Promise<SubscriptionModel>),
                  ),
                );
              });
            })
            .then(() => dispatch(_mine.setCoupon(null)))
            .then(() => dispatch(_mine.showInvoices()))
            .then(() => true),
        ),
      );
    };
  }

  updateRevSubscription(newPlanId?: string) {
    const _mine = this;
    return (dispatch, getState) => {
      if (!newPlanId) {
        return dispatch(_mine.showUpdateView(false));
      }
    };
  }

  saveCard(stripe) {
    const _mine = this;

    return (dispatch, getState) => {
      return dispatch(
        ensureWaitBox().doWait(
          'Saving card details',
          Promise.resolve(
            stripe.createToken().then((token) => {
              if (token && token.error) {
                throw token.error.message || 'failed to tokenize card';
              }

              return token;
            }),
          )
            .then((response) => {
              return fetch(encodeURI(`/api/billing/newCard/${response.token.id}`));
            })
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<CardEditModel>)
            .then((cards) => dispatch(this._myActions.loadCards(Promise.resolve(cards))))
            .then(() => true),
        ),
      );
    };
  }

  InitBillingView() {
    const _mine = this;
    return async (dispatch, getState) => {
      const { subscriptionAsync, cardsOnFileAsync } = _mine.getCurrentState(getState());

      const statusRes = await dispatch(this.EnsureSubscription());

      if (SubscriptionStatusModel.unavailable == statusRes) {
        console.error('subscriber status unavilable');
        return;
      }

      if (!cardsOnFileAsync || (!cardsOnFileAsync.result && !cardsOnFileAsync.isLoading)) {
        const loadPromise = fetch('/api/billing/cards')
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as Promise<CardEditModel>);

        dispatch(this._myActions.loadCards(loadPromise));
      }
    };
  }

  EnsureSubscription() {
    return (dispatch, getState) => {
      const _mine = this;

      return dispatch(
        this._myActions.loadSubscription(
          fetch('/api/billing/subscription')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<SubscriptionModel>),
        ),
      )
        .then(() => new Promise((r) => setTimeout(r, 100)))
        .then(() => {
          const { subscriptionAsync } = _mine.getCurrentState(getState());

          if (!subscriptionAsync || subscriptionAsync.error) {
            console.log('failed to load subscriptions');
            return SubscriptionStatusModel.unavailable;
          }

          if (!subscriptionAsync.result) return SubscriptionStatusModel.unavailable;

          if (
            SubscriptionStatusModel.active == subscriptionAsync.result.status ||
            SubscriptionStatusModel.unavailable == subscriptionAsync.result.status
          )
            return subscriptionAsync.result.status;

          if (
            SubscriptionStatusModel.trialing == subscriptionAsync.result.status &&
            subscriptionAsync.result.trialDaysLeft > 3
          )
            return subscriptionAsync.result.status;

          dispatch(push('/myAccount'));

          return subscriptionAsync.result.status;
        });
    };
  }
}

export default () => BillingReducer.getInstance(BillingReducer, 'billing');
