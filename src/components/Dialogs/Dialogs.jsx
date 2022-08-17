import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import AddTextForm from "../common/Forms/AddTextForm";

export const Dialogs = (props) => {
  let state = props.dialogsPage;

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
      <div className={s.messagesArea}>
        <div className={s.messages}>
          {state.messages.map((el) => (
            <Message
              key={el.id}
              message={el.message}
              avatar={el.avatar}
              person={el.person}
            />
          ))}
        </div>

        {/* <div className={s.addMessage}>
          <textarea
            className={s.inputMessage}
            onChange={onChangeMessage}
            value={state.newMessageText}
          />
          <button className={s.addButton} onClick={addMessage}>
            Send message
          </button>
        </div> */}

        <AddTextForm submit={props.sendMessage} buttonLabel="Add message" />
      </div>
    </div>
  );
};
