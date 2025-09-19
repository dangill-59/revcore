import * as React from 'react';

import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IListDocumentsState, ListDocsHelper } from './reducerHelper';

import DocEditForm from './docEditForm';
import { connect } from 'react-redux';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
};

type ConnectedProps = IListDocumentsState;

const UpdateMultiple: React.StatelessComponent<ComponentProps & ConnectedProps & { dispatch }> = ({
  dispatch,
  multiIndexerVisible,
  selectedDocIds,
  activeDoc,
  listDocsHelper,
}) =>
  multiIndexerVisible ? (
    <Modal show={true} onHide={() => dispatch(listDocsHelper.showMutiIndexDocuments({}))}>
      <Modal.Header closeButton>
        <Modal.Title>Update {selectedDocIds && selectedDocIds.length} documents</Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(listDocsHelper.showMutiIndexDocuments({ saveData: true }));
        }}
      >
        <Modal.Body>{activeDoc && <DocEditForm listDocsHelper={listDocsHelper} />}</Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle='warning'
            onClick={() => dispatch(listDocsHelper.showMutiIndexDocuments({}))}
          >
            Cancel
          </Button>
          <Button bsStyle='info' type='submit'>
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  ) : (
    <div />
  );

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  return ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state);
})(UpdateMultiple);
