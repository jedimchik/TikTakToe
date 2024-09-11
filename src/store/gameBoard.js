import { createSlice } from "@reduxjs/toolkit";

const boardGame = createSlice({
  name: "boardGame",

  initialState: {
    haveWinner: { status: null, player: null },
    score: { 1: 0, 2: 0 },
    winCells: [],
    boardGame: [
      { id: "A", condition: null },
      { id: "B", condition: null },
      { id: "C", condition: null },

      { id: "D", condition: null },
      { id: "E", condition: null },
      { id: "F", condition: null },

      { id: "G", condition: null },
      { id: "H", condition: null },
      { id: "I", condition: null },
    ],
  },
  reducers: {
    setMark(state, action) {
      state.boardGame.forEach((element) => {
        if (element.id == action.payload.id) {
          element.condition = action.payload.condition;
        }
      });
    },
    resetGame(state, action) {
      state.boardGame.forEach((element) => {
        element.condition = null;
      });
      state.haveWinner.status = null;
      state.haveWinner.player = null;
      state.winCells = [];
    },
    winTest(state, action) {
      let block = state.boardGame.map((item) => item.condition);

      function winActions() {
        state.haveWinner.status = true;
        state.haveWinner.player = action.payload.winner;

        if (action.payload.winner == 1) {
          state.score[1]++;
        } else state.score[2]++;
      }

      if (block[4] && block[4] == block[1] && block[4] == block[7]) {
        state.winCells = ["E", "B", "H"];
        winActions();
      } else if (block[4] && block[4] == block[3] && block[4] == block[5]) {
        state.winCells = ["E", "D", "F"];
        winActions();
      } else if (block[4] && block[4] == block[0] && block[4] == block[8]) {
        state.winCells = ["A", "E", "I"];
        winActions();
      } else if (block[4] && block[4] == block[2] && block[4] == block[6]) {
        state.winCells = ["C", "E", "G"];
        winActions();
      } else if (block[0] && block[0] == block[1] && block[0] == block[2]) {
        state.winCells = ["A", "B", "C"];
        winActions();
      } else if (block[0] && block[0] == block[3] && block[0] == block[6]) {
        state.winCells = ["A", "D", "G"];
        winActions();
      } else if (block[8] && block[8] == block[2] && block[8] == block[5]) {
        state.winCells = ["C", "F", "I"];
        winActions();
      } else if (block[8] && block[8] == block[6] && block[8] == block[7]) {
        state.winCells = ["H", "G", "I"];
        winActions();
      }
    },
  },
});

export const { setMark, resetGame, winTest } = boardGame.actions;
export default boardGame.reducer;
