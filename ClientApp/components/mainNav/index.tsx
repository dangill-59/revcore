import * as React from 'react';
import * as _ from 'lodash';

import {
  Badge,
  Button,
  Image,
  MenuItem,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureLogin, { IRevLoginState } from '../revLogin/reducer';
import ensureNav, { INavMenuState } from './reducer';
import ensureWorkspace, { MessageList } from '../workspace/reducer';

import CartMenu from '../carts/menu';
import DDMenuItem from './dropDownMenuItem';
import DistributeMenu from '../printApp/menu';
import HelpLink from './help';
import { LinkContainer } from 'react-router-bootstrap';
import { MessageToShowModel } from '../../generated/MessageToShowModel';
import SplitPoint from 'base/splitPoint';
import SwitchWokspaceMenu from '../workspace/switchWorkspaceMenu';
import TasksMenu from '../searchView/savedSearchmenu';
import { connect } from 'react-redux';
import ensureBilling from '../billing/reducer';
import ensureUserSettings from '../userSettings/reducer';

const Logo = require('./revlogo.png');

type ConnectedProps = {
  login: IRevLoginState;
  nav: INavMenuState;
  messages: MessageList;
  hasBilling: boolean;
};

/*
const CartMenu = () => <SplitPoint
    prompt="Loading carts..."
    loader={(resolve) => {
        require.ensure([], function (require) {
            resolve((require('../carts/menu') as any).default);
        }, 'carts');
    }} />
*/

class MainNav extends React.PureComponent<ConnectedProps & { dispatch }, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureNav().initSettings());
  }

  render() {
    const { dispatch, login, nav, messages, hasBilling } = this.props;

    const USerId =
      login && login.JWTDecoded ? (
        <OverlayTrigger
          placement='bottom'
          overlay={
            <Tooltip id='idtooltip'>
              <div>
                <span className='text-muted'>Signed in :</span>
                <strong>{login.JWTDecoded.name}</strong>
                <br />
                {login.JWTDecoded.email}
              </div>
            </Tooltip>
          }
        >
          {login.JWTDecoded.picture ? (
            <Image src={login.JWTDecoded.picture} rounded style={{ height: 30 }} />
          ) : (
            <i className='fa fa-user fa-2x' aria-hidden='true'></i>
          )}
        </OverlayTrigger>
      ) : (
        <i className='fa fa-user-circle-o  fa-2x' aria-hidden='true'></i>
      );

    const headerStyle = login && login.JWT ? {} : { float: 'none' };

    /*Bit if hack to get listpfpages hooked into distribute Menu. We need to refractor this  */
    let distributeExtraKeys = _.keys((nav.menuMap && nav.menuMap.distribueExtra) || {});
    const distributeExtra =
      distributeExtraKeys.length > 0 && nav.menuMap.distribueExtra[distributeExtraKeys[0]].node;

    let distributeBadgeKeys = _.keys((nav.menuMap && nav.menuMap.distribueBadge) || {});
    const distributeBadge =
      distributeBadgeKeys.length > 0 && nav.menuMap.distribueBadge[distributeBadgeKeys[0]].node;

    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noreferrer');
    };

    return (
      <Navbar collapseOnSelect className='mainNav'>
        <Navbar.Header style={headerStyle}>
          <Navbar.Brand>
            <img src={Logo} alt='Rev' />
          </Navbar.Brand>

          {login && login.JWT && <Navbar.Toggle />}

          {!(login && login.JWT) && (
            <Nav pullRight style={{ float: 'right', margin: 0 }}>
              <NavItem href='https://www.scanrev.com/section/main/support/sign-in/' target='_blank'>
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip id='helptooltip'>Show help topics</Tooltip>}
                >
                  <i className='fa fa-question-circle-o fa-2x' aria-hidden='true'></i>
                </OverlayTrigger>
              </NavItem>
            </Nav>
          )}
        </Navbar.Header>

        {login && login.JWT && (
          <Navbar.Collapse>
            <Nav pullRight>
              {messages &&
                _.keys(messages).map((m) => (
                  <NavItem
                    key={m}
                    onClick={() => dispatch(ensureWorkspace().showMessage('warning', m))}
                  >
                    <span
                      className='text-warning'
                      style={{ fontSize: 'larger', lineHeight: '30px' }}
                    >
                      <i className='fa fa-warning' aria-hidden='true'></i> {messages[m].heading}
                    </span>
                  </NavItem>
                ))}

              <NavItem>
                <button
                  role='link'
                  onClick={() => openInNewTab('https://pdftotiff.sonopaper.com')}
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='searchtooltip'>Convert pdf to tiff</Tooltip>}
                  >
                    <i className='fa fa-file-pdf-o fa-2x' aria-hidden='true'></i>
                  </OverlayTrigger>
                </button>
              </NavItem>

              {nav &&
                nav.menuMap &&
                nav.menuMap.main &&
                _.keys(nav.menuMap.main).map((k, i) => {
                  const MyMenuNode = nav.menuMap.main[k].node;
                  return <MyMenuNode key={i} />;
                })}

              {/* We are putting the tasks Menu functionality is the Saved searches menu*/}
              <TasksMenu />

              <LinkContainer to='/search'>
                <NavItem>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='searchtooltip'>Search for documents</Tooltip>}
                  >
                    <i className='fa fa-binoculars fa-2x' aria-hidden='true'></i>
                  </OverlayTrigger>
                </NavItem>
              </LinkContainer>

              <LinkContainer to='/new'>
                <NavItem>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={<Tooltip id='newdoctooltip'>Create new document</Tooltip>}
                  >
                    <i className='fa fa-plus fa-2x' aria-hidden='true'></i>
                  </OverlayTrigger>
                </NavItem>
              </LinkContainer>

              <DistributeMenu
                OtherPrintableMenusComponent={distributeExtra}
                MenubadgeComponent={distributeBadge}
              />

              {/*<CartMenu/>*/}

              <HelpLink />

              <NavDropdown title={USerId as any} id='settingsMenu'>
                {nav.menuMap &&
                  nav.menuMap.settings &&
                  _.keys(nav.menuMap.settings).map((k, i) => {
                    const MyMenuNode = nav.menuMap.settings[k].node;
                    return <MyMenuNode key={i} />;
                  })}

                <LinkContainer to='/manageworkspace'>
                  <MenuItem>
                    <DDMenuItem faIcon='fa-users' toolTip='Manage workspace' />
                  </MenuItem>
                </LinkContainer>

                <NavItem onClick={() => dispatch(ensureUserSettings().showSettings(true))}>
                  <DDMenuItem faIcon='fa-gears' toolTip='Profile' />
                </NavItem>

                <SwitchWokspaceMenu />

                <MenuItem divider />

                <LinkContainer to='/myAccount'>
                  <MenuItem>
                    <DDMenuItem faIcon='fa-credit-card' toolTip='My account' />
                  </MenuItem>
                </LinkContainer>

                <NavItem onClick={() => dispatch(ensureLogin().logOut())}>
                  <DDMenuItem bsSize='large' faIcon='fa-sign-out' toolTip='Sign out' />
                </NavItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    );
  }
}

export default connect<ConnectedProps, { dispatch }, {}>((state) => {
  const { globalMessagesAsync } = ensureWorkspace().getCurrentState(state);

  const { subscriptionAsync } = ensureBilling().getCurrentState(state);

  return {
    login: ensureLogin().getCurrentState(state),
    nav: ensureNav().getCurrentState(state),
    messages:
      globalMessagesAsync && globalMessagesAsync.result && globalMessagesAsync.result['warning'],
    hasBilling: !!(subscriptionAsync && subscriptionAsync.result),
  };
})(MainNav);
