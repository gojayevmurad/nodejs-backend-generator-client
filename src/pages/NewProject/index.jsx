import React, { useState } from "react";

import "./newProject.scss";
import Button from "../../components/Button";

const NewProject = () => {
  const [newProjectData, setNewProjectData] = useState({
    title: "",
    description: "",
  });

  return (
    <div className="new_project_page">
      <div className="new_project_page--content">
        <form>
          <h3>Create new project</h3>
          <label>
            Title <span className="clr-red">*</span>
            <input type="text" />
          </label>
          <label>
            Description <span className="clr-red">*</span>
            <input type="text" />
          </label>
          <label>
            Image <span className="clr-red">*</span>
            <input type="file" />
          </label>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default NewProject;
