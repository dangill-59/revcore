import './formEditor.css';

import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  ButtonToolbar,
  FormControl,
  FormGroup,
  InputGroup,
  Modal,
  OverlayTrigger,
  Tab,
  Tabs,
  Tooltip,
} from 'react-bootstrap';
import ensureAutomations, { AutomationTaskEdit, IFormsState } from './reducer';

import FormSurface from './formSurface';
import { ListDocsHelper } from '../listDocuments/reducerHelper';
import { ListDocumentPagesHelper } from '../listPages/reducerHelper';
import { PageImageModel } from '../../generated/PageImageModel';
import SplitPoint from 'base/splitPoint';
import ToggleButton from 'react-toggle-button';
import { connect } from 'react-redux';
import ensureWorkspace from '../workspace/reducer';

type ComponentProps = {
  listDocsHelper: ListDocsHelper;
  listPagesHelper: ListDocumentPagesHelper;
};

type ConnectedProps = AutomationTaskEdit & {
  activePage: PageImageModel;
  sliderValue: number;
  hasBarcodeFeature: boolean;
};

const showCurrentPageLabel = (
  <OverlayTrigger
    placement='bottom'
    overlay={
      <Tooltip id='showcurrenttooltip'>
        Show OCR results on current page instead of Form reference page
      </Tooltip>
    }
  >
    <i className='fa fa-sticky-note-o' style={{ margin: 'auto' }} />
  </OverlayTrigger>
);

const ScriptEditor = ({ listDocsHelper }) => (
  <SplitPoint
    childProps={{ listDocsHelper }}
    prompt='Loading scripts module...'
    loader={(resolve) => {
      require.ensure(
        [],
        function (require) {
          resolve((require('./scriptEditor') as any).default);
        },
        'scripting',
      );
    }}
  />
);

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

const FormEditor: React.StatelessComponent<ViewProps> = ({
  id: automationId,
  dispatch,
  name,
  activeTab,
  usingReferenceImage,
  sliderValue,
  activePage,
  listDocsHelper,
  hasBarcodeFeature,
}) => (
  <Modal
    dialogClassName='model-full'
    show={true}
    onHide={() => dispatch(ensureAutomations().editScript(null))}
    backdrop='static'
  >
    <Modal.Header>
      <ButtonToolbar style={{ float: 'right' }}>
        <Button
          bsStyle='primary'
          disabled={!(name && name.length >= 4)}
          onClick={(_) => dispatch(ensureAutomations().saveCurrent(listDocsHelper, activePage))}
        >
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip id='saveformtooltip'>Save changes to this automation</Tooltip>}
          >
            <i className='fa fa-check-square fa-2x'></i>
          </OverlayTrigger>
        </Button>

        <Button onClick={() => dispatch(ensureAutomations().editScript(null))} bsStyle='link'>
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='closeformtooltip'>
                Close automation editor <br />
                <small>unsaved changes will be lost</small>
              </Tooltip>
            }
          >
            <i className='fa fa-times fa-2x text-danger'></i>
          </OverlayTrigger>
        </Button>
      </ButtonToolbar>

      <FormGroup
        controlId='formnameFormControl'
        validationState={(name && name.length) > 3 ? 'success' : 'warning'}
        style={{ float: 'left', maxWidth: 400 }}
      >
        <InputGroup>
          <InputGroup.Addon>
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id='regextooltip'>
                  Automation name <small>4 characters +</small>
                </Tooltip>
              }
            >
              <i className='fa fa-retweet' style={{ margin: 'auto' }} />
            </OverlayTrigger>
          </InputGroup.Addon>
          <FormControl
            type='text'
            placeholder='Automation name...'
            value={name || ''}
            onChange={(e: any) =>
              dispatch(ensureAutomations().updateAutomationProp(activePage, 'name', e.target.value))
            }
          />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>

      {(!activeTab || activeTab == 'form') && (
        <div style={{ float: 'left', padding: '0px 10px' }}>
          {sliderValue < 1500 && (
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='inctooltip'>Increase image size</Tooltip>}
            >
              <Button
                bsStyle={'link'}
                style={{ padding: '0px', marginLeft: '5px' }}
                onClick={() => dispatch(ensureAutomations().zoom())}
              >
                {' '}
                <i className='fa fa-search-plus fa-2x text-primary'></i>
              </Button>
            </OverlayTrigger>
          )}

          {sliderValue > 60 && (
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='dectooltip'>Decrease image size</Tooltip>}
            >
              <Button
                bsStyle={'link'}
                style={{ padding: '0px' }}
                onClick={() => dispatch(ensureAutomations().zoom(true))}
              >
                {' '}
                <i className='fa fa-search-minus  fa-2x text-primary'></i>
              </Button>
            </OverlayTrigger>
          )}
        </div>
      )}

      <div style={{ float: 'left', paddingRight: '5px', paddingTop: 8 }}>
        {!activeTab || activeTab == 'form' ? (
          <ToggleButton
            thumbIcon={showCurrentPageLabel}
            value={!usingReferenceImage}
            onToggle={(_) =>
              dispatch(
                ensureAutomations().updateAutomationProp(
                  activePage,
                  'usingReferenceImage',
                  !usingReferenceImage,
                ),
              )
            }
            colors={{
              activeThumb: {
                base: '#f37029',
              },
              inactiveThumb: {
                base: '#f37029',
              },
            }}
          />
        ) : (
          <OverlayTrigger
            placement='bottom'
            overlay={
              <Tooltip id='searchScriptTemplatestooltip'>Create Script from template</Tooltip>
            }
          >
            <a
              style={{ padding: '0px', marginLeft: '5px' }}
              href='http://scanningrevolution.com/rev-script-templates/'
              target='_blank'
            >
              {' '}
              <i className='fa fa-newspaper-o text-primary'></i>
            </a>
          </OverlayTrigger>
        )}
      </div>

      {automationId && (
        <div style={{ float: 'left', paddingRight: '5px', paddingTop: 8 }}>
          <Button
            bsStyle='danger'
            bsSize='xs'
            style={{ opacity: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(ensureAutomations().removeAutomation(automationId));
            }}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='formtooltip'>Remove automated task</Tooltip>}
            >
              <span>delete this</span>
            </OverlayTrigger>
          </Button>
        </div>
      )}
    </Modal.Header>

    <Modal.Body>
      <div className='popupColors' style={{ textAlign: 'center', padding: '5px' }}>
        <Tabs
          activeKey={activeTab}
          onSelect={(key) =>
            dispatch(ensureAutomations().updateAutomationProp(activePage, 'activeTab', key))
          }
          className='rightTabs'
          mountOnEnter={true}
          id='automationTabs'
        >
          {hasBarcodeFeature && (
            <Tab eventKey='form' title='Automated recognition'>
              {activePage ? (
                <FormSurface width={sliderValue} formImage={activePage} />
              ) : (
                <div>
                  <h3 className='text-danger'>No image for the form</h3>
                  <p>
                    Please close this editor and upload an image in the new document view to
                    configure automated recognition
                  </p>
                </div>
              )}
            </Tab>
          )}

          <Tab eventKey='script' title='Script'>
            <ScriptEditor listDocsHelper={listDocsHelper} />
          </Tab>
        </Tabs>
      </div>
    </Modal.Body>
  </Modal>
);

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const pagesState = ownprops.listPagesHelper.getmyState(state);
  const formsState = ensureAutomations().getCurrentState(state);
  const docListState = ownprops.listDocsHelper.getmyState(state);

  const referenceImage =
    formsState &&
    formsState.currentlyEditing &&
    formsState.currentlyEditing.pages &&
    formsState.currentlyEditing.pages.length > 0 &&
    formsState.currentlyEditing.pages[0];

  let activePage =
    formsState &&
    formsState.currentlyEditing &&
    formsState.currentlyEditing.usingReferenceImage &&
    referenceImage;

  if (!activePage) activePage = pagesState && pagesState.activePage;

  if (
    !activePage &&
    docListState &&
    docListState.activeDoc &&
    docListState.activeDoc.pages &&
    docListState.activeDoc.pages.length > 0
  )
    activePage = docListState.activeDoc.pages[0];

  if (!activePage && referenceImage) activePage = referenceImage;

  const barCodeFeature = ensureWorkspace().getFeature('barcode', state);

  return _.assign(
    {},
    formsState && formsState.currentlyEditing,
    {
      activePage,
      sliderValue: (formsState && formsState.imageWidth) || 520,
      hasBarcodeFeature: !!barCodeFeature,
    },
    //if no forms recognition force activeTabtobe always script
    !!barCodeFeature ? {} : { activeTab: 'script' },
  );
})(FormEditor);
