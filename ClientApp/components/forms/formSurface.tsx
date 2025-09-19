import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';

import ensureAutomations, { AutomationTaskEdit } from './reducer';

import { PageImageModel } from '../../generated/PageImageModel';
import { ProjectFieldModel } from '../../generated/ProjectFieldModel';
import ZoneList from './zoneList';
import { connect } from 'react-redux';
import ensureProjects from '../projects/reducer';

type ComponentProps = {
  formImage: PageImageModel;
  width: number;
};

type ConnectedProps = AutomationTaskEdit & {
  availableFields: ProjectFieldModel[];
};

type ViewProps = ConnectedProps & ComponentProps & { dispatch };

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

class FormSurface extends React.Component<ViewProps, StateProps> {
  CanvasRef: any = null;
  state: StateProps = {};

  hasDrawing: boolean = false;

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
      dimentions: { w: canvas.width, h: canvas.height },
    });
  }

  static isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  handleOnMouseDown(e) {
    const { activeZone } = this.props;
    if (activeZone) {
      return;
    }

    const rect = this.state.canvas.getBoundingClientRect();
    this.state.context.beginPath();
    if (FormSurface.isMobile()) {
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
    const { activeZone } = this.props;
    if (activeZone) {
      return;
    }

    e.preventDefault();

    const { drawing, lastX, lastY, canvas, coordinates, dimentions } = this.state;

    if (drawing) {
      const rect = canvas.getBoundingClientRect();
      let currentX;
      let currentY;

      if (FormSurface.isMobile()) {
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

  handleonMouseUp(e) {
    const { activeZone, formImage, width, dispatch } = this.props;
    if (activeZone) {
      return;
    }

    //e.preventDefault();
    const { canvas, dimentions, coordinates, context } = this.state;
    //const scale = dimentions.h/canvas.offsetHeight;

    //const imageScale = formImage.height/canvas.offsetHeight;
    const imageScale = formImage.width / width;

    const { startPoint, current } = coordinates;

    let newState = { drawing: false };
    if (startPoint && current) {
      dispatch(
        ensureAutomations().addZone(
          formImage,
          startPoint.X * imageScale,
          startPoint.Y * imageScale,
          current.X * imageScale,
          current.Y * imageScale,
        ),
      );
    }
    /*newState.myPos = {
            start:{X:startPoint.X*imageScale,Y:startPoint.Y*imageScale},
            end:{X:current.X*imageScale,Y:current.Y*imageScale}
        };*/

    this.setState(newState);

    if (canvas && context) context.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw(coordinates: DCoordinates, scale: number) {
    const { brushColor } = this.props;

    const { context, canvas, dimentions } = this.state;
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
    context.lineWidth = 0;
    context.fillStyle = brushColor || 'rgba(255, 255, 0, 0.45)';
    context.fillRect(
      startPoint.X * scale,
      startPoint.Y * scale,
      (current.X - startPoint.X) * scale,
      (current.Y - startPoint.Y) * scale,
    );

    this.hasDrawing = true;
    coordinates.lastDrawPoint = coordinates.current;
    this.setState({ coordinates: coordinates });
  }

  render() {
    const { formImage, width, zones, activeZone, availableFields, detectedArray, dispatch } =
      this.props;
    //const { canvas, context } = this.state;

    console.log('zones', zones);

    const imgWidth = width + 'px';
    const imgHeight = formImage.height * (width / formImage.width) + 'px';

    const imageScale = formImage.width / width;

    let canvasStyle: any = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      position: 'absolute',
      top: '0px',
      right: '0px',
      width: '100%',
      height: '100%',
    };

    if (activeZone) canvasStyle.cursor = 'crosshair';

    return (
      <div
        style={{
          width: imgWidth,
          height: imgHeight,
          position: 'relative',
          margin: 'auto',
          cursor: 'crosshair',
        }}
      >
        <img
          src={formImage.path}
          style={{ position: 'absolute', top: '0px', right: '0px', width: '100%', height: '100%' }}
        />

        <canvas
          style={canvasStyle}
          ref={(ref) => (this.CanvasRef = ref)}
          onMouseDown={this.handleOnMouseDown.bind(this)}
          onTouchStart={this.handleOnMouseDown.bind(this)}
          onMouseMove={this.handleOnMouseMove.bind(this)}
          onTouchMove={this.handleOnMouseMove.bind(this)}
          onMouseUp={this.handleonMouseUp.bind(this)}
          onTouchEnd={this.handleonMouseUp.bind(this)}
        ></canvas>

        {
          <ZoneList
            formImage={formImage}
            zones={zones}
            activeZone={activeZone}
            detectedArray={detectedArray}
            imageScale={imageScale}
            availableFields={availableFields}
            dispatch={dispatch}
          />
        }
      </div>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, ComponentProps>((state, ownprops) => {
  const formsState = ensureAutomations().getCurrentState(state);
  const projectState = ensureProjects().getCurrentState(state);

  let availableFields: ProjectFieldModel[] = [];

  const takenFields = _.map(
    (formsState && formsState.currentlyEditing && formsState.currentlyEditing.zones) || [],
    (zone) => zone.id,
  );

  if (projectState && projectState.selectedProject) {
    availableFields = _.filter(
      projectState.selectedProject.fields,
      (f) => !_.includes(takenFields, f.displayName),
    );
  }

  return _.assign({ availableFields: availableFields }, formsState && formsState.currentlyEditing);
})(FormSurface);
