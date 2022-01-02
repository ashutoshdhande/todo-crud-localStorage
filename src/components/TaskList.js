import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext/TaskState";
import Task from "./Task";

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tasks } = taskContext;
  return (
    <div>
      {tasks.map((task) => (
        <Task msg={task.msg} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
