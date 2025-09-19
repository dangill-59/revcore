import * as React from 'react';

import { Col, FormControl, FormGroup, Grid, InputGroup, Row } from 'react-bootstrap';

import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import ensureSearch from './reducer';

type CompProps = {
  dispatch;
  field: ProjectFieldModel;
  values: string[];
};

const RangeField: React.StatelessComponent<CompProps> = ({ field, values, dispatch }) => (
  <fieldset
    style={{ border: '1px solid #e5e5e5', padding: '0.35em 0.625em 0.75em', width: '100%' }}
  >
    <legend style={{ width: 'auto', borderBottom: 0, fontSize: 'inherit', marginBottom: '0px' }}>
      {field.displayName}
    </legend>

    <Grid style={{ padding: '0px', width: '100%' }}>
      <Row>
        {['from', 'to'].map((tag, i) => (
          <Col sm={6}>
            <FormControl
              type='text'
              placeholder='from'
              value={(values && values[i]) || ''}
              style={{ zIndex: 0 }}
              onChange={(e: any) =>
                dispatch(ensureSearch().updateFieldValue(field.displayName, e.target.value, i))
              }
            />
          </Col>
        ))}
      </Row>
    </Grid>
  </fieldset>
);

export default RangeField;
