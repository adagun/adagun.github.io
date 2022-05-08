import React from "react";
import Typed from "react-typed";
import "./home.css";
function Home() {
  return (
    <div className="main-text">
      <h1>Hello</h1>
      <Typed className="typed-text"
        strings={[
          "...",
          "",
          "",
        ]}
        typeSpeed={100}
        backSpeed={100}
        loop
        showCursor={false}
      />
    </div>
  );
}

export default Home;
