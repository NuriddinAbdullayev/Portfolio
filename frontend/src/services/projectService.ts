import api from "../api/axios";
import type { Project } from "../types/project";

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await api.get("/projects");
  return data;
};

export const getProject = async (id: string): Promise<Project> => {
  const { data } = await api.get(`/projects/${id}`);
  return data;
};

export const createProject = async (project: Omit<Project, "_id">) => {
  const { data } = await api.post("/projects", project);
  return data;
};

export const updateProject = async (
  id: string,
  project: Omit<Project, "_id">
) => {
  const { data } = await api.put(`/projects/${id}`, project);
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await api.delete(`/projects/${id}`);
  return data;
};