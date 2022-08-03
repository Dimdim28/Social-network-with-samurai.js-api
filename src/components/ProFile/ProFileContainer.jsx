import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profile-reducer";
import ProFile from "./ProFile";

class ProFileContainer extends Component {
  componentDidMount() {
    profileAPI.getProfile(this.props.userId).then((res) => {
      this.props.setUserProfile(res.data);
    });
  }

  componentDidUpdate(prevProps) {
    const userId = this.props.userId;
    if (prevProps.userId !== userId) {
      profileAPI.getProfile(userId).then((res) => {
        this.props.setUserProfile(res.data);
      });
    }
  }

  render() {
    return <ProFile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

const WithRouterComponent = (props) => {
  const params = useParams();
  return (
    <ProFileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : "2"} // Если такого userId нету, то отобразить 2
    />
  );
};

export default connect(mapStateToProps, { setUserProfile })(
  WithRouterComponent
);
