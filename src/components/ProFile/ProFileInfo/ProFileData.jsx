import React from "react";
import s from "./ProFileInfo.module.css";

const ProFileData = (props) => {
  return (
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
  );
};

export default ProFileData;
