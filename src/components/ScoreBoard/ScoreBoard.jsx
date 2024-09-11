import { ResetBtn } from "../ResetBtn";
import styles from "./ScoreBoard.module.css";
import { useSelector, useDispatch } from "react-redux";

function ScoreBoard() {
  const score = useSelector((state) => state.boardGame.score);

  return (
    <div className={styles.scoreBoard}>
      Score: {score[1]}:{score[2]}
      <ResetBtn />
    </div>
  );
}

export { ScoreBoard };
