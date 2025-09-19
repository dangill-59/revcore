export type IRndComponentProps = {
  className?: string;
  overflow?: 'initial' | 'inherit' | 'unset' | 'auto' | 'hidden' | 'scroll' | 'visible';
};

export type rndSize = { width: number; height: number };
export type rndPosition = { left: number; top: number };

export interface IMoveableHelper {
  updatePosition: (position: rndPosition) => void;
  updateSize: (size: rndSize) => void;
}

export interface IMoveableState {
  position: rndPosition;
  size: rndSize;
}

export type MovablePlacement = { width?: number; left?: number; top?: number; height?: number };

export interface IMovableComponentProps extends IRndComponentProps {
  moveableHelper: IMoveableHelper;
  initialPosition?: MovablePlacement;
}
