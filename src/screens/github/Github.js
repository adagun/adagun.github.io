import React from "react";
import "./github.css";
import github from "../../images/github.png";

function Github() {
  return (
    <div className="github_container" id="github">
      <div>
      <a href="https://github.com/adagun">
        <img src={github} alt="Github icon" />
        </a>
      </div>
      <div className="github_text">
        <h1>Github</h1>
        <div >
         
        </div>
      </div>
    </div>
  );
}

export default Github;
