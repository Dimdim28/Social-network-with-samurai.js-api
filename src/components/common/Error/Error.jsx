import React from "react";
import s from "./Error.module.css";

const Error = () => {
  return (
    <div className={s.errorWrapper}>
      <div className={s.errorModal}>
        <div className={s.errorTitle}>
          <h1>Some error ocurred </h1>
        </div>
        <div className={s.errorBody}>
          <p className={s.errorText}>
            Try to open the site using <b>VPN</b>, if this does not help, then
            this is a problem with our server, we will solve it soon.
          </p>
          <p className={s.emoji}>🙃</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
