import React from "react";
import { Links } from "./reusableComponents/Links";
import * as images from "./Data/images/images";

export const Tiles = ({ cardData }) => {
  const { id, title, content, stack, links, postedDate } = cardData;
  return (
    <div className="card mt-4">
      <div className="card-header card-title titleStyle bg-transparent">
        {title}
      </div>
      <div className="card-body">
        <p className="card-text contentStyle">{content}</p>
        {images[`image${id}`] && (
          <div className="imageContainer">
            <div className="pt-2 d-flex justify-content-center">
              {images[`image${id}`]}
            </div>
          </div>
        )}

        <div className="card-text">
          <div className="row">
            <div className="col-12 mb-4">
              <Links name="Stack" linksArray={stack} />
            </div>
            <div className="col-12">
              <Links name="Links" linksArray={links} />
            </div>
          </div>
        </div>

        <div className="card-text">
          <hr />
          <small className="text-muted">Last updated: {postedDate}</small>
        </div>
      </div>
    </div>
  );
};
