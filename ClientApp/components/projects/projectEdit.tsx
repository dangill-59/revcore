import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { createLoaderView, createSaverView } from 'base/asyncLoader';
import ensureProjets, { IProjectsState } from './reducer';

import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import ProjectForm from './projectForm';
import { ProjectModel } from '../../generated/ProjectModel';
import { ProjectTemplateModel } from '../../generated/ProjectTemplateModel';

type TemplateProps = { dispatch; template: ProjectTemplateModel };

const ATemplate: React.StatelessComponent<TemplateProps> = ({ template, dispatch }) => (
  <div style={{ display: 'inline-block', margin: '5px', color: 'white', position: 'relative' }}>
    <Button
      bsStyle='success'
      bsSize='small'
      onClick={() => dispatch(ensureProjets().addProject(template))}
    >
      <div>
        <span style={{ fontSize: 'larger' }}>{template.name}</span>
        <Image style={{ height: '200px' }} src={template.templateImage} responsive />
      </div>
    </Button>
  </div>
);

const TemplatesLoader = createLoaderView<ProjectTemplateModel[]>();

const ProjectsLoader = createLoaderView<{ [key: string]: ProjectModel }>();

const ProjectSaveStatusLoader = createSaverView<ProjectModel>();

type ViewProps = IProjectsState & { dispatch; allroles: string[] };

const ProjectEditor: React.StatelessComponent<ViewProps> = ({
  currentEditing,
  templateSearchPattern,
  projectListAsync,
  availableIntegrationsAsync,
  templatesAsync,
  saveProjectResultAsync,
  allroles,
  dispatch,
}) => {
  const gotNoProjects =
    projectListAsync && projectListAsync.result && _.keys(projectListAsync.result).length == 0;

  return (
    <Modal
      bsSize='lg'
      show={!!currentEditing || null != templateSearchPattern}
      onHide={() => dispatch(ensureProjets().closeProjectEditor(true))}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='repotooltip'>
                In REV images are archived in a repository. You can create repositories to organize
                your images
              </Tooltip>
            }
          >
            <span>
              {!currentEditing || !currentEditing.id
                ? gotNoProjects
                  ? 'Create your first image repository'
                  : 'Create new repository'
                : 'Edit repository'}
            </span>
          </OverlayTrigger>
        </Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ensureProjets().saveProject());
        }}
      >
        <Modal.Body>
          {currentEditing ? (
            <ProjectForm
              project={currentEditing}
              {...{ availableIntegrationsAsync, dispatch, allroles }}
            />
          ) : (
            <div
              style={{
                textAlign: 'center',
              }}
            >
              <h4>
                Choose a category, that most accurately describes the documents you want to archive
                -
              </h4>

              {templatesAsync && (
                <div style={{ height: 250 }}>
                  <TemplatesLoader asyncResult={templatesAsync} prompt='Loading templates...'>
                    {templatesAsync.result && (
                      <div className='imagelist-background' style={{ marginBottom: '5px' }}>
                        {templatesAsync.result.map((t) => (
                          <ATemplate key={t.name} template={t} dispatch={dispatch} />
                        ))}
                      </div>
                    )}
                  </TemplatesLoader>
                </div>
              )}

              <div>
                <FormGroup
                  bsSize='small'
                  validationState='success'
                  style={{ maxWidth: '400px', margin: 'auto', marginBottom: 5, magrinTop: 20 }}
                >
                  <InputGroup>
                    <FormControl
                      type='text'
                      value={templateSearchPattern || ''}
                      placeholder='Narrow down your choices E.g. Invoices'
                      onChange={(e: any) =>
                        dispatch(ensureProjets().templateSearchChanged(e.target.value))
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
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <ProjectSaveStatusLoader asyncResult={saveProjectResultAsync} prompt='saving'>
            {saveProjectResultAsync &&
              saveProjectResultAsync.error &&
              saveProjectResultAsync.error.Reason == 'mapping_conflicted' && (
                <div className='text-danger'>
                  To commit this change all documents in all repositories would need to be re
                  indexed which might take a long time.
                  <br />
                  During this time search results will not be available.
                  <br />
                  It is advisable to perform this task when search downtime is acceptable
                  <br />
                  <br />
                  <Checkbox
                    checked={currentEditing && currentEditing.reIndexAll}
                    onChange={(e) => {}}
                    onClick={() =>
                      dispatch(
                        ensureProjets().updateProjectParameter(
                          'reIndexAll',
                          !(currentEditing && currentEditing.reIndexAll),
                        ),
                      )
                    }
                  >
                    Re Index all documents
                  </Checkbox>
                </div>
              )}
          </ProjectSaveStatusLoader>

          <Button
            bsStyle='warning'
            onClick={() => dispatch(ensureProjets().closeProjectEditor(true))}
          >
            Cancel
          </Button>

          {currentEditing && (
            <Button
              bsStyle='primary'
              type='submit'
              disabled={saveProjectResultAsync && saveProjectResultAsync.isLoading}
            >
              Save repository
            </Button>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ProjectEditor;
