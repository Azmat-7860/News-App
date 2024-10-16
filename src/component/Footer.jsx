import React, { useContext } from "react";
import { NewsContext } from "../ContextApi/store";

const Footer = () => {
  const contextObj = useContext(NewsContext);
  const searchContext = contextObj.handleSearch;
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              className="nav-link px-2 text-body-secondary"
            >
              Entertainment
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              className="nav-link px-2 text-body-secondary"
            >
              Science
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              className="nav-link px-2 text-body-secondary"
            >
              States
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              className="nav-link px-2 text-body-secondary"
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              className="nav-link px-2 text-body-secondary"
            >
              Movies
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
