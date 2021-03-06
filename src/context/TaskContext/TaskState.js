import React, { createContext, useReducer, useEffect } from "react";
import TaskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  CLEAR_CURRENT,
  DELETE_TASK,
  SET_CURRENT,
  UPDATE_TASK,
} from "../types";

export const TaskContext = createContext();

const TaskState = (props) => {
  const initialState = {
    tasks: [],
    current: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState, () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

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

  //UPDATE TASK
  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        addTask,
        updateTask,
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
