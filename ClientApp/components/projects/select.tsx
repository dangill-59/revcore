import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  FormControl,
  FormGroup,
  Image,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureProjets, { IProjectsState } from './reducer';

import { ProjectModel } from '../../generated/ProjectModel';
import Select from 'react-select';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureWorkSpace from '../workspace/reducer';

type componentProps = {
  isMulti?: boolean;
};

type ConnectedProps = IProjectsState & {
  pinRepos?: string[];
};

type ViewProps = ConnectedProps & componentProps & { dispatch };

const ProjectsLoader = createLoaderView<{ [key: string]: ProjectModel }>();

interface selectAction {
  action: string;
  option?: ProjectModel;
  removedValue?: ProjectModel;
}

class SelectView extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureProjets().loadProjects());
  }

  public render() {
    const { projectListAsync, selectedProject, selectedProjectList, isMulti, dispatch, pinRepos } =
      this.props;

    /*
        const pl2 = _.map((projectListAsync && _.keys(projectListAsync.result)) || [],
            function (key) { return { value: key, label: projectListAsync.result[key].name } });
        */

    let projectList = _.map(
      (projectListAsync && _.keys(projectListAsync.result)) || [],
      (k) => projectListAsync.result[k],
    );
    if (pinRepos && pinRepos.length > 0) {
      projectList = _.filter(projectList, (p) => _.includes(pinRepos, p.name));
    }

    projectList = _.sortBy(projectList, (p) => p.name);

    const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: 'white', borderRadius: 0 }),

      option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
        ...styles,
        //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
        backgroundColor: isFocused ? '#ffa50045' : 'white',
        color: 'black',
      }),
    };

    return (
      projectListAsync && (
        <ProjectsLoader asyncResult={projectListAsync} prompt='loading projects'>
          <div className='input-group' style={{ maxWidth: '400px', zIndex: 50 }}>
            <span className='input-group-addon' id='basic-addon1'>
              <OverlayTrigger
                placement='bottom'
                overlay={<Tooltip id='tooltip'>Please select your repository</Tooltip>}
              >
                <i className='fa fa-briefcase text-primary'></i>
              </OverlayTrigger>
            </span>
            {pinRepos && pinRepos.length > 0 && (isMulti || pinRepos.length == 1) ? (
              <FormControl
                type='text'
                value={pinRepos.join(', ')}
                style={{ zIndex: 0 }}
                onChange={() => {}}
                readOnly={true}
              />
            ) : (
              <Select
                isMulti={isMulti}
                hideSelectedOptions={false}
                value={isMulti ? selectedProjectList || [] : selectedProject}
                valueKey='id'
                name='form-field-name'
                onChange={(selected: ProjectModel, multiEvent: selectAction) => {
                  if (isMulti) {
                    switch (multiEvent.action) {
                      case 'remove-value':
                        dispatch(ensureProjets().selectProject(multiEvent.removedValue.id, true));
                        break;
                      case 'select-option':
                        dispatch(ensureProjets().selectProject(multiEvent.option.id, false));
                        break;
                      default:
                        console.warn(`multiselect option ${multiEvent.action} not supported`);
                        break;
                    }
                  } else dispatch(ensureProjets().selectProject(selected.id));
                }}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.name}
                options={projectList}
                isSearchable={true}
                isClearable={false}
                styles={colourStyles}
              />
            )}
          </div>
        </ProjectsLoader>
      )
    );
  }
}

export default connect<ConnectedProps, { dispatch }, componentProps>((state) => {
  const { creationObject } = ensureWorkSpace().getCurrentState(state);
  const pinRepos: string[] = creationObject && creationObject.pinRepos;

  return _.assign({}, ensureProjets().getCurrentState(state), { pinRepos });
})(SelectView);
