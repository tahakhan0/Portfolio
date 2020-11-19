import React from "react";

export const Links = ({ name, linksArray }) => {
  const stack = Array.isArray(linksArray) ? linksArray : false;
  const links = !Array.isArray(linksArray);
  return (
    <ul className="list-inline m-0">
      <li className="list-inline-item">{name}:</li>

      {stack &&
        stack.map((s) => (
          <li key={s} className="list-inline-item">
            <span className="badge p-2 m-1 border">{s}</span>
          </li>
        ))}

      {links && (
        <>
          {linksArray.Frontend && (
            <li className="list-inline-item">
              <a
                className="nav-link p-0"
                target="_blank"
                rel="noreferrer"
                href={linksArray["Frontend"]}
              >
                Frontend |
              </a>
            </li>
          )}
          {linksArray.Backend && (
            <li className="list-inline-item">
              <a
                className="nav-link p-0"
                target="_blank"
                rel="noreferrer"
                href={linksArray["Backend"]}
              >
                Backend |
              </a>
            </li>
          )}
          {linksArray.Demo && (
            <li className="list-inline-item">
              <a
                className="nav-link p-0"
                target="_blank"
                rel="noreferrer"
                href={linksArray["Demo"]}
              >
                Demo
              </a>
            </li>
          )}
        </>
      )}
    </ul>
  );
};
