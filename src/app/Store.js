import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../redux/rockets';

const store = configureStore({
  reducer: rocketReducer,
});
export default store;
