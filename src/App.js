import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import ProFileContainer from "./components/ProFile/ProFileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader className="PreLoader" />;
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
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
