import OauthPopup from '../src/index.js';
import React from 'react';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('OauthPopup stops checking for code when popup closes', () => {
  const mockCallBack = jest.fn();
  global.open = jest.fn().mockReturnValue({
    location: 'http://www.google.com?code=amazing',
  });

  const component = renderer.create(
    <OauthPopup onCode={mockCallBack}>
      <div>coooooooool</div>
      <h2>siiiiiiiick</h2>
      <h2>leeegiiiiit</h2>
      <button>Doooooope</button>
    </OauthPopup>,
  );
  let popup = component.toJSON();
  expect(popup).toMatchSnapshot();
  popup.props.onClick();
  popup = component.toJSON();
  expect(popup).toMatchSnapshot();
  expect(global.open).toBeCalled();
  jest.runAllTimers();
  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(clearInterval).toHaveBeenCalledTimes(1);
  expect(mockCallBack).toHaveBeenCalledTimes(1);
});
