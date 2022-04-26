import React from 'react'
import './github.css'
import github from '../../images/github.png'
function Github() {
  return (
    <div className="github_container" id="github">
      
      <div>
        <img src={github} alt="Github icon"/>
      </div>
      <div className="github_text">
        <h1>Github</h1>
      </div>
    </div>
  )
}

export default Github