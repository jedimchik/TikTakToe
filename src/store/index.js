import { configureStore } from "@reduxjs/toolkit";
import boardGame from "./gameBoard.js";
import messages from "./messages.js";
import moveTurn from "./moveTurn.js";
// import scoreBoard from "./scoreBoard.js";

export default configureStore({
  reducer: {
    boardGame: boardGame,
    messages: messages,
    moveTurn: moveTurn,
  },
});
