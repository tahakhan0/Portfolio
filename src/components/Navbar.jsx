import React from "react";

export const Navbar = ({ handleScroll, projectsRef, workingOnRef }) => {
  return (
    <div className="navbarStyle">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link"
            role="button"
            onClick={() => handleScroll(projectsRef)}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => handleScroll(workingOnRef)}
            role="button"
          >
            What I'm working on?
          </a>
        </li>
      </ul>
    </div>
  );
};
