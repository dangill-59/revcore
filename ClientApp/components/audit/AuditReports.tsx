import * as React from 'react';
import * as moment from 'moment';
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Grid,
  InputGroup,
  OverlayTrigger,
  Panel,
  Row,
  Table,
  Tooltip,
} from 'react-bootstrap';
import Select from 'react-select';
import {
  AuditLogModel,
  AuditLogQueryModel,
  AuditLogQueryResultModel,
  AuditEventType,
} from '../../generated/AuditLogModel';

interface AuditReportsState {
  logs: AuditLogModel[];
  totalCount: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  loading: boolean;
  error: string;
  // Filters
  searchText: string;
  selectedEventTypes: string[];
  startDate: string;
  endDate: string;
  selectedUser: string;
  selectedTarget: string;
  showFilters: boolean;
}

export class AuditReports extends React.Component<{}, AuditReportsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      logs: [],
      totalCount: 0,
      currentPage: 0,
      pageSize: 25,
      totalPages: 0,
      loading: false,
      error: null,
      searchText: '',
      selectedEventTypes: [],
      startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      selectedUser: '',
      selectedTarget: '',
      showFilters: true,
    };
  }

  componentDidMount() {
    this.fetchAuditLogs();
  }

  fetchAuditLogs = async (page: number = 0) => {
    this.setState({ loading: true, error: null });

    try {
      // Create endDate at end of day (23:59:59) to include all events from that day
      const endDateWithTime = this.state.endDate ? (() => {
        const date = new Date(this.state.endDate);
        date.setHours(23, 59, 59, 999);
        return date;
      })() : undefined;

      const query: AuditLogQueryModel = {
        page,
        pageSize: this.state.pageSize,
        searchText: this.state.searchText || undefined,
        eventTypes: this.state.selectedEventTypes.length > 0 ? this.state.selectedEventTypes as any : undefined,
        startDate: this.state.startDate ? new Date(this.state.startDate) : undefined,
        endDate: endDateWithTime,
        userId: this.state.selectedUser || undefined,
        targetId: this.state.selectedTarget || undefined,
        sortBy: 'timestamp',
        sortDirection: 'desc',
        // Send timezone offset in minutes from UTC (negative of JavaScript's getTimezoneOffset)
        // JavaScript returns positive for west of UTC, but we need positive for east of UTC
        timezoneOffsetMinutes: -new Date().getTimezoneOffset(),
      } as any;

      const response = await fetch('/api/audit/query', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('persisted-jwt')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: AuditLogQueryResultModel = await response.json();

      this.setState({
        logs: result.logs,
        totalCount: result.totalCount,
        currentPage: result.page,
        pageSize: result.pageSize,
        totalPages: result.totalPages,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message || 'Failed to fetch audit logs',
        loading: false,
      });
    }
  };

  handleSearch = () => {
    this.fetchAuditLogs(0);
  };

  handlePageChange = (page: number) => {
    this.fetchAuditLogs(page);
  };

  handleExportCsv = async () => {
    this.setState({ loading: true, error: null });

    try {
      const query: AuditLogQueryModel = {
        page: 0,
        pageSize: 10000,
        searchText: this.state.searchText || undefined,
        eventTypes: this.state.selectedEventTypes.length > 0 ? this.state.selectedEventTypes as any : undefined,
        startDate: this.state.startDate ? new Date(this.state.startDate) : undefined,
        endDate: this.state.endDate ? new Date(this.state.endDate) : undefined,
        userId: this.state.selectedUser || undefined,
        targetId: this.state.selectedTarget || undefined,
        sortBy: 'timestamp',
        sortDirection: 'desc',
        // Send timezone offset in minutes from UTC (negative of JavaScript's getTimezoneOffset)
        timezoneOffsetMinutes: -new Date().getTimezoneOffset(),
      } as any;

      const response = await fetch('/api/audit/export/csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Download the CSV file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `audit_log_${moment().format('YYYYMMDD_HHmmss')}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      this.setState({ loading: false });
    } catch (error) {
      this.setState({
        error: error.message || 'Failed to export audit logs',
        loading: false,
      });
    }
  };

  getEventIcon = (eventType: AuditEventType): string => {
    const iconMap: { [key: string]: string } = {
      DocumentCreated: 'fa-file-o',
      DocumentUpdated: 'fa-pencil',
      DocumentDeleted: 'fa-trash',
      DocumentViewed: 'fa-eye',
      DocumentDownloaded: 'fa-download',
      UserLogin: 'fa-sign-in',
      UserLogout: 'fa-sign-out',
      UserCreated: 'fa-user-plus',
      UserUpdated: 'fa-user',
      UserDeleted: 'fa-user-times',
      UserRoleChanged: 'fa-id-card',
      RepositoryCreated: 'fa-folder-open',
      RepositoryUpdated: 'fa-folder',
      RepositoryDeleted: 'fa-folder-o',
      UnauthorizedAccessAttempt: 'fa-exclamation-triangle',
      PermissionDenied: 'fa-ban',
    };

    return iconMap[eventType] || 'fa-info-circle';
  };

  getEventColor = (eventType: AuditEventType): string => {
    if (eventType.includes('Created')) return 'success';
    if (eventType.includes('Updated')) return 'info';
    if (eventType.includes('Deleted')) return 'danger';
    if (eventType.includes('Denied') || eventType.includes('Unauthorized')) return 'warning';
    return 'default';
  };

  formatFieldName = (fieldName: string): string => {
    // Convert camelCase or PascalCase to readable text
    return fieldName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  formatValue = (value: any): string => {
    if (value === null || value === undefined) return 'None';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'object') return JSON.stringify(value);
    if (typeof value === 'string' && value.length === 0) return 'Empty';
    return String(value);
  };

  renderChanges = (log: AuditLogModel) => {
    if (!log.oldValues && !log.newValues) return null;

    const changes: JSX.Element[] = [];
    const allFields = new Set([
      ...Object.keys(log.oldValues || {}),
      ...Object.keys(log.newValues || {}),
    ]);

    allFields.forEach((field) => {
      const oldValue = log.oldValues?.[field];
      const newValue = log.newValues?.[field];

      if (oldValue !== newValue) {
        changes.push(
          <div key={field} style={{ marginTop: '5px' }}>
            <small style={{ color: '#000' }}>
              <strong>{this.formatFieldName(field)}:</strong>{' '}
              {oldValue !== undefined && (
                <span style={{ textDecoration: 'line-through', color: '#000' }}>
                  {this.formatValue(oldValue)}
                </span>
              )}
              {oldValue !== undefined && newValue !== undefined && ' → '}
              {newValue !== undefined && (
                <span style={{ color: '#000', fontWeight: 'bold' }}>
                  {this.formatValue(newValue)}
                </span>
              )}
            </small>
          </div>
        );
      }
    });

    return changes.length > 0 ? <div>{changes}</div> : null;
  };

  renderMetadata = (log: AuditLogModel) => {
    if (!log.metadata || Object.keys(log.metadata).length === 0) return null;

    return (
      <div style={{ marginTop: '5px' }}>
        {Object.entries(log.metadata).map(([key, value]) => (
          <div key={key}>
            <small style={{ color: '#000' }}>
              <strong>{this.formatFieldName(key)}:</strong> {this.formatValue(value)}
            </small>
          </div>
        ))}
      </div>
    );
  };

  renderFilters() {
    const eventTypeOptions = Object.keys(AuditEventType).map((key) => ({
      value: key,
      label: key.replace(/([A-Z])/g, ' $1').trim(),
    }));

    return (
      <Panel expanded={this.state.showFilters} onToggle={() => {}}>
        <Panel.Heading>
          <Panel.Title toggle onClick={() => this.setState({ showFilters: !this.state.showFilters })}>
            <i className={`fa fa-filter`}></i> Filters
            <i className={`fa fa-chevron-${this.state.showFilters ? 'up' : 'down'} pull-right`}></i>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <label>Search</label>
                    <FormControl
                      type="text"
                      placeholder="Search description, user, target..."
                      value={this.state.searchText}
                      onChange={(e: any) => this.setState({ searchText: e.target.value })}
                      onKeyPress={(e: any) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          this.handleSearch();
                        }
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>Event Types</label>
                    <Select
                      isMulti
                      options={eventTypeOptions}
                      value={eventTypeOptions.filter((opt) =>
                        this.state.selectedEventTypes.includes(opt.value),
                      )}
                      onChange={(selected: any) => {
                        this.setState({
                          selectedEventTypes: selected ? selected.map((s: any) => s.value) : [],
                        });
                      }}
                      placeholder="All event types"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <FormGroup>
                    <label>Start Date</label>
                    <FormControl
                      type="date"
                      value={this.state.startDate}
                      onChange={(e: any) => this.setState({ startDate: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <label>End Date</label>
                    <FormControl
                      type="date"
                      value={this.state.endDate}
                      onChange={(e: any) => this.setState({ endDate: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <label>&nbsp;</label>
                    <div>
                      <Button bsStyle="primary" onClick={this.handleSearch} disabled={this.state.loading}>
                        <i className="fa fa-search"></i> Search
                      </Button>
                      <Button
                        style={{ marginLeft: '10px' }}
                        onClick={() => {
                          this.setState({
                            searchText: '',
                            selectedEventTypes: [],
                            startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
                            endDate: moment().format('YYYY-MM-DD'),
                            selectedUser: '',
                            selectedTarget: '',
                          }, () => this.fetchAuditLogs(0));
                        }}
                        disabled={this.state.loading}
                      >
                        <i className="fa fa-times"></i> Clear
                      </Button>
                      <Button
                        bsStyle="success"
                        style={{ marginLeft: '10px' }}
                        onClick={this.handleExportCsv}
                        disabled={this.state.loading}
                      >
                        <i className="fa fa-download"></i> Export CSV
                      </Button>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }

  renderPagination() {
    if (this.state.totalPages <= 1) return null;

    const pages: number[] = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(0, this.state.currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(this.state.totalPages - 1, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(0, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          bsSize="sm"
          disabled={this.state.currentPage === 0 || this.state.loading}
          onClick={() => this.handlePageChange(this.state.currentPage - 1)}
        >
          <i className="fa fa-chevron-left"></i> Previous
        </Button>
        {startPage > 0 && (
          <>
            <Button bsSize="sm" onClick={() => this.handlePageChange(0)} disabled={this.state.loading}>
              1
            </Button>
            {startPage > 1 && <span style={{ margin: '0 5px' }}>...</span>}
          </>
        )}
        {pages.map((page) => (
          <Button
            key={page}
            bsSize="sm"
            bsStyle={page === this.state.currentPage ? 'primary' : 'default'}
            onClick={() => this.handlePageChange(page)}
            disabled={this.state.loading}
            style={{ margin: '0 2px' }}
          >
            {page + 1}
          </Button>
        ))}
        {endPage < this.state.totalPages - 1 && (
          <>
            {endPage < this.state.totalPages - 2 && <span style={{ margin: '0 5px' }}>...</span>}
            <Button
              bsSize="sm"
              onClick={() => this.handlePageChange(this.state.totalPages - 1)}
              disabled={this.state.loading}
            >
              {this.state.totalPages}
            </Button>
          </>
        )}
        <Button
          bsSize="sm"
          disabled={this.state.currentPage >= this.state.totalPages - 1 || this.state.loading}
          onClick={() => this.handlePageChange(this.state.currentPage + 1)}
        >
          Next <i className="fa fa-chevron-right"></i>
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            <h2>
              <i className="fa fa-history"></i> Audit Reports
            </h2>
            <p className="text-muted">
              Track user activities and document changes across your workspace
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>{this.renderFilters()}</Col>
        </Row>

        {this.state.error && (
          <Row>
            <Col md={12}>
              <div className="alert alert-danger">
                <i className="fa fa-exclamation-circle"></i> {this.state.error}
              </div>
            </Col>
          </Row>
        )}

        <Row style={{ marginTop: '20px' }}>
          <Col md={12}>
            <div style={{ marginBottom: '10px' }}>
              <strong>Total Records:</strong> {this.state.totalCount.toLocaleString()}
              {this.state.totalPages > 1 && (
                <>
                  {' '}
                  | <strong>Page:</strong> {this.state.currentPage + 1} of {this.state.totalPages}
                </>
              )}
            </div>

            {this.state.loading ? (
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <i className="fa fa-spinner fa-spin fa-3x"></i>
                <p>Loading audit logs...</p>
              </div>
            ) : this.state.logs.length === 0 ? (
              <div className="alert alert-info">
                <i className="fa fa-info-circle"></i> No audit logs found for the selected criteria.
              </div>
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th style={{ width: '150px' }}>Timestamp</th>
                    <th style={{ width: '180px' }}>Event</th>
                    <th style={{ width: '150px' }}>User</th>
                    <th>Description</th>
                    <th style={{ width: '80px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.logs.map((log) => (
                    <tr key={log.id} className={!log.success ? 'danger' : ''}>
                      <td>
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${log.id}`}>
                              {moment(log.timestamp).format('LLLL')}
                            </Tooltip>
                          }
                        >
                          <span>{moment(log.timestamp).format('MM/DD/YYYY HH:mm:ss')}</span>
                        </OverlayTrigger>
                      </td>
                      <td>
                        <span className={`label label-${this.getEventColor(log.eventType)}`}>
                          <i className={`fa ${this.getEventIcon(log.eventType)}`}></i>{' '}
                          {log.eventType.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </td>
                      <td>
                        <div>
                          <strong>{log.userName || 'System'}</strong>
                        </div>
                        {log.userEmail && <small className="text-muted">{log.userEmail}</small>}
                      </td>
                      <td>
                        {log.description}
                        {log.targetName && (
                          <div style={{ marginTop: '5px' }}>
                            <small style={{ color: '#000' }}>
                              <strong>Target:</strong> {log.targetName}
                              {log.projectName && ` (Project: ${log.projectName})`}
                            </small>
                          </div>
                        )}
                        {this.renderChanges(log)}
                        {this.renderMetadata(log)}
                        {log.durationMs && (
                          <div style={{ marginTop: '5px' }}>
                            <small style={{ color: '#000' }}>
                              <i className="fa fa-clock-o"></i> {log.durationMs}ms
                            </small>
                          </div>
                        )}
                        {!log.success && log.errorMessage && (
                          <div className="text-danger" style={{ marginTop: '5px' }}>
                            <small>
                              <i className="fa fa-exclamation-circle"></i> {log.errorMessage}
                            </small>
                          </div>
                        )}
                        {log.targetType === 'Document' && log.targetId && (
                          <div style={{ marginTop: '8px' }}>
                            <Button
                              bsSize="xs"
                              bsStyle="primary"
                              onClick={() => {
                                window.location.href = `/view/${encodeURIComponent(log.targetId)}`;
                              }}
                            >
                              <i className="fa fa-external-link"></i> View Document
                            </Button>
                          </div>
                        )}
                      </td>
                      <td className="text-center">
                        {log.success ? (
                          <i className="fa fa-check-circle text-success"></i>
                        ) : (
                          <i className="fa fa-times-circle text-danger"></i>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}

            {this.renderPagination()}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AuditReports;
