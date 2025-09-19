import * as React from 'react';

import ensureAutomations, { AutomationTaskEdit } from './reducer';

import { DetectReqResultModel } from '../../generated/DetectReqResultModel';
import { Dropdown } from 'react-bootstrap';
import { IAsyncResult } from 'base/asyncStateMiddleware';
import { OCRZoneModel } from '../../generated/OCRZoneModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import ZoneDetails from './zoneDetails';

type ComponentProps = {
  formImage: PageImageModel;
  zones: OCRZoneModel[];
  detectedArray?: { [key: number]: IAsyncResult<DetectReqResultModel> };
  activeZone: OCRZoneModel;
  availableFields: ProjectFieldModel[];
  dispatch: any;
  imageScale: number;
};

const ZoneList: React.StatelessComponent<ComponentProps> = ({
  zones,
  activeZone,
  detectedArray,
  availableFields,
  imageScale,
  formImage,
  dispatch,
}) => (
  <div>
    {(zones || []).map((zone, zoneI) => {
      let fieldBG = '#2860906e';
      if (zone.isBreakField) fieldBG = 'rgba(0, 255, 0, 0.45)';
      else if (zone.id == 'forms_recognizerField') fieldBG = '#f8d51e73';

      return (
        <div
          key={zoneI}
          style={{
            position: 'absolute',
            backgroundColor: fieldBG,
            textAlign: 'left',
            top: zone.y / imageScale,
            left: zone.x / imageScale,
            height: zone.height / imageScale,
            width: zone.width / imageScale,
          }}
        >
          <Dropdown
            id={'zoneDrop' + zoneI}
            className='transparentDropDown'
            open={activeZone && zone.clientReference == activeZone.clientReference}
            onToggle={() => {
              if (zone === activeZone) return;

              if (activeZone) return;

              dispatch(ensureAutomations().updateAutomationProp(formImage, 'activeZone', zone));
            }}
          >
            <Dropdown.Toggle>
              <i className='fa fa-crosshairs'></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <ZoneDetails
                formImage={formImage}
                availableFields={availableFields}
                zone={zone}
                recognizedAsync={detectedArray && detectedArray[zone.clientReference]}
                dispatch={dispatch}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    })}
  </div>
);

export default ZoneList;
