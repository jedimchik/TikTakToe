import { Cell } from "../Cell";
import styles from "./GameBoard.module.css";
import { useSelector } from "react-redux";
import classNames from "classnames";

function GameBoard({ player, turn }) {
  const board = useSelector((state) => state.boardGame.boardGame);
  const haveWinner = useSelector((state) => state.boardGame.haveWinner);

  return (
    <div
      className={classNames(styles.cellsGrid, {
        [styles.inactive]: haveWinner.status || !turn,
      })}
    >
      <hr className={styles.horizontal} />
      <hr className={styles.vertical} />
      <hr className={styles.horizontalTwo} />
      <hr className={styles.verticalTwo} />

      {board.map((cell) => (
        <Cell
          key={cell.id}
          value={cell.condition}
          id={cell.id}
          player={player}
        />
      ))}
    </div>
  );
}

export { GameBoard };
