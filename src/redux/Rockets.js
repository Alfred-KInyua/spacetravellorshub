import axios from 'axios';
import ROCKETS_API from '../Api/Api';

const GET_ROCKETS = 'spaceApp/Rockets/GET_ROCKETS';

const initialRocketState = [];
const RocketReducer = (state = initialRocketState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, action.rockets];

    default:
      return state;
  }
};

export default RocketReducer;

export const fetchRocket = (rockets) => ({
  type: GET_ROCKETS,
  rockets,
});

export const GetRocketsFromApi = () => async (dispatch) => {
  const rockets = await axios.get(ROCKETS_API);
  const { data } = rockets;
  dispatch(fetchRocket(data));
};
