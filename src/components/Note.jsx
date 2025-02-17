import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = function (props) {
  const handleClick = function () {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
