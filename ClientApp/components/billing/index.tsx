import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import {
  Button,
  Col,
  FormControl,
  FormGroup,
  Grid,
  Image,
  InputGroup,
  OverlayTrigger,
  Panel,
  Row,
  Tooltip,
} from 'react-bootstrap';
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  PostalCodeElement,
  StripeProvider,
  injectStripe,
} from 'react-stripe-elements';
import ensureBilling, { IBillingState } from './reducer';

import { CardEditModel } from '../../generated/CardEditModel';
import { DateRangePicker } from 'react-dates';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { InvoiceModel } from '../../generated/InvoiceModel';
import { SubscriptionDetailsModel } from '../../generated/SubscriptionDetailsModel';
import { SubscriptionModel } from '../../generated/SubscriptionModel';
import { SubscriptionStatusModel } from '../../generated/SubscriptionStatusModel';
import UpdateView from './update';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureWorkspace from '../workspace/reducer';

const Cardlogo = require('./creditcard.jpg');

const SubscriptionLoader = createLoaderView<SubscriptionModel>();

const InvoicesLoader = createLoaderView<InvoiceModel[]>();

const CardsViewLoader = createLoaderView<CardEditModel>();

type ConnectedProps = IBillingState & {};

const _CardView = ({ dispatch, stripe }) => (
  <div className='text-center'>
    <div style={{ display: 'inline-block' }}>
      <span>Card number</span>
    </div>

    <div style={{ display: 'inline-block' }}>
      <Image src={Cardlogo} alt='credit cards' style={{ height: 25, marginLeft: 25 }} />
    </div>

    <div
      style={{ border: 'solid 1px #ccc', padding: 5, width: 281, margin: 'auto', marginTop: 10 }}
    >
      <CardNumberElement />
    </div>

    <div style={{ marginTop: 15 }}>
      <div style={{ display: 'inline-block' }}>
        <div>
          <span>Expiration</span>
        </div>

        <div style={{ border: 'solid 1px #ccc', padding: 5, width: 150 }}>
          <CardExpiryElement />
        </div>
      </div>

      <div style={{ display: 'inline-block', marginLeft: 30 }}>
        <div>
          <span>Security code</span>
        </div>

        <div style={{ border: 'solid 1px #ccc', padding: 5, width: 100 }}>
          <CardCVCElement />
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <div>
          <span>Zipcode</span>
        </div>

        <div style={{ border: 'solid 1px #ccc', padding: 5, width: 281, margin: 'auto' }}>
          <PostalCodeElement />
        </div>
      </div>
    </div>

    <div
      className='text-center'
      style={{
        margin: 'auto',
        width: 281,
        padding: '20px 0px',
      }}
    >
      <Button bsStyle='success' block onClick={() => dispatch(ensureBilling().saveCard(stripe))}>
        Submit card information
      </Button>
      <div className='text-muted text-left' style={{ marginTop: 20 }}>
        <small>
          * REV uses "Stripe" for all credit card processing and storage. Your card information is
          directly transferred to stripe and is never seen by our servers. We chose stripe as it has
          proven to exceed highest levels of security standards in online credit card transactions.
          For more information visit{' '}
          <a href='https://stripe.com/docs/security/stripe' target='_blank'>
            https://stripe.com/docs/security/stripe
          </a>
        </small>
      </div>
    </div>
  </div>
);

const CardView = injectStripe(_CardView);

type StateProps = { focusedDateinput?: any; deletepanelOpen?: boolean };

class BillingView extends React.PureComponent<ConnectedProps & { dispatch }, StateProps> {
  state: StateProps = {};

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureBilling().InitBillingView());
  }

  render() {
    const {
      dispatch,
      subscriptionAsync,
      cardsOnFileAsync,
      enteringNewCard,
      showingUpdateView,
      newRevSeatCount,
      coupon,
      invDateRange,
      invoiceListAsync,
    } = this.props;

    let subscriptionMessagestyle = 'text-info';
    if (subscriptionAsync && subscriptionAsync.result) {
      if (SubscriptionStatusModel.trialing == subscriptionAsync.result.status)
        subscriptionMessagestyle = 'text-warning';
      else if (SubscriptionStatusModel.unavailable == subscriptionAsync.result.status) {
        return (
          <h3 className='text-danger text-center'>
            {' '}
            Your subscription status is currently unavailable{' '}
          </h3>
        );
      } else if (SubscriptionStatusModel.active != subscriptionAsync.result.status)
        subscriptionMessagestyle = 'text-danger';
    }

    let revPlan: SubscriptionDetailsModel = null;
    if (subscriptionAsync && subscriptionAsync.result) {
      revPlan = _.find(
        subscriptionAsync.result.details,
        (detail) => 'revSeats' == detail.forProduct,
      );
    }

    const currentRevSeats = newRevSeatCount || (revPlan && revPlan.quantity);

    const interval =
      (subscriptionAsync &&
        subscriptionAsync.result &&
        subscriptionAsync.result.details &&
        subscriptionAsync.result.details.length > 0 &&
        subscriptionAsync.result.details[0].interval) ||
      'month';

    return (
      <div>
        {showingUpdateView ? (
          <UpdateView />
        ) : (
          <div className='mainInfo text-center container'>
            {subscriptionAsync && (
              <SubscriptionLoader
                asyncResult={subscriptionAsync}
                prompt='loading subscription details'
              >
                {subscriptionAsync.result && (
                  <div>
                    <h4 className='text-primary'> Subscription details</h4>

                    {'past_due' == subscriptionAsync.result.status ? (
                      <div style={{ textAlign: 'centre', display: 'inline-block' }}>
                        <p>
                          <h4 className={subscriptionMessagestyle}>
                            Your REV subscription is inactive.{' '}
                          </h4>
                          Please contact customer support at this link <br />
                          <i>
                            <a href='https://scanrev.freshdesk.com/a/tickets/new' target='_blank'>
                              https://scanrev.freshdesk.com/a/tickets/new
                            </a>{' '}
                          </i>
                        </p>
                      </div>
                    ) : (
                      <div style={{ textAlign: 'left', display: 'inline-block' }}>
                        <h4>
                          Your REV subscription is {subscriptionAsync.result.status} and paid till{' '}
                          {moment(subscriptionAsync.result.currentPeriodEnd)
                            .add(-1, 'day')
                            .format('l')}
                        </h4>
                      </div>
                    )}

                    {'trialing' == subscriptionAsync.result.status && (
                      <p>
                        <h4>{subscriptionAsync.result.trialDaysLeft} day(s) of free trial left</h4>
                      </p>
                    )}
                    <div>
                      {subscriptionAsync.result.currentPeriodEnd && (
                        //<small className="text-muted">Next invoice date {moment(subscriptionAsync.result.currentPeriodEnd).format('l')} </small>}
                        <h4>
                          Your next invoice is due on{' '}
                          {moment(subscriptionAsync.result.currentPeriodEnd).format('l')}
                        </h4>
                      )}
                    </div>

                    {/*{subscriptionAsync.result.details && <div style={{ textAlign: 'left', display: 'inline-block' }}>

                            <div>
                                <h4 className="text-primary">
                                    Subscription details: <i>(${subscriptionAsync.result.nextInvoiceAmount}/{interval})</i>
                                    <Button bsSize="small" bsStyle="warning"
                                        onClick={() => dispatch(ensureBilling().showUpdateView(true))}
                                        style={{ margin: 10 }}>
                                        Update subscription
                                    </Button>
                                </h4>
                            </div>

                            <ul>
                                {subscriptionAsync.result.details.map(sub => <li key={sub.planId}>
                                    {sub.description}
                                    {!sub.isMetered && <span className={newRevSeatCount ? 'text-danger' : ''}>
                                        : {currentRevSeats}
                                        {!!sub.unit && (' ' + sub.unit + (currentRevSeats == 1 ? '' : 's'))}

                                        <OverlayTrigger placement="bottom" overlay={(<Tooltip id="addseattooltip">Add licensed seats</Tooltip>)}>
                                            <Button bsSize="xs" bsStyle="primary" disabled={currentRevSeats >= 100}
                                                onClick={() => dispatch(ensureBilling().increaseRevSeatCount(true))}
                                                style={{ marginLeft: 5, width: 30 }}>
                                                +
                                            </Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger placement="bottom" overlay={(<Tooltip id="removeseattooltip">Reduce licensed seats</Tooltip>)}>
                                            <Button bsSize="xs" bsStyle="danger" disabled={currentRevSeats <= 1}
                                                onClick={() => dispatch(ensureBilling().increaseRevSeatCount(false))}
                                                style={{ marginLeft: 5, width: 30 }}>
                                                -
                                            </Button>
                                        </OverlayTrigger>

                                        {!!newRevSeatCount && <Button bsSize="xs" bsStyle="success"
                                            onClick={() => dispatch(ensureBilling().updateRevSeats())}
                                            style={{ marginLeft: 5 }}>
                                            subscribe updated seat count
                                        </Button>
                                        }

                                    </span>}
                                </li>)
                                }
                            </ul>
                        </div>
                    }

                        <FormGroup validationState="success" style={{ maxWidth: 600, margin:'10px auto' }}>
                            <InputGroup bsSize="small">
                                <InputGroup.Addon>
                                    Add coupon 
                                </InputGroup.Addon>
                                <FormControl type="text" value={coupon || ''} onChange={ (e:any) => dispatch(ensureBilling().setCoupon(e.target.value))} />
                                <InputGroup.Button>
                                    <Button disabled={!(coupon && coupon.length >= 5)} bsStyle="success"
                                        onClick={() => dispatch(ensureBilling().applyCoupon())}
                                    >
                                        Apply to my account
                                    </Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>*/}
                  </div>
                )}
              </SubscriptionLoader>
            )}
          </div>
        )}

        {/*<div className="mainInfo container text-center" style={{ margin: '20px auto', padding: 30 }}>

                <Button onClick={() => this.setState({ deletepanelOpen: !this.state.deletepanelOpen })} style={{ margin: 10 }}>
                    <span className="text-danger">How can I cancel my subscription? <i style={{ margingLeft: 20 }} className={`fa fa-caret-${!!this.state.deletepanelOpen ? 'up' : 'down'}`} aria-hidden="true"></i></span>
                </Button>
                <br />
                <Panel id="collapsible-panel-delete" expanded={!!this.state.deletepanelOpen} onToggle={() => { }}>
                    <Panel.Collapse>
                        <Panel.Body>
                            <p>You can cancel your subscription <strong>at any time</strong>. Once cancelled, your credit card will stop being charged and all your files will be <u>securely destroyed</u>.</p>
                            <h3>This process cannot be reversed</h3>
                            <p>In case you want to retrieve your files, please contact customer service <b>BEFORE</b> you cancel your subscription. <br />
                                For a nominal handling fee of $50 (+ media and shipping costs), we will <u>ship your data to you</u>. </p>

                            <Button bsSize="small" bsStyle="danger" style={{ margin: 20 }}
                                onClick={() => dispatch(ensureWorkspace().deleteWorkspace())}
                            >
                                Cancel my subscription and delete my workspace...
                            </Button>


                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>



            </div>*/}

        {cardsOnFileAsync && (
          <CardsViewLoader asyncResult={cardsOnFileAsync} prompt='loading payment sources'>
            {cardsOnFileAsync.result && (
              <Grid className='mainInfo' style={{ marginTop: 20, padding: 30 }}>
                {cardsOnFileAsync.result.currentCards &&
                  cardsOnFileAsync.result.currentCards.length == 0 && (
                    <Row>
                      <Col smOffset={3} sm={8}>
                        <h4 className='text-primary'>
                          You have no payment methods. Please enter one now
                        </h4>
                      </Col>
                      <Col sm={2}></Col>
                    </Row>
                  )}

                {!enteringNewCard &&
                  cardsOnFileAsync.result.currentCards &&
                  cardsOnFileAsync.result.currentCards.length > 0 && (
                    <div className='text-center'>
                      <h4 className='text-primary'>Current payment methods</h4>
                      <ul style={{ listStyle: 'none', maxWidth: 600, margin: 'auto' }}>
                        {cardsOnFileAsync.result.currentCards.map((card) => (
                          <li
                            key={card.id}
                            style={{
                              border: 'solid 1px #ccc',
                              padding: 10,
                              marginBottom: 23,
                            }}
                          >
                            <div style={{ float: 'left', width: 40, paddingTop: 11 }}>
                              <i
                                className='fa fa-credit-card fa-2x text-primary'
                                aria-hidden='true'
                              />
                            </div>

                            <div className='text-right' style={{ float: 'right' }}>
                              <div className={card.isExpired ? 'text-danger' : ''}>
                                <span className='text-muted'> Expiry On:</span>
                                <span>{card.expiration}</span>
                              </div>
                              <div style={{ fontSize: 'small' }}>
                                {!card.isDefault && (
                                  <Button
                                    bsStyle='default'
                                    bsSize='xs'
                                    style={{ padding: 0 }}
                                    onClick={() => dispatch(ensureBilling().makeDefault(card.id))}
                                  >
                                    <span> make default </span>
                                  </Button>
                                )}

                                <Button
                                  bsStyle='link'
                                  style={{ padding: 0, marginLeft: 10 }}
                                  onClick={() => dispatch(ensureBilling().removeCard(card.id))}
                                >
                                  <span className='text-warning'> remove</span>
                                </Button>
                              </div>
                            </div>

                            <div className='text-left' style={{ marginLeft: 45, paddingTop: 6 }}>
                              <div>
                                <strong>{card.brand}</strong>
                                {card.isDefault && <span>(default)</span>}
                              </div>
                              <div className='text-muted' style={{ fontSize: 'smaller' }}>
                                ending in {card.last4}
                              </div>
                            </div>

                            <div style={{ clear: 'both' }}></div>
                          </li>
                        ))}
                      </ul>

                      <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'right' }}>
                        <Button
                          bsSize='sm'
                          bsStyle='success'
                          onClick={() => dispatch(ensureBilling().showCardForm(true))}
                        >
                          Enter another card
                        </Button>
                      </div>
                    </div>
                  )}

                {enteringNewCard && (
                  <div style={{ marginTop: 35 }}>
                    <StripeProvider apiKey={cardsOnFileAsync.result.stripePubKey}>
                      <Elements>
                        <CardView dispatch={dispatch} />
                      </Elements>
                    </StripeProvider>
                  </div>
                )}
              </Grid>
            )}
          </CardsViewLoader>
        )}

        <div className='mainInfo container' style={{ margin: '20px auto', padding: 30 }}>
          <div className='text-center'>
            {invoiceListAsync ? (
              <h4 className='text-primary'>My invoices</h4>
            ) : (
              <Button
                bsSize='small'
                bsStyle='info'
                style={{ margin: 10 }}
                onClick={() => dispatch(ensureBilling().showInvoices())}
              >
                VIEW INVOICES
              </Button>
            )}

            {/*<DateRangePicker
                        startDate={moment(invDateRange.start)} // momentPropTypes.momentObj or null,
                        startDateId="inv_start_date_id" // PropTypes.string.isRequired,
                        endDate={moment(invDateRange.end)} // momentPropTypes.momentObj or null,
                        endDateId="inv_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => dispatch(ensureBilling().showInvoices({ start: startDate, end: endDate }))} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedDateinput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedDateinput: focusedInput })} // PropTypes.func.isRequired,
                        isOutsideRange={day => (moment().diff(day) <= 0)}
                    />*/}
          </div>

          <div>
            {invoiceListAsync && (
              <InvoicesLoader asyncResult={invoiceListAsync} prompt='loading invoices'>
                {invoiceListAsync.result && (
                  <table style={{ width: '100%', margin: '10px 0px' }}>
                    <thead style={{ borderBottom: '1px solid rgba(204, 204, 204, 0.35)' }}>
                      <tr>
                        <th style={{ width: '25%', paddingLeft: 15 }}>Date</th>

                        <th style={{ width: '50%', paddingLeft: 5, paddingTop: 10 }}>
                          Invoice number
                        </th>

                        <th style={{ width: '25%' }}>Amount</th>
                      </tr>
                    </thead>

                    <tbody>
                      {invoiceListAsync.result.map((invoice) => (
                        <tr key={invoice.number}>
                          <td style={{ width: '25%', paddingLeft: 10 }}>
                            {moment(invoice.date).format('L')}
                          </td>

                          <td
                            style={{ width: '50%', padding: '10px 0px' }}
                            className={'text-center ' + invoice.invoicePdf ? '' : 'text-warning'}
                          >
                            {invoice.invoicePdf ? (
                              <OverlayTrigger
                                placement='bottom'
                                overlay={<Tooltip id='invtooltip'>Download printable pdf</Tooltip>}
                              >
                                <a href={invoice.invoicePdf}>
                                  {' '}
                                  <i className='fa fa-file-pdf-o' aria-hidden='true'></i>{' '}
                                  {invoice.number}
                                </a>
                              </OverlayTrigger>
                            ) : (
                              <span>{invoice.number} - pending</span>
                            )}

                            {invoice.description && (
                              <p>
                                <small>{invoice.description}</small>
                              </p>
                            )}
                          </td>

                          <td style={{ width: '25%', paddingLeft: 5 }}>
                            <strong className={invoice.paid ? '' : 'text-danger'}>
                              ${invoice.total.toFixed(2)}
                            </strong>
                            {!!invoice.endingBalance && (
                              <p
                                className={
                                  invoice.endingBalance < 0 ? 'text-success' : 'text-danger'
                                }
                              >
                                <small>
                                  <span className='text-muted'>balance </span>$
                                  {(-1 * invoice.endingBalance).toFixed(2)}
                                </small>
                              </p>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </InvoicesLoader>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  return ensureBilling().getCurrentState(state);
})(BillingView);
