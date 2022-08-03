import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProFileInfo.module.css";

export const ProFileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.item}>
      <div className={s.main}>
        <img className={s.avatar} src={props.profile.photos.large} alt="ava" />
        <div className={s.profileText}>
          <p className={s.fullName}>{props.profile.fullName}</p>
          <p className={s.aboutME}> {props.profile.aboutMe}</p>
        </div>
      </div>

      <div className={s.description}>
        <div className={s.contacts}>
          {Object.keys(props.profile.contacts).map((key) =>
            !!props.profile.contacts[key] ? (
              <p key={key} className={s.contact}>
                {props.profile.contacts[key]}
              </p>
            ) : null
          )}
        </div>
        <div className={s.job}>
          {props.profile.lookingForAJob ? (
            <p className={s.jobTitle}>В поиске работы</p>
          ) : (
            <p className={s.jobTitle}>Не ищет работу</p>
          )}
          <p className={s.jobDescription}>
            {props.profile.lookingForAJobDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
