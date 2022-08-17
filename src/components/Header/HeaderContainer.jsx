import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMe, exit } from "../../redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authMe();
  }

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

export default compose(connect(mapStateToProps, { authMe, exit }))(
  HeaderContainer
);
