import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext/TaskState";

const InputField = () => {
  const taskContext = useContext(TaskContext);
  const { addTask, current, updateTask, clearCurrent } = taskContext;
  const [task, setTask] = useState({ msg: "" });

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({ msg: "" });
    }
  }, [taskContext, current]);

  const { msg } = task;

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTask(task);
    } else {
      updateTask(task);
    }
    clearCurrent();
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
            {current === null ? "ADD" : "UPDATE"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputField;
