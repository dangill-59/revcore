import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  Col,
  FormControl,
  FormGroup,
  Grid,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import {
  MovabelFieldProps,
  WithMovabelFieldsProps,
  moveField,
  withMoveFields,
} from '../fieldView/movable';
import ensureMainNav, { INavMenuState } from '../mainNav/reducer';
import ensureSearch, { ISearchViewState } from './reducer';

import AField from '../fieldView/indexFormField';
import MultiMenu from './multiprojectMenu';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import { ProjectModel } from '../../generated/ProjectModel';
import ProjectSelector from '../projects/select';
import { SearchRequestModel } from '../../generated/SearchRequestModel';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';
import ensureWorkSpace from '../workspace/reducer';
import { push } from 'react-router-redux';

type componentProps = {
  searchResultUrl: string;
};

type ConnectedProps = SearchRequestModel & {
  selectedProjectList?: ProjectModel[];
  usingMutiProject: boolean;
};

type ViewProps = ConnectedProps & componentProps & { dispatch };

/*
const _TestUI: React.SFC<WithMovabelFieldsProps> = ({ token }) => <div>in hoc: {token}</div>;
const TestUI = withMoveFields(_TestUI);
*/

const MovingRangeField: React.SFC<
  MovabelFieldProps & {
    fields: { [key: string]: string[] };
    field: ProjectFieldModel;
    dispatch;
  }
> = ({ field, fields, dispatch, connectDragSource }) => {
  return (
    <fieldset
      style={{ border: '1px solid #e5e5e5', padding: '0.35em 0.625em 0.75em', width: '100%' }}
    >
      <legend style={{ width: 'auto', borderBottom: 0, fontSize: 'inherit', marginBottom: '0px' }}>
        {connectDragSource ? connectDragSource(<div>{field.displayName}</div>) : field.displayName}
      </legend>

      <Grid style={{ padding: '0px', width: '100%' }}>
        <Row>
          {['from', 'to'].map((tag, i) => (
            <Col key={i} sm={6}>
              <AField
                f={field}
                value={(fields && fields[field.displayName] && fields[field.displayName][i]) || ''}
                valueChanged={(e) => {
                  dispatch(ensureSearch().updateFieldValue(field.displayName, e, i));
                }}
                placeHolder={tag}
              />
            </Col>
          ))}
        </Row>
      </Grid>
    </fieldset>
  );
};

const MovingTextField: React.SFC<
  MovabelFieldProps & {
    fields: { [key: string]: string[] };
    field: ProjectFieldModel;
    dispatch;
  }
> = ({ field, fields, dispatch, connectDragSource }) => {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>
          {connectDragSource
            ? connectDragSource(<div>{field.displayName}</div>)
            : field.displayName}
        </InputGroup.Addon>

        <AField
          f={field}
          value={(fields && fields[field.displayName] && fields[field.displayName][0]) || ''}
          valueChanged={(e) => {
            dispatch(ensureSearch().updateFieldValue(field.displayName, e));

            //for text fields we are doing prefix searches
            if (ProjectFieldTypeModel.text == field.fieldType)
              dispatch(ensureSearch().updateFieldValue(field.displayName, 'prefix', 1));
          }}
          placeHolder={field.fieldType == ProjectFieldTypeModel.text ? 'matches' : ''}
        />
      </InputGroup>
    </FormGroup>
  );
};

const COnnectedTextField = moveField(MovingTextField);
const COnnectedRangeField = moveField(MovingRangeField);

const _SearchFields: React.SFC<
  WithMovabelFieldsProps & { fields: { [key: string]: string[] }; dispatch }
> = ({ fieldsHolder, fieldsToShow, fields, dispatch }) => {
  return (
    <div>
      {fieldsHolder &&
        fieldsToShow.map((field, i) => (
          <div key={i} style={{ margin: '5px 0px' }}>
            {(() => {
              // const COnnectedTextField = fieldsHolder.moveField(MovingTextField);

              switch (field.fieldType) {
                case ProjectFieldTypeModel.text:
                case ProjectFieldTypeModel.externalIntegration:
                case ProjectFieldTypeModel.user_list:
                  return (
                    <COnnectedTextField
                      fields={fields}
                      field={field}
                      dispatch={dispatch}
                      fieldsHolder={fieldsHolder}
                    />
                  );
                //return <MovingTextField fields={fields} field={field} dispatch={dispatch}/>

                case ProjectFieldTypeModel.number:
                case ProjectFieldTypeModel.currency:
                case ProjectFieldTypeModel.date:
                  return (
                    <COnnectedRangeField
                      fields={fields}
                      field={field}
                      dispatch={dispatch}
                      fieldsHolder={fieldsHolder}
                    />
                  );

                default:
                  return <div />;
              }
            })()}
          </div>
        ))}
    </div>
  );
};

const SearchFields = withMoveFields(_SearchFields);

class SearchForm extends React.PureComponent<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(ensureProjects().loadProjects()).then(() =>
      dispatch(ensureProjects().ensureSelectedProject()),
    );

    dispatch(ensureMainNav().addMenu('settings', 'searchmultiproject', MultiMenu));
    dispatch(ensureSearch().initializeSettings());
  }

  componentWillUnmount() {
    this.props.dispatch(ensureMainNav().deleteMenu('settings', 'searchmultiproject'));
  }

  render() {
    const {
      selectedProjectList,
      fields,
      searchResultUrl,
      usingMutiProject,
      dispatch,
      fullTextOCRTerm,
    } = this.props;

    //if there is One selectedProject with no field reorder disable field reordering
    const moveDisabled = !!_.find(selectedProjectList || [], (p) => p.noUserReorder);

    let serachFields = _.uniqBy(
      _.flatMap(selectedProjectList || [], (p) => p.fields),
      (f) => f.displayName,
    );

    serachFields = serachFields.concat([
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

    const ocrEnabled = !!(selectedProjectList && selectedProjectList.find((p) => !!p.fullTextOcr));

    return (
      <form
        className='container mainInfo'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ensureSearch().searchExecuted());
          dispatch(push(searchResultUrl));
        }}
      >
        <div
          style={{
            float: 'right',
            paddingTop: 3,
          }}
        >
          <Button
            bsStyle='warning'
            bsSize='large'
            style={{ marginRight: 5 }}
            onClick={() => dispatch(ensureSearch().updateEntireSearch({}))}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='cleartooltip'>Clear search fields</Tooltip>}
            >
              <span>clear</span>
            </OverlayTrigger>
          </Button>

          {!ocrEnabled && (
            <Button bsStyle='primary' bsSize='large' type='submit'>
              Search
            </Button>
          )}
        </div>
        <ProjectSelector isMulti={usingMutiProject} />

        <div style={{ clear: 'both' }}></div>

        {ocrEnabled && (
          <div>
            <Row style={{ marginTop: 20 }}>
              <Col md={1}></Col>
              <Col md={10}>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>OCR text search</InputGroup.Addon>

                    <FormControl
                      type='text'
                      value={fullTextOCRTerm || ''}
                      onChange={(e: any) =>
                        dispatch(ensureSearch().updatefullTextTerm(e.target.value))
                      }
                    />

                    <InputGroup.Button>
                      <Button bsStyle='primary' type='submit'>
                        Search
                      </Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col md={1}></Col>
            </Row>

            <hr />
            <strong>Search by indexes </strong>
          </div>
        )}

        <div>
          <SearchFields
            allFields={serachFields}
            settingsKey='searchForm'
            {...{ moveDisabled, fields, dispatch }}
          />
          <div>
            <Button bsStyle='primary' block type='submit' bsSize='large'>
              Search
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, componentProps>((state) => {
  const { selectedProjectList } = ensureProjects().getCurrentState(state);
  const { searchRequest } = ensureSearch().getCurrentState(state);

  const { selectableSettings } = ensureMainNav().getCurrentState(state);
  const usingMutiProject = !!(selectableSettings && selectableSettings['multiProjectSearch']);
  //const multiPrintPdf = !!(selectableSettings && selectableSettings['multiPrintPdf']);

  return _.assign({}, searchRequest, {
    selectedProjectList,
    usingMutiProject,
  });
})(SearchForm);
