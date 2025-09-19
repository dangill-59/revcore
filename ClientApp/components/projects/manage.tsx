import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureProjets, { IProjectsState } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import OnBoardingView from './onBoarding';
import ProjectEditor from './projectEdit';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import { UserEditModel } from '../../generated/UserEditModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensurePermissions from '../permissions/reducer';
import { template } from 'lodash';

type ViewProps = IProjectsState & {
  allUsersAsync: IAsyncResult<UserEditModel[]>;
  readonly allroles: string[];
} & { dispatch };

const ProjectsLoader = createLoaderView<{ [key: string]: ProjectModel }>();

const UsersLoader = createLoaderView<UserEditModel[]>();

class EntryView extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensureProjets().loadProjects()).then(() => dispatch(ensureProjets().initTemplates()));

    dispatch(ensurePermissions().loadAllUsers());
  }

  public render() {
    const {
      templatesAsync,
      templateSearchPattern,
      projectListAsync,
      availableIntegrationsAsync,
      currentEditing,
      saveProjectResultAsync,
      allUsersAsync,
      dispatch,
      allroles,
      projectNameSearch,
    } = this.props;

    let projectList = _.sortBy(
      _.map(
        (projectListAsync && _.keys(projectListAsync.result)) || [],
        (k) => projectListAsync.result[k],
      ),
      (p) => p.name,
    );
    if (!!projectNameSearch) {
      projectList = _.filter(projectList, (p) =>
        _.includes(p.name.toLowerCase(), projectNameSearch.toLowerCase()),
      );
    }

    return allUsersAsync ? (
      <UsersLoader asyncResult={allUsersAsync} prompt='loading users'>
        {templatesAsync &&
          templatesAsync.result &&
          projectListAsync &&
          projectListAsync.result &&
          allUsersAsync &&
          allUsersAsync.result &&
          (_.keys(projectListAsync.result).length == 0 ? (
            <OnBoardingView />
          ) : (
            <ProjectEditor {...this.props} />
          ))}

        {projectListAsync && (
          <ProjectsLoader asyncResult={projectListAsync} prompt='loading projects...'>
            {projectListAsync.result && (
              <div className='container'>
                <h2 className='text-center text-primary'>Image repositories</h2>

                <div>
                  <FormGroup
                    bsSize='small'
                    validationState='success'
                    style={{ maxWidth: '400px', margin: 'auto', marginBottom: 5, magrinTop: 20 }}
                  >
                    <InputGroup>
                      <FormControl
                        type='text'
                        value={projectNameSearch || ''}
                        placeholder='Search for repository'
                        onChange={(e: any) =>
                          dispatch(ensureProjets().projectNameSearchChanged(e.target.value))
                        }
                      />

                      <InputGroup.Addon>
                        <OverlayTrigger
                          placement='bottom'
                          overlay={
                            <Tooltip id='searchTooltip'>Search for repository templates</Tooltip>
                          }
                        >
                          <i className='fa fa-search' aria-hidden='true'></i>
                        </OverlayTrigger>
                      </InputGroup.Addon>
                    </InputGroup>
                  </FormGroup>
                </div>

                <div
                  className='text-center'
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Button
                    bsStyle='info'
                    bsSize='xs'
                    block
                    onClick={() => dispatch(ensureProjets().templateSearchChanged(''))}
                  >
                    Create another repository
                  </Button>
                </div>
                {projectList.map((project) => {
                  return (
                    <div
                      key={project.id}
                      className='mainInfo'
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <div>
                        <div style={{ float: 'left', width: 200 }}>
                          <Image style={{ width: '100%' }} src={project.templateImage} />
                        </div>
                        <div style={{ marginLeft: 210 }}>
                          <h3>
                            <small className='text-muted'>repository :</small>
                            <span className='text-primary'> {project.name}</span>

                            {availableIntegrationsAsync &&
                              availableIntegrationsAsync.result &&
                              _.filter(
                                project.fields,
                                (f) => f.fieldType == ProjectFieldTypeModel.externalIntegration,
                              ).map((field) => (
                                <Image
                                  key={field.displayName}
                                  src={`/plugins/${(availableIntegrationsAsync.result[field.integrationOptions['lookupType']] || ({} as any)).icon}`}
                                  style={{ height: '40px' }}
                                />
                              ))}
                          </h3>

                          <div>
                            <small className='text-muted'>Full text OCR :</small>
                            <span>{project.fullTextOcr ? 'ON' : 'OFF'} </span>
                          </div>

                          <span className='text-muted'>Index fields:</span>
                          <div>
                            {_.filter(
                              project.fields,
                              (f) => f.fieldType != ProjectFieldTypeModel.externalIntegration,
                            ).map((field) => (
                              <div key={field.id} style={{ display: 'inline-block', margin: 10 }}>
                                <strong>{field.displayName}</strong> :{' '}
                                <span style={{ fontSize: 'smaller' }}>
                                  {field.unique && <span>unique </span>}
                                  {field.required && <span>required </span>}
                                  <strong>{field.fieldType}</strong>
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className='text-center'>
                            <Button
                              bsStyle='primary'
                              bsSize='sm'
                              style={{ minWidth: 100 }}
                              onClick={() => dispatch(ensureProjets().editExistingProject(project))}
                            >
                              edit
                            </Button>
                            <Button
                              bsStyle='primary'
                              bsSize='sm'
                              style={{ minWidth: 100, marginLeft: 20 }}
                              onClick={() =>
                                dispatch(ensureProjets().editExistingProject(project, true))
                              }
                            >
                              clone
                            </Button>
                          </div>
                        </div>
                        <div style={{ clear: 'both' }}></div>
                        &nbsp;
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </ProjectsLoader>
        )}
      </UsersLoader>
    ) : null;
  }
}

export default connect((state) => {
  const { allUsersAsync } = ensurePermissions().getCurrentState(state);
  const allroles = ensureProjets().getAllRolesFromState_helper(state);

  return _.assign({}, ensureProjets().getCurrentState(state), { allUsersAsync, allroles });
})(EntryView);
