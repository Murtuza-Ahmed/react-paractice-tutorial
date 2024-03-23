import React from "react";
import { Link } from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/">Portfolio</a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
