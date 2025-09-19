import * as React from 'react';
import * as _ from 'lodash';

import { Button, FormControl, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ensureSearch, { ISearchViewState } from './reducer';

import { EditableDocument } from '../listDocuments/reducerHelper';
import { Link } from 'react-router-dom';
import { OCRStatusModel } from '../../generated/OCRStatusModel';
import ToggleButton from 'react-toggle-button';
import { connect } from 'react-redux';

const showIndexesLabel = (
  <OverlayTrigger
    placement='bottom'
    overlay={<Tooltip id='showIndexestooltip'>Show/Hide Indexes</Tooltip>}
  >
    <i className='fa fa-server' style={{ margin: 'auto' }} />
  </OverlayTrigger>
);

const borderRadiusStyle = { borderRadius: 2 };

type ComponentProps = {};

type ConnectedProps = {
  showIndexes: boolean;
  //ocrStatus: OCRStatusModel;
  fullTextSearchText: string;
  listDocs?: EditableDocument[];
  activeDoc?: EditableDocument;
};

const PageTools: React.StatelessComponent<ComponentProps & ConnectedProps & { dispatch }> = ({
  dispatch,
  showIndexes,
  /*ocrStatus,*/ fullTextSearchText,
  listDocs,
  activeDoc,
}) => {
  const showDocNavigation = listDocs && listDocs.length > 1;

  let docIndexStr = null;
  if (showDocNavigation && activeDoc) {
    const docIndex = _.findIndex(listDocs, (d) => d.id == activeDoc.id);
    if (-1 != docIndex) {
      docIndexStr = `(${docIndex + 1} of ${listDocs.length})`;
    } else {
      console.error('active doc not found in result list');
    }
  }

  return (
    <div style={{ textAlign: 'right', float: 'right', paddingRight: 5 }}>
      {/*ocrStatus == OCRStatusModel.none &&  < Button bsStyle="info" bsSize="xsmall"
            onClick={() => dispatch(ensureSearch().doFullText())}
        >
            Enable full text search
        </Button>
        }

        {ocrStatus == OCRStatusModel.started && < Button bsStyle="info" bsSize="xsmall"
            disabled
        >
            Creating full text information
        </Button>
        }

        {ocrStatus == OCRStatusModel.compelete && <div style={{ display: 'inline-block', margin: '0px 5px', height: 15 }}> 
            <InputGroup bsSize="sm" style={{ width: 200 }}>

            <FormControl type="text" value={fullTextSearchText || ''} onChange={(e: any) => dispatch(ensureSearch().updateFullTextSearch(e.target.value))} />
            <InputGroup.Button>
                < Button bsStyle="info"
                    onClick={() => dispatch(ensureSearch().searchFullText())}
                >
                    <i className="fa fa-search" style={{ margin: 'auto' }} />
                </Button>
            </InputGroup.Button>
        </InputGroup></div>
        */}

      {showDocNavigation && (
        <div className='text-primary' style={{ display: 'inline-block' }}>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='prevdoctooltip'>
                Show previous document
                <br />
                <small>
                  Shortcut:{' '}
                  <kbd>
                    alt+
                    <i className='fa fa-arrow-left' />
                  </kbd>
                </small>
              </Tooltip>
            }
          >
            <Button
              bsStyle={'link'}
              style={{ padding: '0px', marginLeft: '5px' }}
              onClick={() => dispatch(ensureSearch().resultsDocsList.navigate(false))}
            >
              <i className='fa fa-arrow-up' />
            </Button>
          </OverlayTrigger>
          {docIndexStr && <span> {docIndexStr} </span>}
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='prevdoctooltip'>
                Show next document
                <br />
                <small>
                  Shortcut:{' '}
                  <kbd>
                    alt+
                    <i className='fa fa-arrow-right' />
                  </kbd>
                </small>
              </Tooltip>
            }
          >
            <Button
              bsStyle={'link'}
              style={{ padding: '0px', marginLeft: '5px' }}
              onClick={() => dispatch(ensureSearch().resultsDocsList.navigate(true))}
            >
              <i className='fa fa-arrow-down' />
            </Button>
          </OverlayTrigger>
        </div>
      )}

      <Link to={listDocs && listDocs.length > 1 ? '/search/list' : '/search'}>
        <Button bsStyle='primary' bsSize='large'>
          {showDocNavigation ? 'Search results' : 'Search'}
        </Button>
      </Link>

      <div style={{ display: 'inline-block', margin: '0px 5px' }}>
        <ToggleButton
          thumbIcon={showIndexesLabel}
          activeLabel='ON'
          inactiveLabel='OFF'
          value={showIndexes}
          thumbStyle={borderRadiusStyle}
          trackStyle={borderRadiusStyle}
          onToggle={() => dispatch(ensureSearch().updateIndexesVisible(!showIndexes))}
        />
      </div>
    </div>
  );
};

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { showIndexes, resultsListState } = ensureSearch().getCurrentState(state);

  //dumyu remove this
  const fullTextSearchText: any = {};

  return {
    showIndexes: !!showIndexes,
    //ocrStatus: resultsListState && resultsListState.activeDoc && resultsListState.activeDoc.ocrStatus,
    fullTextSearchText,
    listDocs: resultsListState && resultsListState.docsAsync && resultsListState.docsAsync.result,
    activeDoc: resultsListState && resultsListState.activeDoc,
  };
})(PageTools);
