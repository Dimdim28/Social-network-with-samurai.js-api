import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProFileInfo.module.css";

export const ProFileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s.item}>
        <img src={props.profile.photos.large} alt="ava" />
        <p>{props.profile.fullName}</p>
        обо мне:
        {props.profile.aboutMe}
        Контакты:
        {Object.keys(props.profile.contacts).map((key) =>
          !!props.profile.contacts[key] ? (
            <p key={key}>
              {key} : {props.profile.contacts[key]}
            </p>
          ) : null
        )}
        {props.profile.lookingForAJob ? <p>В поиске работы</p> : <p>Не ищет</p>}
        {props.profile.lookingForAJobDescription}
      </div>
    </>
  );
};
