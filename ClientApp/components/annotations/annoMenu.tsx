import * as React from 'react';

import ensureAnnotations, { AnnoTools } from './reducer';

import { MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';

type ConnectedProps = {
  selectedTool: AnnoTools;
  annotationsAllowed: boolean;
};

const theTools = [
  { tool: AnnoTools.annotate, icon: 'fa-comment', text: 'Annotate' },
  { tool: AnnoTools.highlight, icon: 'fa-edit', text: 'Highlight' },
  { tool: AnnoTools.redact, icon: 'fa-minus-square', text: 'Redact' },
  { tool: AnnoTools.clear, icon: 'fa-square', text: 'clear' },
  { tool: AnnoTools.showOriginal, icon: 'fa-eye', text: 'Show original' },
];

const AnnoMenu: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  selectedTool,
  annotationsAllowed,
  dispatch,
}) => {
  if (!annotationsAllowed) return <div></div>;

  return (
    <React.Fragment>
      <MenuItem divider />

      {theTools.map((tool) => {
        const disabled = !!selectedTool && selectedTool != tool.tool;

        return (
          <MenuItem
            key={`tool_${tool.tool}`}
            disabled={disabled}
            onClick={(e) => {
              dispatch(
                ensureAnnotations().selectTool(selectedTool != tool.tool ? tool.tool : null),
              );
            }}
          >
            <span
              className={disabled ? 'text-muted' : 'text-success'}
              style={{ fontSize: 'large' }}
            >
              <i className={`fa ${tool.icon}`}></i> {tool.text}
              {selectedTool == tool.tool && <i className='fa fa-check color-orange'></i>}
            </span>
          </MenuItem>
        );
      })}

      <MenuItem divider />

      <MenuItem
        disabled={!!selectedTool}
        onClick={(e) => {
          dispatch(ensureAnnotations().selectTool(AnnoTools.rotateLeft));
        }}
      >
        <span
          className={selectedTool ? 'text-muted' : 'text-success'}
          style={{ fontSize: 'large' }}
        >
          <i className='fa fa-undo'></i> Rotate left
        </span>
      </MenuItem>

      <MenuItem
        disabled={!!selectedTool}
        onClick={(e) => {
          dispatch(ensureAnnotations().selectTool(AnnoTools.rotateRight));
        }}
      >
        <span
          className={selectedTool ? 'text-muted' : 'text-success'}
          style={{ fontSize: 'large' }}
        >
          <i className='fa fa-undo fa-flip-horizontal'></i> Rotate right
        </span>
      </MenuItem>
    </React.Fragment>
  );
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { selectedProject } = ensureProjects().getCurrentState(state);

  let annotationsAllowed = !!selectedProject;

  if (selectedProject && selectedProject.permissions && selectedProject.permissions['self']) {
    annotationsAllowed = selectedProject.permissions['self'].canEdit;
  }

  const { selectedTool } = ensureAnnotations().getCurrentState(state);
  return { selectedTool, annotationsAllowed };
})(AnnoMenu);
