import * as React from 'react';

import { IMovableComponentProps } from './interfaces';
//we need the wrapper so that the real component is not rendered on the server.
//it uses windows and all
import _Movable from './index.clientOnly';

//on servreside build Movable comes as a null, we have to loose type info for serverside to build
const Movable = _Movable as any;

const MoveableWrapper: React.StatelessComponent<IMovableComponentProps> = (props) => (
  <div>{Movable && <Movable {...props} />}</div>
);

export default MoveableWrapper;
