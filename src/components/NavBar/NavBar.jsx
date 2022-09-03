import React from "react";
import { NavLink } from "react-router-dom";
import { FriendsContainer } from "./Friends/FriendsContainer";
import s from "./Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
          to="/users"
        >
          Users
        </NavLink>
      </div>

      <FriendsContainer />
    </nav>
  );
}
