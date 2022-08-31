import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProFileInfo.module.css";
import user from "../../../assets/images/avatar.png";
import ProfileStatus from "./ProfileStatus";
import ProFileData from "./ProFileData";
import ProFileDataForm from "./ProFileDataForm";

export const ProFileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]) props.savePhoto(e.target.files[0]);
  };

  return (
    <div className={s.item}>
      {!props.editMode && (
        <div className={s.main}>
          <div className={props.savePhotoError ? s.errorOccured : s.logo}>
            <img
              className={s.avatar}
              src={
                props.profile.photos.large ? props.profile.photos.large : user
              }
              alt="ava"
            />
            {props.isOwner && (
              <>
                <input
                  className={s.addImage}
                  type="file"
                  onChange={onMainPhotoSelected}
                />
                {props.savePhotoError && <p>{props.savePhotoError}</p>}
              </>
            )}
          </div>

          <div className={s.profileText}>
            <p className={s.fullName}>{props.profile.fullName}</p>
            <p className={s.aboutME}> {props.profile.aboutMe}</p>
          </div>
        </div>
      )}

      {props.editMode ? (
        <ProFileDataForm
          profile={props.profile}
          setEditMode={props.setEditMode}
          saveProfile={props.saveProfile}
          userId={props.userId}
        />
      ) : (
        <ProFileData
          toEditMode={() => {
            props.setEditMode(true);
          }}
          profile={props.profile}
          isOwner={props.isOwner}
        />
      )}
      {!props.editMode && (
        <ProfileStatus
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      )}
    </div>
  );
};
