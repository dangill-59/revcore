import * as React from 'react';
import * as _ from 'lodash';

import { IListDocumentsState, ListDocsHelper } from './reducerHelper';
import { MenuItem, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensurePrintApp, { PrintableProps } from '../printApp/reducer';

import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import MailEditor from '../printApp/mailEditor';
import MultiPrintpdf from './multiPrintPdf';
import { connect } from 'react-redux';
import ensureMainNav from '../mainNav/reducer';
import IndexNamesModal from './IndexNamesModal';
type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listofPagesHelper: ListDocumentPagesHelper;
};
type ConnectedProps = IListDocumentsState & {
  multiPrintPdf: boolean;
};

type DistributeMenuState = {
  showIndexNamesModal: boolean;
};

class DistributeMenu extends React.Component<
  ConnectedProps & ComponentProps & { dispatch },
  DistributeMenuState
> {
  constructor(props) {
    super(props);
    this.state = {
      showIndexNamesModal: false,
    };
  }

  pagesToPrint = () => {
    const { docsAsync, selectedDocIds } = this.props;
    const selectedDocs =
      docsAsync &&
      docsAsync.result &&
      _.filter(docsAsync.result, (d) => _.includes(selectedDocIds, d.id));

    return selectedDocs && selectedDocs.length > 0 && _.flatMap(selectedDocs, (d) => d.pages);
  };

  render() {
    const { dispatch, listofPagesHelper, listDocsHelper, multiPrintPdf } = this.props;
    const showDownloadDocument =
      Object.keys(JSON.parse(localStorage.getItem('selectedSearchDocIds') || '{}')).length > 0;

    return (
      <>
        <OverlayTrigger placement='left' overlay={<Tooltip id='printtip'>Distribute</Tooltip>}>
          <NavDropdown
            id='distMenu'
            title={
              (
                <span style={{ position: 'relative' }}>
                  <i className='fa fa-send fa-2x' aria-hidden='true'></i>
                </span>
              ) as any
            }
          >
            <MenuItem
              onClick={(e) => {
                dispatch(
                  ensurePrintApp().setPrintable({
                    pagesGetter: listofPagesHelper.getToPrintPages.bind(listofPagesHelper),
                    isInSearch: true,
                  }),
                );
                const pages = this.pagesToPrint();

                if (pages && pages.length > 0)
                  multiPrintPdf
                    ? dispatch(listDocsHelper.downloadSeparatePdf(selectedDocIds))
                    : dispatch(ensurePrintApp().downloadPdf(pages));
              }}
            >
              <span className='text-success' style={{ fontSize: 'large' }}>
                <i className='fa fa-file-pdf-o'></i> Printable pdf
              </span>
            </MenuItem>

            <MenuItem
              onClick={() => {
                dispatch(
                  ensurePrintApp().setPrintable({
                    pagesGetter: listofPagesHelper.getToPrintPages.bind(listofPagesHelper),
                    isInSearch: true,
                  }),
                );
                //dispatch(ensurePrintApp().updateMailReq(selectedDocIds, selectedDocIds))
                const pages = this.pagesToPrint();
                if (pages && pages.length > 0)
                  dispatch(ensurePrintApp().prepareMail({ pages }, true));
              }}
            >
              <span className='text-success' style={{ fontSize: 'large' }}>
                <i className='fa fa-envelope-square'></i> Email
              </span>
            </MenuItem>

            {showDownloadDocument && (
              <MenuItem
                onClick={() => {
                  this.setState({ showIndexNamesModal: true }); // Abrir modal al hacer click
                }}
              >
                <span className='text-success' style={{ fontSize: 'large' }}>
                  <i className='fa fa-download'></i> Download documents
                </span>
              </MenuItem>
            )}
          </NavDropdown>
        </OverlayTrigger>
        <IndexNamesModal
          showModal={this.state.showIndexNamesModal}
          setShowModal={(show) => {
            this.setState({ showIndexNamesModal: show }); // Cerrar modal desde el modal
          }}
        />
      </>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { selectableSettings } = ensureMainNav().getCurrentState(state);
  const multiPrintPdf = !!(selectableSettings && selectableSettings['multiPrintPdf']);
  let ret = _.assign({}, ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state), {
    multiPrintPdf,
  });

  return ret;
})(DistributeMenu);
