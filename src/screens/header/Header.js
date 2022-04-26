import React from 'react'
import Typed from 'react-typed'
import './header.css'
function Header() {
  return (
    <div className ="main-text">
        <h1>Hello</h1>
        <Typed
            strings={[
                'Search for products',
                'Search for categories',
                'Search for brands']}
                typeSpeed={40}
                backSpeed={50}                  
                loop 
    />
    </div>
  )
}

export default Header