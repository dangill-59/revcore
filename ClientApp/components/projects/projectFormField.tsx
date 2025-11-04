import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  Checkbox,
  Col,
  ControlLabel,
  DropdownButton,
  FormControl,
  FormGroup,
  Grid,
  Image,
  InputGroup,
  MenuItem,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import { MovabelFieldProps, moveField } from '../fieldView/movable';

import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import { ProjectFieldTypeModel } from '../../generated/ProjectFieldTypeModel';
import Select from 'react-select';
import ensureProjects from './reducer';
import { FieldRestrictionsManager } from './FieldRestrictionsManager';

type ViewProps = /*MovabelFieldProps &*/ {
  isFirst: boolean;
  islast: boolean;
  field: ProjectFieldModel;
  dispatch;
  allroles: string[];
};

interface selectAction {
  action: string;
  option?: string;
  removedValue?: string;
}

const ProjectFieldForm: React.StatelessComponent<ViewProps> = ({
  isFirst,
  islast,
  dispatch,
  field,
  /*connectDragSource,*/ allroles,
}) => {
  const usesCustomField =
    !!field['usesCustomLookup'] ||
    !!(field.integrationOptions && field.integrationOptions['lookupType']);

  return (
    <div>
      <FormGroup
        bsSize='small'
        style={{ marginBottom: '0px' }}
        validationState={field.displayName ? null : 'error'}
      >
        <InputGroup>
          <DropdownButton
            bsSize='small'
            componentClass={InputGroup.Button}
            id='field-dropdown-addon'
            title={ProjectFieldTypeModel[field.fieldType]}
            onSelect={(e) => {
              return dispatch(ensureProjects().updateField(field, 'fieldType', e));
            }}
          >
            <MenuItem eventKey={ProjectFieldTypeModel.text}> text</MenuItem>
            <MenuItem eventKey={ProjectFieldTypeModel.number}>number</MenuItem>
            <MenuItem eventKey={ProjectFieldTypeModel.date}>date</MenuItem>
            <MenuItem eventKey={ProjectFieldTypeModel.currency}>currency</MenuItem>
            <MenuItem eventKey={ProjectFieldTypeModel.user_list}>Custom values</MenuItem>
          </DropdownButton>

          <FormControl
            type='text'
            value={field.displayName || ''}
            required
            placeholder='Index name'
            onChange={(e: any) =>
              dispatch(ensureProjects().updateField(field, 'displayName', e.target.value))
            }
          />

          {/*connectDragSource && <InputGroup.Addon >{connectDragSource(<div><i className="fa fa-ellipsis-v text-warning"></i></div>)}</InputGroup.Addon>*/}
        </InputGroup>
      </FormGroup>

      {(field.fieldType === ProjectFieldTypeModel.user_list ||
        (usesCustomField &&
          field.integrationOptions &&
          field.integrationOptions['lookupType'] == 'user_list' &&
          ProjectFieldTypeModel.text === field.fieldType)) && (
        <FormGroup
          bsSize='small'
          style={{ marginBottom: '0px' }}
          validationState={(field.userlistValues || []).length > 0 ? null : 'error'}
        >
          <FormControl
            type='text'
            required
            onChange={(e: any) =>
              dispatch(
                ensureProjects().updateField(field, 'userlistValues_stringified', e.target.value),
              )
            }
            value={
              field['userlistValues_stringified'] ||
              JSON.stringify(field.userlistValues || []).slice(1, -1)
            }
            placeholder='Custom values (Json array)'
          />
        </FormGroup>
      )}

      {usesCustomField && (
        <FormGroup bsSize='small'>
          <InputGroup>
            <InputGroup.Addon>
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip id='projNameLookupType'>
                    This value determines the typeahead lookup for this field
                  </Tooltip>
                }
              >
                <span>lookup type</span>
              </OverlayTrigger>
            </InputGroup.Addon>

            <FormControl
              type='text'
              placeholder='lookup type'
              value={(field.integrationOptions && field.integrationOptions['lookupType']) || ''}
              onChange={(e: any) => {
                dispatch(
                  ensureProjects().updateField(
                    field,
                    'integrationOptions',
                    _.assign({}, field.integrationOptions || {}, { lookupType: e.target.value }),
                  ),
                );
              }}
            />
          </InputGroup>
        </FormGroup>
      )}

      {field.noIndexForRoles && (
        <FormGroup bsSize='small'>
          <InputGroup>
            <InputGroup.Addon>Hide for roles</InputGroup.Addon>
            <Select
              isMulti={true}
              hideSelectedOptions={true}
              placeHolder='all roles'
              options={allroles || []}
              value={field.noIndexForRoles}
              styles={{
                menu: (styles) => ({ ...styles, zIndex: 10 }),
              }}
              onChange={(selected: string, multiEvent: selectAction) => {
                switch (multiEvent.action) {
                  case 'remove-value':
                    dispatch(
                      ensureProjects().updateField(
                        field,
                        'noIndexForRoles',
                        _.filter(field.noIndexForRoles, (f) => f != multiEvent.removedValue),
                      ),
                    );
                    break;
                  case 'select-option':
                    dispatch(
                      ensureProjects().updateField(
                        field,
                        'noIndexForRoles',
                        _.uniq(_.concat(field.noIndexForRoles, multiEvent.option)),
                      ),
                    );
                    break;
                  case 'clear':
                    dispatch(ensureProjects().updateField(field, 'noIndexForRoles', []));
                    break;
                  default:
                    console.warn(`multiselect option ${multiEvent.action} not supported`);
                    break;
                }
              }}
              isSearchable={false}
              isClearable={true}
              getOptionLabel={(option) => option}
              getOptionValue={(option) => option}
            />
          </InputGroup>
        </FormGroup>
      )}

      {(field.restrictions || field.documentRestriction) && field.userlistValues && field.userlistValues.length > 0 && (
        <FormGroup bsSize='small' style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginBottom: '10px' }}>
          <FieldRestrictionsManager
            restrictions={field.restrictions || []}
            allUsers={[]} // TODO: Fetch from API
            allRoles={allroles || []}
            fieldValues={field.userlistValues || []}
            onChange={(newRestrictions) => {
              dispatch(ensureProjects().updateField(field, 'restrictions', newRestrictions));
            }}
          />
        </FormGroup>
      )}

      <FormGroup bsSize='small' style={{ textAlign: 'right', fontSize: 'smaller' }}>
        <small className='text-muted' style={{ marginRight: 5 }}>
          {field.required && ' required'}
          {field.unique && ' unique'}
          {field.documentRestriction && ' documentRestriction'}
        </small>

        <DropdownButton
          title={<i className='fa fa-gear' aria-hidden='true'></i>}
          id={`fileddropdown_${field.displayName}`}
          bsSize='xsmall'
          bsStyle='info'
          pullRight
          dropup
        >
          <MenuItem>
            <input
              type='checkbox'
              checked={!!field.required}
              onChange={(_) =>
                dispatch(ensureProjects().updateField(field, 'required', !field.required))
              }
            />
            Required
          </MenuItem>

          <MenuItem>
            <input
              type='checkbox'
              checked={!!field.unique}
              onChange={(_) =>
                dispatch(ensureProjects().updateField(field, 'unique', !field.unique))
              }
            />
            Unique
          </MenuItem>

          <MenuItem>
            <input
              type='checkbox'
              checked={!!usesCustomField}
              onChange={(e) => {
                e.preventDefault();
                dispatch(ensureProjects().updateField(field, 'usesCustomLookup', !usesCustomField));
              }}
            />
            Uses custom lookup
          </MenuItem>

          <MenuItem>
            <input
              type='checkbox'
              checked={!!field.noIndexForRoles}
              onChange={(e) => {
                e.preventDefault();
                dispatch(
                  ensureProjects().updateField(
                    field,
                    'noIndexForRoles',
                    field.noIndexForRoles ? null : [],
                  ),
                );
              }}
            />
            Hide Index for selected roles
          </MenuItem>

          <MenuItem>
            <input
              type='checkbox'
              checked={!!field.documentRestriction || (field.restrictions && field.restrictions.length > 0)}
              onChange={(_) => {
                const enable = !field.documentRestriction && (!field.restrictions || field.restrictions.length === 0);
                dispatch(
                  ensureProjects().updateField(
                    field,
                    'documentRestriction',
                    enable,
                  ),
                );
                // Initialize empty restrictions array when enabling
                if (enable && !field.restrictions) {
                  dispatch(ensureProjects().updateField(field, 'restrictions', []));
                }
              }}
            />
            Document restriction {(field.restrictions && field.restrictions.length > 0) && `(${field.restrictions.length} rules)`}
          </MenuItem>

          <MenuItem></MenuItem>
        </DropdownButton>

        <Button
          bsStyle='link'
          onClick={(_) => dispatch(ensureProjects().removeField(field))}
          style={{ padding: '2px', marginLeft: '10px' }}
        >
          <OverlayTrigger
            placement='bottom'
            overlay={<Tooltip id='indexesTooltip'>Remove this index</Tooltip>}
          >
            <i className='fa fa-times text-danger' style={{ opacity: 0.8 }} aria-hidden='true'></i>
          </OverlayTrigger>
        </Button>

        {!isFirst && (
          <Button
            bsStyle='link'
            onClick={(_) => dispatch(ensureProjects().moveUpField(field))}
            style={{ padding: '2px' }}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='indexesMoveUp'>move up</Tooltip>}
            >
              <i className='fa fa-arrow-up' aria-hidden='true'></i>
            </OverlayTrigger>
          </Button>
        )}

        {!islast && (
          <Button
            bsStyle='link'
            onClick={(_) => dispatch(ensureProjects().moveUpField(field, true))}
            style={{ padding: '2px' }}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={<Tooltip id='indexesMoveDown'>move down</Tooltip>}
            >
              <i className='fa fa-arrow-down' aria-hidden='true'></i>
            </OverlayTrigger>
          </Button>
        )}

        {/* Now that we can position fild no reason for that many add buttons <Button bsStyle="link" onClick={_ =>
                dispatch(ensureProjects().addField(field))} style={{ padding: '2px' }}>
                <OverlayTrigger placement="bottom"
                    overlay={(<Tooltip id="indexesTooltip">
                        Add another index field</Tooltip>)}>
                    <i className="fa fa-plus text-info" aria-hidden="true" style={{ opacity: 0.8 }}></i>
                </OverlayTrigger>
            </Button>*/}
      </FormGroup>
    </div>
  );
};

export default ProjectFieldForm;
//export default moveField(ProjectFieldForm, { allowHide:false});
