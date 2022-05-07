import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./projects.css";
import projectsData from "../../helpers/projectsData";



function Projects() {
  return (
    <div>
      <div className="project-text">
     
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
              
            <a href={project.link}>
            <div>
            <button className="title-text">{project.title} </button>
            </div>
         
            <img src={project.image} alt={project.title} />
            </a>
          <p class="legend">{project.summary}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
