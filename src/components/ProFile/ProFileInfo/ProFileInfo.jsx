import React from "react";
import s from "./ProFileInfo.module.css";

export const ProFileInfo = () => {
  return (
    <>
      <div>
        <img
          className={s.banner}
          src="https://cdn.wallpapersafari.com/55/73/ghY4rc.jpg"
          alt="back"
        />
      </div>
      <div className={s.item}>Ava + descr</div>
    </>
  );
};
