import { createSlice } from "@reduxjs/toolkit";
const messages = createSlice({
  name: "messages",

  initialState: {
    messages: [],
  },

  reducers: {
    addMessage(state, action) {
      state.messages.push({
        player: action.payload.player,
        text: action.payload.text,
      });
    },

    clearHistory(state, action) {
      state.messages = [];
    },
  },
});

export const { addMessage, clearHistory } = messages.actions;
export default messages.reducer;
