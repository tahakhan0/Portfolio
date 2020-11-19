import React from "react";
import { SocialMedia } from "./reusableComponents/SocialMedia";

export const About = ({ handleScroll, projectsRef }) => {
  return (
    <div className="container aboutStyle">
      <div className="row">
        <div className="col-12">
          <span className="aboutStyleHeading">Hi, I am Taha.</span>
        </div>
        <div className="col-12">
          <div className="aboutStyleContent">
            <ul>
              <li>
                I love to work with Reactjs, Django, Javascript, Dart, and
                Python.
              </li>
              <li>
                Computer Engineering graduate from New Jersey Institute of
                Technology.
              </li>
              <li>
                Bo Dan rank in Taekwondo
                <span style={{ fontSize: "30px" }}>&#129355;</span>{" "}
              </li>
              <li>
                Avid Swimmer <span style={{ fontSize: "30px" }}>&#127946;</span>{" "}
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col-12 mb-4">
          <button
            className="btn btn-warning btn-lg"
            onClick={() => handleScroll(projectsRef)}
          >
            See projects
          </button>
        </div>
        <div className="col-12 connectIcons">
          <div className="col">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
