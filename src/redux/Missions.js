/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsApi = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(
  'fetchMissions',
  async () => {
    const response = await axios.get(`${missionsApi}`);
    return response.data;
  },
);
const initialState = [];
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [fetchMissions.fulfilled]: (state, { payload }) => [...state, payload],
  },
});

export default missionsSlice.reducer;
