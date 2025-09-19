import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ensureAnnotations, { AnnoTools, IAnnotateState } from './reducer';

import { AnnoDataModel } from '../../generated/AnnoDataModel';
import { PageImageModel } from '../../generated/PageImageModel';
import { connect } from 'react-redux';
import { createLoaderView } from 'base/asyncLoader';

const AnnoLoader = createLoaderView<AnnoDataModel>();

type ComponentProps = PageImageModel & {
  scale: number;
  onAnnotationsDone?: () => void;
};

type ConnectedProps = IAnnotateState & {};

type DPoints = { X: number; Y: number };

type DCoordinates = {
  startPoint: DPoints;
  current?: DPoints;
  lastDrawPoint?: DPoints;
};

type StateProps = {
  canvas?: any;
  context?: any;
  dimentions?: { w: number; h: number };
  coordinates?: DCoordinates;
  drawing?: boolean;
  lastX?: number;
  lastY?: number;
};

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

class AnnontationOverlayView extends React.Component<ViewProps, StateProps> {
  CanvasRef: any = null;
  hasDrawing: boolean = false;
  hasChanged: boolean = false;

  state: StateProps = {};

  componentDidMount() {
    const { id: pageId, dispatch, selectedTool } = this.props;

    const canvas: any = ReactDOM.findDOMNode(this.CanvasRef);

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d');

    this.setState({
      canvas,
      context,
      dimentions: { w: canvas.width, h: canvas.height },
    });

    switch (selectedTool) {
      case AnnoTools.rotateRight:
      case AnnoTools.rotateLeft:
        this.hasChanged = true;
        dispatch(ensureAnnotations().rotateImage(pageId, AnnoTools.rotateLeft == selectedTool));
        break;
      default:
        dispatch(ensureAnnotations().loadAnnotations(pageId));
        break;
    }
  }

  _annotaionedLoaded = false;
  componentDidUpdate(prevProps: ViewProps) {
    const { annoDataAsync } = this.props;
    //const { annoDataAsync: prevAnnoDataAsync } = prevProps;

    const { context, dimentions } = this.state;

    if (
      !this._annotaionedLoaded &&
      annoDataAsync &&
      annoDataAsync.result &&
      annoDataAsync.result.dataUrl
    ) {
      const imageObj = new Image();
      imageObj.onload = function () {
        context.drawImage(this, 0, 0, dimentions.w, dimentions.h);
      };

      imageObj.src = annoDataAsync.result.dataUrl;

      this._annotaionedLoaded = true;
    }
  }

  componentWillUnmount() {
    const { id: pageId, dispatch, onAnnotationsDone } = this.props;

    if (this.hasChanged && onAnnotationsDone) onAnnotationsDone();

    dispatch(ensureAnnotations().checkIfUnMounted(pageId));
  }

  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  handleOnMouseDown(e) {
    if (!this.annoActive()) return;

    const rect = this.state.canvas.getBoundingClientRect();
    this.state.context.beginPath();
    if (AnnontationOverlayView.isMobile()) {
      this.setState({
        coordinates: {
          startPoint: {
            X: e.targetTouches[0].pageX - rect.left,
            Y: e.targetTouches[0].pageY - rect.top,
          },
        },
      });
    } else {
      this.setState({
        coordinates: {
          startPoint: {
            X: e.clientX - rect.left,
            Y: e.clientY - rect.top,
          },
        },
      });
    }

    this.setState({
      drawing: true,
    });
  }

  handleOnMouseMove(e) {
    if (!this.annoActive()) return;

    e.preventDefault();

    const { drawing, lastX, lastY, canvas, coordinates, dimentions } = this.state;

    if (drawing) {
      const rect = canvas.getBoundingClientRect();
      let currentX;
      let currentY;

      if (AnnontationOverlayView.isMobile()) {
        coordinates.current = {
          X: e.targetTouches[0].pageX - rect.left,
          Y: e.targetTouches[0].pageY - rect.top,
        };
      } else {
        coordinates.current = {
          X: e.clientX - rect.left,
          Y: e.clientY - rect.top,
        };
      }

      const scale = dimentions.h / canvas.offsetHeight;

      this.draw(coordinates, scale);
    }
  }

  annoActive() {
    const { annoDataAsync, selectedTool, annoText } = this.props;

    if (selectedTool == AnnoTools.showOriginal || (annoDataAsync && annoDataAsync.isLoading))
      return false;

    /*
        if (!!annoText)
            return false;
        */

    return true;
  }

  handleonMouseUp(e) {
    if (!this.annoActive()) return;

    e.preventDefault();
    const { coordinates, dimentions, canvas, context } = this.state;

    const { startPoint, current, lastDrawPoint } = coordinates;

    const { selectedTool, dispatch } = this.props;

    if (startPoint && current) {
      if (AnnoTools.annotate == selectedTool) {
        const scale = dimentions.h / canvas.offsetHeight;

        if (lastDrawPoint) {
          context.clearRect(
            (startPoint.X - 2) * scale,
            (startPoint.Y - 2) * scale,
            (lastDrawPoint.X - startPoint.X + 4) * scale,
            (lastDrawPoint.Y - startPoint.Y + 4) * scale,
          );
        }

        dispatch(
          ensureAnnotations().initAnnoText({
            left: startPoint.X * scale,
            top: startPoint.Y * scale,
            width: (current.X - startPoint.X) * scale,
            height: (current.Y - startPoint.Y) * scale,
          }),
        );
      } else {
        this.saveCanvas();
      }
    }

    this.setState({ drawing: false });
  }

  draw(coordinates: DCoordinates, scale: number) {
    const { context } = this.state;
    const { startPoint, lastDrawPoint, current } = coordinates;

    if (!this.hasDrawing) {
      if (current.X - startPoint.X < 10 && current.Y - startPoint.Y < 10) {
        //barely any mouse move may be the person does actually want to draw
        return;
      }
    }

    if (lastDrawPoint) {
      context.clearRect(
        (startPoint.X - 2) * scale,
        (startPoint.Y - 2) * scale,
        (lastDrawPoint.X - startPoint.X + 4) * scale,
        (lastDrawPoint.Y - startPoint.Y + 4) * scale,
      );
    }

    const { selectedTool } = this.props;

    switch (selectedTool) {
      case AnnoTools.clear:
        context.clearRect(
          startPoint.X * scale,
          startPoint.Y * scale,
          (current.X - startPoint.X) * scale,
          (current.Y - startPoint.Y) * scale,
        );
        break;

      case AnnoTools.annotate:
        context.lineWidth = 1;
        context.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        context.strokeRect(
          startPoint.X * scale,
          startPoint.Y * scale,
          (current.X - startPoint.X) * scale,
          (current.Y - startPoint.Y) * scale,
        );
        break;

      case AnnoTools.redact:
      case AnnoTools.highlight:
      default:
        context.lineWidth = 0;
        context.fillStyle =
          selectedTool == AnnoTools.redact ? 'rgba(0, 0, 0, 1.0)' : 'rgba(255, 255, 0, 0.45)';
        context.fillRect(
          startPoint.X * scale,
          startPoint.Y * scale,
          (current.X - startPoint.X) * scale,
          (current.Y - startPoint.Y) * scale,
        );
        break;
    }

    this.hasDrawing = true;
    coordinates.lastDrawPoint = coordinates.current;
    this.setState({ coordinates: coordinates });
  }

  handleTextEnter() {
    const { annoText, dispatch } = this.props;

    const text = annoText && annoText.text;
    if (!text) {
      return;
    }

    const { context } = this.state;

    const fontSizePx = 20;

    context.fillStyle = 'rgba(0, 0, 0, 1.0)';
    context.font = `${fontSizePx}px Calibri`;

    const maxWidth = annoText.position.width - 4;
    const lineHeight = fontSizePx + 4;
    const x = annoText.position.left + 2;
    let y = annoText.position.top + fontSizePx;

    const words = text.split(' ');
    let line = '';

    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);

    context.lineWidth = 0;
    context.fillStyle = 'rgba(255, 255, 0, 0.45)';
    context.fillRect(
      annoText.position.left,
      annoText.position.top,
      annoText.position.width,
      annoText.position.height,
    );

    this.saveCanvas();
  }

  private saveCanvas() {
    const { id: pageId, dispatch } = this.props;

    if (!this.CanvasRef) {
      console.error('Canvas Ref is empty');
      return;
    }

    const data = this.CanvasRef.toDataURL('image/png');
    dispatch(ensureAnnotations().saveAnnotations(pageId, data));

    this.hasChanged = true;
  }

  render() {
    const displayStyle: any = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '100%',
      height: '100%',
      cursor: 'crosshair',
    };

    const { annoDataAsync, selectedTool, annoText, dispatch } = this.props;

    /*
        if (!annoText) {
            displayStyle.cursor = 'crosshair'
        }
        */

    const canvasStyle =
      AnnoTools.showOriginal == selectedTool
        ? { visibility: 'hidden', ...displayStyle }
        : displayStyle;

    return (
      <React.Fragment>
        {annoDataAsync && annoDataAsync.result && annoDataAsync.result.imageDataUrl && (
          <img src={annoDataAsync.result.imageDataUrl} style={displayStyle} className='annoImg' />
        )}
        <canvas
          style={canvasStyle}
          className='annoOverlay'
          ref={(ref) => (this.CanvasRef = ref)}
          onMouseDown={this.handleOnMouseDown.bind(this)}
          onTouchStart={this.handleOnMouseDown.bind(this)}
          onMouseMove={this.handleOnMouseMove.bind(this)}
          onTouchMove={this.handleOnMouseMove.bind(this)}
          onMouseUp={this.handleonMouseUp.bind(this)}
          onTouchEnd={this.handleonMouseUp.bind(this)}
        ></canvas>
        {annoText && (
          <textarea
            style={{ position: 'absolute', color: 'black', ...annoText.position }}
            value={annoText.text || ''}
            placeholder='Enter text'
            onChange={(e) => dispatch(ensureAnnotations().updateAnnoText(e.target.value))}
            onKeyUp={(e) => {
              if (e.keyCode == 13 && e.shiftKey == false) {
                e.preventDefault();
                this.handleTextEnter();
              }
            }}
          />
        )}
        {annoDataAsync && (
          <AnnoLoader asyncResult={annoDataAsync} prompt='loading annotations'>
            &nbsp;
          </AnnoLoader>
        )}
      </React.Fragment>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const annoState = ensureAnnotations().getCurrentState(state);

  return annoState;
})(AnnontationOverlayView);
