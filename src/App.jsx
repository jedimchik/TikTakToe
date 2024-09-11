import { Header } from "./components/Header";
import { Half } from "./components/Half/Half";
import styles from "./App.module.css";
import { useSelector } from "react-redux";

function App() {
  const turn = useSelector((state) => state.moveTurn.moveTurn);
  return (
    <div className={styles.game}>
      <Header />
      <div className={styles.body}>
        <Half player={1} turn={turn[0]} />
        <Half player={2} turn={turn[1]} />
      </div>
    </div>
  );
}

export default App;
