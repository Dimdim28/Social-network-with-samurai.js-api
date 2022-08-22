import React, { useEffect } from "react";
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

const ProFileContainer = (props) => {
  const getProfile = props.getProfile;
  const getStatus = props.getStatus;
  useEffect(() => {
    getProfile(props.userId);
    getStatus(props.userId);
  }, [props.userId, getProfile, getStatus]);

  return (
    <ProFile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  userId: state.authReducer.id,
});

function WithRouterComponent(Component) {
  function ComponentWithRouterProp(props) {
    const params = useParams();
    return (
      <Component
        {...props} // Пропсы из mapStateToProps, { getProfile}
        userId={params.userId ? params.userId : props.userId} // Если такого userId нету, то отобразить свой профиль
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
