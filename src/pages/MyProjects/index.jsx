import React from "react";
import "./myProjects.scss";
import { useState } from "react";
import Button from "../../components/Button";

const MyProjects = () => {
  const [projects, setProjects] = useState([
    {
      title: "Ecommerce",
      src: "https://sontaraorgano.com/wp-content/uploads/2022/05/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg",
      description: "Ecommerce project for my business",
    },
    {
      title: "One Password",
      src: "https://sontaraorgano.com/wp-content/uploads/2022/05/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg",
      description: "All passwords in one placeAll passwords in one placeAll passwords in one placeAll passwords in one placeAll passwords in one placeAll passwords in one place",
    },
  ]);

  return (
    <div className="projects_page">
      <div className="projects_page--content">
        {projects.map((project) => {
          return (
            <div className="projects_page--content__item">
              <div className="image">
                <img src={project.src} alt="project photo" />
              </div>
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <button type="button">Go to project</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
