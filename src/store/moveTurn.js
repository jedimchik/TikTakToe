import { createSlice } from "@reduxjs/toolkit";
const moveTurn = createSlice({
  name: "moveTurn",

  initialState: { moveTurn: [true, false] },

  reducers: {
    changeTurn(state, action) {
      state.moveTurn = [!state.moveTurn[0], !state.moveTurn[1]];
    },
  },
});

export const { changeTurn } = moveTurn.actions;
export default moveTurn.reducer;
