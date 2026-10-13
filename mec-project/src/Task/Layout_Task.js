import React from "react";
import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>

        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/skills">Skills  </Link>
          <Link to="/projects">Projects  </Link>
          <Link to="/contact">Contact  </Link>
          <Link to="/login">Login </Link>
          <Link to="/Accordian">Accordian  </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      
    </div>
  );
}

export default Layout;