import * as _ from 'lodash';

import ReducerBase from 'base/baseReducer';
import { handleAction } from 'redux-actions';

export interface IDocSettings {
  //fields to hide in doc compact view
  readonly compactViewHiddenFields: { [key: string]: boolean };
}

type myActions = {
  hideCompactViewField: (projectId: string, fieldDisplayName: string, hide: boolean) => void;
};

class docsSettingsReducer extends ReducerBase<IDocSettings, myActions> {
  createActionList() {
    return {
      hideCompactViewField: (projectId: string, fieldDisplayName: string, hide: boolean) => ({
        projectId,
        fieldDisplayName,
        hide,
      }),
    };
  }

  reducers() {
    return {
      compactViewHiddenFields: handleAction(
        this._myActions.hideCompactViewField,
        (state, action) => {
          const currState = _.clone((state || {}) as { [key: string]: boolean });
          const payload = action.payload as {
            projectId: string;
            fieldDisplayName: string;
            hide: boolean;
          };

          const fieldKey = payload.projectId + '_' + payload.fieldDisplayName;

          if (payload.hide) {
            currState[fieldKey] = true;
          } else {
            if (currState[fieldKey]) delete currState[fieldKey];
          }

          return currState;
        },
        null,
      ),
    };
  }

  hideCompactViewField = (projectId: string, fieldDisplayName: string, hide: boolean) =>
    this._myActions.hideCompactViewField(projectId, fieldDisplayName, hide);
}

export default () => docsSettingsReducer.getInstance(docsSettingsReducer, 'listDocumentsSettings');
