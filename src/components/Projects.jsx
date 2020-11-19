import React, { useState, useEffect } from "react";
import { Tiles } from "./Tiles";
import callGetAllData from "./Data/data";

export default function Projects({ projectsRef }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(callGetAllData);
  }, []);
  return (
    <div className="container projectsStyle" ref={projectsRef}>
      <span className="projectsHeading">Projects</span>
      <hr />
      <div className="row d-flex justify-content-center">
        {data.map((d) => (
          <div
            key={d.id}
            className="col-md-10 col-lg-10"
            style={{ marginBottom: "4rem" }}
          >
            <Tiles cardData={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
