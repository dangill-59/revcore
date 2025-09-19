import * as React from 'react';

import ensureLogin, { IRevLoginState } from './components/revLogin/reducer';

import ConfirmBox from './components/confirmation';
import { DragDropContext } from 'react-dnd';
import EnsureProjects from './components/workspace';
import HTML5Backend from 'react-dnd-html5-backend';
import Login from './components/revLogin';
import MainNav from './components/mainNav';
import Media from 'react-media';
import Messages from './components/workspace/messages';
import PrintApp from './components/printApp';
import WaitBox from './components/waitBox';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

type LayoutViewProps = IRevLoginState & { dispatch };

class LayoutView extends React.Component<LayoutViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureLogin().checkDatabase());
  }

  public render() {
    const { JWT } = this.props;

    return (
      <div id='theLayout'>
        <Media
          query='screen'
          render={() => (
            <div className='container-fluid myMainApp' style={{ padding: 0 }}>
              <MainNav {...this.props} />

              <div className='mainNavPlaceHolder'></div>

              <div className='mainBody'>
                <Messages />

                {JWT && <EnsureProjects>{this.props.children}</EnsureProjects>}
              </div>

              {/*We want to put all the modals in the end so that they are always on the top*/}
              <Login />
              <WaitBox />
              <ConfirmBox />
            </div>
          )}
        />

        <div className='printSection'>
          <PrintApp />
        </div>
      </div>
    );
  }
}

export default withRouter(
  DragDropContext(HTML5Backend)(
    connect((state) => {
      return ensureLogin().getCurrentState(state) || {};
    })(LayoutView) as any,
  ),
);
