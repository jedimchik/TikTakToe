import { GameBoard } from "../GameBoard";
import { ChatWindow } from "../ChatWindow";

import styles from "./Half.module.css";

function Half({ player, turn }) {
  return (
    <div className={styles.half}>
      {turn ? (
        <span className={styles.moveMsg}>Make your move!</span>
      ) : (
        <span className={styles.moveMsg}>Wait for your opponent</span>
      )}

      <GameBoard player={player} turn={turn} />
      <ChatWindow player={player} />
    </div>
  );
}

export { Half };
