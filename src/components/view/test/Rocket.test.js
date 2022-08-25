import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../app/Store';
import RocketList from '../rockets/Rocket';

describe('Testing RocketList component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
