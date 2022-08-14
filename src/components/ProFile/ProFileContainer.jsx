import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/AuthRedirect";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import ProFile from "./ProFile";

class ProFileContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.userId);
    this.props.getStatus(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    const userId = this.props.userId;
    if (prevProps.userId !== userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }

  render() {
    return (
      <ProFile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
});

function WithRouterComponent(Component) {
  function ComponentWithRouterProp(props) {
    const params = useParams();
    return (
      <Component
        {...props} // Пропсы из mapStateToProps, { getProfile}
        userId={params.userId ? params.userId : "2"} // Если такого userId нету, то отобразить 2
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  WithRouterComponent,
  WithAuthRedirect
)(ProFileContainer);
