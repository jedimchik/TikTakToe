import { useDispatch } from "react-redux";
import { addMessage } from "../../store/messages";
import styles from "./MsgInput.module.css";
import { useState } from "react";

function MsgInput({ player }) {
  const [currentText, setCurrectText] = useState("");
  const dispatch = useDispatch();

  function onSendButtonClick(currentText) {
    if (currentText) {
      dispatch(addMessage({ player: player, text: currentText }));
      setCurrectText("");
    }
  }

  return (
    <div className={styles.msgContainer}>
      <input
        className={styles.msgInput}
        type="text"
        value={currentText}
        onChange={(e) => setCurrectText(e.target.value)}
        placeholder="enter your message here"
      />

      <button
        className={styles.sendBtn}
        onClick={() => onSendButtonClick(currentText)}
      ></button>
    </div>
  );
}

export { MsgInput };
