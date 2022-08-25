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

const sampleMockData = {
  mission_id: '9D1B7E0',
  mission_name: 'Thaicom',
  description:
    'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
};

const MockMissionData = (
  <Provider store={store}>
    <Mission missionData={sampleMockData} />
  </Provider>
);

it('takes the correct snapshot of data', () => {
  const tree = renderer.create(<MockMissionData />).toJSON();
  expect(tree).toMatchSnapshot();
});
