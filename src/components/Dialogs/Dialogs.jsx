import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import AddTextForm from "../common/Forms/AddTextForm";

export const Dialogs = (props) => {
  const submit = (data, form) => {
    props.sendMessage(data);
    form.restart();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {props.dialogs.map((el) => (
          <DialogItem
            key={el.id}
            name={el.name}
            isActive={el.isActive}
            avatar={el.avatar}
            chooseDialog={props.chooseDialog}
            id={el.id}
          />
        ))}
      </div>
      <div className={s.messagesArea}>
        <div className={s.messages}>
          {props.messages.map((el) => (
            <Message
              key={el.id}
              message={el.message}
              avatar={el.avatar}
              person={el.person}
            />
          ))}
        </div>

        <AddTextForm submit={submit} buttonLabel="Add message" />
      </div>
    </div>
  );
};
