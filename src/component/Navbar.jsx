import React, { useContext, useRef } from "react";
import { NewsContext } from "../ContextApi/store";

const Navbar = () => {
  const contextObj = useContext(NewsContext);
  const searchContext = contextObj.handleSearch;
  let inputSeach = useRef();

  const onSearch = (e) => {
    e.preventDefault();

    searchContext(inputSeach.current.value);
  };
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Eleventh navbar example"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <h1 className="my-h1"> Up 2 Date !!</h1>
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse" id="navbarsExample09">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Sports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Politics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Health
                </a>
              </li>
            </ul>
            <form className=" d-flex" role="search" onSubmit={onSearch}>
              <input
                class="form-control me-2"
                ref={inputSeach}
                type="search"
                placeholder="Search News"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
