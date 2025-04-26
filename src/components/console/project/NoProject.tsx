import React from "react";
import { getProjects } from "./_actions/getProjects.action";
import { FolderKanban } from "lucide-react";
import Link from "next/link";

const NoProject = async () => {
  const projects = await getProjects();
  if (projects && projects.length > 0) {
    return null;
  }
  return (
    <div className="flex flex-col gap-5 justify-center items-center border border-lightGreen border-dashed text-sm bg-lightGreen/10 cursor-pointer hover:bg-lightGreen/30 transition-colors duration-500 rounded-lg w-full h-40 md:h-80">
      <FolderKanban className="size-[50px] text-muted-foreground animate-bounce" />
      <p className="text-pretty">
        You don&apos;t have any projects yet. Click{" "}
        <Link href={"/console/project/new"} className="text-green-500">
          here
        </Link>{" "}
        to create one.
      </p>
    </div>
  );
};

export default NoProject;
