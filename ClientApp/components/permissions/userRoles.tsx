import 'react-phone-number-input/style.css';

import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import {
  Badge,
  Button,
  Checkbox,
  Col,
  FormControl,
  FormGroup,
  InputGroup,
  OverlayTrigger,
  Row,
  Tab,
  Tabs,
  Tooltip,
} from 'react-bootstrap';
import Select, { components } from 'react-select';
import ensurePermissions, { IPermissionsState, UserPrefProps } from './reducer';
import ensureProjets, { IProjectsState } from '../projects/reducer';

import CreateableSelect from 'react-select/lib/Creatable';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import PhoneInput from 'react-phone-number-input';
import { ProjectModel } from '../../generated/ProjectModel';
import { UserEditModel } from '../../generated/UserEditModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const UsersLoader = createLoaderView<UserEditModel[]>();

const ProjectsLoader = createLoaderView<{ [key: string]: ProjectModel }>();

type ConnectedProps = IPermissionsState & {
  readonly projectListAsync: IAsyncResult<{ [key: string]: ProjectModel }>;
  readonly allroles: string[];
  readonly prefProps: UserPrefProps;
};

type ViewProps = ConnectedProps & { dispatch };

class UserRolesView extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureProjets().loadProjects());
    dispatch(ensurePermissions().loadAllUsers());
  }

  public render() {
    const {
      dispatch,
      allroles,
      allUsersAsync,
      projectListAsync,
      userIdUnderEdit,
      rolePermissionUnderEdit,
      prefProps,
    } = this.props;

    const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: 'white', borderRadius: 0 }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
        backgroundColor: isFocused ? '#ffa50045' : 'white',
        color: 'black',
      }),
    };

    const userColourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: 'white', borderRadius: 0 }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
        backgroundColor: isFocused ? '#ffa50045' : 'white',
        color: data.value.isVaccant ? '#bd9c05' : data.value.isAdmin ? 'red' : 'black',
      }),
    };

    //creatable is still value:lable based and they the value need toLowerCase so we gave it so we have to do this
    const userListOptions = _.map((allUsersAsync && allUsersAsync.result) || [], (p) => ({
      value: _.assign({}, p, { toLowerCase: () => p.workspaceUser.id.toLowerCase() }),
      label: p.prefferedName || p.email || p.workspaceUser.id,
    }));

    const selectedUserOption = _.find(
      userListOptions,
      (o) => o.value.workspaceUser.id == userIdUnderEdit,
    );

    const allRolesOptions = _.map(allroles || [], (r) => ({ value: r, label: r }));
    const userinRoles = _.filter((allUsersAsync && allUsersAsync.result) || [], (u) =>
      _.includes(u.workspaceUser.roles || [], rolePermissionUnderEdit),
    );

    const selectedRoleOption = _.find(allRolesOptions, (r) => r.label == rolePermissionUnderEdit);

    const modifiedUsers = _.filter(
      (allUsersAsync && allUsersAsync.result) || [],
      (p) => p.isModified,
    );

    const emailToBeSentToList = _.filter(modifiedUsers, (u) => u.inviteToJoin);

    const newCount = _.filter((allUsersAsync && allUsersAsync.result) || [], (p) => p.isNew).length;

    return allUsersAsync && projectListAsync ? (
      <UsersLoader asyncResult={allUsersAsync} prompt='Loading users'>
        <ProjectsLoader asyncResult={projectListAsync} prompt='Loading repositories'>
          {allUsersAsync.result && projectListAsync.result && (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(ensurePermissions().saveUserRoles());
                }}
              >
                <Tabs
                  defaultActiveKey={1}
                  id='userorroles'
                  style={{
                    marginTop: 10,
                    backgroundColor: 'white',
                  }}
                >
                  <Tab
                    eventKey={1}
                    title='Users'
                    style={{
                      padding: 10,
                    }}
                  >
                    <Row
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <Col md={6}>
                        <FormGroup>
                          <InputGroup style={{ zIndex: 10 }}>
                            <InputGroup.Addon>
                              <i className='fa fa-user-o' aria-hidden='true'></i>
                            </InputGroup.Addon>
                            <CreateableSelect
                              placeholder='enter user name'
                              value={selectedUserOption}
                              onChange={(option) => {
                                dispatch(
                                  ensurePermissions().selectUser(option.value.workspaceUser.id),
                                );
                              }}
                              options={userListOptions}
                              getOptionLabel={(option) => option && option.label}
                              isInvalid={!!selectedUserOption}
                              searchable={true}
                              clearable={false}
                              formatCreateLabel={(value) => (
                                <span>
                                  Add user:<strong> {value}</strong>
                                </span>
                              )}
                              onCreateOption={(value) => {
                                dispatch(ensurePermissions().addNewUser(value));
                              }}
                              styles={userColourStyles}
                            />
                          </InputGroup>
                          {newCount == 0 && (
                            <small className='text-muted'>
                              To add users start typing the new user name in the box above
                            </small>
                          )}
                        </FormGroup>

                        <FormGroup>
                          <InputGroup>
                            <InputGroup.Addon>
                              <i className='fa fa-user-o' aria-hidden='true'></i>
                            </InputGroup.Addon>
                            <FormControl
                              required
                              readOnly={!(selectedUserOption && selectedUserOption.value)}
                              placeholder='enter user full name'
                              value={
                                (selectedUserOption &&
                                  selectedUserOption.value &&
                                  selectedUserOption.value.workspaceUser.fullName) ||
                                ''
                              }
                              onChange={(e: any) =>
                                dispatch(ensurePermissions().updatefullName(e.target.value))
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>

                      <Col md={6}>
                        <InputGroup>
                          <InputGroup.Addon>
                            <i className='fa fa-envelope' aria-hidden='true'></i>
                          </InputGroup.Addon>
                          <FormControl
                            readOnly={
                              !(
                                selectedUserOption &&
                                selectedUserOption.value &&
                                selectedUserOption.value.workspaceUser.isVaccant &&
                                !selectedUserOption.value.workspaceUser.invitationEmail
                              )
                            }
                            placeholder='email address where invitation will be sent'
                            value={
                              (selectedUserOption &&
                                selectedUserOption.value &&
                                selectedUserOption.value.email) ||
                              ''
                            }
                            onChange={(e: any) =>
                              dispatch(ensurePermissions().updateEmail(e.target.value))
                            }
                          />
                        </InputGroup>

                        <FormGroup style={{ marginTop: 35 }}>
                          <PhoneInput
                            required
                            defaultCountry='US'
                            readOnly={!(selectedUserOption && selectedUserOption.value)}
                            placeholder='contact phone number'
                            value={
                              (selectedUserOption &&
                                selectedUserOption.value &&
                                selectedUserOption.value.workspaceUser.phoneNumber) ||
                              ''
                            }
                            onChange={(e: any) => dispatch(ensurePermissions().updatephoneNumer(e))}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        {selectedUserOption && selectedUserOption.value && (
                          <div className='text-center'>
                            {selectedUserOption.value.workspaceUser.lastSignedIn ? (
                              <div>
                                last signed in at{' '}
                                {moment(selectedUserOption.value.workspaceUser.lastSignedIn)
                                  .local()
                                  .format('LLLL')}
                              </div>
                            ) : (
                              <div>
                                <strong>This user has not yet signed in</strong>
                                <br />

                                {selectedUserOption.value.workspaceUser.invitationEmail && (
                                  <>
                                    {selectedUserOption.value.workspaceUser.invitationEmail.emailSent ? (
                                      <span className='text-success'>
                                        <i className='fa fa-check-circle'></i> Invitation email sent at{' '}
                                        {moment(
                                          selectedUserOption.value.workspaceUser.invitationEmail.sentAt,
                                        )
                                          .local()
                                          .format('LLLL')}
                                      </span>
                                    ) : (
                                      <div className='alert alert-info' style={{ marginTop: 10, marginBottom: 10 }}>
                                        <i className='fa fa-info-circle'></i> <strong>Email not configured</strong> - Click the button below to send the invitation via your email client:
                                        <br />
                                        <a
                                          href={`mailto:${encodeURIComponent(
                                            selectedUserOption.value.workspaceUser.invitationEmail.emailTo,
                                          )}?subject=${encodeURIComponent(
                                            selectedUserOption.value.workspaceUser.invitationEmail.emailSubject || '',
                                          )}&body=${encodeURIComponent(
                                            selectedUserOption.value.workspaceUser.invitationEmail.emailBody || '',
                                          )}`}
                                          className='btn btn-primary btn-sm'
                                          style={{ marginTop: 10 }}
                                        >
                                          <i className='fa fa-envelope'></i> Open in Email Client
                                        </a>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            )}

                            {userIdUnderEdit != 'workspace_owner' && (
                              <Checkbox
                                style={{ margin: '5px 30px' }}
                                checked={selectedUserOption.value.inviteToJoin}
                                disabled={
                                  selectedUserOption.value.inviteToJoin &&
                                  !!selectedUserOption.value.isModified
                                }
                                onChange={() => {
                                  dispatch(ensurePermissions().reSendInvitation());
                                }}
                              >
                                Re send invitation to join this workspace
                              </Checkbox>
                            )}
                          </div>
                        )}
                      </Col>
                    </Row>

                    {selectedUserOption &&
                      selectedUserOption.value &&
                      userIdUnderEdit != 'workspace_owner' &&
                      !selectedUserOption.value.workspaceUser.isVaccant && (
                        <div className='text-center'>
                          <Checkbox
                            style={{
                              margin: '5px 30px',
                            }}
                            checked={!!selectedUserOption.value.isAdmin}
                            onChange={() =>
                              dispatch(
                                ensurePermissions().markAsAdmin(!selectedUserOption.value.isAdmin),
                              )
                            }
                          >
                            This user can administer this workpace
                          </Checkbox>
                        </div>
                      )}

                    {selectedUserOption &&
                      selectedUserOption.value &&
                      (selectedUserOption.value.isAdmin ||
                        selectedUserOption.value.workspaceUser.id == 'workspace_owner') && (
                        <div className='text-danger text-center'>
                          <small>
                            <strong>
                              {selectedUserOption.value.workspaceUser.id == 'workspace_owner' && (
                                <span>Workspace owner : </span>
                              )}
                              This user has all access to all repositories and can manage
                              permissions
                            </strong>
                          </small>
                        </div>
                      )}

                    {selectedUserOption &&
                      selectedUserOption.value &&
                      selectedUserOption.value.workspaceUser.id != 'workspace_owner' && (
                        <fieldset style={{}}>
                          {allroles.length > 0 && (
                            <legend
                              style={{
                                width: 'auto',
                                borderBottom: 'none',
                                fontSize: 'small',
                                marginBottom: 0,
                              }}
                              className='text-muted'
                            >
                              member of
                            </legend>
                          )}

                          {allroles.map((role, i) => {
                            const checked = _.includes(
                              selectedUserOption.value.workspaceUser.roles || [],
                              role,
                            );
                            return (
                              <div key={i} style={{ display: 'inline-block' }}>
                                <Checkbox
                                  style={{
                                    margin: '5px 30px',
                                  }}
                                  checked={checked}
                                  onChange={() => {
                                    dispatch(
                                      checked
                                        ? ensurePermissions().removeRole(role)
                                        : ensurePermissions().addRole(role),
                                    );
                                  }}
                                >
                                  {role}
                                </Checkbox>
                              </div>
                            );
                          })}
                        </fieldset>
                      )}

                    {selectedUserOption &&
                      selectedUserOption.value &&
                      selectedUserOption.value.workspaceUser.id != 'workspace_owner' && (
                        <div className='text-right'>
                          <hr />
                          <Button
                            bsSize='xs'
                            bsStyle='danger'
                            onClick={() =>
                              dispatch(
                                ensurePermissions().DeleteUser(
                                  selectedUserOption.value.workspaceUser.id,
                                ),
                              )
                            }
                          >
                            remove this user
                          </Button>
                        </div>
                      )}
                  </Tab>

                  <Tab
                    eventKey={2}
                    title='Roles'
                    style={{
                      padding: 10,
                    }}
                  >
                    <FormGroup
                      style={{
                        marginTop: 10,
                      }}
                    >
                      <InputGroup>
                        <InputGroup.Addon>
                          <i className='fa fa-group' aria-hidden='true'></i>
                        </InputGroup.Addon>
                        <Select
                          placeholder='choose role to view'
                          value={selectedRoleOption}
                          onChange={(option) => {
                            dispatch(ensurePermissions().selectRoleToView(option.label));
                          }}
                          options={allRolesOptions}
                          getOptionLabel={(option) => option && option.label}
                          searchable={true}
                          clearable={false}
                          styles={colourStyles}
                        />
                      </InputGroup>
                      <small className='text-muted'>
                        New roles can be added in Repository permissions{' '}
                      </small>
                    </FormGroup>

                    {rolePermissionUnderEdit && (
                      <div className='text-center'>
                        {userinRoles.length == 0 ? (
                          <div className='text-warning'>There are no users in this role </div>
                        ) : (
                          <div>
                            <h4 className='color-orange'>Users in role</h4>
                            {_.filter((allUsersAsync && allUsersAsync.result) || [], (u) =>
                              _.includes(u.workspaceUser.roles || [], rolePermissionUnderEdit),
                            ).map((user, i) => (
                              <div
                                key={i}
                                style={{
                                  display: 'inline-block',
                                  margin: '5px 30px',
                                }}
                              >
                                {user.workspaceUser.id}
                                <Button
                                  bsStyle='link'
                                  style={{ padding: 0 }}
                                  onClick={(_) =>
                                    dispatch(
                                      ensurePermissions().removeRole(rolePermissionUnderEdit),
                                    )
                                  }
                                >
                                  <OverlayTrigger
                                    placement='bottom'
                                    overlay={
                                      <Tooltip id='roleTooltipcanDelete'>Remove this user </Tooltip>
                                    }
                                  >
                                    <i
                                      className='fa fa-times text-danger'
                                      style={{ opacity: 0.8 }}
                                      aria-hidden='true'
                                    ></i>
                                  </OverlayTrigger>
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </Tab>
                </Tabs>

                {prefProps && prefProps.validUser && (
                  <div className='alert alert-danger'>Username should be valid email address</div>
                )}
                {emailToBeSentToList.length > 0 && (
                  <div
                    style={{
                      backgroundColor: '#ffa50059',
                      padding: 10,
                      margin: '10px 0px',
                    }}
                  >
                    Emails will be sent to:
                    {emailToBeSentToList.map((u) => (
                      <Badge style={{ margin: 10 }} id={`e_${u.workspaceUser.id}`}>
                        {u.email}
                      </Badge>
                    ))}
                    <div>
                      <Checkbox
                        style={{
                          margin: 5,
                        }}
                        checked={prefProps && prefProps.sendMeACopy}
                        onChange={() => dispatch(ensurePermissions().toggleSendMeaCopy())}
                      >
                        Send a copy to me
                      </Checkbox>
                    </div>
                  </div>
                )}

                <div className='text-center'>
                  <Button
                    bsStyle='primary'
                    type='submit'
                    bsSize='large'
                    style={{ marginTop: 20, minWidth: 200 }}
                    disabled={0 == modifiedUsers.length}
                  >
                    <span>
                      Save changes{' '}
                      {modifiedUsers.length > 0 && (
                        <span> for {modifiedUsers.length} user(s) </span>
                      )}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          )}
        </ProjectsLoader>
      </UsersLoader>
    ) : (
      <div className='text-danger'>users or projects not initialized</div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { projectListAsync } = ensureProjets().getCurrentState(state);
  const allroles = ensureProjets().getAllRolesFromState_helper(state);

  return _.assign({}, ensurePermissions().getCurrentState(state), { projectListAsync, allroles });
})(UserRolesView);
