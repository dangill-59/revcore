import * as React from 'react';

import { MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import ensureSearch from '../searchView/reducer';

type ComponentProps = {
  pageId: string;
};

type ConnectedProps = {
  readonly showOcrTextforPageId: string;
  readonly OCREnabled: boolean;
};

const OCRMenu: React.StatelessComponent<ConnectedProps & ComponentProps & { dispatch }> = ({
  showOcrTextforPageId,
  OCREnabled,
  pageId,
  dispatch,
}) => {
  if (!OCREnabled) return <React.Fragment>&nbsp;</React.Fragment>;

  return (
    <React.Fragment>
      <MenuItem divider />

      <MenuItem
        key='ocr_data'
        onClick={(e) => {
          dispatch(ensureSearch().ToggleOcrText(pageId));
        }}
      >
        {/*className="text-success" style={{ fontSize: 'large' }}*/}
        <span>
          Show OCR Data
          {showOcrTextforPageId == pageId && <i className='fa fa-check color-orange'></i>}
        </span>
      </MenuItem>
    </React.Fragment>
  );
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state) => {
  const { selectedProject } = ensureProjects().getCurrentState(state);
  const { showOcrTextforPageId } = ensureSearch().getCurrentState(state);

  return {
    OCREnabled: !!(selectedProject && selectedProject.fullTextOcr),
    showOcrTextforPageId,
  };
})(OCRMenu);
