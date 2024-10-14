import React from "react";

const Hero = () => {
  return (
    <div>
      <div class="container my-2">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
          <h1 class="text-body-emphasis">Welcome to Up 2 Date !!</h1>
          <div className="My-btn d-flex gap-2 justify-content-between">
            <button
              class="d-inline-flex align-items-center btn btn-outline-primary btn-lg rounded-pill"
              type="button"
            >
              Sports
            </button>
            <button
              class="d-inline-flex align-items-center btn btn-outline-primary btn-lg rounded-pill"
              type="button"
            >
              Politics
            </button>
            <button
              class="d-inline-flex align-items-center btn btn-outline-primary btn-lg rounded-pill"
              type="button"
            >
              Health
            </button>
            <button
              class="d-inline-flex align-items-center btn btn-outline-primary btn-lg rounded-pill"
              type="button"
            >
              Fitness
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
