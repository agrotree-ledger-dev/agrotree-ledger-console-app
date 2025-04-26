import { getProjects } from "@/components/console/project/_actions/getProjects.action";
import { ProjectItemType } from "@/types/Project.type";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  return useQuery<ProjectItemType[]>({
    queryKey: ["get-projects"],
    queryFn: async () => {
      const response = await getProjects();
      return response;
    },
  });
};

export default useProjects;
