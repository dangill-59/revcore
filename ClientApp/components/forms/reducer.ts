import * as _ from 'lodash';

import { EditableDocument, ListDocsHelper } from '../listDocuments/reducerHelper';
import { checkFetchError, getResponce } from 'base/asyncLoader';
import { handleAction, handleActions } from 'redux-actions';

import { AutomationRunResultModel } from '../../generated/AutomationRunResultModel';
import { AutomationTaskModel } from '../../generated/AutomationTaskModel';
import { DetectReqModel } from '../../generated/DetectReqModel';
import { DetectReqResultModel } from '../../generated/DetectReqResultModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { JobTypeModel } from '../../generated/JobTypeModel';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { OCRZoneModel } from '../../generated/OCRZoneModel';
import { PageImageModel } from '../../generated/PageImageModel';
import ReducerBase from 'base/baseReducer';
import { RegexReqModel } from '../../generated/RegexReqModel';
import { ZoneTypeModel } from '../../generated/ZoneTypeModel';
import ensureConfirmBox from '../confirmation/reducer';
import ensureLaunchNative from '../launchNative/reducer';
import ensureProjects from '../projects/reducer';
import ensureWaitBox from '../waitBox/reducer';
import { processLongPoll } from '../messaging/longrunningPoll';

export enum LogLevel {
  info = 'info',
  warn = 'warn',
  error = 'error',
}
//dee todo: read this from a common place
type LogEntry = {
  message: string;
  LogLevel: LogLevel;
};

export type AutomationRunProps = { name: string; logs: LogEntry[]; showLogs?: boolean };

export type AutomationTaskEdit = AutomationTaskModel & {
  activeTab?: string;
  usingReferenceImage?: boolean;

  //formsurface props
  brushColor?: any;

  activeZone?: OCRZoneModel;

  //map zone.clientReference -> detectedZone
  detectedArray?: { [key: string]: IAsyncResult<DetectReqResultModel> };
};

export interface IFormsState {
  readonly listAutomationsAsync: IAsyncResult<AutomationTaskModel[]>;
  readonly currentlyEditing?: AutomationTaskEdit;

  //the width of Form Image
  readonly imageWidth: number;

  readonly lastAutomationRun: AutomationRunProps;
}

type myActions = {
  loadAutomations: () => PromiseLike<AutomationTaskModel[]>;
  selectAutomationForEdit: (value: AutomationTaskEdit) => void;

  updateAutomationProp: (field: string, value: any) => { field: string; value: any };
  zoom: (out?: boolean) => void;

  //we need the zone index numbers so that we put the results in correct place
  detectZone: (
    detectPromise: Promise<DetectReqResultModel>,
    clientReference: string,
  ) => PromiseLike<DetectReqResultModel>;

  setLastAutomationRun: (value?: AutomationRunProps) => AutomationRunProps;
};

class AutomationReducer extends ReducerBase<IFormsState, myActions> {
  createActionList() {
    return {
      setLastAutomationRun: (value?: AutomationRunProps) => value,

      detectZone: [
        (detectPromise: Promise<DetectReqResultModel>, clientReference: string) => detectPromise,
        (detectPromise: Promise<Response>, clientReference: string) => ({
          Async: true,
          clientReference: clientReference,
        }),
      ],

      loadAutomations: [
        () =>
          fetch('/api/automations')
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as PromiseLike<AutomationTaskModel[]>)
            .then((response) =>
              _.map(response, (a) => {
                if (a.zones) _.each(a.zones, (z, i) => (z.clientReference = `exiting_zone_${i}`));
                return a;
              }),
            ),
        () => ({ Async: true }),
      ],
      selectAutomationForEdit: (value: AutomationTaskModel) => value,

      updateAutomationProp: (field: string, value: any) => ({ field, value }),

      zoom: (out?: boolean) => out,
    };
  }

  reducers() {
    const _mine = this;
    let formEditHandlers = {};

    formEditHandlers[this._myActions.selectAutomationForEdit.toString()] = (state, action) =>
      action.payload;

    formEditHandlers[this._myActions.detectZone.toString()] = (state, action) => {
      if (null == state) return state;
      const currentState = _.clone(state as AutomationTaskEdit);
      const meta = action.meta as { Async: boolean; clientReference: string };

      const detectedArray = _.clone(currentState.detectedArray || {});
      detectedArray[meta.clientReference] = action.payload;

      currentState.detectedArray = detectedArray;

      return currentState;
    };

    formEditHandlers[this._myActions.updateAutomationProp.toString()] = (state, action) => {
      if (null == state) return state;
      const currentState = _.clone(state as AutomationTaskEdit);

      const payload = action.payload as { field: string; value: any };

      currentState[payload.field] = payload.value;

      return currentState;
    };

    return {
      lastAutomationRun: handleAction(
        this._myActions.setLastAutomationRun,
        (state, action) => action.payload,
        null,
      ),
      listAutomationsAsync: handleAction(
        this._myActions.loadAutomations,
        (state, action) => action.payload,
        null,
      ),
      currentlyEditing: handleActions(formEditHandlers, null),
      imageWidth: handleAction(
        this._myActions.zoom,
        (state, action) => {
          let currZoom = (state as number) || 520;
          const zoomout = action.payload as boolean;

          //null input is used to load initial zoom from localstorage
          if (null != zoomout) {
            if ((!zoomout && currZoom < 1500) || (zoomout && currZoom > 60)) {
              currZoom = currZoom + (zoomout ? -1 : 1) * 10;

              _mine.persistData('imageWidth', currZoom);
            }
          } else {
            currZoom = _mine.getPersistedData('imageWidth');
          }

          return currZoom;
        },
        520,
      ),
    };
  }

  //Used to update a zone recognized when regex is updated
  redoOCR(zone: OCRZoneModel, text: string) {
    return (dispatch, getState) => {
      const req: RegexReqModel = {
        id: zone.id,
        input: text,
        regex: zone.regex,
      };

      const fetchPromise = fetch('/api/automations/regex', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<DetectReqResultModel>);
      return dispatch(this._myActions.detectZone(fetchPromise, zone.clientReference));
    };
  }

  detectZone(imagePath: string, zone: OCRZoneModel) {
    return (dispatch, getState) => {
      const req: DetectReqModel = {
        pageId: imagePath,
        zones: [zone],
      };

      const detector = async () => {
        const jobId = await (
          await checkFetchError(
            await fetch('/api/automations/detectStart', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(req),
            }),
          )
        ).text();

        let ret: DetectReqResultModel = null;

        await dispatch(
          processLongPoll<IFormsState, DetectReqResultModel>(async (dispatch, getState) => {
            const blob = (await (
              await checkFetchError(
                await fetch(`/api/automations/detectEnd/${encodeURIComponent(jobId)}`),
              )
            ).json()) as DetectReqResultModel[];

            if (!blob || blob.length != 1) throw 'invalid response count';

            ret = blob[0];
          }),
        );

        return ret;
      };

      return dispatch(this._myActions.detectZone(detector(), zone.clientReference));
    };
  }

  initializeForms() {
    return (dispatch, getState) => {
      //lead the initial zooms
      dispatch(this._myActions.zoom(null));
      dispatch(this.loadAutomations());
    };
  }

  updateZonePropRecalculate(
    formImage: PageImageModel,
    zone: OCRZoneModel,
    zoneField: keyof OCRZoneModel,
    value: any,
  ) {
    return (dispatch, getState) => {
      const _mine = this;

      if ('type' == zoneField) {
        _mine.persistData('lastOcrType', value);
      }

      dispatch(this.updateZoneProp(zone, zoneField, value));
      _.delay(() => {
        const { currentlyEditing } = this.getCurrentState(getState());
        if (!currentlyEditing) throw 'no form is under edit';

        const zones = currentlyEditing.zones;
        const index = _.findIndex(zones, (z) => z.clientReference == zone.clientReference);
        if (-1 == index) throw 'zone to  update not found';

        const currentText =
          currentlyEditing.detectedArray &&
          currentlyEditing.detectedArray[zones[index].clientReference] &&
          currentlyEditing.detectedArray[zones[index].clientReference].result &&
          currentlyEditing.detectedArray[zones[index].clientReference].result.text;

        if ('regex' == zoneField) {
          if (currentText) dispatch(_mine.redoOCR(zones[index], currentText));
        } else dispatch(_mine.detectZone(formImage.id, zones[index]));
      }, 100);
    };
  }

  updateZoneProp(zone: OCRZoneModel, zoneField: keyof OCRZoneModel, value: any) {
    return (dispatch, getState) => {
      const { currentlyEditing } = this.getCurrentState(getState());
      if (!currentlyEditing) throw 'no form is under edit';

      const zones = _.clone(currentlyEditing.zones || []);
      const updateIndex = _.findIndex(zones, (z) => z.clientReference == zone.clientReference);
      if (-1 == updateIndex) throw 'zone to  updte not found';

      const newZone = _.clone(zones[updateIndex]);

      (newZone[zoneField] as any) = value;

      zones.splice(updateIndex, 1, newZone);

      return dispatch(this._myActions.updateAutomationProp('zones', zones));
    };
  }

  removeZone(zone: OCRZoneModel) {
    return (dispatch, getState) => {
      const { currentlyEditing } = this.getCurrentState(getState());
      if (!currentlyEditing) throw 'no form is under edit';

      const zones = _.clone(currentlyEditing.zones || []);
      const updateIndex = _.findIndex(zones, (z) => z.clientReference == zone.clientReference);
      if (-1 == updateIndex) throw 'zone to  updte not found';

      zones.splice(updateIndex, 1);

      dispatch(this._myActions.updateAutomationProp('activeZone', null));
      return dispatch(this._myActions.updateAutomationProp('zones', zones));
    };
  }

  addZone(formImage: PageImageModel, startX: number, startY: number, endX: number, endY: number) {
    return (dispatch, getState) => {
      const _mine = this;
      const { currentlyEditing } = this.getCurrentState(getState());
      if (!currentlyEditing) throw 'no form is under edit';

      const refImage =
        currentlyEditing.pages && currentlyEditing.pages.length > 0 && currentlyEditing.pages[0];

      const zones = _.clone(currentlyEditing.zones || []);

      let xScale = 1.0;
      let yScale = 1.0;

      if (refImage && formImage) {
        xScale = refImage.width / formImage.width;
        yScale = refImage.height / formImage.height;
      }

      const newZone = {
        x: startX * xScale,
        y: startY * yScale,
        width: (endX - startX) * xScale,
        height: (endY - startY) * yScale,
        id: '',
        clientReference: `newzone_${zones.length}`,
        regex: '',
        type: _mine.getPersistedData('lastOcrType') || ZoneTypeModel.barcode,
        isBreakField: false,
        ocrTolerance: 2,
        recognizerReference: '',
      };

      zones.push(newZone);

      dispatch(this._myActions.updateAutomationProp('zones', zones));

      _.delay(() => {
        dispatch(_mine.updateAutomationProp(formImage, 'activeZone', newZone));
      }, 100);
    };
  }

  zoom = (out?: boolean) => this._myActions.zoom(!!out);

  updateAutomationProp(formImage: PageImageModel, field: string, value: any) {
    return (dispatch, getState) => {
      const ret = dispatch(this._myActions.updateAutomationProp(field, value));

      if (value && 'activeZone' == field) {
        const { currentlyEditing } = this.getCurrentState(getState());
        if (!currentlyEditing) throw 'no form is under edit';

        var zone = value as OCRZoneModel;
        const detectedArray = { currentlyEditing };

        if (!(detectedArray && detectedArray[zone.clientReference])) {
          dispatch(this.detectZone(formImage.id, zone));
        }
      }

      return ret;
    };
  }

  private runFormsRecognition(value: AutomationTaskModel, listDocsHelper: ListDocsHelper) {
    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve().then(() => {
        if (!value.zones || value.zones.length == 0) return;

        const { activeDoc, docsAsync } = listDocsHelper.getmyState(getState());

        if (!docsAsync || !docsAsync.result) throw 'docs not initialized';

        if (null == activeDoc) throw 'No document is active';

        if (null == activeDoc.pages || activeDoc.pages.length == 0) {
          console.warn('no pages for active document');
          return;
        }

        return fetch(`/api/automations/run/${value.id}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(activeDoc.pages),
        })
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as Promise<AutomationRunResultModel>)
          .then((response) => {
            let newDocs = _.map(response.docs, (d) => {
              const newDoc = d as EditableDocument;
              newDoc.isChanged = true;
              newDoc.newdocId = listDocsHelper.gettTmpIdForNewDoc();
              return newDoc;
            });

            if (response.pagesLeft.length > 0) {
              activeDoc.pages = response.pagesLeft;
              newDocs = _.concat(newDocs, [activeDoc]);
            }

            //const restofDocs = _.filter(docsAsync.result, d => d !== activeDoc);

            //newDocs = _.concat(newDocs, restofDocs);

            return dispatch(listDocsHelper.initialize(newDocs))
              .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
              .then(() => dispatch(listDocsHelper.ensureActiveDoc()));
          });
      });
    };
  }

  private runAllFormRecognitions(projectId: string, listDocsHelper: ListDocsHelper) {
    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve().then(() => {
        const { activeDoc, docsAsync } = listDocsHelper.getmyState(getState());

        if (!docsAsync || !docsAsync.result) throw 'docs not initialized';

        if (null == activeDoc) throw 'No document is active';

        if (null == activeDoc.pages || activeDoc.pages.length == 0) {
          console.warn('no pages for active document');
          return;
        }

        return fetch(`/api/automations/runall/${projectId}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(activeDoc.pages),
        })
          .then((response) => checkFetchError(response))
          .then((response) => response.json() as Promise<AutomationRunResultModel>)
          .then((response) => {
            let newDocs = _.map(response.docs, (d) => {
              const newDoc = d as EditableDocument;
              newDoc.isChanged = true;
              newDoc.newdocId = listDocsHelper.gettTmpIdForNewDoc();
              return newDoc;
            });

            if (response.pagesLeft.length > 0) {
              activeDoc.pages = response.pagesLeft;
              newDocs = _.concat(newDocs, [activeDoc]);
            }

            //const restofDocs = _.filter(docsAsync.result, d => d !== activeDoc);

            //newDocs = _.concat(newDocs, restofDocs);

            return dispatch(listDocsHelper.initialize(newDocs))
              .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
              .then(() => dispatch(listDocsHelper.ensureActiveDoc()));
          });
      });
    };
  }

  interrogateImage(listPagesHelper: ListDocumentPagesHelper) {
    return (dispatch, getState) => {
      const { activePage } = listPagesHelper.getmyState(getState());

      if (!activePage) throw 'active page not initialized';

      const savePromise = async () => {
        const res = await checkFetchError(
          await fetch(`/api/automations/recognize/${encodeURIComponent(activePage.id)}`),
        );

        return true;
      };

      return dispatch(ensureWaitBox().doWait('recognizing image', savePromise()));
    };
  }

  private runPythonScript(value: AutomationTaskModel, listDocsHelper: ListDocsHelper) {
    return (dispatch, getState) => {
      const _mine = this;

      return Promise.resolve()
        .then(() => {
          if (!value.scriptCode) return;

          const { docsAsync } = listDocsHelper.getmyState(getState());

          if (!docsAsync || !docsAsync.result) throw 'document list not initialized';

          const jobInput = {
            //We want to send out all fields so that the script can populate them
            input: docsAsync.result,

            //the code
            code: value.scriptCode,
          };

          return dispatch(
            ensureLaunchNative().launch({
              jobType: JobTypeModel.script,
              resultURL: '',
              permissions: null,
              jobInput: JSON.stringify(jobInput),
            }),
          );
        })
        .then((res) => {
          if (!res) return;

          //const scriptRes = JSON.parse(res);
          const scriptRes = res;

          if (!scriptRes || !scriptRes.input || !Array.isArray(scriptRes.input))
            throw 'Script results invalid';

          dispatch(
            this._myActions.setLastAutomationRun({
              name: value.name,
              logs: scriptRes.logs,
            }),
          );

          const docs = scriptRes.input as EditableDocument[];

          return dispatch(listDocsHelper.initialize(docs))
            .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
            .then(() => {
              dispatch(listDocsHelper.ensureActiveDoc());
            });
        });
    };
  }

  showAutomationLogs(show: boolean = true) {
    const _mine = this;
    return (dispatch, getState) => {
      const { lastAutomationRun } = _mine.getCurrentState(getState());
      if (!lastAutomationRun) return;

      const newState = _.clone(lastAutomationRun);
      newState.showLogs = show;

      dispatch(_mine._myActions.setLastAutomationRun(newState));
    };
  }

  runAutomation(value: AutomationTaskModel, listDocsHelper: ListDocsHelper) {
    return (dispatch, getState) => {
      dispatch(this._myActions.setLastAutomationRun(null));

      const savePromise = dispatch(this.runFormsRecognition(value, listDocsHelper))
        .then(() => dispatch(this.runPythonScript(value, listDocsHelper)))
        .then(() => true);
      return dispatch(ensureWaitBox().doWait('running automation task', savePromise));
    };
  }

  runAllAutomations(projectId: string, listDocsHelper: ListDocsHelper) {
    return (dispatch, getState) => {
      dispatch(this._myActions.setLastAutomationRun(null));

      const savePromise = dispatch(this.runAllFormRecognitions(projectId, listDocsHelper)).then(
        () => true,
      );
      return dispatch(
        ensureWaitBox().doWait('running all automations, may take a while', savePromise),
      );
    };
  }

  editScript(value?: string | AutomationTaskModel) {
    return (dispatch, getState) => {
      let forEdit: AutomationTaskModel = null;
      if (typeof value == 'string') {
        if ('new' == value) {
          const projectState = ensureProjects().getCurrentState(getState());
          const selectedProject = projectState && projectState.selectedProject;
          if (!selectedProject) throw 'no project selected';
          forEdit = {
            projectId: selectedProject.id,
          } as AutomationTaskModel;
        } else {
          const { listAutomationsAsync } = this.getCurrentState(getState());
          if (!listAutomationsAsync || !listAutomationsAsync.result) {
            throw 'automations not initialized';
          }

          forEdit = _.find(listAutomationsAsync.result, (a) => a.id == value);
        }
      } else {
        forEdit = value;
      }

      return dispatch(this._myActions.selectAutomationForEdit(forEdit));
    };
  }

  removeAutomation(automationId: string) {
    const _mine = this;
    return (dispatch, getState) => {
      const savePromise = dispatch(
        ensureConfirmBox().ask(
          'Are you sure you want to delete this automation?',
          'Confirm delete',
        ),
      )
        .then(() =>
          fetch(`/api/automations/${encodeURIComponent(automationId)}`, {
            method: 'delete',
          }),
        )
        .then((response) => checkFetchError(response))
        .then(() => {
          dispatch(_mine.editScript(null));
          dispatch(_mine.loadAutomations(true));

          return true;
        });

      return dispatch(ensureWaitBox().doWait('removing automation task', savePromise));
    };
  }

  loadAutomations(forceReload?: boolean) {
    return (dispatch, getState) => {
      const { listAutomationsAsync } = this.getCurrentState(getState());

      if (!forceReload && listAutomationsAsync) {
        return Promise.resolve(listAutomationsAsync);
      }

      return dispatch(this._myActions.loadAutomations());
    };
  }

  saveCurrent(listDocsHelper: ListDocsHelper, activePage: PageImageModel) {
    return (dispatch, getState) => {
      const _mine = this;
      const { currentlyEditing } = this.getCurrentState(getState());
      if (!currentlyEditing) throw 'no form is under edit';

      const formToSave = _.clone(currentlyEditing);
      if (activePage && (!formToSave.pages || formToSave.pages.length == 0))
        formToSave.pages = [activePage];

      const savePromise = fetch('/api/automations', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formToSave),
      })
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<AutomationTaskModel>)
        .then((savedTask) => {
          const testRun = dispatch(
            this.runAutomation(
              _.assign({}, currentlyEditing, { id: savedTask.id }),
              listDocsHelper,
            ),
          );

          return Promise.all([savedTask, testRun]);
        })
        .then(([savedTask, testRun]) => {
          dispatch(_mine.loadAutomations(true)).then(() => {
            if (testRun.error) {
              setTimeout(() => {
                dispatch(_mine.editScript(savedTask.id));
              }, 100);
            } else {
              dispatch(_mine.editScript(null));
            }
          });

          return true;
        });
      return dispatch(ensureWaitBox().doWait('saving automation task', savePromise));
    };
  }
}

export default () => AutomationReducer.getInstance(AutomationReducer, 'automations');
