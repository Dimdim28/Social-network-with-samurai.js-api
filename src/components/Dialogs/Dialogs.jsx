import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";

export const Dialogs = (props) => {
  let state = props.dialogsPage;
  const addMessage = () => {
    props.sendMessage();
  };

  const onChangeMessage = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {state.dialogs.map((el) => (
          <DialogItem
            key={el.id}
            name={el.name}
            isActive={el.isActive}
            avatar={el.avatar}
          />
        ))}
      </div>
      <div className={s.messages}>
        {state.messages.map((el) => (
          <Message
            key={el.id}
            message={el.message}
            avatar={el.avatar}
            person={el.person}
          />
        ))}

        <div className={s.addMessage}>
          <textarea
            className={s.inputMessage}
            onChange={onChangeMessage}
            value={state.newMessageText}
          />
          <button className={s.addButton} onClick={addMessage}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};
