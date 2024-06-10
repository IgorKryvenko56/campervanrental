import { createSlice } from '@reduxjs/toolkit';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
  },
  reducers: {
    setCampers(state, action) {
      state.campers = action.payload;
    },
  },
});

export const { setCampers } = campersSlice.actions;
export default campersSlice.reducer;
