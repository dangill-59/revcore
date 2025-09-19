import * as React from 'react';

import { Modal, ProgressBar, Checkbox, Button } from 'react-bootstrap';

type ViewProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

type State = {
  selected: string[];
  loading: boolean;
  error: string | null;
};

class IndexNamesModal extends React.Component<ViewProps, State> {
  constructor(props: ViewProps) {
    super(props);
    this.state = {
      selected: [],
      loading: false,
      error: null,
    };
  }

  public closeModal = () => {
    this.props.setShowModal(false);
  };

  handleCheckboxChange = (name: string, checked: boolean) => {
    this.setState((prevState) => {
      let selected = prevState.selected;
      if (checked) {
        if (selected.length < 3) {
          selected = [...selected, name];
        }
      } else {
        selected = selected.filter((n) => n !== name);
      }

      const indexNames = JSON.parse(localStorage.getItem('selectedSearchDocIndexNames') || '[]');
      const selectionState: { [key: string]: boolean } = {};
      indexNames.forEach((indexName: string) => {
        selectionState[indexName] = selected.includes(indexName);
      });
      localStorage.setItem('selectedSearchDocIndexNamesSelected', JSON.stringify(selectionState));

      return { selected };
    });
  };

  handleSaveSelection = async () => {
    this.setState({ loading: true, error: null });
    const { selected } = this.state;
    try {
      const createPdfArchiveForDocIdsResponse = await fetch(
        'api/email/createPdfArchiveForDocIds',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('persisted-jwt')}`,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            docIds: Object.keys(JSON.parse(localStorage.getItem('selectedSearchDocIds') || '{}')),
            indexesToNameWith: selected,
          }),
        },
      );

      if (!createPdfArchiveForDocIdsResponse.ok) {
        throw new Error('Error creating PDF archive');
      }

      const jobId = await createPdfArchiveForDocIdsResponse.text();

      const getPdfArchiveForDocIdsResponse = await fetch(
        `api/email/pdfArchiveForDocIds/${jobId}`,
      );

      if (!getPdfArchiveForDocIdsResponse.ok) {
        throw new Error('Error downloading PDF archive');
      }

      const blob = await getPdfArchiveForDocIdsResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `documents-${new Date().toISOString()}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      this.setState({ loading: false });
      this.props.setShowModal(false); // Close modal on success
    } catch (error) {
      this.setState({ loading: false, error: error.message || 'An error occurred' });
    }
  };

  render() {
    const indexNames = JSON.parse(localStorage.getItem('selectedSearchDocIndexNames') || '[]');
    const { selected, loading, error } = this.state;

    return (
      <Modal
        className='waitBox'
        backdropClassName='waitBoxBackDrop'
        show={this.props.showModal}
        onHide={this.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select up to 3 Index Names</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {indexNames.map((name: string) => (
              <Checkbox
                key={name}
                name={name}
                checked={selected.includes(name)}
                disabled={(!selected.includes(name) && selected.length >= 3) || loading}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.handleCheckboxChange(name, e.target.checked);
                }}
              >
                {name}
              </Checkbox>
            ))}
          </div>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              marginTop: '20px',
            }}
          >
            <Button
              bsStyle='success'
              variant='primary'
              onClick={this.handleSaveSelection}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Selection'}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default IndexNamesModal;
