import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import type { Project } from "../types/project";

const getProject = async (id: string): Promise<Project> => {
  const { data } = await api.get(`/projects/${id}`);

  return data;
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => getProject(id),
    enabled: !!id,
  });
};