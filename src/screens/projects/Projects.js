import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./projects.css";
import projectsData from "../../helpers/projectsData";

function Projects() {
  return (
    <div>
      <div className="project-text">
        <h1>Projects</h1>
        <h1>     
        
       
       </h1>
      </div>
      <Carousel
        className="main-slide"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={projectsData[0].image} alt={projectsData[0].title} />
          <p className="legend">{projectsData[0].summary}</p>
        </div>
        <div>
          <img src={projectsData[1].image} alt={projectsData[1].title} />
          <p className="legend">{projectsData[1].summary}</p>
        </div>
        <div>
          <img src={projectsData[2].image} alt={projectsData[2].title} />
          <p className="legend">{projectsData[2].summary}</p>
        </div>
        <div>
          <img src={projectsData[3].image} alt={projectsData[3].title} />
          <p className="legend">{projectsData[3].summary}</p>
        </div>
    
      </Carousel>
    </div>
  );
}

export default Projects;
