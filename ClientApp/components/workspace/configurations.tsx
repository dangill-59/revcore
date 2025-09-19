import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  Checkbox,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock,
  InputGroup,
  Well,
} from 'react-bootstrap';
import ensureWorkspace, { AUTHPROVIDEROPENID, IWorkSpaceState, WorkspaceEdit } from './reducer';

import CreateTokenView from './createToken';
import Select from 'react-select';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensurePermissions from '../permissions/reducer';

const WorkspaceLoader = createLoaderView<WorkspaceEdit>();

type ViewProps = IWorkSpaceState & { dispatch };

class CustomDomain extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureWorkspace().loadWorkSpaceforEdit());
  }
  public render() {
    const { workspaceEditAsync, dispatch } = this.props;

    return workspaceEditAsync ? (
      <WorkspaceLoader asyncResult={workspaceEditAsync} prompt='loading workspace details'>
        {workspaceEditAsync.result && (
          <div>
            <form
              className='mainInfo text-center container'
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(ensureWorkspace().saveWorkSpace());
              }}
            >
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>Inactivity timeout</InputGroup.Addon>
                  <FormControl
                    type='number'
                    value={workspaceEditAsync.result.workSpace.inactivityTimeoutMin || ''}
                    placeholder='default : 15'
                    onChange={(e: any) =>
                      dispatch(
                        ensureWorkspace().updateWorkSpaceProp(
                          'inactivityTimeoutMin',
                          e.target.value,
                        ),
                      )
                    }
                  />
                  <InputGroup.Addon>minutes</InputGroup.Addon>
                </InputGroup>

                <FormControl.Feedback />
                <HelpBlock>
                  If inactive for these minutes, the current session will time out and the user
                  license will be released.{' '}
                </HelpBlock>
              </FormGroup>

              <hr />

              {/*Comment this out for now  <FormGroup>
                        <InputGroup style={{ zIndex: 50 }}>
                            <InputGroup.Addon>Authentication method</InputGroup.Addon>
                            <Select
                                value={selecteAuthMethod}

                                placeholder="Select authentication method"

                                onChange={selected => {
                                    dispatch(ensureWorkspace().updateWorkSpaceProp('authProvider', (selected || {}).value));
                                }}

                                options={authMethods}

                                searchable={true} isClearable={true}

                                getOptionValue={o=>o.value}

                            />
                        </InputGroup>
                    </FormGroup>
                    */}

              {workspaceEditAsync.result.workSpace &&
                workspaceEditAsync.result.workSpace.openIdProviders && (
                  <Well>
                    Using Authentication Providers :
                    <ul>
                      {_.keys(workspaceEditAsync.result.workSpace.openIdProviders).map((k) => (
                        <li key={k}>
                          {k} : {workspaceEditAsync.result.workSpace.openIdProviders[k].authority}
                        </li>
                      ))}
                    </ul>
                  </Well>
                )}

              {/*(AUTHPROVIDEROPENID == workspaceEditAsync.result.workSpace.authProvider) && <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>Authority</InputGroup.Addon>
                            <FormControl
                                type="text"
                                value={workspaceEditAsync.result.workSpace.openConnectAuthority || ''}
                                placeholder="https://YOURAUTHORITY.COM"
                                onChange={(e: any) => dispatch(ensureWorkspace().updateWorkSpaceProp('openConnectAuthority', e.target.value))}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Addon>Client ID</InputGroup.Addon>
                            <FormControl
                                type="text"
                                value={workspaceEditAsync.result.workSpace.openConnectClientId || ''}
                                placeholder="openid client id"
                                onChange={(e: any) => dispatch(ensureWorkspace().updateWorkSpaceProp('openConnectClientId', e.target.value))}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Addon>Secret</InputGroup.Addon>
                            <FormControl
                                type="text"
                                value={workspaceEditAsync.result.workSpace.openConnectSecret || ''}
                                placeholder="openid client secret"
                                onChange={(e: any) => dispatch(ensureWorkspace().updateWorkSpaceProp('openConnectSecret', e.target.value))}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Addon>Connect user role</InputGroup.Addon>
                            <FormControl
                                type="text"
                                value={workspaceEditAsync.result.workSpace.openConnectUserRole || ''}
                                placeholder="the role all open connect users are added to"
                                onChange={(e: any) => dispatch(ensureWorkspace().updateWorkSpaceProp('openConnectUserRole', e.target.value))}
                            />
                        </InputGroup>

                    </FormGroup>

                    */}

              <Button bsSize='large' bsStyle='primary' type='submit'>
                Save and continue to my workspace...
              </Button>
            </form>

            <hr />
            <div
              className='mainInfo text-center container'
              style={{
                marginTop: 10,
                padding: 20,
              }}
            >
              <CreateTokenView />
              <Button
                bsSize='small'
                block
                bsStyle='warning'
                onClick={() => dispatch(ensureWorkspace().updateServerTokenProp('validityDays', 1))}
              >
                Create a server login token for my workspace...
              </Button>
            </div>
          </div>
        )}
      </WorkspaceLoader>
    ) : null;
  }
}

export default connect((state) => {
  return ensureWorkspace().getCurrentState(state);
})(CustomDomain);
