import { ScoreBoard } from "../ScoreBoard/ScoreBoard";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <span>Player 1</span>
      <ScoreBoard />
      <span>Player 2</span>
    </div>
  );
}

export { Header };
