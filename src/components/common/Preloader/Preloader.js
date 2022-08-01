import React from "react";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}></div>
    </div>
  );
};

export default Preloader;
