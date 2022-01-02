import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext/TaskState";

const InputField = () => {
  const taskContext = useContext(TaskContext);
  const [task, setTask] = useState({ msg: "" });

  const { msg } = task;

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    taskContext.addTask(task);
    setTask({ msg: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          name="msg"
          value={msg}
          onChange={onChange}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-success">
            ADD TASK
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
