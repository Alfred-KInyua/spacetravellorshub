import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/Missions';
import rocketsReducer from '../redux/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
