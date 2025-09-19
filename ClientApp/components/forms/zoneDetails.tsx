import * as React from 'react';
import * as _ from 'lodash';

import {
  Button,
  ButtonToolbar,
  Checkbox,
  ControlLabel,
  FormControl,
  FormGroup,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureAutomations, { AutomationTaskEdit } from './reducer';

import { DetectReqResultModel } from '../../generated/DetectReqResultModel';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { OCRZoneModel } from '../../generated/OCRZoneModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import Select from 'react-select';
import ToggleButton from 'react-toggle-button';
import { ZoneTypeModel } from '../../generated/ZoneTypeModel';
import { createLoaderView } from 'base/asyncLoader';

const RecognizedLoader = createLoaderView<DetectReqResultModel>();

type ComponentProps = {
  formImage: PageImageModel;
  availableFields: ProjectFieldModel[];
  dispatch: any;
  zone: OCRZoneModel;
  recognizedAsync: IAsyncResult<DetectReqResultModel>;
};

const ZoneDetails: React.StatelessComponent<ComponentProps> = ({
  dispatch,
  availableFields,
  zone,
  recognizedAsync,
  formImage,
}) => {
  let prOptions: { value: string; label: any }[] = _.map(availableFields, (field) => {
    return { value: field.displayName, label: field.displayName };
  });

  if (zone.id && 'forms_recognizerField' != zone.id)
    prOptions = _.concat(prOptions, { value: zone.id, label: zone.id });

  prOptions = _.concat(prOptions, {
    value: 'forms_recognizerField',
    label: (
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='recognizertooltip'>
            This options marks this zone to be used to determine if the page is to be processed by
            this form
          </Tooltip>
        }
      >
        <span>Form recognizer</span>
      </OverlayTrigger>
    ),
  });

  const selectedOption = _.find(prOptions, (o) => zone && zone.id == o.label);

  const OcrToggletooltip = <Tooltip id='ocrtooltip'>Using {zone.type}</Tooltip>;

  const OcrToggleLabelClass = 'fa fa-' + (ZoneTypeModel.barcode == zone.type ? 'barcode' : 'font');

  const OcrToggleLabel = (
    <OverlayTrigger placement='bottom' overlay={OcrToggletooltip}>
      <i className={OcrToggleLabelClass} style={{ margin: 'auto' }} />
    </OverlayTrigger>
  );

  const OcrActiveLable = (
    <OverlayTrigger
      placement='bottom'
      overlay={<Tooltip id='tobarcodetooltip'>Switch to OCR</Tooltip>}
    >
      <i className='fa fa-font' style={{ margin: 'auto' }} />
    </OverlayTrigger>
  );

  const BarActiveLable = (
    <OverlayTrigger
      placement='bottom'
      overlay={<Tooltip id='tobarcodetooltip'>Switch to Barcode</Tooltip>}
    >
      <i className='fa fa-barcode' style={{ margin: 'auto' }} />
    </OverlayTrigger>
  );

  let regexValidtionState = null;

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', borderRadius: 0 }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
      backgroundColor: isFocused ? '#ffa50045' : 'white',
      color: 'black',
    }),
  };

  if (recognizedAsync && recognizedAsync.result) {
    if (recognizedAsync.result.regExError) regexValidtionState = 'error';
    if (recognizedAsync.result.computed) regexValidtionState = 'success';
  }

  return (
    <div style={{ minWidth: 300, margin: 5, textAlign: 'center' }}>
      <div style={{ height: 55 }}>
        {recognizedAsync && (
          <RecognizedLoader asyncResult={recognizedAsync} prompt='detecting'>
            {recognizedAsync.result && (
              <textarea
                readOnly
                style={{ width: '100%' }}
                value={recognizedAsync.result.text || ''}
              />
            )}
          </RecognizedLoader>
        )}
      </div>

      <div>
        <div style={{ float: 'left', paddingRight: '5px', paddingTop: 8 }}>
          <ToggleButton
            thumbIcon={OcrToggleLabel}
            value={ZoneTypeModel.barcode == zone.type}
            activeLabel={OcrActiveLable}
            inactiveLabel={BarActiveLable}
            onToggle={() =>
              dispatch(
                ensureAutomations().updateZonePropRecalculate(
                  formImage,
                  zone,
                  'type',
                  ZoneTypeModel.barcode == zone.type ? ZoneTypeModel.ocr : ZoneTypeModel.barcode,
                ),
              )
            }
            disabled
            colors={{
              activeThumb: {
                base: '#f37029',
              },
              inactiveThumb: {
                base: '#f37029',
              },
              active: {
                base: '#286090db',
              },
              inactive: {
                base: '#286090db',
              },
            }}
          ></ToggleButton>
        </div>

        <FormGroup
          style={{ marginLeft: 55, marginBottom: 0 }}
          controlId='formValidationSuccess2'
          validationState={zone.id ? 'success' : 'error'}
          bsSize='sm'
        >
          <div className='input-group' style={{ zIndex: 50 }}>
            <span className='input-group-addon'>@</span>
            <Select
              value={selectedOption}
              placeholder='Select field...'
              onChange={(selected) => {
                dispatch(ensureAutomations().updateZoneProp(zone, 'id', (selected || {}).value));
              }}
              options={prOptions}
              searchable={true}
              clearable={true}
              getOptionValue={(f) => {
                return 'forms_recognizerField' == f.value ? 'Forms recognizer' : f.label;
              }}
            />
          </div>

          <FormControl.Feedback />
        </FormGroup>
      </div>

      {zone.id && 'forms_recognizerField' == zone.id ? (
        <div style={{ margin: 5 }}>
          <FormGroup bsSize='sm'>
            <InputGroup style={{ maxWidth: 150, float: 'right' }}>
              <InputGroup.Addon>
                <OverlayTrigger
                  placement='bottom'
                  overlay={
                    <Tooltip id='accuracytooltip'>
                      Tolerance of the match (between 0 to 10) <br /> 0 being a perfect match{' '}
                    </Tooltip>
                  }
                >
                  <span>Tolerance</span>
                </OverlayTrigger>
              </InputGroup.Addon>
              <FormControl
                type='number'
                value={zone.ocrTolerance || 3}
                onChange={(e: any) =>
                  dispatch(ensureAutomations().updateZoneProp(zone, 'ocrTolerance', e.target.value))
                }
              />
            </InputGroup>
          </FormGroup>

          <div style={{ clear: 'both' }}></div>
        </div>
      ) : (
        <FormGroup style={{ textAlign: 'right' }}>
          <Checkbox
            inline
            checked={zone.isBreakField}
            onClick={(_) =>
              dispatch(ensureAutomations().updateZoneProp(zone, 'isBreakField', !zone.isBreakField))
            }
            onChange={() => {}}
          >
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id='breakFieldtooltip'>
                  This field when diffenet starts a new document
                </Tooltip>
              }
            >
              <span> Is break field</span>
            </OverlayTrigger>
          </Checkbox>
        </FormGroup>
      )}

      <FormGroup controlId='regexFormControl' validationState={regexValidtionState}>
        <InputGroup>
          <InputGroup.Addon>
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Tooltip id='regextooltip'>Regular expression to parse recognized value</Tooltip>
              }
            >
              <i className='fa fa-puzzle-piece' style={{ margin: 'auto' }} />
            </OverlayTrigger>
          </InputGroup.Addon>
          <FormControl
            type='text'
            placeholder='Regular expression...'
            value={zone.regex || ''}
            onChange={(e: any) =>
              dispatch(
                ensureAutomations().updateZonePropRecalculate(
                  formImage,
                  zone,
                  'regex',
                  e.target.value,
                ),
              )
            }
          />
        </InputGroup>
        <FormControl.Feedback />
      </FormGroup>

      {zone.regex && recognizedAsync && recognizedAsync.result && (
        <div>
          {recognizedAsync.result.regExError ? (
            <small className='text-danger'>
              Invalid Regex: {recognizedAsync.result.regExError}
            </small>
          ) : (
            <div>
              <h4>Computed value</h4>
              <textarea
                readOnly
                style={{ width: '100%' }}
                value={recognizedAsync.result.computed || ''}
              />
            </div>
          )}
        </div>
      )}

      <ButtonToolbar>
        <Button
          bsStyle='success'
          bsSize='small'
          style={{ float: 'right' }}
          disabled={!(zone.id && !zone.id.startsWith('newzone_'))}
          onClick={(_) =>
            dispatch(ensureAutomations().updateAutomationProp(formImage, 'activeZone', null))
          }
        >
          Done
        </Button>

        <Button
          bsStyle='danger'
          bsSize='small'
          style={{ float: 'right' }}
          onClick={(_) => dispatch(ensureAutomations().removeZone(zone))}
        >
          Remove zone
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default ZoneDetails;
