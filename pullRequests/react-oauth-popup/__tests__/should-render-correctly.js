import OauthPopup from '../src/index.js';
import React from 'react';
import renderer from 'react-test-renderer';

test('OauthPopup component renders correctly', () => {
  const tree = renderer
    .create(
      <OauthPopup>
        <div>coooooooool</div>
        <h2>siiiiiiiick</h2>
        <h2>leeegiiiiit</h2>
        <button>Doooooope</button>
      </OauthPopup>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
