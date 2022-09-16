import s from "../Dialogs.module.css";

const DialogItem = (props) => {
  const status = props.isActive ? s.active : "";
  return (
    <div
      onClick={() => props.chooseDialog(props.id)}
      className={`${s.dialog} ${status}`}
    >
      <img className={s.avatar} src={props.avatar} alt="avatar"></img>
      {props.name}
    </div>
  );
};

export default DialogItem;
