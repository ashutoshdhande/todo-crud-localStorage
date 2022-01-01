import React from "react";

const Task = ({ msg }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-2 bg-dark p-3 text-white">
      <article>{msg}</article>
      <div className="button-container">
        <button className="mx-1 px-2 py-1 btn btn-warning">Edit</button>
        <button className="mx-1 px-2 py-1 btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Task;
