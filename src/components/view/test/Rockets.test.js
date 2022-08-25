import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../app/Store';
import Rockets from '../rockets/Rockets';

describe('Testing Rocket component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets
            rocket={{
              id: 1,
              name: 'Falcon 1',
              description:
                'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
              image: 'https://space-travelers-hub-nayankaran.netlify.app/',
              reserved: true,
            }}
          />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
