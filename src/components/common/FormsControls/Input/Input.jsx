import React from "react";
import s from "./Input.module.css";

export default function Input({ input, meta, ...props }) {
  const hasError = meta.error && meta.touched;
  return (
    <div className={` ${s.formControl}  ${hasError ? s.error : ""}`}>
      <input {...input} {...props} className={s.inputField} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}
