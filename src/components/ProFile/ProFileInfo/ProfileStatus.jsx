import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const disActivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <>
      {editMode ? (
        <input
          autoFocus={true}
          onBlur={disActivateEditMode}
          value={props.status}
        />
      ) : (
        <p onDoubleClick={activateEditMode}>{props.status}</p>
      )}
    </>
  );
};

export default ProfileStatus;
