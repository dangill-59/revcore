//this component goes after the index field in doc edit form
import * as React from 'react';

import ensurePageLayouts, { IPageLayoutsettings } from './reducer';

import { connect } from 'react-redux';

type ConnectedProps = {
  readonly fieldsWithAutoCarry: { [fieldName: string]: boolean };
};

type ComponentProps = {
  readonly fieldName: string;
};

const IndexPostFix: React.SFC<ConnectedProps & ComponentProps & { dispatch }> = ({
  fieldsWithAutoCarry,
  fieldName,
  dispatch,
}) => (
  <span>
    {fieldsWithAutoCarry && fieldsWithAutoCarry[fieldName] && (
      <small>
        <i className='fa fa-thumb-tack text-muted' style={{ margin: 'auto' }} />
      </small>
    )}
  </span>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { fieldsWithAutoCarry } = ensurePageLayouts().getCurrentState(state);

  return {
    fieldsWithAutoCarry,
  };
})(IndexPostFix);
