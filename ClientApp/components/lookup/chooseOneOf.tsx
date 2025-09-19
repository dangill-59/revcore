import 'react-bootstrap-typeahead/css/Typeahead.css';

import * as React from 'react';
import * as _ from 'lodash';

import ensureLookup, { ILookupState, optionKey } from './reducer';

import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { ExternalIndexModel } from '../../generated/ExternalIndexModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { TypeaheadResultRowModel } from '../../generated/TypeaheadResultRowModel';
import { TypeaheadResultsModel } from '../../generated/TypeaheadResultsModel';
import { checkFetchError } from 'base/asyncLoader';
import { connect } from 'react-redux';

type ComponentProps = {
  field: ProjectFieldModel;
  value: string;
  placeHolder?: string;
  onChange: (newValue: string) => void;
  inputRef?: (ref: any) => void; //any is actually a HTMLElement

  externalIntegration?: ExternalIndexModel;
};

type ConnectedProps = ILookupState & {};

type ViewProps = ComponentProps & ConnectedProps & { dispatch };

const ChooseOneOf: React.StatelessComponent<ViewProps> = ({
  field,
  value,
  onChange,
  inputRef,
  lookupOptions,
  placeHolder,
  externalIntegration,
  dispatch,
}) => {
  let lookupType = (field.integrationOptions && field.integrationOptions['lookupType']) || 'param';

  let lookupParameter = field.integrationOptions && field.integrationOptions['lookupParam'];
  let allowNew = false;

  let optionsAsync: IAsyncResult<TypeaheadResultsModel> = null;
  let options: TypeaheadResultRowModel[] = [];

  const searchMethods: any = {
    onSearch: () => {},
  };

  switch (lookupType) {
    case 'user_list':
      options = _.map(field.userlistValues || [], (uv) => ({
        id: uv,
        suggested: uv,
        withHighLight: uv,
        isFuzzy: false,
      }));
      allowNew = true;
      break;

    default:
      if (!lookupParameter) {
        lookupParameter = field.displayName;
        lookupType = 'field';
        allowNew = true;
      }
      optionsAsync = lookupOptions && lookupOptions[optionKey(lookupType, lookupParameter)];
      options = (optionsAsync && optionsAsync.result && optionsAsync.result.hits) || [];

      searchMethods.onSearch = (inputValue) => {
        dispatch(ensureLookup().doLookup(lookupType, lookupParameter, inputValue));
      };

      searchMethods.filterBy = (option, props) => {
        //don't filter as we have fuzzy searches;
        return true;
      };

      break;
  }

  /* don't need to add the value as we just go off the input value here
    if (value) {
        options.push(value);
    }
    */
  /* the allow new is set to false, as we use the typeahead as a regualr eddit box, and text in the input is used for as the value*/

  let selected = null;

  if (value) {
    if (options.length > 0) {
      selected = _.find(options, (o) => o.id == value);
    } else if (externalIntegration) {
      selected = {
        id: externalIntegration.externalId,
        suggested: externalIntegration.displayValue,
        isFuzzy: false,
        withHighLight: null,
      };
    }

    if (!selected) selected = value;
  }

  return (
    <AsyncTypeahead
      /* the allow new is set to false, as we use the typeahead as a regualr eddit box, and text in the input is used for as the value*/
      allowNew={false}
      useCache={false}
      selectHintOnEnter={true}
      isLoading={!!(optionsAsync && !!optionsAsync.isLoading)}
      multiple={false}
      options={options}
      labelKey='suggested'
      selected={selected ? [selected] : []}
      /*if we can create new, the input box is editabe we don't need the clear button*/
      clearButton={!allowNew}
      ref={(ref) => inputRef && ref && inputRef(ref.getInstance())}
      placeholder={placeHolder || 'enter at least 2 characters for hint'}
      onInputChange={(text: string) => {
        allowNew && onChange(text);
      }}
      onChange={(val: TypeaheadResultRowModel[]) => {
        const selected = val.length > 0 ? val[0] : null;
        if (allowNew) {
          //we have selected one of the suggested options
          if (selected) onChange(selected.id);
        } else {
          onChange(selected && selected.id);
        }
      }}
      {...searchMethods}
    />
  );
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { field } = ownprops;
  const lookupValState = ensureLookup().getCurrentState(state);

  return lookupValState;
})(ChooseOneOf);
