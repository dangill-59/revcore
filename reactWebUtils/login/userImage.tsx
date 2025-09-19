import * as React from 'react';

import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';

//declare function require(path: string);

const noImage = require('./you.png');

export const UserImageView = ({ profile }) => (
  <Image src={profile.picture || noImage} circle responsive />
);

export default connect((state) => {
  const { JWT, profile } = state.login;

  return {
    profile: JWT && profile ? profile : {},
  };
})(UserImageView);
