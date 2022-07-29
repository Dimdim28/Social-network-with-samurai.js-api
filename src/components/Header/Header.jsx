import React from "react";
import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3W1zE81I1-NXhjPfk0uLNt5bkbdJ9VV1rKeJGexXl2dmAHSBcWEa-t4OxwvdDBvpTU9g&usqp=CAU"
        alt="logo"
      />
    </header>
  );
}
