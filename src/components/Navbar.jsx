import React from "react";

export const Navbar = () => {
  return (
    <div className="navbarStyle">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#" role="button">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" role="button">
            What I'm working on?
          </a>
        </li>
      </ul>
    </div>
  );
};
