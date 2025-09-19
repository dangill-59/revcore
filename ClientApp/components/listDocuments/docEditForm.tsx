import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';
import * as moment from 'moment';

import {
  Button,
  Dropdown,
  FormControl,
  FormGroup,
  HelpBlock,
  Image,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { EditableDocument, FieldValidation, ListDocsHelper } from './reducerHelper';
import ensureProjects, { ExternalIntegrationMap } from '../projects/reducer';

import AField from '../fieldView/indexFormField';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';
import ensureWorkspace from '../workspace/reducer';

export type IndexOptionMenuItem = {
  postFix?: any; //a node actually
  menuItems?: any[]; //array of nodes
};

type ComponentProps = {
  listDocsHelper: ListDocsHelper;

  //the menu to show on side of indexes
  indexOptionsMenuItems?: IndexOptionMenuItem;

  ///if set we edit this document else use activeDcoument from  listDocsHelper state
  forDocument?: EditableDocument;
};

type ConnectedProps = EditableDocument & {
  projectList: { [key: string]: ProjectModel };
  readonly lastFieldUpdatedName?: string;
  availableIntegrations: ExternalIntegrationMap;
  readonly myRoles: string[];
};

const ItegrationsLoader = createLoaderView<ExternalIntegrationMap>();

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

class DocEditForm extends React.Component<ViewProps, {}> {
  //used to set focus after document has been updated
  _indexFieldrefs: { [displayName: string]: any } = {};

  componentDidUpdate(prevProps) {
    const { projectId: prevProjectId, newdocId: prevnewdocId } = prevProps;
    const { projectId, newdocId, projectList, lastFieldUpdatedName, indexes } = this.props;

    if (projectId != prevProjectId || newdocId != prevnewdocId) {
      /*
            let fieldNameToFocus = lastFieldUpdatedName;
            console.debug(`trying to focus :${fieldNameToFocus}`);


            if (!fieldNameToFocus || !_.includes(fieldNamesWithRefs, fieldNameToFocus))
            */
      let fieldNameToFocus = null;
      const fieldNamesWithRefs = _.keys(this._indexFieldrefs);
      {
        //console.log('no last edited field. setting focus to first field')

        const allfields = (projectList[projectId] && projectList[projectId].fields) || [];
        const fields = _.filter(allfields, (f) => {
          return !f.systemDefined;
        });

        if (!fields || fields.length == 0) {
          console.warn('no index fields found');
          return;
        }

        //todo: get the fields in correct order here
        //get the first empty field
        fieldNameToFocus = _.find(
          _.map(fields, (f) => f.displayName),
          (f) => _.includes(fieldNamesWithRefs, f) && indexes && !indexes[f],
        );
      }

      if (fieldNameToFocus) {
        console.log(`setting focus to field ${fieldNameToFocus}`);

        const firstOne = this._indexFieldrefs[fieldNameToFocus];
        if (firstOne) {
          if (typeof firstOne.focus === 'function') {
            firstOne.focus();
          } else {
            let secons: any = ReactDOM.findDOMNode(firstOne);

            if (secons) {
              if (typeof secons.focus === 'function') {
                secons.focus();
              }
            }
          }
        } else {
          console.warn(`no refs found for field ${fieldNameToFocus}`);
        }
      } else {
        console.warn('no field with ref found');
      }
    }
  }

  componentWillUnmount() {
    const { listDocsHelper, dispatch } = this.props;

    dispatch(listDocsHelper.cancelPendingOps());
  }

  render() {
    const {
      projectList,
      dispatch,
      projectId,
      indexes,
      fieldValidations,
      id,
      availableIntegrations,
      integrations,
      indexOptionsMenuItems,
      listDocsHelper,
      myRoles,
    } = this.props;

    const allfields = (projectList[projectId] && projectList[projectId].fields) || [];
    const fields = _.filter(allfields, (f) => {
      return !f.systemDefined;
    });
    const systemFields = _.filter(allfields, (f) => {
      return f.systemDefined;
    });
    //const projectIntegrations = _.keys((projectList[projectId] && projectList[projectId].activeIntegrations) || {});

    const FieldsPostFix = (indexOptionsMenuItems || ({} as IndexOptionMenuItem)).postFix;

    //we set it up here as sometime <Afield> can get rendered without the container rendering
    this._indexFieldrefs = {};

    return (
      <div>
        {
          //if not a new document show the system fields
          !id && (
            <ul style={{ listStyleType: 'none' }}>
              {systemFields.map((f) => (
                <li key={f.id}>
                  <span className='text-muted'>
                    <small>{f.displayName}:</small>
                  </span>
                  <small>
                    {indexes[f.displayName] &&
                    (f.fieldType === 'date' || f.fieldType === 'timestamp')
                      ? moment(indexes[f.displayName]).format('L')
                      : indexes[f.displayName]}
                  </small>
                </li>
              ))}
            </ul>
          )
        }

        {fields.map((f, i) => {
          if (
            myRoles &&
            f.noIndexForRoles &&
            _.some(f.noIndexForRoles, (r) => _.includes(myRoles, r))
          ) {
            return <div key={f.id} id={`hidden_${f.displayName}`}></div>;
          }

          const validation =
            (fieldValidations && fieldValidations[f.displayName]) || ({} as FieldValidation);
          return (
            <FormGroup key={f.id} controlId={f.id} validationState={validation.validationState}>
              <InputGroup style={{ zIndex: fields.length - i, width: '100%', maxWidth: '600px' }}>
                <InputGroup.Addon style={{ cursor: 'pointer' }}>
                  {indexOptionsMenuItems && indexOptionsMenuItems.menuItems && (
                    <OverlayTrigger
                      placement='bottom'
                      overlay={<Tooltip id='indexoptionstooltip'>options</Tooltip>}
                    >
                      <Dropdown
                        id='ifDropdown'
                        tabIndex={-1}
                        style={{ marginRight: 5, padding: 0, height: 20 }}
                      >
                        <Dropdown.Toggle
                          noCaret
                          style={{ padding: 0 }}
                          tabIndex={-1}
                          bsStyle='link'
                        >
                          <i className='fa fa-ellipsis-v text-warning'></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className='bg-info'
                          style={{ backgroundColor: 'rgba(252, 227, 213, 0.87)' }}
                        >
                          {indexOptionsMenuItems.menuItems.map((OptionsMenu, i) => (
                            <OptionsMenu key={i} projectId={projectId} fieldName={f.displayName} />
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </OverlayTrigger>
                  )}

                  <small className='text-muted'>
                    {false && f.fieldType == ProjectFieldTypeModel.externalIntegration ? (
                      <span
                        onClick={() => {
                          if (f.displayName == 'urllink') {
                            if (indexes[f.displayName]) {
                              const win = window.open(indexes[f.displayName], '_blank');
                              win.focus();
                            }
                          }
                        }}
                      >
                        <Image
                          src={`/plugins/${availableIntegrations[f.displayName].icon}`}
                          style={{ height: 20, marginRight: 2 }}
                        />
                        {f.integrationOptions && f.integrationOptions['resource']}
                      </span>
                    ) : (
                      f.displayName
                    )}

                    {f.required && '*'}
                    {FieldsPostFix && (
                      <FieldsPostFix projectId={projectId} fieldName={f.displayName} />
                    )}
                  </small>
                </InputGroup.Addon>

                <AField
                  f={f}
                  externalIntegration={integrations && integrations[f.displayName]}
                  inputRef={(ref) => (this._indexFieldrefs[f.displayName] = ref)}
                  valueChanged={(nv) => dispatch(listDocsHelper.updateActiveDocumentIndex(f, nv))}
                  value={(indexes && indexes[f.displayName]) || ''}
                />

                {f.fieldType == ProjectFieldTypeModel.externalIntegration &&
                  integrations &&
                  integrations[f.displayName] && (
                    <InputGroup.Addon>
                      <a href={integrations[f.displayName].externalUrl} target='_blank'>
                        Show in {f.displayName}
                      </a>
                    </InputGroup.Addon>
                  )}

                <FormControl.Feedback />
              </InputGroup>
              {validation.help && <HelpBlock>{validation.help}</HelpBlock>}
            </FormGroup>
          );
        })}

        {/*availableIntegrationsAsync && <ItegrationsLoader asyncResult={availableIntegrationsAsync} prompt="loading integrations">
                {availableIntegrationsAsync.result &&
                    projectIntegrations.map(intgn => availableIntegrationsAsync.result[intgn] && <FormGroup key={intgn}>
                    < InputGroup style={{ width: '100%', maxWidth: '600px' }}>
                        <InputGroup.Addon >
                            <Image key={intgn}
                                src={`/plugins/${availableIntegrationsAsync.result[intgn].icon}`}
                                style={{ height: 20 }} />
                        </InputGroup.Addon>
                        <FormControl type="text"
                            value={(integrations && integrations[intgn]) || ''}
                            style={{ zIndex: 0 }}
                            onChange={(e: any) => dispatch(listDocsHelper.updateActiveDocumentIntegration(intgn, e.target.value))}
                            placeholder="enter xero invoice number or copy and paste the invoice URL" />
                    </InputGroup>
                </FormGroup>)
                }
            </ItegrationsLoader>
            */}

        {fieldValidations && fieldValidations['global'] && (
          <div className='text-danger'>{fieldValidations['global'].help}</div>
        )}

        {/*<div style={{ textAlign: 'center' }}>
                    <Spinner isLoading={!!(commitAsync.isLoading)} prompt="Saving document...">
                        {commitAsync.error && <div className="text-danger">{commitAsync.error.toString()}</div>}
                        <Button id="saveDocumentsButton"
                            type="submit" bsStyle={(submitStyle && 'disabled' !== submitStyle) ? submitStyle : 'primary'}
                            bsSize="large"
                            disabled={!document.valueChanged || submitStyle === 'disabled'}>
                            {submitPrompt ? submitPrompt : 'Create'}
                        </Button>
                    </Spinner>
                </div>*/}
      </div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { projectListAsync, availableIntegrationsAsync } = ensureProjects().getCurrentState(state);

  const { forDocument, listDocsHelper } = ownprops;

  const { myRolesAsync } = ensureWorkspace().getCurrentState(state);

  const { activeDoc, lastFieldUpdatedName } = listDocsHelper && listDocsHelper.getmyState(state);

  console.debug(`connected lastFieldUpdatedName :${lastFieldUpdatedName}`);

  return _.assign({}, forDocument || activeDoc, {
    projectList: (projectListAsync && projectListAsync.result) || {},
    availableIntegrations: (availableIntegrationsAsync && availableIntegrationsAsync.result) || {},
    lastFieldUpdatedName,
    myRoles: myRolesAsync && myRolesAsync.result && myRolesAsync.result.roles,
  });
})(DocEditForm);
