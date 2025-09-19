import * as React from 'react';
import * as _ from 'lodash';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensurePageLayouts, { IPageLayoutsettings, LayoutSelectorProps } from './reducer';

import AutoCarryMenu from './autoCarryOption';
import ContainerDimensions from 'react-container-dimensions';
import DoclistCompact from './doclistCompactEditor';
import { HotKeys } from 'react-hotkeys';
import IndexPostFix from './indexFieldPostFix';
import Movable from '../moveable';
import { MovablePlacement } from '../moveable/interfaces';
import { PageImageModel } from '../../generated/PageImageModel';
import PageListView from '../listPages';
import { ProjectModel } from '../../generated/ProjectModel';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import { navigationKeyMap } from '../mainNav/reducer';
import { pageNav } from '../listPages/reducerHelper';

type ConnectedProps = IPageLayoutsettings & {
  selectedProject: ProjectModel;
  docsCount: number;
  activeDocId: string;
};

type ViewProps = ConnectedProps & LayoutSelectorProps & { dispatch };

class NewDocView extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensurePageLayouts().moveableIndexes.loadInitialPosition());
    dispatch(ensurePageLayouts().moveablImageList.loadInitialPosition());
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedProject, docsCount, dispatch, listDocsHelper } = this.props;

    if (selectedProject && docsCount == 1 && selectedProject != prevProps.selectedProject) {
      //if not in batch mode, update current new document's project
      dispatch(listDocsHelper.updateActiveDocumentProjectId(selectedProject.id));
    }
  }

  render() {
    const {
      dispatch,
      listDocsHelper,
      listPagesHelper,
      ActivePageToolBar,
      ExtraSaveButtons,
      PageListTools,
      ExtraIndexButtons,
      activeDocId,
      PageOverlayView,
    } = this.props;

    return (
      <HotKeys
        keyMap={navigationKeyMap}
        handlers={{
          scrollToPrevPage: () => listPagesHelper.setActivePageDebouced(dispatch, pageNav.prev),
          scrollToNextPage: () => listPagesHelper.setActivePageDebouced(dispatch, pageNav.next),
          scrollToPrevDocument: () => dispatch(listDocsHelper.navigate(false)),
          scrollToNextDocument: () => dispatch(listDocsHelper.navigate(true)),
          selectAll: (e) => {
            e.preventDefault();
            return dispatch(listPagesHelper.selectAllPages());
          },
          deleteActivePage: () => dispatch(listPagesHelper.deleteActivepage()),
        }}
        style={{ outline: 'none' }}
      >
        <ContainerDimensions>
          {({ width, height }) => {
            let imagesPos: MovablePlacement = { height: 250 };
            let indexPos: MovablePlacement = { height: 500, width: 400, top: 265 };
            let defaultImageSize: number = null;

            if (width >= 768) {
              //meaning tablet and up

              const indexWidth = Math.min(400, width / 2 - 20);
              imagesPos = { height: 600, width: width - indexWidth - 20, left: 5 };

              indexPos = {
                height: imagesPos.height,
                width: indexWidth,
                left: imagesPos.width + 10,
              };

              defaultImageSize = 570;
            }

            return (
              <div>
                <Movable
                  moveableHelper={ensurePageLayouts().moveablImageList}
                  initialPosition={imagesPos}
                >
                  <PageListView
                    listofPagesHelper={listPagesHelper}
                    PageOverlayView={PageOverlayView}
                    ActivePageToolBar={ActivePageToolBar}
                    ToolButtons={PageListTools}
                    defaultThumbsHeight={defaultImageSize}
                    imageListStyle={{
                      right: 0,
                      overflow: 'auto',
                      position: 'absolute',
                      top: 50,
                      bottom: 0,
                      left: 0,
                    }}
                  />
                </Movable>

                <Movable
                  moveableHelper={ensurePageLayouts().moveableIndexes}
                  initialPosition={indexPos}
                  className='mainInfo'
                  overflow='auto'
                >
                  <DoclistCompact
                    listDocsHelper={listDocsHelper}
                    listofPagesHelper={listPagesHelper}
                    ExtraSaveButtons={ExtraSaveButtons}
                    ExtraIndexButtons={ExtraIndexButtons}
                    indexOptionsMenuItems={{ menuItems: [AutoCarryMenu], postFix: IndexPostFix }}
                  />
                </Movable>
              </div>
            );
          }}
        </ContainerDimensions>
      </HotKeys>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, LayoutSelectorProps>((state, ownprops) => {
  const { listDocsHelper } = ownprops;

  const listDocsState = listDocsHelper && listDocsHelper.getmyState(state);

  return _.assign({}, ensurePageLayouts().getCurrentState(state), {
    selectedProject: ensureProjects().getCurrentState(state).selectedProject,
    docsCount:
      (listDocsState &&
        listDocsState.docsAsync &&
        listDocsState.docsAsync.result &&
        listDocsState.docsAsync.result.length) ||
      0,
    activeDocId:
      (listDocsState && listDocsState.activeDoc && listDocsState.activeDoc.id) ||
      'defaultscanbatch',
  });
})(NewDocView);
