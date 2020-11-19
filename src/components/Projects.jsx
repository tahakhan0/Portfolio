import React, { useState, useEffect } from "react";
import { Tiles } from "./Tiles";
import callGetAllData from "./Data/data";

export default function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(callGetAllData);
  }, []);
  return (
    <div className="container projectsStyle">
      <span className="projectsHeading">Projects</span>
      <hr />
      <div className="row d-flex justify-content-center">
        {data.map((d) => (
          <div key={d.id} className="col-md-10 col-lg-10 mb-4">
            <Tiles cardData={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
