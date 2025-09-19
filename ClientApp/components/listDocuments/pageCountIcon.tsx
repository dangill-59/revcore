import * as React from 'react';

type ComponentProps = {
  count: number;
  style?: any;
  className?: string;
};

const PageCountIcon: React.StatelessComponent<ComponentProps> = ({ count, style, className }) => (
  <div style={style} className={className}>
    <div
      style={{
        position: 'relative',
        width: 12,
        margin: 'auto',
      }}
    >
      <i className='fa fa-file' aria-hidden='true' style={{ fontSize: 21 }}></i>
      <span
        className='bg-primary'
        style={{
          position: 'absolute',
          left: 2,
          top: 2,
          color: 'white',
          fontSize: 'small',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}
      >
        {count}
      </span>
    </div>
  </div>
);

export default PageCountIcon;
