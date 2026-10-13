import React from "react";
import { Link } from "react-router-dom";
function Home_Task() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="hello">
          Hello, I'm
        </p>
        <h1>OM PRAKASH R</h1>
        <h2>
          Computer Science Engineering Student
        </h2>
        <p>
          I am passionate about Web Development,
          JavaScript, React and emerging technologies.
        </p>
        <div className="buttons">
          <Link to="/about">About Me </Link>
          <Link to="/contact"> Contact Me</Link>

        </div>
      </div>
      <div className="profile"> 👨‍💻
      </div>

    </section>
  );
}

export default Home_Task;