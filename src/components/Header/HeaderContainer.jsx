import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { exit } from "../../redux/auth/auth-reducer";
import { authSelectors } from "../../redux/auth/auth-selectors";

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
  login: authSelectors.getLogin(state),
  id: authSelectors.getId(state),
  email: authSelectors.getEmail(state),
});

export default connect(mapStateToProps, { exit })(Header);
