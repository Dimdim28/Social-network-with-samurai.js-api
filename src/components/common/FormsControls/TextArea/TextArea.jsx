import React from "react";
import s from "./TextArea.module.css";

export default function TextArea({ input, meta, ...props }) {
  const hasError = meta.error && meta.touched;
  return (
    <div className={` ${s.formControl}  ${hasError ? s.error : ""}`}>
      <textarea className={s.textArea} {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
}
