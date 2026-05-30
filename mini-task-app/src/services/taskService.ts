import { api } from "./api";

export const getTasks = async () => {

  const response = await api.get("/tasks");

  return response.data;

};

export const createTask = async (

  title: string,
  priority: string

) => {

  const response = await api.post("/tasks", {

    title,
    priority,

  });

  return response.data;

};

export const deleteTaskApi = async (

  id: number

) => {

  const response = await api.delete(`/tasks/${id}`);

  return response.data;

};

export const updateTaskApi = async (

  id: number,
  completed: boolean

) => {

  const response = await api.patch(

    `/tasks/${id}`,

    {
      completed,
    }

  );

  return response.data;

};