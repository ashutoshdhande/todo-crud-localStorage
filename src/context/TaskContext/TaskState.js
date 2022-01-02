import React, { createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, CLEAR_CURRENT, DELETE_TASK, SET_CURRENT } from "../types";

export const TaskContext = createContext();

const TaskState = (props) => {
  const initialState = {
    tasks: [
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
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //ADD TASK
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({ type: ADD_TASK, payload: task });
  };

  //DELETE TASK
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  //SET CURRENT
  const setCurrent = (task) => {
    dispatch({ type: SET_CURRENT, payload: task });
  };

  //CLEAR CURRENT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
