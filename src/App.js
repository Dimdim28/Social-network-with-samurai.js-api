import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "./redux/app/app-reducer";

import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import { appSelectors } from "./redux/app/app-selectors";
import About from "./components/About/About";
import Error from "./components/common/Error/Error";

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProFileContainer = React.lazy(() =>
  import("./components/ProFile/ProFileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

const App = (props) => {
  const { initializeApp } = props;
  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!props.initialized) return <Preloader className="PreLoader" />;

  return (
    <div className="app-wrapper">
      {props.isError ? (
        <Error />
      ) : (
        <>
          {" "}
          <HeaderContainer />
          <div className="row">
            <div className="app-wrapper-content">
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route
                    path="/profile/:userId"
                    element={<ProFileContainer />}
                  />
                  <Route path="/profile" element={<ProFileContainer />} />
                  <Route path="/dialogs" element={<DialogsContainer />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<About />} />
                </Routes>
              </Suspense>
            </div>
            <NavBar />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: appSelectors.getInitialized(state),
  isError: appSelectors.getServerError(state),
});

export default connect(mapStateToProps, { initializeApp })(App);
