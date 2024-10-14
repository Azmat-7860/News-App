import React, { useContext } from "react";
import { NewsContext } from "../ContextApi/store";
import Card from "./Card";

const CardItems = () => {
  const cotextObj = useContext(NewsContext);
  const { news } = cotextObj;
  // console.log(news);

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-2">
      {news.map((news, index) => (
        <Card key={index} newsItem={news} />
      ))}
    </div>
  );
};

export default CardItems;
