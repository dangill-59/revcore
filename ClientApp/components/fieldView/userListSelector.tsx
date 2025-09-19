import * as React from 'react';
import * as _ from 'lodash';

import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import Select from 'react-select';

type ComponentProps = {
  field: ProjectFieldModel;
  value: string;
  onChange: (newValue: string) => void;
  inputRef?: (ref: any) => void; //any is actually a HTMLElement
  clearable?: boolean;
};

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white', borderRadius: 0 }),
  menu: (styles) => ({ ...styles, zIndex: 3 }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    //backgroundColor: isSelected ? 'orange' : (isFocused ? '#ffa50045' : 'white'),
    backgroundColor: isFocused ? '#ffa50045' : 'white',
    color: 'black',
  }),
};

const UserListSelector: React.StatelessComponent<ComponentProps> = ({
  field,
  value,
  onChange,
  clearable,
  inputRef,
}) => {
  //select is object based, so the options and hence the values have to objects and NOt just string. so lets make dummy objects
  const options = _.map(field.userlistValues || [], (value) => ({ value }));

  const tval = value ? _.find(options, (v) => v.value == value) : '';

  return (
    <Select
      ref={inputRef || (() => {})}
      name='uv-field-name'
      onChange={(val) => onChange(val && val.value)}
      options={options}
      value={tval}
      isSearchable={true}
      isClearable={!!clearable}
      getOptionLabel={(option) => option.value}
      styles={colourStyles}
    />
  );
};

export default UserListSelector;
