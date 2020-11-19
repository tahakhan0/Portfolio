import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid footerStyle">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            Feel free to use this template to make your own portfolio.
          </div>
          <div className="col-12 d-flex justify-content-center">
            It is built using Reactjs and Bootstrap.
          </div>
          <div className="col-12 d-flex justify-content-center">
            <a
              href="https://github.com/tahakhan0/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="ml-1"
            >
              Click here for github repo.
            </a>
          </div>
          <div className="col-12 d-flex justify-content-center">
            I will appreciate if you can attribute my work.
          </div>
        </div>
      </div>
    </div>
  );
};
