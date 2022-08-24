import { createAsyncThunk } from '@reduxjs/toolkit';

const rocketsApi = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'spaceHub/rockets/GET_ROCKETS';
const TOGGLE_RESERVED = 'spaceHub/rockets/TOGGLE_RESERVED';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    case TOGGLE_RESERVED:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;

        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const res = await fetch(rocketsApi);
  const data = await res.json();

  const transformed = data.map((obj) => ({
    id: obj.id,
    name: obj.rocket_name,
    description: obj.description,
    image: obj.flickr_images[0],
    reserved: false,
  }));

  return transformed;
});

export default rocketsReducer;
