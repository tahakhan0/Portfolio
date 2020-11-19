import React from "react";
import { getAllSocials } from "../Data/fetchData";

export const SocialMedia = () => {
  const { github_account, linkedIn_account, twitter_account } = getAllSocials();
  return (
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href={github_account} target="_blank" rel="noreferrer" role="button">
          <i className="fa fa-github fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href={twitter_account}
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fa fa-twitter fa-2x"></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a
          href={linkedIn_account}
          target="_blank"
          rel="noreferrer"
          role="button"
        >
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
      </li>
    </ul>
  );
};
