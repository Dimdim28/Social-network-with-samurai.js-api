import React, { useEffect, useState } from "react";
import s from "./ProFileInfo.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
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
    <>
      <div className={s.desctopStatus}>
        <div className={s.profileStatus}>
          {editMode ? (
            <>
              <input
                data-testid="input-elem-desctop"
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={disActivateEditMode}
                value={status}
                className={s.inputStatus}
              />
              {props.isOwner && (
                <p className={s.statusDescription}>
                  ⓘ click aside to save changes
                </p>
              )}
            </>
          ) : (
            <>
              <p
                data-testid="status-elem-desctop"
                className={s.paragraphStatus}
                onDoubleClick={activateEditMode}
              >
                {status || "No status"}
              </p>
              {props.isOwner && (
                <p className={s.statusDescription}>
                  ⓘ Double click to edit your status
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className={s.mobileStatus}>
        <div className={s.profileStatus}>
          {editMode ? (
            <>
              <input
                data-testid="input-elem-mobile"
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={disActivateEditMode}
                value={status}
                className={s.inputStatus}
              />
              {props.isOwner && (
                <p className={s.statusDescription}>
                  ⓘ click aside to save changes
                </p>
              )}
            </>
          ) : (
            <>
              <p
                className={s.paragraphStatus}
                onTouchStart={activateEditMode}
                data-testid="status-elem-mobile"
              >
                {status || "No status"}
              </p>
              {props.isOwner && (
                <p className={s.statusDescription}>
                  ⓘ Hold click to edit your status
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileStatus;
