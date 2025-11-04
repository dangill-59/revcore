import * as React from 'react';
import * as _ from 'lodash';
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Modal,
  Panel,
  Row,
} from 'react-bootstrap';
import Select from 'react-select';
import { FieldRestrictionRule } from '../../generated/FieldRestrictionRule';
import { FieldRestrictionRuleType } from '../../generated/FieldRestrictionRuleType';

interface FieldRestrictionsManagerProps {
  restrictions: FieldRestrictionRule[];
  allUsers: Array<{ userId: string; fullName: string; email: string }>;
  allRoles: string[];
  fieldValues: string[]; // For user_list fields, the available values
  onChange: (restrictions: FieldRestrictionRule[]) => void;
}

interface FieldRestrictionsManagerState {
  showModal: boolean;
  editingIndex: number | null;
  currentRule: FieldRestrictionRule;
}

export class FieldRestrictionsManager extends React.Component<
  FieldRestrictionsManagerProps,
  FieldRestrictionsManagerState
> {
  constructor(props: FieldRestrictionsManagerProps) {
    super(props);
    this.state = {
      showModal: false,
      editingIndex: null,
      currentRule: this.getEmptyRule(),
    };
  }

  getEmptyRule(): FieldRestrictionRule {
    return {
      ruleType: FieldRestrictionRuleType.Allow,
      allowedValues: [],
      userIds: [],
      roles: [],
      description: '',
    };
  }

  openAddModal = () => {
    this.setState({
      showModal: true,
      editingIndex: null,
      currentRule: this.getEmptyRule(),
    });
  };

  openEditModal = (index: number) => {
    this.setState({
      showModal: true,
      editingIndex: index,
      currentRule: _.cloneDeep(this.props.restrictions[index]),
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  saveRule = () => {
    const { restrictions, onChange } = this.props;
    const { editingIndex, currentRule } = this.state;

    let newRestrictions: FieldRestrictionRule[];

    if (editingIndex !== null) {
      // Edit existing
      newRestrictions = [...restrictions];
      newRestrictions[editingIndex] = currentRule;
    } else {
      // Add new
      newRestrictions = [...restrictions, currentRule];
    }

    onChange(newRestrictions);
    this.closeModal();
  };

  deleteRule = (index: number) => {
    const { restrictions, onChange } = this.props;
    const newRestrictions = restrictions.filter((_, i) => i !== index);
    onChange(newRestrictions);
  };

  updateCurrentRule = (field: keyof FieldRestrictionRule, value: any) => {
    this.setState((prev) => ({
      currentRule: {
        ...prev.currentRule,
        [field]: value,
      },
    }));
  };

  render() {
    const { restrictions, allUsers, allRoles, fieldValues } = this.props;
    const { showModal, currentRule } = this.state;

    return (
      <div>
        <div style={{ marginBottom: 10 }}>
          <strong>Document Access Restrictions:</strong>
          {(!restrictions || restrictions.length === 0) && (
            <span className='text-muted' style={{ marginLeft: 10 }}>
              No restrictions defined - all users can access all documents
            </span>
          )}
        </div>

        {restrictions && restrictions.length > 0 && (
          <div style={{ marginBottom: 10 }}>
            {restrictions.map((rule, index) => (
              <Panel key={index} bsStyle='info' style={{ marginBottom: 5 }}>
                <Panel.Body>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                      <div>
                        <strong>
                          {rule.ruleType === FieldRestrictionRuleType.Allow ? '✓ Allow' : '✗ Deny'}
                        </strong>
                        : {rule.allowedValues && rule.allowedValues.length > 0 ? (
                          <span>
                            Values: <code>{rule.allowedValues.join(', ')}</code>
                          </span>
                        ) : (
                          <span className='text-muted'>No values specified</span>
                        )}
                      </div>
                      {rule.userIds && rule.userIds.length > 0 && (
                        <div>
                          <small>
                            Users: {rule.userIds.length} user(s)
                          </small>
                        </div>
                      )}
                      {rule.roles && rule.roles.length > 0 && (
                        <div>
                          <small>
                            Roles: {rule.roles.join(', ')}
                          </small>
                        </div>
                      )}
                      {rule.description && (
                        <div>
                          <small className='text-muted'>{rule.description}</small>
                        </div>
                      )}
                    </div>
                    <div>
                      <Button bsSize='xs' onClick={() => this.openEditModal(index)}>
                        Edit
                      </Button>{' '}
                      <Button bsSize='xs' bsStyle='danger' onClick={() => this.deleteRule(index)}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            ))}
          </div>
        )}

        <Button bsSize='small' bsStyle='primary' onClick={this.openAddModal}>
          <i className='fa fa-plus'></i> Add Restriction Rule
        </Button>

        <Modal show={showModal} onHide={this.closeModal} bsSize='large'>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.editingIndex !== null ? 'Edit' : 'Add'} Restriction Rule
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Rule Type</ControlLabel>
              <FormControl
                componentClass='select'
                value={currentRule.ruleType}
                onChange={(e: any) =>
                  this.updateCurrentRule('ruleType', parseInt(e.target.value))
                }
              >
                <option value={FieldRestrictionRuleType.Allow}>
                  Allow (Whitelist) - Users can ONLY see these values
                </option>
                <option value={FieldRestrictionRuleType.Deny}>
                  Deny (Blacklist) - Users CANNOT see these values
                </option>
              </FormControl>
              <small className='text-muted'>
                {currentRule.ruleType === FieldRestrictionRuleType.Allow
                  ? 'Allow rules restrict users to ONLY see documents with the specified values'
                  : 'Deny rules prevent users from seeing documents with the specified values'}
              </small>
            </FormGroup>

            <FormGroup>
              <ControlLabel>
                Field Values{' '}
                <span className='text-danger'>*</span>
              </ControlLabel>
              <Select
                isMulti={true}
                options={fieldValues.map((v) => ({ label: v, value: v }))}
                value={currentRule.allowedValues?.map((v) => ({ label: v, value: v })) || []}
                onChange={(selected: any) => {
                  this.updateCurrentRule(
                    'allowedValues',
                    selected ? selected.map((s: any) => s.value) : []
                  );
                }}
                placeholder='Select field values...'
                styles={{ menu: (styles) => ({ ...styles, zIndex: 10 }) }}
              />
              <small className='text-muted'>
                Which field values this rule applies to
              </small>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Users (Optional)</ControlLabel>
              <Select
                isMulti={true}
                options={allUsers.map((u) => ({
                  label: `${u.fullName} (${u.email})`,
                  value: u.userId,
                }))}
                value={
                  currentRule.userIds
                    ?.map((userId) => {
                      const user = allUsers.find((u) => u.userId === userId);
                      return user
                        ? { label: `${user.fullName} (${user.email})`, value: user.userId }
                        : null;
                    })
                    .filter((u) => u !== null) || []
                }
                onChange={(selected: any) => {
                  this.updateCurrentRule(
                    'userIds',
                    selected ? selected.map((s: any) => s.value) : []
                  );
                }}
                placeholder='Select users...'
                styles={{ menu: (styles) => ({ ...styles, zIndex: 10 }) }}
              />
              <small className='text-muted'>
                Specific users this rule applies to (can combine with roles)
              </small>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Roles (Optional)</ControlLabel>
              <Select
                isMulti={true}
                options={allRoles.map((r) => ({ label: r, value: r }))}
                value={currentRule.roles?.map((r) => ({ label: r, value: r })) || []}
                onChange={(selected: any) => {
                  this.updateCurrentRule(
                    'roles',
                    selected ? selected.map((s: any) => s.value) : []
                  );
                }}
                placeholder='Select roles...'
                styles={{ menu: (styles) => ({ ...styles, zIndex: 10 }) }}
              />
              <small className='text-muted'>
                Roles this rule applies to (can combine with users)
              </small>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Description (Optional)</ControlLabel>
              <FormControl
                type='text'
                value={currentRule.description || ''}
                onChange={(e: any) => this.updateCurrentRule('description', e.target.value)}
                placeholder='e.g., Sales team can only see their department documents'
              />
            </FormGroup>

            {(!currentRule.userIds || currentRule.userIds.length === 0) &&
              (!currentRule.roles || currentRule.roles.length === 0) && (
                <div className='alert alert-warning'>
                  <i className='fa fa-warning'></i> You must specify at least one user or role
                  for this rule to apply
                </div>
              )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Cancel</Button>
            <Button
              bsStyle='primary'
              onClick={this.saveRule}
              disabled={
                !currentRule.allowedValues ||
                currentRule.allowedValues.length === 0 ||
                ((!currentRule.userIds || currentRule.userIds.length === 0) &&
                  (!currentRule.roles || currentRule.roles.length === 0))
              }
            >
              Save Rule
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
