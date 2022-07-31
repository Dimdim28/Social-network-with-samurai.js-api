import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProFileInfo.module.css";

export const ProFileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <>
      <div>
        <img
          className={s.banner}
          src="https://cdn.wallpapersafari.com/55/73/ghY4rc.jpg"
          alt="back"
        />
      </div>
      <div className={s.item}>
        <img src={props.profile.photos.large} alt="ava" />
        Ava + descr
      </div>
    </>
  );
};
