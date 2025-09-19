import * as React from 'react';
import * as _ from 'lodash';

import ensureWorkspace, { IWorkSpaceState } from './reducer';

import CreateTokenView from './createToken';
import { connect } from 'react-redux';

type ViewProps = IWorkSpaceState & { dispatch };

class AccessToken extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch, creationObject } = this.props;

    const tokenParameters = _.assign({ valid: 1 }, creationObject && creationObject.token);
    dispatch(ensureWorkspace().updateServerTokenProp('validityDays', tokenParameters.valid));
    if (tokenParameters.name)
      dispatch(ensureWorkspace().updateServerTokenProp('name', tokenParameters.name));
  }
  public render() {
    const { dispatch } = this.props;

    return <CreateTokenView />;
  }
}

export default connect((state) => {
  return ensureWorkspace().getCurrentState(state);
})(AccessToken);
