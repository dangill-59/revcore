import * as React from 'react';
import * as _ from 'lodash';

import { Button, Image } from 'react-bootstrap';
import ensureBilling, { PlanMap } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { SubscriptionModel } from '../../generated/SubscriptionModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const PlansLoader = createLoaderView<PlanMap>();
const SubscriptionLoader = createLoaderView<SubscriptionModel>();

type ConnectedProps = {
  readonly availablePlansAsync: IAsyncResult<PlanMap>;
  readonly subscriptionAsync: IAsyncResult<SubscriptionModel>;
};

class UpdateSubscriptionView extends React.PureComponent<ConnectedProps & { dispatch }, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureBilling().InitBillingView());
    dispatch(ensureBilling().loadPlans());
  }

  render() {
    const { dispatch, subscriptionAsync, availablePlansAsync } = this.props;

    let subscribedPlanId = null;
    if (subscriptionAsync && subscriptionAsync.result) {
      const revPlan = _.find(
        subscriptionAsync.result.details,
        (detail) => 'revSeats' == detail.forProduct,
      );

      if (revPlan) subscribedPlanId = revPlan.planId;
    }

    let subscriptionMessagestyle = 'text-info';
    if (subscriptionAsync && subscriptionAsync.result) {
      if ('trialing' == subscriptionAsync.result.status) subscriptionMessagestyle = 'text-warning';
      else if ('active' != subscriptionAsync.result.status)
        subscriptionMessagestyle = 'text-danger';
    }

    return (
      <div className='mainInfo text-center container'>
        {subscriptionAsync && (
          <SubscriptionLoader asyncResult={subscriptionAsync} prompt='loading subscription details'>
            {availablePlansAsync && (
              <PlansLoader asyncResult={availablePlansAsync} prompt='loading available plans'>
                {subscriptionAsync.result && availablePlansAsync.result && (
                  <div>
                    <div>
                      {(availablePlansAsync.result['revSeats'] || []).map((plan) => (
                        <div
                          key={plan.id}
                          style={{
                            display: 'inline-block',
                            width: 300,
                            margin: 10,
                            border: 'solid 1px #ccc',
                            verticalAlign: 'top',
                          }}
                        >
                          <div className='bg-primary' style={{ paddingBottom: 20 }}>
                            <Image
                              src={plan.image}
                              responsive
                              style={{ maxWidth: 190, margin: 'auto' }}
                            />
                          </div>

                          <div
                            className='bg-warning'
                            style={{ marginTop: -10, padding: '10px 5px', height: 100 }}
                          >
                            <h4 className='text-primary'>{plan.description}</h4>
                            <strong className='text-muted'>{plan.pricing}</strong>
                          </div>

                          <div style={{ margin: 10 }}>
                            {plan.id == subscribedPlanId ? (
                              <div>
                                {subscriptionAsync.result.status == 'trialing' && (
                                  <div>
                                    <small className='text-muted'>
                                      {subscriptionAsync.result.trialDaysLeft} day(s) of free trial
                                      left
                                    </small>
                                  </div>
                                )}

                                <Button
                                  bsSize='large'
                                  bsStyle='default'
                                  style={{ padding: 10 }}
                                  onClick={() => dispatch(ensureBilling().updateRevSubscription())}
                                >
                                  Keep current
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <Button
                                  bsSize='large'
                                  bsStyle='warning'
                                  style={{ padding: 10 }}
                                  disabled
                                >
                                  Coming soon
                                </Button>
                              </div>
                            )}
                          </div>

                          <div
                            style={{ marginTop: 10, padding: '20px 3px' }}
                            className='bg-info text-left'
                          >
                            <ul>
                              {(plan.display || []).map((dtext, i) => (
                                <li key={`${plan.id}_text_${i}`}>
                                  <span>{dtext}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </PlansLoader>
            )}
          </SubscriptionLoader>
        )}
      </div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { subscriptionAsync, availablePlansAsync } = ensureBilling().getCurrentState(state);

  return { subscriptionAsync, availablePlansAsync };
})(UpdateSubscriptionView);
