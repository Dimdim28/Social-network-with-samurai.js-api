import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends Component {
  componentDidMount() {
    authAPI.authMe().then((res) => {
      if (res.data.resultCode === 0) {
        const { id, email, login } = res.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
