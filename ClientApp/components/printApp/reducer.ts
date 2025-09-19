import * as React from 'react';
import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { BooleanLiteral } from 'typescript';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { MailReqModel } from '../../generated/MailReqModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { PageImageTypeModel } from '../../generated/PageImageTypeModel';
import { PreparePdfresultModel } from '../../generated/PreparePdfresultModel';
import ReducerBase from 'base/baseReducer';
import { ThunkAction } from 'redux-thunk';
import { checkFetchError } from 'base/asyncLoader';
import contentDisposition from 'content-disposition';
import download from 'downloadjs';
import ensureCarts from '../carts/reducer';
import ensureWaitBox from '../waitBox/reducer';
import { forEach } from 'lodash';
import { processLongPoll } from '../messaging/longrunningPoll';

export type PrintPagesProps = { includeUnprocessed?: boolean };

export type PrintableProps = {
  //the method that gets pages to print
  pagesGetter: (
    options?: PrintPagesProps,
  ) => (dispatch: any, getState: any) => PromiseLike<PageImageModel[]>;

  //a menu that allows functions on the page
  extraMenu?: React.ReactElement<any>;
  isInSearch?: boolean;
};

export type PrintLoad = {
  //the pages to print
  pages: PageImageModel[];

  //to be called by PrintSection when all pages to be printed are loaded
  onLoaded: (done: PromiseLike<any>) => void;
};

export type EditMailReqModel = MailReqModel & {
  validations?: { [key: string]: string };
  showCC?: boolean;
  mailTo?: string;
  ccTo?: string;
  images?: PageImageModel[];
  selectedDocId?: string[];
  isOriginalDocs?: boolean;
};

export function validateEmail(addressArray: string[], required: boolean) {
  const emailRE =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!addressArray || addressArray.length == 0) {
    return required ? 'email address required' : null;
  }

  for (let i = 0; i < addressArray.length; i++) {
    if (!emailRE.test(addressArray[i])) {
      return 'invalid email address';
    }
  }

  return null;
}

export interface IPrintState {
  //readonly printPrepareStatusAsync: IAsyncResult<PageImageModel[]>;

  //a delegate that returns prnitable pages
  readonly printableState: PrintableProps;

  //print app loads these pages and prints them
  readonly printLoad?: PrintLoad;

  readonly mailRequest?: EditMailReqModel;
  readonly mailsendStatusAsync: IAsyncResult<boolean>;
}

type ThunkResult<R> = ThunkAction<R, IPrintState, any>;

type myActions = {
  //print: (getherDocs: PromiseLike<PageImageModel[]>) => PageImageModel[];
  setPrintable: (value?: PrintableProps) => PrintableProps;
  setPrintLoad: (value?: PrintLoad) => PrintLoad;

  updateMailReq: (
    key: string,
    value?: boolean | string,
    validation?: string,
  ) => { key: string; value?: boolean | string; validation?: string };
  prepareMail: (value?: PageImageModel[]) => PageImageModel[];
  sendMail: (req: PromiseLike<boolean>) => PromiseLike<boolean>;
  isOriginalDocs: (value?: boolean) => boolean;
};

class printReducer extends ReducerBase<IPrintState, myActions> {
  createActionList() {
    return {
      setPrintLoad: (value?: PrintLoad) => value,
      setPrintable: (value?: PrintableProps) => value,

      updateMailReq: (key: string, value?: boolean | string, validation?: string) => ({
        key,
        value,
        validation,
      }),
      prepareMail: (value?: PageImageModel[]) => value,
      isOriginalDocs: (value?: boolean) => value,
      sendMail: [(req: PromiseLike<boolean>) => req, () => ({ Async: true })],
    };
  }

  reducers() {
    const me = this;

    let mailHandlers = {};
    mailHandlers[this._myActions.prepareMail.toString()] = (state, action) => {
      //if not preparing mail set state to null
      const currState = _.clone(state || {}) as EditMailReqModel;
      const payload = action.payload as PageImageModel[];

      const newState: EditMailReqModel = payload
        ? {
            images: payload,
            mailtoList: [],
            ccList: [],
            message: '',
            attachmentName: 'Rev images',
            subject: 'Rev images',
            isOriginalDocs: currState.isOriginalDocs,
          }
        : null;

      return newState;
    };
    mailHandlers[this._myActions.isOriginalDocs.toString()] = (state, action) => {
      const currState = _.clone(state || {}) as EditMailReqModel;
      const payload = action.payload as Boolean;

      if (payload) {
        currState.isOriginalDocs = true;
      }

      return currState;
    };
    mailHandlers[this._myActions.updateMailReq.toString()] = (state, action) => {
      const currState = _.clone(state || {}) as EditMailReqModel;
      const payload = action.payload as { key: string; value?: string; validation?: string };

      if (typeof payload.value !== 'undefined') currState[payload.key] = payload.value;

      if (typeof payload.validation !== 'undefined') {
        if (!currState.validations) currState.validations = {};
        currState.validations[payload.key] = payload.validation;
      }

      return currState;
    };

    return {
      printableState: handleAction(
        this._myActions.setPrintable,
        (state, action) => action.payload,
        null,
      ),
      printLoad: handleAction(
        this._myActions.setPrintLoad,
        (state, action) => action.payload,
        null,
      ),

      mailRequest: handleActions(mailHandlers, null),
      mailsendStatusAsync: handleAction(
        this._myActions.sendMail,
        (state, action) => action.payload,
        null,
      ),
    };
  }

  updateMailReq = (key: string, value: boolean | string) =>
    this._myActions.updateMailReq(key, value, null);

  prepareMail(options?: { hideEditor?: boolean; pages?: PageImageModel[] }, isOriginal?: boolean) {
    return (dispatch, getState) => {
      if (options && options.hideEditor) {
        dispatch(this._myActions.sendMail(null));
        return dispatch(this._myActions.prepareMail(null));
      }

      const k1 = ensureWaitBox().doWaitAsync('Preparing images to print', async () => {
        let pages = options && options.pages;

        if (!pages) {
          const { printableState } = this.getCurrentState(getState());
          if (!printableState) throw 'no component can print';

          pages = await this.getStuffToPrint(dispatch, getState);
        }
        if (isOriginal) {
          dispatch(this._myActions.isOriginalDocs(true));
        }
        dispatch(this._myActions.prepareMail(pages));

        return true;
      });

      return dispatch(k1);
    };
  }

  addToCart() {
    return (dispatch, getState) => {
      const _mine = this;

      const { printableState } = this.getCurrentState(getState());
      if (!printableState) throw 'no component can print';

      const preparePromise = this.getStuffToPrint(dispatch, getState).then((pages) => {
        dispatch(ensureCarts().addPages(pages));
        return true;
      });

      return dispatch(ensureWaitBox().doWait('Preparing images to add', preparePromise));
    };
  }

  private splitEmailAddress = function (value: string) {
    if (!value) return null;
    return _.filter(value.split(/[ ,]+/), (v) => !!v);
  };

  sendMail() {
    return async (dispatch, getState) => {
      const { mailRequest } = this.getCurrentState(getState());
      if (!mailRequest) throw 'no pending mail request';

      const myReq = _.clone(mailRequest);
      mailRequest.validations = {};

      mailRequest.mailtoList = this.splitEmailAddress(mailRequest.mailTo);
      mailRequest.validations.mailTo = validateEmail(mailRequest.mailtoList, true);

      mailRequest.ccList = null;
      if (mailRequest.showCC) {
        mailRequest.ccList = this.splitEmailAddress(mailRequest.ccTo);
        mailRequest.validations.ccTo = validateEmail(mailRequest.ccList, false);
      }

      if (_.find(_.keys(mailRequest.validations), (k) => !!mailRequest.validations[k]))
        throw 'missing information';

      if (!mailRequest.images || 0 == mailRequest.images.length) throw 'no images selected';

      const emailPromise = async () => {
        const pdfJobId = await fetch(
          `/api/email/createPrintablePdf/true/${mailRequest.isOriginalDocs}`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailRequest.images),
          },
        )
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as PreparePdfresultModel);

        const pdfjobResut = pdfJobId;
        mailRequest.pdfJobResult = pdfjobResut;
        await dispatch(
          processLongPoll<IPrintState>(async () => {
            while (true) {
              try {
                const response = await fetch('/api/email', {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(_.assign({}, mailRequest)),
                });

                if (!response.ok) {
                  //log retry
                  if (response.status == 504) {
                    console.log(response.headers);
                    console.log('retrying to send mail again');
                    continue;
                  } else {
                    await checkFetchError(response);
                  }
                }
                break;
              } catch (err) {
                //log it here
                console.log(err);
                throw err;
              }
            }
          }),
        );

        return true;
      };

      return dispatch(this._myActions.sendMail(emailPromise()));
    };
  }

  setPrintable = (value?: PrintableProps) => this._myActions.setPrintable(value);

  private getStuffToPrint(dispatch, getState, options?: PrintPagesProps) {
    return Promise.resolve()
      .then(() => {
        const { printableState, printLoad } = this.getCurrentState(getState());
        if (!printableState) throw 'no component can print';

        if (printLoad) throw 'another operation in progress';

        return dispatch(printableState.pagesGetter(options));
      })
      .then((res) => {
        const pages = res as PageImageModel[];
        if (!pages || !pages.length) throw 'no pages to print';
        console.log(`printing pages count =${pages.length}`);

        return pages;
      });
  }

  downloadOriginals(forIds?: string[]) {
    return (dispatch, getState) => {
      const _mine = this;

      const originalsPromise = !!forIds
        ? Promise.resolve(forIds)
        : this.getStuffToPrint(dispatch, getState, { includeUnprocessed: true })
            .then((pages) => {
              if (!pages || pages.length == 0) throw 'No images to print';
              return pages;
            })
            .then((pages) => {
              const originalsIds = _.uniq(
                _.filter(
                  _.map(pages, (p) => {
                    if (!!p.originalId) return p.originalId;

                    if (PageImageTypeModel.unprocessed == p.pageType) return p.id;
                  }),
                  (orginalId) => !!orginalId,
                ),
              );
              if (0 == originalsIds.length) throw 'No original files found';
              return originalsIds;
            });

      const printPromise = originalsPromise
        .then((originalsIds) => {
          return Promise.all(
            _.map(originalsIds, (orgId) =>
              fetch(`/api/pages/original/${encodeURIComponent(orgId)}`)
                .then((response) => checkFetchError(response))
                .then((response) => {
                  //"attachment; filename=original.TIF; filename*=UTF-8''original.TIF"
                  const g = contentDisposition.parse(response.headers.get('content-disposition'));

                  if (!(g && g.parameters && g.parameters.filename))
                    throw 'invalid original filename';

                  const fileExt = g.parameters.filename.split('.').pop();
                  return Promise.all([fileExt, response.blob()]);
                })
                .then(([fileExt, blob]) => {
                  const timeStr = new Date().toISOString().replace(/z|t/gi, ' ');
                  download(blob, `revOriginal ${timeStr}.${fileExt}`, 'application/octet-stream');
                }),
            ),
          );
        })
        .then(() => true);

      return dispatch(ensureWaitBox().doWait('loading originals ...', printPromise));
    };
  }

  downloadPdf(pages?: PageImageModel[], indexValue?: string): ThunkResult<Promise<void>> {
    return async (dispatch, getState) => {
      const k1 = ensureWaitBox().doWaitAsync('loading images to print ...', async () => {
        if (!pages) {
          pages = await this.getStuffToPrint(dispatch, getState);
        }

        if (!pages || pages.length == 0) throw 'No images to print';

        const jobId = await fetch('/api/email/createPrintablePdf', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pages),
        })
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as PreparePdfresultModel);

        await dispatch(
          processLongPoll<IPrintState>(async () => {
            const blob = await (
              await checkFetchError(
                await fetch(`/api/email/printablePdf/${encodeURIComponent(jobId.pdfId)}`),
              )
            ).blob();

            const timeStr = new Date().toISOString().replace(/z|t/gi, ' ');
            await download(blob, `revImages ${timeStr}.pdf`, 'application/pdf');
          }),
        );

        return true;
      });

      dispatch(k1);
    };
  }

  //we don't really use this as web printing sucks
  print() {
    return (dispatch, getState) => {
      const _mine = this;
      const printPromise = this.getStuffToPrint(dispatch, getState)

        .then((pages) => {
          return new Promise((resolve) => {
            return dispatch(_mine._myActions.setPrintLoad({ pages, onLoaded: resolve }));
          });
        })
        .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
        .then(() => {
          window.print();
        })
        .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
        .then(() => {
          return dispatch(_mine._myActions.setPrintLoad(null));
        })

        .then(() => true);

      return dispatch(ensureWaitBox().doWait('loading images and printing ...', printPromise));
    };
  }
}

export default () => printReducer.getInstance(printReducer, 'printApp');
