import React from "react";
import { getAllSocials } from "./Data/fetchData";

export const About = () => {
  const { github_account, linkedIn_account, twitter_account } = getAllSocials();

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
                I love to work with Reactjs, Django, Javascript, and Python.
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
            {/* <p>I love to work with Reactjs, Django, Javascript, and Python.</p>
            <p>
              Computer Engineering graduate from New Jersey Institute of
              Technology
            </p>
            <p>
              Bo Dan rank in Taekwondo
              <span style={{ fontSize: "50px" }}>&#129355;</span>{" "}
            </p>
            <p></p> */}
            <hr />
            {/* <small>To check out my blogs click here</small> */}
          </div>
        </div>
        <div className="col-12 mb-4">
          <button className="btn btn-outline-dark btn-lg">
            See all projects
          </button>
        </div>
        <div className="col-12 connectIcons">
          <div className="col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={github_account} role="button">
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={twitter_account} role="button">
                  <i className="fa fa-twitter fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={linkedIn_account} role="button">
                  <i className="fa fa-linkedin fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
