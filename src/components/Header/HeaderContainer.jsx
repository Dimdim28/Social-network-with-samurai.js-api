import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { exit } from "../../redux/auth-reducer";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
  id: state.authReducer.id,
  email: state.authReducer.email,
});

export default connect(mapStateToProps, { exit })(HeaderContainer);
