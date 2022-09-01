import { connect } from "react-redux";
import React from "react";
import { getLoginUserData } from "../../redux/auth/auth-reducer";
import s from "./Login.module.css";
import { Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { authSelectors } from "../../redux/auth/auth-selectors";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div className={s.loginPage}>
      <LoginForm {...props} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: authSelectors.getIsAuth(state),
    error: authSelectors.getError(state),
    captchaUrl: authSelectors.getCaptcha(state),
  };
};

export default connect(mapStateToProps, { getLoginUserData })(Login);
