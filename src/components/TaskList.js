import React from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    {
      msg: "Walk the dog",
      id: 1,
    },
    {
      msg: "Feed the cat",
      id: 2,
    },
    {
      msg: "Do Data Structures",
      id: 3,
    },
    {
      msg: "Upper Body Workout",
      id: 4,
    },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task msg={task.msg} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
