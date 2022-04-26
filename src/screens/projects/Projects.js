import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './projects.css'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'


function Projects() {



  return (
<div>
    <div className='project-text'>
        <h1>Projects</h1 >
    </div>
    <Carousel 
    className="main-slide" 
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    infiniteLoop={true}

     >
        
    <div>
        <img src={image1} alt="Mouse"/>
        <p className="legend">Mouse</p>
    </div>
    <div>
    <img src={image2} alt="Koala" />
        <p className="legend">Koala</p>
    </div>
    <div>
    <img src={image3} alt="Cat" />
        <p className="legend">Cat</p>
    </div>
    <div>
    <img src={image4} alt="Squirrel" />
        <p className="legend">Squirrel</p>
    </div>
</Carousel>
    </div>
);
}




export default Projects