import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./projects.css";
import projectsData from "../../helpers/projectsData";


function Projects() {
  return (
    <div>
      <div className="project-text">
        <h1>Project Placeholders</h1>
      </div>
      <Carousel
        className="main-slide"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        {projectsData.map((project, index) => (
          <div>
            <img src={project.image} alt={project.title} />

            <a href={project.link}>
              <p className="legend">{project.summary}</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
