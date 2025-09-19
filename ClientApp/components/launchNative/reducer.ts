import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { JobDataModel } from '../../generated/JobDataModel';
import { JobExecutionStatusModel } from '../../generated/JobExecutionStatusModel';
import { JobResultModel } from '../../generated/JobResultModel';
import { JobTypeModel } from '../../generated/JobTypeModel';
import ReducerBase from 'base/baseReducer';
import { checkFetchError } from 'base/asyncLoader';
import ensureMessaging from '../messaging/reducer';
import { jobStatusModel } from '../../generated/jobStatusModel';
import { newNativeJobModel } from '../../generated/newNativeJobModel';

type JobStatusUpdateParams = {
  newJob?: boolean;
  error?: string;
  status?: jobStatusModel;
  jobCode?: string;
};

export interface ILaunchNativeState {
  currentJob: JobStatusUpdateParams;
}

type myActions = {
  setJobStatus: (value: JobStatusUpdateParams) => JobStatusUpdateParams;
};

class launchNativeReducer extends ReducerBase<ILaunchNativeState, myActions> {
  createActionList() {
    return {
      setJobStatus: (value: JobStatusUpdateParams) => value,
    };
  }

  reducers() {
    const me = this;
    return {
      currentJob: handleAction(
        this._myActions.setJobStatus,
        (state, action) => {
          if (!action.payload) return null;

          const payload = action.payload as JobStatusUpdateParams;

          //make sure we are creating a new job if there are no current jobs
          if (!state && !payload.newJob) return null;

          return _.assign({}, state || {}, payload);
        },
        null,
      ),
    };
  }

  private pollLoop(dispatch, getState, jobCode): PromiseLike<JobResultModel> {
    const _mine = this;
    return Promise.resolve()
      .then(() => {
        const { currentJob } = this.getCurrentState(getState());
        if (!currentJob) throw 'user cancelled';
        return true;
      })
      .then(() => new Promise((resolve) => setTimeout(resolve, 1000 * 5)))
      .then(() => fetch('api/jobCode/Status/' + jobCode))
      .then((response) => checkFetchError(response))
      .then((response) => response.json() as Promise<JobExecutionStatusModel>)
      .then((res) => {
        dispatch(_mine._myActions.setJobStatus({ status: res.status }));

        if (jobStatusModel.completed != res.status)
          return _mine.pollLoop(dispatch, getState, jobCode);
        else return res.result;
      });
  }

  cancelCurrentJob = () => this._myActions.setJobStatus(null);

  private ScanPop<T extends { theJob: newNativeJobModel }>(createNewJob: PromiseLike<T>) {
    const width = 200;
    const height = 400;

    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    //IF we are running in Iframe we use external popup to launch the native app

    //if (window.frameElement) { doesn't work always return null

    let externalWindow: Window = null;
    if (window !== window.parent) {
      console.info('Running in frame element, using external window for popup');

      externalWindow = window.open(
        '/home/authredirect',
        'Initiating native app',
        `width=${width},height=${height},left=${left},top=${top}`,
      );
      if (null == externalWindow) throw 'Failed to open native app poup';
    }

    //Now that the Window/external popup is open we can the Job creation part

    return Promise.resolve(createNewJob)
      .then((response) => {
        var appUrl = `scanrev://${encodeURIComponent(JSON.stringify(response.theJob))}`;
        console.info('App Url:' + appUrl);
        (externalWindow ? externalWindow : window).location.href = appUrl;

        return response;
      })
      .then((response) => new Promise((r) => setTimeout(() => r(response), 100)) as PromiseLike<T>)
      .then((response) => {
        if (externalWindow) externalWindow.close();
        externalWindow = null;

        return response;
      })
      .catch((err) => {
        if (externalWindow) externalWindow.close();

        throw err;
      });
  }

  launch<T>(jobData: JobDataModel, callback?: (t: T) => void) {
    return (dispatch, getState) => {
      const { currentJob } = this.getCurrentState(getState());
      if (null != currentJob) return Promise.reject('Another native action in progress');

      if (!navigator || navigator.platform != 'Win32') {
        dispatch(
          this._myActions.setJobStatus({
            newJob: true,
            error:
              'Currently ' +
              (navigator ? navigator.platform : 'Unknown platform') +
              ' is not supported',
          }),
        );
        return Promise.reject('platform not supported');
      }

      const _mine = this;
      const newJobCreator = Promise.resolve()
        .then(() => {
          dispatch(this._myActions.setJobStatus({ newJob: true, status: jobStatusModel.checking }));

          //create the new Job
          return fetch('api/jobCode', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
          })
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as newNativeJobModel)
            .then((response) => {
              dispatch(_mine._myActions.setJobStatus({ jobCode: response.jobCode }));
              return response;
            });
        })
        .then((responce) => {
          const jobResultPushPromise = dispatch(
            ensureMessaging().WaitFor<JobExecutionStatusModel, JobResultModel>(
              'jobStatusUpdated',
              (jobStatus) => {
                dispatch(_mine._myActions.setJobStatus({ status: jobStatus.status }));

                if (callback && jobStatusModel.completed != jobStatus.status) {
                  if (jobStatus.result && !jobStatus.result.isError && jobStatus.result.details) {
                    console.debug('launchNative :got intermideate step');

                    callback(JSON.parse(jobStatus.result.details));
                  }
                }

                if (jobStatusModel.completed == jobStatus.status) return jobStatus.result;

                //else tell the singIR connector that it should continue watching
                throw { continueWatch: true };
              },
            ),
          ) as PromiseLike<JobResultModel>;

          return { jobResultPushPromise, theJob: responce };
        });
      //This needs to be called early after user button press as we might be opening a window
      //that's why we pass it the promise, so it can resolve the promise after the window is opened
      return (
        this.ScanPop(newJobCreator)
          .then(({ jobResultPushPromise, theJob }) => {
            const pushedResult = Promise.resolve(jobResultPushPromise).catch((err) => {
              console.log(`socker error: ${err && JSON.stringify(err)}`);

              //we are returning a promise that will never resolve. so that pollloop always wins the race
              return new Promise<JobResultModel>((r) => {});
            });

            return Promise.race([pushedResult, _mine.pollLoop(dispatch, getState, theJob.jobCode)]);
          })
          //.then(response => new Promise((resolve) => setTimeout(() => resolve(response), 1000 * 5)))
          .then(function (res) {
            if (res.isError) {
              throw res.details;
            }

            dispatch(_mine._myActions.setJobStatus(null));

            //return res.details;
            return res.details && JSON.parse(res.details);
          })
          .catch(function (err) {
            console.error('Native error :' + err.toString());
            dispatch(_mine._myActions.setJobStatus(null));
            throw err;
          })
      );
    };
  }
}

export default () => launchNativeReducer.getInstance(launchNativeReducer, 'launchNative');
