import * as React from 'react';

import {
  Button,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';
import ensureNewDocuments, { INewDocumentsState } from './reducer';

import ActivePageButtonBar from './activePageActionButton';
import { ActivePageToolBar } from './activePageToolBar';
import FormsToolsBar from '../forms/formsToolbar';
import { HotKeys } from 'react-hotkeys';
import { IListDocumentsState } from '../listDocuments/reducerHelper';
import Movable from '../moveable';
import OptionsMenu from './optionsMenu';
import { PageImageModel } from '../../generated/PageImageModel';
import PageLayout from '../pageLayouts';
import { connect } from 'react-redux';
import ensureProjets from '../projects/reducer';
import ensureWorkspace from '../workspace/reducer';
import { navigationKeyMap } from '../mainNav/reducer';
import queryString from 'query-string';

type ConnectedProps = {
  readonly hasEditableprojects: boolean;
  readonly hasScriptsFeature: boolean;
};
type ViewProps = ConnectedProps & { dispatch };

const FormsTitle = (
  <OverlayTrigger
    placement='bottom'
    overlay={<Tooltip id='optionstooltip'>Show capture options menu</Tooltip>}
  >
    <i className='fa fa-retweet' style={{ marginRight: '5px' }}></i>
  </OverlayTrigger>
);

class NewDocView extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensureMainNav().addMenu('settings', 'advancedIndexMenu', OptionsMenu));
    dispatch(ensureNewDocuments().initializeWithNewDoc());
  }

  componentWillUnmount() {
    this.props.dispatch(ensureMainNav().deleteMenu('settings', 'advancedIndexMenu'));
  }

  render() {
    const { dispatch, hasEditableprojects, hasScriptsFeature } = this.props;

    if (!hasEditableprojects) {
      return <h2 className='text-error text-center'>Access denied</h2>;
    }

    return (
      <HotKeys
        keyMap={navigationKeyMap}
        handlers={{
          splitHere: () => dispatch(ensureNewDocuments().splitDoc()),
          duplicate: (e) => {
            e.preventDefault();
            return dispatch(ensureNewDocuments().createDuplicate());
          },
        }}
        style={{ outline: 'none' }}
      >
        <PageLayout
          layoutName='indexandpages'
          listDocsHelper={ensureNewDocuments().newDocsList}
          listPagesHelper={ensureNewDocuments().newPagesList}
          ActivePageToolBar={ActivePageToolBar}
          ExtraSaveButtons={ActivePageButtonBar}
          ExtraIndexButtons={() => (
            <div>
              <DropdownButton
                pullRight
                bsStyle='info'
                title={FormsTitle}
                id='formsDropDown'
                className='indexToolBar'
              >
                {hasScriptsFeature && (
                  <FormsToolsBar
                    listDocsHelper={ensureNewDocuments().newDocsList}
                    listPagesHelper={ensureNewDocuments().newPagesList}
                  />
                )}

                <MenuItem divider />

                <MenuItem
                  disabled={false}
                  onClick={() => dispatch(ensureNewDocuments().initializeWithNewDoc(true))}
                >
                  <span className='text-danger'>Reset new document list</span>
                </MenuItem>
              </DropdownButton>
            </div>
          )}
        />
      </HotKeys>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { hasEditableprojects } = ensureProjets().getCurrentState(state);

  const scriptFeature = ensureWorkspace().getFeature('scripts', state);

  return {
    hasEditableprojects,
    hasScriptsFeature: !!scriptFeature,
  };
})(NewDocView);
