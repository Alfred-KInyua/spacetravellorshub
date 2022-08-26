import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../../app/Store';
import Mission from '../missions/Mission';

const MockMission = () => (
  <Provider store={store}>
    <Mission />
  </Provider>
);

it('should match snapshot of the mission component', () => {
  const tree = renderer.create(<MockMission />).toJSON();
  expect(tree).toMatchSnapshot();
});
