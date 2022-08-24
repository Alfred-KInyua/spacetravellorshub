import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from '../Api/Api';

const GET_ROCKETS = 'spaceHub/rockets/GET_ROCKETS';

const initialRockets = [];

const rocketsReducer = (state = initialRockets, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const res = await fetch(Api);
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
