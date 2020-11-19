import React from "react";

export const WorkingOn = () => {
  return (
    <div className="container projectsStyle">
      <span className="projectsHeading">What I am working on?</span>
      <hr />
      <div className="row">
        <div className="col-8">
          <ul className="workingOnUlStyle">
            <li>I am learning Typescript to make my life easier.</li>
            <li>Trying to build some apps with Flutter.</li>
            <li>
              Reading blogs on Machine Learning, especially neural networks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
