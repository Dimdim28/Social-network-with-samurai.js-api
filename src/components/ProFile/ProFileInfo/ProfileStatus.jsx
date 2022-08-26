import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  // console.log(status);
  const activateEditMode = () => {
    setEditMode(true);
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
      {editMode ? (
        <input
          data-testid="input-elem"
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={disActivateEditMode}
          value={status}
        />
      ) : (
        <p onDoubleClick={activateEditMode}>{status || "No status"}</p>
      )}
    </>
  );
};

export default ProfileStatus;
