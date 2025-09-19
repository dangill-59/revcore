import 'react-bootstrap-typeahead/css/Typeahead.css';

import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  DropdownButton,
  FormControl,
  FormGroup,
  Grid,
  Image,
  InputGroup,
  MenuItem,
  OverlayTrigger,
  Row,
  Tab,
  Tabs,
  Tooltip,
} from 'react-bootstrap';
import {
  MovabelFieldProps,
  WithMovabelFieldsProps,
  moveField,
  withMoveFields,
} from '../fieldView/movable';
import ensureProjects, { ExternalIntegrationMap, ProjectForEdit } from './reducer';

import AField from './projectFormField';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { ProjectFieldModel } from 'ClientApp/generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import ToggleButton from 'react-toggle-button';
import { Typeahead } from 'react-bootstrap-typeahead';
import { createLoaderView } from 'base/asyncLoader';
import ensurePermissions from '../permissions/reducer';

const IntegrationsLoader = createLoaderView<ExternalIntegrationMap>();

type ViewProps = {
  project: ProjectForEdit;
  availableIntegrationsAsync: IAsyncResult<ExternalIntegrationMap>;
  dispatch;
  allroles: string[];
};

const borderRadiusStyle = { borderRadius: 0, backgroundColor: 'transparent' };

const IndexTitle = () => (
  <OverlayTrigger
    placement='bottom'
    overlay={
      <Tooltip id='indexesTooltip'>
        Indexes are used to search for documents in a repository
      </Tooltip>
    }
  >
    <span className='color-orange'>Respository indexes</span>
  </OverlayTrigger>
);

const PermissionsTitle = () => <span className='color-orange'>Permissions</span>;

/*
const _ProjectFieldList: React.SFC<WithMovabelFieldsProps & { dispatch, allroles: string[] }> = ({ fieldsHolder, fieldsToShow, dispatch, allroles }) => {

    return <div>
        {fieldsHolder && fieldsToShow.map((field, i) => {
            if (field.fieldType == ProjectFieldTypeModel.externalIntegration)
                return null;

            //not sure why Afield doesn't re-render at fierld change hack to make it render
            const theField = _.clone(field);

            return <div key={i} style={{ margin: '5px', display: 'inline-block', verticalAlign: 'top' }}>
                <AField field={theField}  {...{ dispatch, fieldsHolder, allroles}} />
            </div> 
        })}
    </div>;
}

const ProjectFieldList = withMoveFields(_ProjectFieldList, { allowHide: false });
*/

const ProjectFieldList: React.SFC<{
  dispatch;
  allroles: string[];
  allFields: ProjectFieldModel[];
}> = ({ allFields, dispatch, allroles }) => {
  const toShow = _.filter(
    _.sortBy(allFields || [], (f) => f.indexSortOrder || 0),
    (f) => f.fieldType != ProjectFieldTypeModel.externalIntegration,
  );

  const lastIndex = toShow.length - 1;

  return (
    <div>
      {toShow.map((field, i) => {
        //not sure why Afield doesn't re-render at fierld change hack to make it render
        const theField = _.clone(field);

        return (
          <div key={i} style={{ margin: '5px', display: 'inline-block', verticalAlign: 'top' }}>
            <AField
              field={theField}
              isFirst={0 == i}
              islast={i == lastIndex}
              {...{ dispatch, allroles }}
            />
          </div>
        );
      })}
    </div>
  );
};

const ProjectForm: React.StatelessComponent<ViewProps> = ({
  dispatch,
  project,
  availableIntegrationsAsync,
  allroles,
}) => {
  const integrationStats = _.map(
    _.keys((availableIntegrationsAsync && availableIntegrationsAsync.result) || {}),
    (integrationName) => ({
      integrationName,
      active: _.find(
        project.fields,
        (field) =>
          field.fieldType == ProjectFieldTypeModel.externalIntegration &&
          field.displayName == integrationName,
      ),
    }),
  );

  return (
    <div>
      <Row>
        <Col sm={4}>
          <div
            style={{
              height: '300px',
            }}
          >
            <Image
              style={{
                maxHeight: '100%',
                margin: 'auto',
              }}
              src={project.templateImage}
              responsive
            />
          </div>
        </Col>
        <Col sm={8} style={{ textAlign: 'left' }}>
          <FormGroup
            validationState={project.name ? 'success' : 'error'}
            style={{ maxWidth: '400px', margin: 'auto' }}
          >
            <InputGroup>
              <InputGroup.Addon>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='projNameTooltip'>
                      This is used to identify a group of documents archived in REV. Enter a name
                      describing the documents you want to archive
                    </Tooltip>
                  }
                >
                  <i className='fa fa-briefcase' aria-hidden='true'></i>
                </OverlayTrigger>
              </InputGroup.Addon>

              <FormControl
                type='text'
                placeholder='Repository name: E.g Miscellaneous documents, Receipts, Invoices, etc.'
                required
                value={project.name}
                onChange={(e: any) => dispatch(ensureProjects().updateProjectName(e.target.value))}
              />
              <FormControl.Feedback />
            </InputGroup>
          </FormGroup>

          {/*<div style={{ marginTop: 10 }} className="text-center">
                    <OverlayTrigger placement="bottom"
                        overlay={(<Tooltip id="ocrToolTp">OCR all images for this repository, and make availabe for full text searches</Tooltip>)}>
                        <small className="text-primary" style={{ paddingRight: 2 }}>
                                Full text OCR
                        </small>
                    </OverlayTrigger>

                    <div style={{ display: 'inline-block', marginBottom: 10 }}>
                        <ToggleButton
                            activeLabel="ON"
                            inactiveLabel="OFF"

                            value={project.fullTextOcr}
                            thumbStyle={borderRadiusStyle}
                            trackStyle={borderRadiusStyle}
                            onToggle={(e) => {
                                dispatch(ensureProjects().updatefullTextOcr(!project.fullTextOcr));
                            }}
                        />
                    </div>
                </div>*/}

          <div>
            {availableIntegrationsAsync && (
              <IntegrationsLoader
                asyncResult={availableIntegrationsAsync}
                prompt='loading integrations'
              >
                {availableIntegrationsAsync.result && (
                  <div style={{ marginTop: 10 }}>
                    {integrationStats.map((intgn) =>
                      intgn.active ? (
                        <div key={intgn.integrationName}>
                          <span className='text-primary' style={{ paddingRight: 2 }}>
                            Integrated with {intgn.integrationName}
                          </span>

                          <div style={{ display: 'inline-block', marginBottom: 10 }}>
                            <ToggleButton
                              thumbIcon={
                                <OverlayTrigger
                                  placement='bottom'
                                  overlay={
                                    <Tooltip id='showInttooltip'>
                                      Enable {intgn.integrationName}{' '}
                                    </Tooltip>
                                  }
                                >
                                  <Image
                                    src={`/plugins/${availableIntegrationsAsync.result[intgn.integrationName].icon}`}
                                    style={{ height: '95%', margin: 'auto' }}
                                  />
                                </OverlayTrigger>
                              }
                              activeLabel='ON'
                              inactiveLabel='OFF'
                              value={true}
                              thumbStyle={borderRadiusStyle}
                              trackStyle={borderRadiusStyle}
                              onToggle={(e) => {
                                dispatch(ensureProjects().toggleIntegration(intgn.integrationName));
                              }}
                            />
                          </div>

                          {_.keys(
                            availableIntegrationsAsync.result[intgn.integrationName].options || {},
                          ).map((option) => (
                            <div key={option} style={{ display: 'inline-block', paddingLeft: 5 }}>
                              <DropdownButton
                                bsSize='xsmall'
                                title={
                                  (intgn.active.integrationOptions &&
                                    intgn.active.integrationOptions[option]) ||
                                  ''
                                }
                                id='dropdown-size-extra-small'
                              >
                                {availableIntegrationsAsync.result[intgn.integrationName].options[
                                  option
                                ].map((optVal) => (
                                  <MenuItem
                                    key={optVal}
                                    onClick={() =>
                                      dispatch(
                                        ensureProjects().updateIntegrationOption(
                                          intgn.integrationName,
                                          option,
                                          optVal,
                                        ),
                                      )
                                    }
                                  >
                                    {optVal}
                                  </MenuItem>
                                ))}
                              </DropdownButton>
                            </div>
                          ))}
                        </div>
                      ) : null,
                    )}

                    {/*<div style={{ marginTop: 10 }}>
                                <DropdownButton
                                    bsSize="xsmall"
                                    title="Add 3rd party integrations"
                                    id="dropdown-size-extra-small"
                                >
                                    {integrationStats.map(intgn =>
                                        intgn.active ? null :
                                            <div key={intgn.integrationName} style={{
                                                width: 52, paddingBottom:10,
                                                margin: 'auto' }}>
                                                <ToggleButton
                                                    style={{margin:'auto'}}
                                                    thumbIcon={(<OverlayTrigger placement="bottom"
                                                        overlay={(<Tooltip id="showInttooltip">Enable {intgn.integrationName} </Tooltip>)}>
                                                        <Image
                                                            src={`/plugins/${availableIntegrationsAsync.result[intgn.integrationName].icon}`}
                                                            style={{ height: '95%', margin: 'auto' }} />
                                                    </OverlayTrigger>)}
                                                    activeLabel="ON"
                                                    inactiveLabel="OFF"

                                                    value={false}
                                                    thumbStyle={borderRadiusStyle}
                                                    trackStyle={borderRadiusStyle}
                                                    onToggle={(e) => {
                                                        dispatch(ensureProjects().toggleIntegration(intgn.integrationName));
                                                    }}
                                                />
                                            </div>
                                    )}
                                </DropdownButton>
                            </div>*/}
                  </div>
                )}
              </IntegrationsLoader>
            )}

            <Tabs
              defaultActiveKey={1}
              id='indexorpermissions'
              style={{
                marginTop: 10,
                backgroundColor: 'white',
              }}
            >
              <Tab eventKey={1} title={<IndexTitle />}>
                <div style={{ maxWidth: 400, margin: 'auto' }}>
                  <FormGroup
                    bsSize='small'
                    style={{ textAlign: 'left', fontSize: 'smaller', margin: 10 }}
                  >
                    <Button
                      bsStyle='info'
                      onClick={(_) => dispatch(ensureProjects().addField(null))}
                      style={{ padding: '2px' }}
                    >
                      <OverlayTrigger
                        placement='bottom'
                        overlay={<Tooltip id='indexesTooltip'>Add another index field</Tooltip>}
                      >
                        <span>Add another field</span>
                      </OverlayTrigger>
                    </Button>
                  </FormGroup>

                  <ProjectFieldList allFields={project.fields} {...{ dispatch, allroles }} />
                </div>
              </Tab>
              <Tab eventKey={2} title={<PermissionsTitle />}>
                <table style={{ width: '100%', margin: 10 }}>
                  <thead>
                    {project['permissionsList'].length > 0 ? (
                      <tr>
                        <td style={{ width: '30%', textAlign: 'center' }}>role</td>
                        <td style={{ width: '20%', textAlign: 'center' }}>view</td>
                        <td style={{ width: '20%', textAlign: 'center' }}>edit</td>
                        <td style={{ width: '20%', textAlign: 'center' }}>delete</td>
                        <td style={{ width: '10%', textAlign: 'center' }}></td>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan={3} style={{ textAlign: 'center' }}>
                          All users have access to this repository
                        </td>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {project.permissionsList.map((p, i) => (
                      <tr key={i}>
                        <td style={{ width: '30%', textAlign: 'center' }}>
                          <FormGroup validationState={p.role ? 'success' : 'error'}>
                            <InputGroup>
                              <Typeahead
                                placeholder='enter role name'
                                selected={p.role ? [p.role] : []}
                                allowNew={true}
                                newSelectionPrefix='new role :'
                                onChange={(value) => {
                                  if (value.length == 0) return;

                                  let newRole = value[0];
                                  if (value[0].customOption) newRole = value[0].label;
                                  dispatch(ensureProjects().updateRoleName(i, newRole));
                                }}
                                options={project.allroles || []}
                              />
                              {p.role && <FormControl.Feedback />}
                            </InputGroup>
                          </FormGroup>
                        </td>
                        <td style={{ width: '20%', textAlign: 'center' }}>
                          <Checkbox
                            checked={p.permissions.canView}
                            onChange={() =>
                              dispatch(
                                ensureProjects().updatePermission(
                                  i,
                                  'canView',
                                  !p.permissions.canView,
                                ),
                              )
                            }
                          />
                        </td>
                        <td style={{ width: '20%', textAlign: 'center' }}>
                          <Checkbox
                            checked={p.permissions.canEdit}
                            onChange={() =>
                              dispatch(
                                ensureProjects().updatePermission(
                                  i,
                                  'canEdit',
                                  !p.permissions.canEdit,
                                ),
                              )
                            }
                          />
                        </td>
                        <td style={{ width: '30%', textAlign: 'center' }}>
                          <Checkbox
                            checked={p.permissions.canDelete}
                            onChange={() =>
                              dispatch(
                                ensureProjects().updatePermission(
                                  i,
                                  'canDelete',
                                  !p.permissions.canDelete,
                                ),
                              )
                            }
                          />
                        </td>
                        <td style={{ width: '10%', textAlign: 'left' }}>
                          <Button
                            bsStyle='link'
                            onClick={(_) => dispatch(ensureProjects().removeRole(i))}
                          >
                            <OverlayTrigger
                              placement='bottom'
                              overlay={
                                <Tooltip id='roleTooltipcanDelete'>Remove this role</Tooltip>
                              }
                            >
                              <i
                                className='fa fa-times text-danger'
                                style={{ opacity: 0.8 }}
                                aria-hidden='true'
                              ></i>
                            </OverlayTrigger>
                          </Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={4}>
                        <Button
                          onClick={() => dispatch(ensureProjects().addnewRole())}
                          bsSize='xs'
                          bsStyle='primary'
                          style={{ margin: 5 }}
                        >
                          Add role
                        </Button>
                        <Button
                          onClick={() => {
                            //  dispatch(ensurePermissions().showUserRolesDialog(true))
                          }}
                          bsSize='xs'
                          bsStyle='info'
                          style={{ margin: 5 }}
                        >
                          Update user roles
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Tab>

              <Tab eventKey={3} title={<span className='color-orange'>Settings</span>}>
                <div style={{ maxWidth: 400, margin: 'auto' }}>
                  <FormGroup bsSize='small' style={{ textAlign: 'left', margin: 10 }}>
                    <span style={{ marginRight: 5 }}>Full text OCR all images</span>

                    <div style={{ display: 'inline-block', marginBottom: 10 }}>
                      <ToggleButton
                        activeLabel='ON'
                        inactiveLabel='OFF'
                        value={project.fullTextOcr}
                        thumbStyle={borderRadiusStyle}
                        trackStyle={borderRadiusStyle}
                        onToggle={(e) => {
                          dispatch(
                            ensureProjects().updateProjectParameter(
                              'fullTextOcr',
                              !project.fullTextOcr,
                            ),
                          );
                        }}
                      />
                    </div>
                  </FormGroup>

                  <hr />

                  <FormGroup
                    bsSize='small'
                    style={{ textAlign: 'left', fontSize: 'smaller', margin: 10 }}
                  >
                    <span style={{ marginRight: 5 }}>Allow users to re-order fields</span>

                    <div style={{ display: 'inline-block', marginBottom: 10 }}>
                      <ToggleButton
                        activeLabel='ON'
                        inactiveLabel='OFF'
                        value={!project.noUserReorder}
                        thumbStyle={borderRadiusStyle}
                        trackStyle={borderRadiusStyle}
                        onToggle={(e) => {
                          dispatch(
                            ensureProjects().updateProjectParameter(
                              'noUserReorder',
                              !project.noUserReorder,
                            ),
                          );
                        }}
                      />
                    </div>
                  </FormGroup>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectForm;
