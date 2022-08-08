import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../../redux/profile-reducer";
import ProFile from "./ProFile";

class ProFileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    const userId = this.props.userId;
    if (prevProps.userId !== userId) {
      this.props.getProfile(userId);
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
      {...props} // Пропсы из mapStateToProps, { getProfile}
      userId={params.userId ? params.userId : "2"} // Если такого userId нету, то отобразить 2
    />
  );
};

export default connect(mapStateToProps, { getProfile })(WithRouterComponent);
