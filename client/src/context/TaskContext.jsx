import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  getOneTaskRequest,
  updateTaskRequest,
  toggleTaskStatusRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
    console.log(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getOneTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      await updateTaskRequest(id, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskStatus = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskStatusRequest(id, taskFound.status === 0 ? true : false);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, status: !task.status } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toggleTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
