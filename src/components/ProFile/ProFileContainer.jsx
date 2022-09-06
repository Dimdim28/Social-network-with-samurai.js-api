import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/AuthRedirect";
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile/profile-reducer";
import ProFile from "./ProFile";
import { profileSelectors } from "../../redux/profile/profile-selectors";
import { authSelectors } from "../../redux/auth/auth-selectors";
import Preloader from "../common/Preloader/Preloader";

const ProFileContainer = (props) => {
  const { getProfile, getStatus, userId } = props;
  console.log("profileContainer", props);

  useEffect(() => {
    getProfile(userId);
    getStatus(userId);
  }, [userId, getProfile, getStatus]);

  if (props.isFetching || !props.profile) return <Preloader />;

  return (
    <ProFile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      isOwner={props.ownerId === props.userId}
      savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
      userId={props.ownerId}
      saveProfileError={props.saveProfileError}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: profileSelectors.getProfile(state),
  status: profileSelectors.getStatus(state),
  userId: profileSelectors.getId(state),
  ownerId: authSelectors.getId(state),
  savePhotoError: profileSelectors.getSavePhotoError(state),
  saveProfileError: profileSelectors.getSaveProfileError(state),
  isFetching: profileSelectors.getProfileFetchingStatus(state),
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
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  WithRouterComponent,
  WithAuthRedirect
)(ProFileContainer);
