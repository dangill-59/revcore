import 'react-image-lightbox/style.css';

import * as React from 'react';
import * as _ from 'lodash';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Lightbox from 'react-image-lightbox';
import { ListDocumentPagesHelper } from './reducerHelper';
import { PageImageModel } from '../../generated/PageImageModel';
import { connect } from 'react-redux';

type ComponentProps = {
  listofPagesHelper: ListDocumentPagesHelper;
  pagesArray: PageImageModel[];
};

type ConnectedProps = {
  readonly activePage?: PageImageModel;
  readonly selectedPages: { [key: string]: boolean };
};

const LightBox: React.StatelessComponent<ComponentProps & ConnectedProps & { dispatch }> = ({
  dispatch,
  activePage,
  pagesArray,
  listofPagesHelper,
  selectedPages,
}) => {
  const selectedIndex = _.findIndex(pagesArray, activePage);
  if (-1 == selectedIndex) throw 'lightbox error, activepage not found in pages array';

  const nextImage =
    pagesArray.length > 1 ? pagesArray[(selectedIndex + 1) % pagesArray.length] : null;
  const prevImage =
    pagesArray.length > 1
      ? pagesArray[(selectedIndex + pagesArray.length - 1) % pagesArray.length]
      : null;

  const Prompt = (
    <div style={{ color: 'white' }}>
      Image {selectedIndex + 1} of {pagesArray.length}
    </div>
  );

  const SelectButton = (
    <OverlayTrigger
      placement='bottom'
      overlay={<Tooltip id='lightnoxtooltipselect'>Select this image</Tooltip>}
    >
      <input
        type='checkbox'
        checked={!!(selectedPages && selectedPages[activePage.id])}
        onChange={() => {}} //need onchanged for warnings to be happy
        style={{ margin: 5 }}
        onClick={(e) =>
          dispatch(listofPagesHelper.togglePageSelection(activePage.id, false, false))
        }
      />
    </OverlayTrigger>
  );

  return (
    <Lightbox
      mainSrc={activePage.path}
      nextSrc={nextImage && nextImage.path}
      prevSrc={prevImage && prevImage.path}
      onCloseRequest={() => dispatch(listofPagesHelper.showLightBox(null))}
      onMovePrevRequest={() => prevImage && dispatch(listofPagesHelper.setActivePage(prevImage.id))}
      onMoveNextRequest={() => nextImage && dispatch(listofPagesHelper.setActivePage(nextImage.id))}
      toolbarButtons={[SelectButton, Prompt]}
    />
  );
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { activePage, selectedPages } = ownprops.listofPagesHelper.getmyState(state);
  return { activePage, selectedPages };
})(LightBox);
