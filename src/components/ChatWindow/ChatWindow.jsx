import { useSelector } from "react-redux";
import { MsgInput } from "../MsgInput/MsgInput";

import styles from "./ChatWindow.module.css";

function ChatWindow({ player }) {
  const messages = useSelector((state) => state.messages.messages);

  console.log(messages);

  return (
    <div className={styles.chatWindow}>
      <div className={styles.topRibbon}>Player {player}</div>

      <div className={styles.msgWindow}>
        {messages.map((item) => {
          let key = Math.random(1);

          return (
            <div
              key={key}
              className={
                item.player === player ? styles.messageOf1 : styles.messageOf2
              }
            >
              <span>{item.text}</span> <br />
            </div>
          );
        })}
      </div>

      <MsgInput player={player} />
    </div>
  );
}

export { ChatWindow };
