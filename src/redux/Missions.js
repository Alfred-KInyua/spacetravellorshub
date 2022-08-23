import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsApi = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(
  'fetchMissions',
  async () => {
    const response = await axios.get(`${missionsApi}`);
    console.log(`response ${response.data}`);
    return response.data;
  },
);
const initialState = [];
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [fetchMissions.fulfilled]: (state, { payload }) => {
      const missions = payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      return missions;
    },
  },
});

export default missionsSlice.reducer;
