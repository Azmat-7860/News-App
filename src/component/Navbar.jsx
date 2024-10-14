import React, { useContext, useRef } from "react";
import { NewsContext } from "../ContextApi/store";

const Navbar = () => {
  const contextObj = useContext(NewsContext);
  const searchContext = contextObj.handleSearch;
  let inputSeachRef = useRef();

  const onSearch = (e) => {
    e.preventDefault();
    const inputSearch = inputSeachRef.current.value;
    if (inputSearch) {
      searchContext(inputSearch);
    }
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
                <a
                  class="nav-link active"
                  onClick={(e) => searchContext(e.target.textContent)}
                  aria-current="page"
                  href="#"
                >
                  Sports
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onClick={(e) => searchContext(e.target.textContent)}
                  href="#"
                >
                  Politics
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onClick={(e) => searchContext(e.target.textContent)}
                >
                  Health
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onClick={(e) => searchContext(e.target.textContent)}
                >
                  Technology
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  onClick={(e) => searchContext(e.target.textContent)}
                >
                  Business
                </a>
              </li>
            </ul>
            <form className=" d-flex" role="search" onSubmit={onSearch}>
              <input
                class="form-control me-2"
                ref={inputSeachRef}
                type="search"
                placeholder="Search News"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary" type="submit">
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
