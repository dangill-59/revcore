import * as React from 'react';
import * as _ from 'lodash';

import ensurePrintApp, { PrintLoad } from './reducer';

import { connect } from 'react-redux';

type ConnectedProps = {
  printLoad?: PrintLoad;
};

class PrintSection extends React.Component<ConnectedProps & { dispatch }, {}> {
  _imageRefs = [];

  componentWillUpdate() {
    this._imageRefs = [];
  }

  componentDidUpdate() {
    const { printLoad } = this.props;
    const _mine = this;

    if (printLoad && printLoad.pages) {
      const allLoaded: PromiseLike<any>[] = _.map(this._imageRefs, (ref) => {
        if (ref.complete) return Promise.resolve();
        else {
          return new Promise((resolve, reject) => {
            ref.onload = (e) => {
              resolve();
            };
            ref.onerror = (e) => {
              reject('Failed to load an image');
            };
          });
        }
      });

      printLoad.onLoaded(Promise.all(allLoaded));
    }
  }

  render() {
    const { printLoad } = this.props;
    this._imageRefs = [];

    return printLoad && printLoad.pages ? (
      <div>
        {printLoad.pages.map((page, i) => (
          <img
            key={i}
            src={page.path}
            ref={(ref) => this._imageRefs.push(ref)}
            style={{
              maxWidth: '100%',
              marging: '10px',
              pageBreakInside: 'avoid',
              height: 'auto',
            }}
          />
        ))}
      </div>
    ) : null;
  }
}

export default connect<ConnectedProps, {}, {}>((state) => {
  const { printLoad } = ensurePrintApp().getCurrentState(state);
  return { printLoad };
})(PrintSection);
