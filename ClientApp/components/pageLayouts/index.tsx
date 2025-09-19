import * as React from 'react';

import IndexandPages from './indexandpages';
import { LayoutSelectorProps } from './reducer';
import SimplyPage from './simplyPages';

type ComponentProps = LayoutSelectorProps & { layoutName: string };

const SelectLayout: React.StatelessComponent<ComponentProps> = (props) => {
  const { layoutName, ...rest } = props;

  let Chosen: any = () => 'no layout selected';
  switch (layoutName) {
    case 'indexandpages':
      Chosen = IndexandPages;
      break;
    case 'simplypages':
      Chosen = SimplyPage;
      break;
  }

  return <Chosen {...rest} />;
};

export default SelectLayout;
