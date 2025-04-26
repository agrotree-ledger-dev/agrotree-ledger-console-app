"use client";
import { ProjectItemType } from "@/types/Project.type";
import React, { PropsWithChildren, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const ConsoleContext = React.createContext<{
  selectedProject: ProjectItemType | undefined;
  setSelectedProject: (project: ProjectItemType) => void;
}>({
  selectedProject: undefined,
  setSelectedProject: () => {},
});

const ConsoleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useLocalStorage<
    ProjectItemType | undefined
  >("project", undefined);

  // const { session } = useAuthProvider();

  // useEffect(() => {
  //   console.log("session", session);
  // }, [session]);

  const handleSwitchProject = useCallback(
    (project: ProjectItemType) => {
      setSelectedProject(project);
      toast.info("Switched to project " + project?.name, {});
    },
    [setSelectedProject]
  );

  return (
    <ConsoleContext.Provider
      value={{
        selectedProject,
        setSelectedProject: handleSwitchProject,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export default ConsoleProvider;

export const useConsoleContext = () => React.useContext(ConsoleContext);

export const DashboardProviderWithNoSSR = dynamic(
  () => import("@/components/providers/ConsoleProvider"),
  {
    ssr: false,
  }
);
