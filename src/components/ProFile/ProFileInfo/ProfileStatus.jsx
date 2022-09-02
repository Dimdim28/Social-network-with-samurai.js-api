import React, { useEffect, useState } from "react";
import s from "./ProFileInfo.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  // console.log(status);
  const activateEditMode = () => {
    if (props.isOwner) setEditMode(true);
  };
  const disActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={s.profileStatus}>
      {editMode ? (
        <div>
          <input
            data-testid="input-elem"
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={disActivateEditMode}
            value={status}
            className={s.inputStatus}
          />
          {props.isOwner && (
            <p className={s.statusDescription}>ⓘ click aside to save changes</p>
          )}
        </div>
      ) : (
        <div>
          <p className={s.paragraphStatus} onDoubleClick={activateEditMode}>
            {status || "No status"}
          </p>
          {props.isOwner && (
            <p className={s.statusDescription}>
              ⓘ Double click to edit your status
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
