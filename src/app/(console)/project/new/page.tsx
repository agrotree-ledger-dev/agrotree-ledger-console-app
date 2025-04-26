import ProjectForm from "@/components/console/project/ProjectForm";
import HeaderPage from "@/components/layout/HeaderPage";
import React from "react";

const NewProjectPage = () => {
  return (
    <div>
      <HeaderPage
        title="Create new project"
        description="Create a new project to start building your ecosystem."
      />
      <div className="py-5">
        <ProjectForm />
      </div>
    </div>
  );
};

export default NewProjectPage;
