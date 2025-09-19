import * as React from 'react';

import { Modal, ProgressBar } from 'react-bootstrap';

type ViewProps = {};

interface State {
  showModal: boolean;
  progress: number;
}

class RenderingModal extends React.Component<ViewProps, State> {
  constructor(props: ViewProps) {
    super(props);
    this.state = {
      showModal: false,
      progress: 0,
    };
  }

  public openModal = () => {
    this.setState({ showModal: true, progress: 0 });
  };

  public closeModal = () => {
    this.setState({ showModal: false });
  };

  public updateProgress = (progress: number) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Modal
        className='waitBox'
        backdropClassName='waitBoxBackDrop'
        show={this.state.showModal}
        onHide={this.closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hang Tight—Your Images Are Being Processed and Rendered!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ProgressBar
            active
            striped
            bsStyle='info'
            now={this.state.progress}
            label={`${this.state.progress}%`}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default RenderingModal;
