//used when a user signs up with no existing projects
import * as React from 'react';

import {
  Button,
  Checkbox,
  Col,
  FormControl,
  FormGroup,
  Grid,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import ensureProjets, { IProjectsState, SelectbleProjectTemplateCategory } from './reducer';

import { ProjectTemplateModel } from '../../generated/ProjectTemplateModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const TemplatesLoader = createLoaderView<SelectbleProjectTemplateCategory[]>();

const ManFolderImg = require('./manfolder.jpg');

type ConnectedProps = IProjectsState;

const OnBoarding: React.StatelessComponent<ConnectedProps & { dispatch }> = ({
  onBoardingTemplatesAsync,
  dispatch,
}) => {
  return (
    <Modal
      bsSize='lg'
      backdrop='static'
      show={true}
      onHide={() => dispatch(ensureProjets().closeProjectEditor(true))}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Welcome to Rev</strong>
        </Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ensureProjets().completeOnBoarding());
        }}
      >
        <Modal.Body>
          <Grid style={{ width: '100%' }}>
            <Row>
              <Col md={6} smHidden>
                <Image src={ManFolderImg} alt='man with folder' responsive />
              </Col>
              <Col md={6} sm={12} className='mainInfo ' style={{ padding: 10 }}>
                <h4 className='text-primary '>Your are one click away from saving your files</h4>
                <h5>
                  Tell us <strong>what type of files</strong> you will be storing in REV, so that we
                  can create the appropriate repositories.
                </h5>

                {onBoardingTemplatesAsync && (
                  <TemplatesLoader
                    asyncResult={onBoardingTemplatesAsync}
                    prompt='Loading templates...'
                  >
                    {onBoardingTemplatesAsync.result &&
                      onBoardingTemplatesAsync.result.map((cat) => (
                        <div key={`cat_${cat.name}`} style={{ marginLeft: 30 }}>
                          <Checkbox
                            style={{ fontSize: 'large' }}
                            checked={!!cat.selected}
                            onChange={() =>
                              dispatch(
                                ensureProjets().selectOnBoardingTemplate(!cat.selected, cat.name),
                              )
                            }
                          >
                            {cat.name}
                          </Checkbox>

                          {cat.selected && (
                            <div style={{ marginLeft: 45 }}>
                              {cat.templates.map((template) => (
                                <div key={`cat_${cat.name}_${template.name}`}>
                                  <Checkbox
                                    checked={!!template.selected}
                                    onChange={() =>
                                      dispatch(
                                        ensureProjets().selectOnBoardingTemplate(
                                          !template.selected,
                                          cat.name,
                                          template.name,
                                        ),
                                      )
                                    }
                                  >
                                    {template.name}
                                  </Checkbox>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </TemplatesLoader>
                )}

                <div className='text-muted' style={{ marginTop: 20 }}>
                  Check all boxes that apply
                </div>
                <div className='text-info'>
                  Don't worry! You will be able to create other repositories and change fields later
                </div>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle='warning'
            onClick={() => dispatch(ensureProjets().closeProjectEditor(true))}
          >
            Cancel
          </Button>

          <Button bsStyle='primary' type='submit'>
            START
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  return ensureProjets().getCurrentState(state);
})(OnBoarding);
