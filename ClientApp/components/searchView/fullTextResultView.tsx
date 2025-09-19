import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

import ensureSearch, { ISearchViewState, TextinPagesProps } from './reducer';

import { IAsyncResult } from 'base/asyncStateMiddleware';
import { PageImageModel } from '../../generated/PageImageModel';
import { Textfit } from 'react-textfit';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const FTLoader = createLoaderView<TextinPagesProps>();

type ConnectedProps = {
  readonly textInPagesAsync: IAsyncResult<TextinPagesProps>;
};
type ComponentProps = PageImageModel & { scale?: number; desiredHeight: number };

type StateProps = {
  canvas?: any;
  context?: any;
};

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

const TextDisplay: React.SFC<{ text: string }> = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text }} />
);

class PageHighlightView extends React.Component<ViewProps, StateProps> {
  CanvasRef: any = null;
  state: StateProps = {};

  componentDidMount() {
    const canvas: any = ReactDOM.findDOMNode(this.CanvasRef);

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');

    this.setState({
      canvas,
      context,
    });
  }

  getZones() {
    const { canvas } = this.state;

    if (!canvas) return null;

    const {
      id: pageId,
      width: orgWidth,
      height: orgHeight,
      scale,
      textInPagesAsync,
      desiredHeight,
    } = this.props;

    const forThisPage =
      textInPagesAsync &&
      textInPagesAsync &&
      textInPagesAsync.result &&
      textInPagesAsync.result.pageMap[pageId];

    const scaleToUse = scale || canvas.height / orgHeight;

    const offsetScale = scale || desiredHeight / orgHeight;

    console.info(
      `canvas (width:${canvas.width}, height :${canvas.height}, offsetHeight :${canvas.offsetHeight}  ), orgWidth:${orgWidth}, orgHeight:${orgHeight}, scale: ${scale}, scaleToUse: ${scaleToUse}`,
    );

    return {
      zones: _.map(forThisPage || [], (zone) => {
        const minX = _.minBy(zone.boundingBox, (v) => v.x).x;
        const maxX = _.maxBy(zone.boundingBox, (v) => v.x).x;
        const minY = _.minBy(zone.boundingBox, (v) => v.y).y;
        const maxY = _.maxBy(zone.boundingBox, (v) => v.y).y;

        return _.assign({}, zone, {
          text: zone.highlights.join(' '),
          boundingRect: {
            left: minX * canvas.width,
            top: minY * canvas.height,
            width: (maxX - minX) * canvas.width,
            height: (maxY - minY) * canvas.height,
          },
        });
      }),
      scaleToUse,
    };
  }

  componentDidUpdate() {
    const { context, canvas } = this.state;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineWidth = 0;
    context.fillStyle = /* brushColor || */ 'rgba(255, 255, 0, 0.35)';

    const { zones, scaleToUse } = { ...this.getZones() };
    _.each(zones || [], (zone) => {
      context.beginPath();

      for (let i = 0; i < zone.boundingBox.length; i++) {
        console.info(
          `OCR polygon x:${zone.boundingBox[i].x * canvas.width} y:${zone.boundingBox[i].y * canvas.height} `,
        );

        if (0 == i) {
          context.moveTo(
            zone.boundingBox[i].x * canvas.width,
            zone.boundingBox[i].y * canvas.height,
          );
        } else {
          context.lineTo(
            zone.boundingBox[i].x * canvas.width,
            zone.boundingBox[i].y * canvas.height,
          );
        }
      }

      context.closePath();
      context.fill();
    });
  }

  render() {
    const { textInPagesAsync, desiredHeight } = this.props;

    const { zones } = { ...this.getZones() };

    console.log(`desiredHeight :${desiredHeight}`);

    const canvasStyle: any = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      //backgroundColor: 'rgba(255, 0, 0, 0.8)',
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '100%',
      height: '100%',
    };

    return (
      <React.Fragment>
        <canvas
          style={canvasStyle}
          className='ocrFullTextOverlayCanvas'
          ref={(ref) => (this.CanvasRef = ref)}
        ></canvas>

        {zones &&
          zones.map((zone, i) => (
            <Textfit
              key={i}
              className='ocrFullTextOverlaySpan'
              style={{ position: 'absolute', ...zone.boundingRect }}
              text={zone.text}
              min={6}
              max={14}
            >
              <span dangerouslySetInnerHTML={{ __html: zone.text }} />
            </Textfit>
          ))}

        {textInPagesAsync && !textInPagesAsync.result && (
          <FTLoader asyncResult={textInPagesAsync} prompt='loading text matches'>
            <div></div>
          </FTLoader>
        )}
      </React.Fragment>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const { textInPagesAsync } = ensureSearch().getCurrentState(state);

  return {
    textInPagesAsync,
  };
})(PageHighlightView);
