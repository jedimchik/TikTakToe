import styles from "./ResetBtn.module.css";
import { useDispatch } from "react-redux";
import { resetGame } from "../../store/gameBoard";
import { clearHistory } from "../../store/messages";
import { current } from "@reduxjs/toolkit";

function ResetBtn() {
  const dispatch = useDispatch();

  function onResetClick() {
    dispatch(resetGame());
    dispatch(clearHistory());
  }

  return (
    <button className={styles.resetBtn} onClick={() => onResetClick()}>
      RESET GAME
    </button>
  );
}

export { ResetBtn };
