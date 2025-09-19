import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as moment from 'moment-timezone';

import { Button, FormControl } from 'react-bootstrap';

import ChooseOneOfView from '../lookup/chooseOneOf';
import DatePicker from 'react-16-bootstrap-date-picker';
import { ExternalIndexModel } from '../../generated/ExternalIndexModel';
import { ExternalIntegrationMap } from '../projects/reducer';
import { FieldLookupTypeModel } from '../../generated/FieldLookupTypeModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import UserListSelector from './userListSelector';
import { connect } from 'react-redux';
import ensureWorkSpace from '../workspace/reducer';

type ComponentProps = {
  f: ProjectFieldModel;
  value: string;
  valueChanged: (newValue: string) => void;
  inputRef?: (ref: any) => void; //any is actually a HTMLElement

  placeHolder?: string;
  externalIntegration?: ExternalIndexModel;
  // availableIntegrations: ExternalIntegrationMap;
};

type ConnectedProps = {
  readOnly: boolean;
};

type ViewProps = ComponentProps & ConnectedProps;

//we overwrote the formcontreol to make it focusable
const myDateField: React.StatelessComponent<ViewProps> = ({
  f,
  valueChanged,
  value,
  inputRef,
  placeHolder,
  readOnly,
}) => {
  return (
    <DatePicker
      ref={(ref) => {
        if (inputRef && ref && ref.refs) inputRef(ReactDOM.findDOMNode(ref.refs.input));
      }}
      //selected={value && moment.utc(value).toDate()}
      value={value ? moment.utc(value).toISOString() : ''}
      style={{ zIndex: 0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
      onChange={(newVal) => {
        //newVals if of the form "2018-10-09T19:00:00.000Z", which is putting the information with TIME zone.
        //we actually don't want to be Time zone sensitive here as this is Index time, are for searches so
        const datePart = newVal ? moment(newVal).format('YYYY-MM-DD') : null;
        valueChanged(datePart);
      }}
      //className="form-control"
      //isClearable
      //popperPlacement="botom"
      readOnly={!!readOnly}
      placeholder={placeHolder || 'MM/DD/YYYY'}
      //dateFormat="MM/dd/yyyy"
    />
  );
};

const UserListField: React.StatelessComponent<ViewProps> = ({
  f,
  valueChanged,
  value,
  inputRef,
  readOnly,
  placeHolder,
}) =>
  readOnly ? (
    <FormControl
      type='text'
      inputRef={inputRef}
      value={value || ''}
      style={{ zIndex: 0 }}
      onChange={() => {}}
      readOnly={true}
    />
  ) : (
    <UserListSelector
      inputRef={inputRef}
      field={f}
      onChange={valueChanged}
      value={value}
      clearable={true}
    />
  );

const ExternalField: React.StatelessComponent<ViewProps> = ({
  f,
  valueChanged,
  value,
  inputRef,
  placeHolder,
  readOnly,
}) => {
  //const readonly = (f.displayName != 'xero');

  return (
    <FormControl
      type='text'
      inputRef={inputRef}
      value={value || ''}
      style={{ zIndex: 0 }}
      onChange={(e: any) => valueChanged(e.target.value)}
      placeholder={readOnly ? '' : placeHolder || 'enter'}
      readOnly={readOnly}
    />
  );
};

const defaultField: React.StatelessComponent<ViewProps> = ({
  f,
  valueChanged,
  value,
  inputRef,
  placeHolder,
  readOnly,
}) => (
  <FormControl
    type='text'
    inputRef={inputRef}
    value={value || ''}
    style={{ zIndex: 0 }}
    onChange={(e: any) => valueChanged(e.target.value)}
    readOnly={readOnly}
    placeholder={placeHolder || 'enter'}
  />
);

const chooseOneOfField: React.StatelessComponent<ViewProps> = ({
  f,
  valueChanged,
  value,
  inputRef,
  placeHolder,
  externalIntegration,
  readOnly,
}) =>
  readOnly ? (
    <FormControl
      type='text'
      inputRef={inputRef}
      value={value || ''}
      style={{ zIndex: 0 }}
      onChange={() => {}}
      readOnly={true}
    />
  ) : (
    <ChooseOneOfView
      inputRef={inputRef}
      field={f}
      onChange={valueChanged}
      value={value}
      placeHolder={placeHolder}
      externalIntegration={externalIntegration}
    />
  );

const AField: React.StatelessComponent<ViewProps> = (props) => {
  let TheField = defaultField;
  switch (props.f.fieldType) {
    case ProjectFieldTypeModel.user_list:
      TheField = UserListField;
      break;
    case ProjectFieldTypeModel.date:
    case ProjectFieldTypeModel.timestamp:
      TheField = myDateField;
      break;
    case ProjectFieldTypeModel.externalIntegration:
    /*            TheField = ExternalField;
            break;
*/
    case ProjectFieldTypeModel.text:
      if (true || props.f.lookupType == FieldLookupTypeModel.chooseOneOf) {
        TheField = chooseOneOfField;
      }
      break;
  }

  return <TheField {...props} />;
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { creationObject } = ensureWorkSpace().getCurrentState(state);
  const pinIndexes: { [key: string]: string } = creationObject && creationObject.pinIndexes;

  const { f } = ownprops;
  const readOnly = f && pinIndexes && !!pinIndexes[f.displayName];

  return { readOnly };
})(AField);
