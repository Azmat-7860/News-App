import React, { useContext } from "react";
import { NewsContext } from "../ContextApi/store";

const Footer = () => {
  const contextObj = useContext(NewsContext);
  const searchContext = contextObj.handleSearch;
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              class="nav-link px-2 text-body-secondary"
            >
              Entertainment
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              class="nav-link px-2 text-body-secondary"
            >
              Science
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              class="nav-link px-2 text-body-secondary"
            >
              States
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              class="nav-link px-2 text-body-secondary"
            >
              Education
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              onClick={(e) => searchContext(e.target.textContent)}
              class="nav-link px-2 text-body-secondary"
            >
              Movies
            </a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
