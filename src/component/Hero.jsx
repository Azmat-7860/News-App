import React, { useContext } from "react";
import { NewsContext } from "../ContextApi/store";
import Loading from "./Loading";
import CardItem from "./CardItems";

const Hero = () => {
  const contextobject = useContext(NewsContext);
  const data = contextobject.isData;

  return (
    <div>
      <div className="container my-2">
        <div className="p-3 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">
            Welcome to <span className="my-h1"> Up 2 Date !!</span>
          </h1>
          <p>
            Stay up to date with the latest news and updates from around the
            world.
          </p>
        </div>
      </div>
      {/* <Loading /> */}
      {data ? <Loading /> : <CardItem />}
    </div>
  );
};

export default Hero;
