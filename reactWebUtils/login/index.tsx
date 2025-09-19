import * as React from 'react';
import * as clientOnly from './modules.clientOnly';

import {
  Button,
  Image,
  MenuItem,
  NavDropdown,
  NavItem,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import ensureLogin, { ILoginState } from './reducer';

import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

type ViewProps = ILoginState & { dispatch };

class loginBtn extends React.Component<ViewProps, {}> {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(ensureLogin().registerFetchHook());
  }

  render() {
    const { JWT, profile, dispatch } = this.props;

    const userid = (
      profile && profile.picture ? (
        <span>
          <Image src={profile.picture} circle style={{ height: 20, marginRight: 5 }} />
          {profile.nickname}
        </span>
      ) : (
        'Signed in'
      )
    ) as any;

    return JWT ? (
      <NavDropdown id='signinIdDropdown' title={userid}>
        <MenuItem eventKey='1' onClick={(_) => dispatch(ensureLogin().updateJwt(null))}>
          <i className='fa fa-sign-out' style={{ marginLeft: 5 }} /> Sign out
        </MenuItem>

        <LinkContainer to={'/profile/my'} activeClassName='active'>
          <MenuItem eventKey='2'>my profile</MenuItem>
        </LinkContainer>
      </NavDropdown>
    ) : (
      <NavItem>
        <Button bsStyle='primary' bsSize='xs' onClick={(_) => dispatch(ensureLogin().signIn())}>
          <i className='fa fa-sign-in' /> Sign in
        </Button>
      </NavItem>
    );
  }
}

export default connect((state) => {
  return ensureLogin().getCurrentState(state) || {};
})(loginBtn);
