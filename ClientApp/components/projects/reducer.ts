import * as _ from 'lodash';

import { handleAction, handleActions } from 'redux-actions';

import { ExternalIntegrationModel } from '../../generated/ExternalIntegrationModel';
import { FieldLookupTypeModel } from '../../generated/FieldLookupTypeModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PermissionsModel } from '../../generated/PermissionsModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import { ProjectTemplateModel } from '../../generated/ProjectTemplateModel';
import ReducerBase from 'base/baseReducer';
import { StatusMessageModel } from '../../generated/StatusMessageModel';
import { checkFetchError } from 'base/asyncLoader';
import debounceP from 'debounce-promise';
import ensureConfirmBox from '../confirmation/reducer';
import ensureFieldReducer from '../fieldView/reducer';
import ensureLogin from '../revLogin/reducer';
import ensurePermissions from '../permissions/reducer';
import ensureWaitBox from '../waitBox/reducer';
import ensureWorkSpace from '../workspace/reducer';
import { push } from 'react-router-redux';

const saveCycles: (pattern?: string) => Promise<ProjectTemplateModel> = debounceP(
  (pattern?: string) =>
    fetch('/api/projectTemplates?like=' + encodeURIComponent(pattern || ''))
      .then((response) => checkFetchError(response))
      .then((response) => response.json() as Promise<ProjectTemplateModel[]>),
  1000,
);

export type ExternalIntegrationMap = { [key: string]: ExternalIntegrationModel };

export type ProjectForEdit = ProjectModel & {
  permissionsList?: { role: string; permissions: PermissionsModel }[];
  allroles: string[];
  reIndexAll?: boolean;
};

type SelectableProjectTemplate = ProjectTemplateModel & { selected?: boolean };
export type SelectbleProjectTemplateCategory = {
  selected?: boolean;
  name: string;
  templates: SelectableProjectTemplate[];
};

let newIdNumber = 1;

export interface IProjectsState {
  readonly templatesAsync: IAsyncResult<ProjectTemplateModel[]>;
  readonly templateSearchPattern?: string;

  readonly onBoardingTemplatesAsync?: IAsyncResult<SelectbleProjectTemplateCategory[]>;

  readonly projectListAsync: IAsyncResult<{ [key: string]: ProjectModel }>;

  readonly hasEditableprojects: boolean;

  readonly currentEditing?: ProjectForEdit;
  readonly saveProjectResultAsync?: IAsyncResult<ProjectForEdit>;

  readonly selectedProject?: ProjectModel;

  //for components that use multiple selected projects
  readonly selectedProjectList?: ProjectModel[];

  readonly availableIntegrationsAsync: IAsyncResult<ExternalIntegrationMap>;

  readonly projectNameSearch: string;
}

type updateFieldProps = {
  field: ProjectFieldModel;
  member?: string;
  value?: any;
  remove?: boolean;
  newField?: ProjectFieldModel;
};

type myActions = {
  loadTemplates: (pattern?: string) => IAsyncResult<ProjectTemplateModel[]>;
  updateTemplateSearchPattern: (newPattern?: string) => string;

  updateprojectNameSearch: (newPattern?: string) => string;

  selectOnBoardingTemplate: (
    select: boolean,
    category: string,
    template?: string,
  ) => { select: boolean; category: string; template?: string };

  loadProjects: () => Promise<{ [key: string]: ProjectModel }>;

  loadAvailableIntegrations: () => Promise<ExternalIntegrationMap>;

  editProject: (project?: ProjectForEdit) => void;

  updateProjectParameter: (
    name: keyof ProjectForEdit,
    value: any,
  ) => { name: keyof ProjectForEdit; value: any };

  updateField: (props: updateFieldProps) => void;

  updatePermissionRoleName: (index?: number, name?: string) => void;
  updatePermission: (index: number, member: string, value: boolean) => void;

  saveProject: (
    project: ProjectForEdit,
    fieldsBeingDeleted: string,
    fieldsBeingChanged: string,
    reIndexAll?: boolean,
  ) => Promise<ProjectModel>;

  selectProject: (project: ProjectModel, isUnSelect?: boolean) => ProjectModel;
};

class pmReducer extends ReducerBase<IProjectsState, myActions> {
  createActionList() {
    return {
      loadTemplates: [(pattern) => saveCycles(pattern), (_) => ({ Async: true })],
      updateTemplateSearchPattern: (text) => text,

      updateprojectNameSearch: (text) => text,

      selectOnBoardingTemplate: (select: boolean, category: string, template?: string) => ({
        select,
        category,
        template,
      }),

      loadAvailableIntegrations: [
        () =>
          fetch('/api/external/integrations')
            .then((response) => {
              return checkFetchError(response);
            })
            .then((response) => response.json() as Promise<ExternalIntegrationMap>),
        (_) => ({ Async: true }),
      ],

      //First method called depending on workspace. we check for redirection here
      loadProjects: [
        () =>
          fetch('/api/projects')
            .then((response) => {
              return checkFetchError(response);
            })
            .then((response) => response.json() as Promise<{ [key: string]: ProjectModel }>)
            .catch((err) => {
              /*
                        if (err && err.Reason == 'WRONG_INSTANCE' && err.Message) {
                            console.log(`REV redirected to : ${err.Message}`);

                            if (window.location.origin != err.Message) {

                               // dispatch(ensureLogin().logOut(true));

                                window.location.href = err.Message;
                            } else {
                                console.error('current origin same as redirec location');
                                err.Message = 'Incorrect REV instance reached, workspace not available';
                                throw err;
                            }
                        }
                        */

              throw err;
            }),
        (_) => ({ Async: true }),
      ],

      saveProject: [
        (
          input: ProjectForEdit,
          fieldsBeingDeleted: string,
          fieldsBeingChanged: string,
          reIndexAll?: boolean,
        ) =>
          Promise.resolve()
            .then(() => {
              if (input.permissionsList) {
                if (_.find(input.permissionsList, (p) => !p.role)) throw 'role name is required';

                if (
                  _.uniqBy(input.permissionsList, (p) => p.role).length !=
                  input.permissionsList.length
                )
                  throw 'role names cannot be repeated';
                input.permissions = _.reduce(
                  input.permissionsList,
                  (obj, p) => {
                    obj[p.role] = p.permissions;
                    return obj;
                  },
                  {},
                );
              }

              _.each(input.fields, (f) => {
                if (typeof f['userlistValues_stringified'] !== 'undefined') {
                  try {
                    f.userlistValues = JSON.parse(`[${f['userlistValues_stringified'] || ''}]`);
                  } catch (error) {
                    console.error(`Json parse error ${error}`);
                    throw `failed to parse custom values for index ${f.displayName}`;
                  }
                }
              });

              return input;
            })
            .then((project) =>
              fetch(
                `/api/projects?` +
                  `confirmedFieldsToDelete=${encodeURIComponent(fieldsBeingDeleted)}` +
                  `&confirmedFieldsToChange=${encodeURIComponent(fieldsBeingChanged)}` +
                  (reIndexAll ? '&reIndexAll=true' : ''),
                {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(project),
                },
              ),
            )
            .then((response) => checkFetchError(response))
            .then((response) => response.json() as Promise<ProjectModel>),
        (_) => ({ Async: true }),
      ],

      editProject: (project?: ProjectModel) => project,

      updateField: (props: updateFieldProps) => props,

      updateProjectParameter: (name: string, value: any) => ({ name, value }),

      selectProject: (project: ProjectModel, isUnSelect?: boolean) => ({ project, isUnSelect }),

      updatePermissionRoleName: (index?: number, name?: string) => ({ index, name }),
      updatePermission: (index: number, member: string, value: boolean) => ({
        index,
        member,
        value,
      }),
    };
  }

  reducers() {
    let onBoardingTemplatesHandlers = {};

    onBoardingTemplatesHandlers[this._myActions.loadTemplates.toString()] = (state, action) => {
      //deep close as we don't want to change the payload
      const payload = _.cloneDeep(action.payload);

      if (payload.result) {
        const response = payload.result as ProjectTemplateModel[];
        if (response) {
          const grouped = _.groupBy(response, (t) => t.category);

          payload.result = _.map(_.keys(grouped), (k) => ({
            name: k,
            templates: grouped[k] as SelectableProjectTemplate[],
          }));
        }
      }

      return payload;
    };

    onBoardingTemplatesHandlers[this._myActions.selectOnBoardingTemplate.toString()] = (
      state,
      action,
    ) => {
      const payload = action.payload as { select: boolean; category: string; template?: string };

      if (!state || !state.result) return state;

      const currState = _.clone(state);

      const templates = (currState.result || []) as SelectbleProjectTemplateCategory[];

      const selectedCat = _.find(templates, (cat) => cat.name == payload.category);
      if (!selectedCat) return state;

      if (payload.template) {
        const selectedTemplate = _.find(
          selectedCat.templates || [],
          (tmplt) => tmplt.name == payload.template,
        );
        if (!selectedTemplate) return state;

        selectedTemplate.selected = payload.select;

        const selectedFirst = _.find(selectedCat.templates || [], (tmplt) => !!tmplt.selected);
        if (!selectedFirst) selectedCat.selected = false;
      } else {
        selectedCat.selected = payload.select;

        _.each(selectedCat.templates, (t) => (t.selected = selectedCat.selected));
      }

      return currState;
    };

    let editProjectHandlers = {};

    editProjectHandlers[this._myActions.updatePermission.toString()] = (state, action) => {
      if (!state) return state;

      const props = action.payload as { index: number; member: string; value: boolean };
      const newState = _.clone(state['permissionsList'] || []) as any[];

      if (!newState[props.index].permissions) newState[props.index].permissions = {};

      newState[props.index].permissions[props.member] = props.value;

      return _.assign({}, state, { permissionsList: newState });
    };

    editProjectHandlers[this._myActions.updatePermissionRoleName.toString()] = (
      state: ProjectForEdit,
      action,
    ) => {
      if (!state) return state;

      let allroles = state.allroles || [];

      const props = action.payload as { index?: number; name?: string };
      const newPermissionsList = _.clone(state.permissionsList || []);

      if (null == props.index) {
        //adding new role
        newPermissionsList.push({
          role: '',
          permissions: { canEdit: true, canDelete: false, canView: true, restrictedTo: null },
        });
      } else {
        if (null == props.name) {
          //removing role
          newPermissionsList.splice(props.index, 1);
        } else {
          if (!_.includes(allroles, props.name)) {
            allroles = _.concat(allroles, [props.name]);
          }

          newPermissionsList[props.index].role = props.name;
        }
      }

      return _.assign({}, state, { permissionsList: newPermissionsList, allroles });
    };

    editProjectHandlers[this._myActions.updateField.toString()] = (state, action) => {
      if (!state) return state;

      const props = action.payload as updateFieldProps;
      const newState = _.clone(state) as ProjectForEdit;

      newState.fields = _.clone(newState.fields);

      let fieldIndex = -1;

      if (props.field) {
        if (props.field.id) {
          fieldIndex = _.findIndex(newState.fields, (f) => f.id == props.field.id);
        } else {
          fieldIndex = _.findIndex(
            newState.fields,
            (f: any) => f.new_id == (props.field as any).new_id,
          );
        }
      }

      //_.indexOf(newState.fields, props.field);

      if (props.remove) {
        if (-1 == fieldIndex) {
          console.error('field not found in list');
          return newState;
        }

        if (newState.fields.length == 1) {
          console.warn("can't remove the last field");
        } else {
          newState.fields.splice(fieldIndex, 1);
        }
      } else {
        if (props.member) {
          if (-1 == fieldIndex) {
            console.error('field not found in list');
            return newState;
          }
          newState.fields[fieldIndex][props.member] = _.clone(props.value);
        } else {
          newState.fields.splice(
            fieldIndex + 1,
            0,
            props.newField ||
              ({
                new_id: `newid_${newIdNumber++}`,
                id: null,
                userlistValues: [],
                systemDefined: false,
                integrationOptions: {},
                fieldType: ProjectFieldTypeModel.text,
                displayName: '',
                required: false,
                unique: false,
                lookupType: FieldLookupTypeModel.none,
              } as any),
          );
        }
      }

      return newState;
    };

    editProjectHandlers[this._myActions.updateProjectParameter.toString()] = (state, action) => {
      if (!state) return state;

      const payload = action.payload as { name: keyof ProjectForEdit; value: any };

      const updateMember = {} as any;
      updateMember[payload.name] = payload.value;

      return _.assign({}, state, updateMember);
    };

    editProjectHandlers[this._myActions.editProject.toString()] = (state, action) => {
      if (!action.payload) return null;

      const project = _.cloneDeep(action.payload) as ProjectForEdit;

      if (!project.permissionsList)
        project.permissionsList = _.map(_.keys((project && project.permissions) || {}), (role) => ({
          role,
          permissions: project.permissions[role],
        }));
      return project;
    };

    let selectProjectHandlers = {};

    selectProjectHandlers[this._myActions.selectProject.toString()] = (state, action) => {
      const payload = action.payload as { project: ProjectModel; isUnSelect?: boolean };

      if (payload.isUnSelect) return state;

      me.persistData('selectedProjectId', payload.project ? payload.project.id : null);
      return payload.project;
    };

    let selectProjectListHandlers = {};

    selectProjectListHandlers[this._myActions.selectProject.toString()] = (state, action) => {
      const payload = action.payload as { project: ProjectModel; isUnSelect?: boolean };
      if (!payload.project) return state;

      let newState = _.clone(state || []) as ProjectModel[];

      if (typeof payload.isUnSelect == 'undefined') {
        //select project has been called
        newState = [payload.project];
      } else {
        if (payload.isUnSelect) {
          if (newState && newState.length > 1)
            newState = _.filter(newState, (p) => p.id != payload.project.id);
          else console.trace("won't remove last selected project");
        } else {
          if (!_.find(newState, (p) => p.id == payload.project.id)) newState.push(payload.project);
        }
      }

      return newState;
    };

    const me = this;

    return {
      templatesAsync: handleAction(
        this._myActions.loadTemplates,
        (state, action) => action.payload,
        {},
      ),
      templateSearchPattern: handleAction(
        this._myActions.updateTemplateSearchPattern,
        (state, action) => action.payload,
        null,
      ),

      projectNameSearch: handleAction(
        this._myActions.updateprojectNameSearch,
        (state, action) => action.payload,
        null,
      ),

      onBoardingTemplatesAsync: handleActions(onBoardingTemplatesHandlers, []),

      projectListAsync: handleAction(
        this._myActions.loadProjects,
        (state, action) => action.payload,
        null,
      ),

      hasEditableprojects: handleAction(
        this._myActions.loadProjects,
        (state, action) => {
          const projList: { [key: string]: ProjectModel } = action.payload && action.payload.result;
          if (projList) {
            var firstEdittableProjects = _.find(_.keys(projList), (k) => !projList[k].disableEdit);

            return null != firstEdittableProjects;
          }

          return false;
        },
        false,
      ),

      availableIntegrationsAsync: handleAction(
        this._myActions.loadAvailableIntegrations,
        (state, action) => action.payload,
        null,
      ),
      currentEditing: handleActions(editProjectHandlers, null),
      saveProjectResultAsync: handleAction(
        this._myActions.saveProject,
        (state, action) => action.payload,
        {},
      ),

      selectedProject: handleActions(selectProjectHandlers, null),
      selectedProjectList: handleActions(selectProjectListHandlers, null),
    };
  }

  initTemplates(newPattern?: string) {
    const _mine = this;
    return (dispatch, getState) => {
      dispatch(this._myActions.loadTemplates(newPattern))
        .then(() => new Promise((r) => setTimeout(r, 100)))
        .then(() => {
          const { templatesAsync, projectListAsync } = _mine.getCurrentState(getState());

          if (
            templatesAsync &&
            templatesAsync.result &&
            projectListAsync &&
            projectListAsync.result &&
            templatesAsync.result.length > 0 &&
            _.keys(projectListAsync.result).length == 0
          ) {
            dispatch(_mine.addProject(templatesAsync.result[0], templatesAsync.result[0].name));
          }
        });
    };
  }

  selectOnBoardingTemplate = (select: boolean, category: string, template?: string) =>
    this._myActions.selectOnBoardingTemplate(select, category, template);

  templateSearchChanged(newPattern: string) {
    return (dispatch, getState) => {
      dispatch(this._myActions.updateTemplateSearchPattern(newPattern));

      if (null != newPattern) return dispatch(this._myActions.loadTemplates(newPattern));
      return null;
    };
  }

  projectNameSearchChanged(newPattern: string) {
    return (dispatch, getState) => {
      dispatch(this._myActions.updateprojectNameSearch(newPattern));
    };
  }

  addProject = (template: ProjectTemplateModel, projectName?: string) =>
    this.editExistingProject(_.assign({}, template, { id: null }));

  //this is a helped method and not to be dipatched
  getAllRolesFromState_helper(currentGlobalState) {
    const allusersAsync = ensurePermissions().getCurrentState(currentGlobalState).allUsersAsync;

    if (!(allusersAsync && allusersAsync.result)) {
      console.warn('permissions not initialized');
      return [];
    }

    const userRoles = _.flatten(_.map(allusersAsync.result, (u) => u.workspaceUser.roles || []));

    const { projectListAsync, currentEditing } = this.getCurrentState(currentGlobalState);
    if (!projectListAsync.result) {
      console.warn('projects not initialized');
      return [];
    }

    let allroles = _.flatten(
      _.map(projectListAsync.result, (p) => _.keys(p.permissions || {})),
    ).concat(userRoles);

    if (currentEditing && currentEditing.permissionsList)
      allroles = allroles.concat(_.map(currentEditing.permissionsList, (r) => r.role));

    return _.uniq(allroles);
  }

  editExistingProject(project?: ProjectModel, isDuplicate?: boolean) {
    if (isDuplicate) project.id = null;

    return (dispatch, getState) => {
      if (!project) return dispatch(this._myActions.editProject(null));

      const allroles = this.getAllRolesFromState_helper(getState());

      return dispatch(this._myActions.editProject(_.assign({}, project, { allroles })));
    };
  }

  selectProject(value: string | ProjectModel, isUnSelect?: boolean) {
    return (dispatch, getState) => {
      if (typeof value === 'string') {
        const { projectListAsync, selectedProject } = this.getCurrentState(getState());
        if (projectListAsync && projectListAsync.result) {
          const selected = projectListAsync.result[value];

          if (selected) {
            if (!isUnSelect && selectedProject && selectedProject.id == selected.id) {
              console.log('project is already selected');
              return;
            }

            dispatch(this._myActions.selectProject(selected, isUnSelect));
          }
        }
      } else {
        dispatch(this._myActions.selectProject(value, isUnSelect));
      }
    };
  }

  //if called with a project name, we select that project
  ensureSelectedProject(projectName?: string) {
    return (dispatch, getState) => {
      const { projectListAsync, selectedProject, selectedProjectList } =
        this.getCurrentState(getState());
      if (
        !(projectListAsync && projectListAsync.result && _.keys(projectListAsync.result).length > 0)
      )
        throw 'no projects found';

      /*
            used to pin repos ex: http://localhost:56395/search/form?pinRepos[]=test1
            */
      const { creationObject } = ensureWorkSpace().getCurrentState(getState());
      const pinRepos: string[] = creationObject && creationObject.pinRepos;

      if (pinRepos && pinRepos.length > 0) {
        let pinnedProjectIds = _.map(pinRepos, (prName) =>
          _.find(_.keys(projectListAsync.result), (k) => projectListAsync.result[k].name == prName),
        );
        pinnedProjectIds = _.filter(pinnedProjectIds, (pid) => !!pid);

        const selectedProjIds = _.map(selectedProjectList || [], (p) => p.id);

        _.each(pinnedProjectIds, (pid) => {
          if (!_.includes(selectedProjIds, pid)) dispatch(this.selectProject(pid, false));
        });
        return;
      }

      if (projectName) {
        var searchProject = _.find(_.values(projectListAsync.result), (p) => p.name == projectName);
        if (!searchProject) {
          console.error(`project ${projectName} not found`);
          throw 'not found';
        }
        return dispatch(this.selectProject(searchProject.id));
      }

      let savedSelectedProjectId = selectedProject ? selectedProject.id : null;
      if (!savedSelectedProjectId)
        savedSelectedProjectId = this.getPersistedData('selectedProjectId');

      if (savedSelectedProjectId && !projectListAsync.result[savedSelectedProjectId])
        savedSelectedProjectId = null;

      if (!savedSelectedProjectId) savedSelectedProjectId = _.keys(projectListAsync.result)[0];

      if (!selectedProject || savedSelectedProjectId != selectedProject.id) {
        if (!savedSelectedProjectId) throw 'no project to be selected';

        return dispatch(this.selectProject(savedSelectedProjectId));
      }
    };
  }

  loadProjects(forceReload?: boolean) {
    return (dispatch, getState) => {
      const { projectListAsync } = this.getCurrentState(getState());

      if (!forceReload && projectListAsync && projectListAsync.result) {
        return Promise.resolve(projectListAsync);
      }

      //load externalitegratiosn here as well

      const me = this;
      dispatch(this._myActions.loadAvailableIntegrations());

      return dispatch(this._myActions.loadProjects())
        .then((res) => {
          //throw the actiual error. Loading project is normally the first thing we do, so if that fails we could
          if (res.error) throw res.payload.error;

          return dispatch(me.ensureSelectedProject());
        })
        .catch((err) => {
          if (err && err.Reason == 'WRONG_INSTANCE' && err.Message) {
            console.log(`REV redirected to : ${err.Message}`);

            return dispatch(
              ensureConfirmBox().ask(
                `Your REV instance has been relocated to ${err.Message}. Would you like to go there now?`,
                'Server moved',
              ),
            )
              .then(() => (window.location.href = err.Message))
              .catch(() => dispatch(ensureLogin().logOut(true)));
          }

          throw err;
        });
    };
  }

  //updatePermission = (index: number, )

  updateField = (field: ProjectFieldModel, member?: string, value?: any) => {
    if (!member) {
      console.error('member cannot be null');
      return;
    }
    return this._myActions.updateField({ field, member, value });
  };

  removeField = (field: ProjectFieldModel) => this._myActions.updateField({ field, remove: true });

  addField = (field: ProjectFieldModel) => this._myActions.updateField({ field });

  moveUpField(field: ProjectFieldModel, moveDown?: boolean) {
    return (dispatch, getState) => {
      const { currentEditing } = this.getCurrentState(getState());

      const fields = _.sortBy(
        _.clone(currentEditing && currentEditing.fields) || [],
        (f) => f.indexSortOrder || 0,
      );

      _.each(fields, (f, i) => (f.indexSortOrder = i));

      let fieldIndex = -1;
      if (field.id) {
        fieldIndex = _.findIndex(fields, (f) => f.id == field.id);
      } else {
        fieldIndex = _.findIndex(fields, (f: any) => f.new_id == (field as any).new_id);
      }

      if (-1 == fieldIndex) throw 'field not found while tying to moveUpField';

      if (moveDown) {
        if (fieldIndex < fields.length - 1) {
          fields[fieldIndex].indexSortOrder = fieldIndex + 1;
          fields[fieldIndex + 1].indexSortOrder = fieldIndex;
        }
      } else {
        if (fieldIndex > 0) {
          fields[fieldIndex].indexSortOrder = fieldIndex - 1;
          fields[fieldIndex - 1].indexSortOrder = fieldIndex;
        }
      }

      dispatch(this._myActions.updateProjectParameter('fields', fields));
    };
  }

  addnewRole = () => this._myActions.updatePermissionRoleName(null);
  removeRole = (index: number) => this._myActions.updatePermissionRoleName(index, null);
  updateRoleName = (index: number, name: string) =>
    this._myActions.updatePermissionRoleName(index, name || '');
  updatePermission = (index: number, perm: string, value: boolean) =>
    this._myActions.updatePermission(index, perm, value);

  updateProjectName = (name: string) => this._myActions.updateProjectParameter('name', name);
  updatefullTextOcr = (value: boolean) =>
    this._myActions.updateProjectParameter('fullTextOcr', value);
  updateProjectParameter = (name: keyof ProjectForEdit, value: any) =>
    this._myActions.updateProjectParameter(name, value);

  updateIntegrationOption(integrationName: string, option: string, value?: string) {
    return (dispatch, getState) => {
      const { currentEditing, availableIntegrationsAsync } = this.getCurrentState(getState());
      if (!currentEditing) throw 'no project is being edited';

      const field = _.find(
        currentEditing.fields,
        (f) =>
          f.fieldType == ProjectFieldTypeModel.externalIntegration &&
          f.displayName == integrationName,
      );

      const newIntegrationOption = _.clone(field.integrationOptions || {});
      newIntegrationOption[option] = value;

      return dispatch(
        this._myActions.updateField({
          field,
          member: 'integrationOptions',
          value: newIntegrationOption,
        }),
      );
    };
  }

  toggleIntegration(integrationName: string) {
    return (dispatch, getState) => {
      const { currentEditing, availableIntegrationsAsync } = this.getCurrentState(getState());
      if (!currentEditing) throw 'no project is being edited';

      const exists = _.find(
        currentEditing.fields,
        (field) =>
          field.fieldType == ProjectFieldTypeModel.externalIntegration &&
          field.displayName == integrationName,
      );

      if (exists) return dispatch(this.removeField(exists));
      else {
        const newField = {
          id: null,
          integrationOptions: _.mapValues(
            availableIntegrationsAsync &&
              availableIntegrationsAsync.result &&
              availableIntegrationsAsync.result[integrationName].options,
            (o) => o[0],
          ),
          userlistValues: [],
          systemDefined: false,
          fieldType: ProjectFieldTypeModel.externalIntegration,
          displayName: integrationName,
          required: false,
          unique: false,
          documentRestriction: false,
          lookupType: FieldLookupTypeModel.none,
        };

        return dispatch(
          this._myActions.updateField({
            field: currentEditing.fields[0],
            newField,
          }),
        );
      }
    };
  }

  completeOnBoarding() {
    return (dispatch, getState) => {
      const { onBoardingTemplatesAsync, projectListAsync } = this.getCurrentState(getState());

      const _mine = this;

      if (
        projectListAsync &&
        projectListAsync.result &&
        _.keys(projectListAsync.result).length > 0
      ) {
        throw 'we already have projects. No need for onboarding';
      }

      if (!onBoardingTemplatesAsync || !onBoardingTemplatesAsync.result)
        throw 'onBoardingTemplatesAsync not initialized';

      const onBoardingPromise = Promise.resolve(onBoardingTemplatesAsync.result)
        .then((response) => {
          const templatesToCreate = _.flatMap(
            _.filter(response, (cat) => !!cat.selected),
            (cat) => _.filter(cat.templates, (t) => !!t.selected),
          );
          if (templatesToCreate.length == 0)
            throw 'We need to select at least one type of document';

          //we want to run these sequesntially. create two repos at the same time will fail
          return templatesToCreate.reduce((previousPromise, nextID) => {
            return previousPromise.then(() => {
              return fetch('/api/projects', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(nextID),
              })
                .then((response) => checkFetchError(response))
                .then((response) => response.json());
            });
          }, Promise.resolve());
        })
        .then(() => {
          return true;
        });
      return dispatch(ensureWaitBox().doWait('creating repositories', onBoardingPromise))
        .catch((ex) => {
          //not much to do here
        })
        .then(() => fetch('/api/projects'))
        .then((response) => checkFetchError(response))
        .then((response) => response.json() as Promise<{ [key: string]: ProjectModel }>)
        .then((response) => {
          if (_.keys(response).length > 0) {
            dispatch(_mine.closeProjectEditor());
            dispatch(_mine.loadProjects(true))
              .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
              .then(() => {
                dispatch(push('/new'));
              });
          }
        });
    };
  }

  saveProject = () => {
    return (dispatch, getState) => {
      const { currentEditing, projectListAsync } = this.getCurrentState(getState());
      if (!currentEditing) return null;

      const creatingFirstProject =
        projectListAsync && projectListAsync.result && _.keys(projectListAsync.result).length == 0;

      const existingProject =
        currentEditing.id &&
        projectListAsync &&
        projectListAsync.result &&
        projectListAsync.result[currentEditing.id];

      const fieldsIds = _.filter(
        _.map(currentEditing.fields, (f) => f.id || null),
        (id) => !!id,
      );

      //const newFieldnames = _.map(currentEditing.fields, f => f.displayName);
      const fieldsbeingRemoved = _.filter(
        (existingProject && existingProject.fields) || [],
        (f) => !_.includes(fieldsIds, f.id),
      );
      const fieldNamesToRemove = _.map(fieldsbeingRemoved, (f) => f.displayName);

      const FieldsBeingRenamed = _.filter(
        (existingProject && existingProject.fields) || [],
        (f) => {
          const found = _.find(currentEditing.fields, (ef) => ef.id == f.id);
          return found && found.displayName != f.displayName;
        },
      );

      const fieldNamesToRename = _.map(FieldsBeingRenamed || [], (f) => f.displayName);

      const _mine = this;

      const { reIndexAll } = currentEditing;

      return Promise.all([
        fieldsbeingRemoved.length > 0
          ? dispatch(
              ensureConfirmBox().ask(
                `Please type the field name(s) :"${fieldNamesToRemove.join(',')}" in the box to confirm their removal`,
                'Delete fields permanently',
                true,
              ),
            )
          : Promise.resolve(''),
        fieldNamesToRename.length > 0
          ? dispatch(
              ensureConfirmBox().ask(
                `Field name change cannot be un done. Please type: "${fieldNamesToRename.join(',')}" in the box to confirm the change`,
                'Change field names',
                true,
              ),
            )
          : Promise.resolve(''),
      ])
        .then(([confirmationDelete, confirmationChange]) => {
          const { sortOrder } = ensureFieldReducer().getCurrentState(getState());
          const updatedProject = _.clone(currentEditing);

          _.each(currentEditing.fields, (f) => {
            if (f.noIndexForRoles && f.noIndexForRoles.length == 0) f.noIndexForRoles = null;
          });

          /*
                    if (sortOrder && sortOrder['indexFields']) {

                        const sorts = sortOrder['indexFields'];

                        _.each(currentEditing.fields, f => {
                            if (sorts[f.displayName]) {
                                f.indexSortOrder = sorts[f.displayName];
                            }

                        })
                    }
                    */

          return dispatch(
            _mine._myActions.saveProject(
              updatedProject,
              confirmationDelete,
              confirmationChange,
              reIndexAll,
            ),
          );
        })
        .then((res) => {
          if (!res.error) {
            dispatch(_mine.closeProjectEditor());
            dispatch(_mine.loadProjects(true))
              .then(() => new Promise((resolve) => setTimeout(resolve, 100)))
              .then(() => {
                if (creatingFirstProject) {
                  dispatch(push('/new'));
                } else {
                  return dispatch(_mine.loadProjects(true));
                }
              });
          }
        });
    };
  };

  closeProjectEditor(userCanceled?: boolean) {
    return (dispatch, getState) => {
      dispatch(this.templateSearchChanged(null));
      dispatch(this.projectNameSearchChanged(null));
      dispatch(this.editExistingProject(null));

      const _mine = this;
      if (userCanceled) {
        new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
          const { projectListAsync } = _mine.getCurrentState(getState());
          if (
            projectListAsync &&
            projectListAsync.result &&
            _.keys(projectListAsync.result).length == 0
          ) {
            dispatch(ensureLogin().logOut());
          }
        });
      }
    };
  }
}

export default () => pmReducer.getInstance(pmReducer, 'projects');
