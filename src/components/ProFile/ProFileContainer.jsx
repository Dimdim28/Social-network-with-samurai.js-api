import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import ProFile from "./ProFile";

class ProFileContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }

  render() {
    return <ProFile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProFileContainer);
