import { useDispatch, useSelector } from "react-redux";
import { setMark, winTest } from "../../store/gameBoard";
import { changeTurn } from "../../store/moveTurn";

import styles from "./Cell.module.css";

function Cell({ value, id, player }) {
  const dispatch = useDispatch();
  const winCells = useSelector((state) => state.boardGame.winCells);

  function nameMaker(id, winCells) {
    return winCells.includes(id) ? "winCell" : "noWinCell";
  }

  function onCellClick(id, player) {
    dispatch(setMark({ id: id, condition: player }));
    dispatch(winTest({ winner: player }));
    dispatch(changeTurn());
  }

  if (value === 2) {
    return (
      <div id={id} name={nameMaker(id, winCells)} className={styles.cello} />
    );
  }

  if (value === 1) {
    return (
      <div id={id} name={nameMaker(id, winCells)} className={styles.cellx} />
    );
  }

  if (value != 1 && value != 2)
    return (
      <div
        name={nameMaker(id, winCells)}
        id={id}
        className={styles.cellNull}
        onClick={(e) => onCellClick(e.target.id, player)}
      />
    );
}

export { Cell };
