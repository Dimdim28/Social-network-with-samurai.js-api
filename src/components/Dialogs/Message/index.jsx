import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={`${s.message} ${s[props.person]}`}>
      {props.person === "first" && (
        <img className={s.avatar} src={props.avatar} alt="avatar"></img>
      )}
      <p className={s.text}>{props.message}</p>

      {props.person === "second" && (
        <img className={s.avatar} src={props.avatar} alt="avatar"></img>
      )}
    </div>
  );
};

export default Message;
