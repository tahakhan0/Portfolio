import React from "react";
import { SocialMedia } from "./reusableComponents/SocialMedia";

export const WorkingOn = ({ workingOnRef }) => {
  return (
    <div className="container projectsStyle" ref={workingOnRef}>
      <span className="projectsHeading">What I'm working on?</span>
      <hr />
      <div className="row">
        <div className="col-12 col-md-8">
          <ul className="workingOnUlStyle">
            <li>I am learning Typescript to make my life easier.</li>
            <li>Trying to build some apps with Flutter.</li>
            <li>
              Reading blogs on Machine Learning, especially neural networks.
            </li>
          </ul>
          <div className="workingOnDivStyle">
            If you would like to talk, please connect with me on my social media
            handles. Also, I am new on twitter, so I will appreciate some
            followers.
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
