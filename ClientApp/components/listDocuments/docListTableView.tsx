import './docListTableStyles.less';
import 'react-table/react-table.css';

import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment';

import { Badge, Checkbox } from 'react-bootstrap';
import { Button, NavItem, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
import { EditableDocument, IListDocumentsState, ListDocsHelper } from './reducerHelper';
import ensureDocSettings, { IDocSettings } from './settings.reducer';

import { AsyncError } from 'base/asyncLoader';
import DeleteMenu from './deleteMenu';
import DistributeMenu from './distrubuteMenu';
import { HotKeys } from 'react-hotkeys';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import MailEditor from '../printApp/mailEditor';
import MultiPrintpdf from './multiPrintPdf';
import PageCountIcon from './pageCountIcon';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import ReactTable from 'react-table';
import { SearchReqSortModel } from '../../generated/SearchReqSortModel';
import Spinner from 'spinner';
import UpdateMultiple from './updateMultiple';
import { connect } from 'react-redux';
import ensureMainNav from '../mainNav/reducer';
import ensurePrintApp from '../printApp/reducer';
import ensureProjects from '../projects/reducer';
import { navigationKeyMap } from '../mainNav/reducer';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listofPagesHelper: ListDocumentPagesHelper;

  onPagesNeeded?: (page: number, pageSize: number) => void;

  focusabelRef?: (ref) => void;
  onImageClicked?: (doc: EditableDocument) => void;

  sortedColumn?: { [key: string]: SearchReqSortModel };
  onSortChange?: (displayName: string, value?: SearchReqSortModel) => void;

  RowDetailsComponent?: (props: { doc: EditableDocument }) => JSX.Element;
};

type ConnectedProps = IListDocumentsState &
  IDocSettings & {
    selectedProjectList: ProjectModel[];
    multiPrintPdf: boolean;
  };

const HeaderComp: React.SFC<{ name: string; sortorder?: number }> = ({ name, sortorder }) => (
  <span style={{ position: 'relative' }}>
    {name}
    {!!sortorder && (
      <span className='text-muted' style={{ fontSize: 'xx-small' }}>
        {' '}
        ({sortorder}){' '}
      </span>
    )}
  </span>
);

class DocTableView extends React.PureComponent<ComponentProps & ConnectedProps & { dispatch }> {
  componentDidMount() {
    const { dispatch, listDocsHelper, listofPagesHelper } = this.props;

    dispatch(
      ensureMainNav().addMenu('main', 'delete', () => (
        <DeleteMenu listDocsHelper={listDocsHelper} />
      )),
    );
    dispatch(ensureMainNav().addMenu('settings', 'multiPrint', MultiPrintpdf));
    dispatch(
      ensureMainNav().addMenu('main', 'distribute', () => (
        <DistributeMenu listDocsHelper={listDocsHelper} listofPagesHelper={listofPagesHelper} />
      )),
    );
  }

  componentWillUnmount() {
    this.props.dispatch(ensureMainNav().deleteMenu('main', 'delete'));
    this.props.dispatch(ensureMainNav().deleteMenu('settings', 'multiPrint'));
    this.props.dispatch(ensureMainNav().deleteMenu('main', 'distribute'));
  }

  render() {
    const {
      dispatch,
      docsAsync,
      listDocsHelper,
      activeDoc,
      selectedProjectList,
      onPagesNeeded,
      totalDocsInAllPages,
      paginationNumberofRows,
      paginationCurrentPage,
      focusabelRef,
      onImageClicked,
      onSortChange,
      sortedColumn,
      selectedDocIds,
      isCkecked,
      isSelectAll,
      RowDetailsComponent,
      multiPrintPdf,
    } = this.props;

    const totalPages = paginationNumberofRows
      ? Math.ceil(totalDocsInAllPages / paginationNumberofRows)
      : 0;

    const selectedSearchDocIndexNames = _.uniqBy(
      _.flatMap(selectedProjectList || [], (p) => p.fields),
      (f) => f.displayName,
    ).map((f) => f.displayName);

    localStorage.setItem(
      'selectedSearchDocIndexNames',
      JSON.stringify(selectedSearchDocIndexNames),
    );

    const serachFields = _.uniqBy(
      _.flatMap(selectedProjectList || [], (p) => p.fields),
      (f) => f.displayName,
    ).concat([
      {
        id: 'created',
        displayName: 'created',
        fieldType: ProjectFieldTypeModel.date,
        required: false,
        unique: false,
        documentRestriction: false,
        userlistValues: [],
        integrationOptions: {},
        lookupType: null,
        systemDefined: true,
      },
      {
        id: 'modified',
        displayName: 'modified',
        fieldType: ProjectFieldTypeModel.date,
        required: false,
        unique: false,
        documentRestriction: false,
        userlistValues: [],
        integrationOptions: {},
        lookupType: null,
        systemDefined: true,
      },
    ]);

    //we want the 1 based sort order of the columns
    const allVisibleFieldNames = _.map(serachFields, (s) => s.displayName);
    const keysSortedCoumns = _.filter(_.keys(sortedColumn || {}), (f) =>
      _.includes(allVisibleFieldNames, f),
    );
    const sortColumnOrders: { [key: string]: number } =
      keysSortedCoumns.length > 1 ? _.fromPairs(_.map(keysSortedCoumns, (k, i) => [k, i + 1])) : {};

    const columns = _.concat<any>(
      [
        {
          id: 'pageCount',
          Header: 'pages',
          displayName: 'pages',
          sortable: false,
          width: 50,
          accessor: (d) => d,

          Cell: ({ original }) => (
            <OverlayTrigger
              placement='right'
              overlay={
                <Tooltip id='showpagetooltip'>
                  show {original.pages && original.pages.length} image(s){' '}
                  {original && original.hasUnprocessedpages && <small> - Still proccesing</small>}{' '}
                  <br />
                  <small>
                    Shortcut: <kbd>Entr</kbd>
                  </small>
                </Tooltip>
              }
            >
              <Button
                bsStyle='link'
                style={{ padding: 0 }}
                onClick={() => onImageClicked && onImageClicked(original)}
              >
                {original &&
                  (original.pages && !original.hasUnprocessedpages ? (
                    <PageCountIcon className='text-primary' count={original.pages.length} />
                  ) : (
                    <i className='fa fa-hourglass-start' aria-hidden='true'></i>
                  ))}
              </Button>
            </OverlayTrigger>
          ),

          className: 'text-center',
        },
      ],

      _.map(serachFields, (f, i) => {
        if (f.id == 'modified' || f.id == 'created') {
          return {
            Header: <HeaderComp name={f.id} sortorder={sortColumnOrders[f.id]} />,
            displayName: f.id,
            id: f.id,
            accessor: (d) => moment.utc(d[f.id]).local().format('l'),
          };
        }

        const colDef: any = {
          id: `index_${i}`,
          Header: <HeaderComp name={f.displayName} sortorder={sortColumnOrders[f.displayName]} />,
          displayName: f.displayName,
          accessor:
            f.fieldType == ProjectFieldTypeModel.date
              ? (d) =>
                  d.indexes &&
                  d.indexes[f.displayName] &&
                  moment(d.indexes[f.displayName]).format('l')
              : `indexes.${f.displayName}`,
        };

        if (f.fieldType == ProjectFieldTypeModel.externalIntegration) {
          colDef.Cell = ({ original }: { original: EditableDocument }) => {
            return (
              original &&
              original.integrations &&
              original.integrations[f.displayName] && (
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='showintegrationtooltip'>show document in {f.displayName} </Tooltip>
                  }
                >
                  <a href={original.integrations[f.displayName].externalUrl} target='_blank'>
                    {original.integrations[f.displayName].displayValue}
                  </a>
                </OverlayTrigger>
              )
            );
          };
        }

        return colDef;
      }),
    );

    //if we have a sortedColumn, then find the column with the correct displayName, or get rid of the sort
    const sortedColumnDesc = !!sortedColumn
      ? _.filter(
          _.map(columns, (c) => {
            const sortDef = sortedColumn[c.displayName];
            if (!sortDef) return null;
            return { id: c.id, desc: sortDef.desc };
          }),
          (c) => !!c,
        )
      : [];

    const pagesToPrint = () => {
      const selectedDocs =
        docsAsync &&
        docsAsync.result &&
        _.filter(docsAsync.result, (d) => _.includes(selectedDocIds, d.id));

      return selectedDocs && selectedDocs.length > 0 && _.flatMap(selectedDocs, (d) => d.pages);
    };

    return (
      docsAsync && (
        <HotKeys
          className='container-fluid mainInfo'
          style={{ padding: 0 }}
          keyMap={navigationKeyMap}
          handlers={{
            scrollToPrev: () => dispatch(listDocsHelper.navigate(false)),
            scrollToNext: () => dispatch(listDocsHelper.navigate(true)),
            scrollToPrevPage: () => {
              if ((paginationCurrentPage || 0) > 0)
                dispatch(
                  listDocsHelper.updatepaginationCurrentPage((paginationCurrentPage || 0) - 1),
                );
            },
            scrollToNextPage: () => {
              if ((paginationCurrentPage || 0) < totalPages - 1)
                dispatch(
                  listDocsHelper.updatepaginationCurrentPage((paginationCurrentPage || 0) + 1),
                );
            },
            defaultAction: () => activeDoc && onImageClicked && onImageClicked(activeDoc),
          }}
        >
          <div
            ref={(ref) => (focusabelRef ? focusabelRef(ref) : {})}
            tabIndex={0}
            style={{ outline: 'none', padding: 0 }}
          >
            <AsyncError asyncResult={docsAsync} prompt='Loading matches' />

            <UpdateMultiple listDocsHelper={listDocsHelper} />

            <ContextMenuTrigger id='docListContextMenu' holdToDisplay={2000}>
              {selectedDocIds && selectedDocIds.length > 0 && (
                <ContextMenu id='docListContextMenu'>
                  <MenuItem>
                    <Badge>{selectedDocIds.length}</Badge>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      bsStyle='link'
                      onClick={() => dispatch(listDocsHelper.showMutiIndexDocuments())}
                    >
                      <span>
                        <i className='fa fa-files-o' aria-hidden='true'></i> Update multiple
                        documents
                      </span>
                    </Button>
                  </MenuItem>
                  <MenuItem divider />
                  <MailEditor />
                  <MenuItem>
                    <Button
                      bsStyle='link'
                      onClick={() => {
                        const pages = pagesToPrint();

                        if (pages && pages.length > 0)
                          multiPrintPdf
                            ? dispatch(listDocsHelper.downloadSeparatePdf(selectedDocIds))
                            : dispatch(ensurePrintApp().downloadPdf(pages));
                      }}
                    >
                      <span>
                        <i className='fa fa-file-pdf-o' aria-hidden='true'></i> Printable pdf
                      </span>
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      bsStyle='link'
                      onClick={() => {
                        const pages = pagesToPrint();
                        if (pages && pages.length > 0)
                          dispatch(ensurePrintApp().prepareMail({ pages }, true));
                      }}
                    >
                      <span>
                        <i className='fa fa-envelope-square' aria-hidden='true'></i> Email
                      </span>
                    </Button>
                  </MenuItem>
                </ContextMenu>
              )}

              {paginationNumberofRows ? (
                <ReactTable
                  columns={[
                    {
                      Header: ({ original }) => (
                        <input
                          style={{ float: 'left', marginTop: 0 }}
                          type='checkbox'
                          checked={isSelectAll}
                          onClick={(e) => {
                            dispatch(listDocsHelper.selectAll());
                          }}
                        />
                      ),
                      width: 40,

                      Cell: ({ original }) => (
                        <input
                          style={{ float: 'left' }}
                          type='checkbox'
                          checked={isCkecked[original.id] == true ? true : false}
                          onClick={(e) => {
                            dispatch(listDocsHelper.addToSelectedDoc(original.id, false));
                          }}
                          onChange={() => {}}
                        />
                      ),
                      sortable: false,
                      filterable: false,
                    },
                    { columns },
                  ]}
                  manual
                  //onSortChange exists
                  sortable={!!onSortChange}
                  sorted={sortedColumnDesc}
                  onSortedChange={(newSorted, column, shiftKey) => {
                    if (
                      onSortChange &&
                      newSorted &&
                      newSorted.length > 0 &&
                      column.id != 'pageCount'
                    ) {
                      const e = { displayName: column.displayName, desc: !!newSorted[0].desc };
                      let newSort = { desc: true } as SearchReqSortModel;

                      //if new displayName click is false and sort for this column exists then remove sort from this column
                      //else set the sort as NOT Desc
                      if (!newSorted[0].desc) {
                        newSort =
                          sortedColumn && sortedColumn[column.displayName] ? null : { desc: false };
                      }

                      onSortChange(column.displayName, newSort);
                    }
                  }}
                  multiSort={false}
                  data={docsAsync.result || []}
                  loading={!!docsAsync.isLoading}
                  LoadingComponent={() => (
                    <Spinner
                      isLoading={!!docsAsync.isLoading}
                      prompt='loading matches ...'
                      style={{ position: 'absolute', left: '40%', top: 20 }}
                    />
                  )}
                  pages={totalPages}
                  pageSize={paginationNumberofRows}
                  page={paginationCurrentPage || 0}
                  onPageChange={(pageIndex) =>
                    dispatch(listDocsHelper.updatepaginationCurrentPage(pageIndex))
                  }
                  onPageSizeChange={(pageSize, pageIndex) => {
                    //console.log(`onPageSizeChanged called pageIndex:${pageIndex}, pageSize:${pageSize}`);
                    dispatch(listDocsHelper.updatePaginationNumberofRows(pageSize));
                  }}
                  pageText={`${totalDocsInAllPages} matches. Showing page`}
                  /*
                        onResizedChange={(newResized, event) => {
                        }}
                        */

                  className='-striped -highlight'
                  TrGroupComponent={({ children, className, rowInfo, ...rest }) => {
                    let classNames = 'rt-tr-group ' + (className || '');
                    if (rowInfo) {
                      classNames += ' ' + (rowInfo.index % 2 ? '-even' : '-odd');
                    }

                    return (
                      <div className={classNames} role='rowgroup' {...rest}>
                        {children}
                        {RowDetailsComponent && (
                          <RowDetailsComponent doc={rowInfo && rowInfo.original} />
                        )}
                      </div>
                    );
                  }}
                  onFetchData={(e) => {
                    const { page } = e;
                    if (onPagesNeeded) onPagesNeeded(page, e.pageSize);
                  }}
                  getTrGroupProps={(state, rowInfo, column) => {
                    return { rowInfo };
                  }}
                  getTrProps={(state, rowInfo, column) => {
                    const rowDoc = (rowInfo && rowInfo.original) as EditableDocument;

                    const rowStyle: any = {};

                    if (rowDoc && activeDoc && rowDoc.id == activeDoc.id) {
                      rowStyle.backgroundColor = 'rgba(0, 150, 136, 0.22)';
                    }
                    if (rowDoc && selectedDocIds && _.includes(selectedDocIds, rowDoc.id)) {
                      rowStyle.backgroundColor = 'rgba(255, 212, 128,0.65)';
                    }

                    if (rowDoc && rowDoc.isChanged) rowStyle.color = 'red';

                    return {
                      style: rowStyle,

                      onKeyUp: (e, handleOriginal) => {
                        var k = e;

                        if (handleOriginal) {
                          handleOriginal();
                        }
                      },

                      onClick: (e, handleOriginal) => {
                        if (e.target && e.shiftKey) {
                          dispatch(listDocsHelper.addToSelectedDoc(rowDoc.id, !!e.shiftKey));
                        } else {
                          /*if (isCheckedDoc == null) {
                                        dispatch(listDocsHelper.resetSelectedDocs());
										}*/
                          if (rowDoc) dispatch(listDocsHelper.setActiveDoc(rowDoc));
                        }

                        if (handleOriginal) {
                          handleOriginal();
                        }
                      },
                    };
                  }}
                />
              ) : (
                'settings not initialized'
              )}
            </ContextMenuTrigger>
          </div>
        </HotKeys>
      )
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { selectedProjectList } = ensureProjects().getCurrentState(state);
  const { selectableSettings } = ensureMainNav().getCurrentState(state);
  const multiPrintPdf = !!(selectableSettings && selectableSettings['multiPrintPdf']);
  let ret = _.assign(
    {},
    ownprops.listDocsHelper && ownprops.listDocsHelper.getmyState(state),
    ensureDocSettings().getCurrentState(state),
    {
      selectedProjectList,
      multiPrintPdf,
    },
  );
  if (!ret.docsAsync) ret = _.assign({}, ret, { docsAsync: {} });
  return ret;
})(DocTableView);
