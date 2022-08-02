import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import ProFileContainer from "./components/ProFile/ProFileContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="row">
        <NavBar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={<ProFileContainer />} />
            <Route path="/profile" element={<ProFileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
