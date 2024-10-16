import React from "react";

const Card = ({ newsItem }) => {
  // console.log(newsItem);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={newsItem.image}
        style={{ minHeight: "200px" }}
        className="card-img-top"
        alt="No image available"
      />
      <div className="card-body ">
        <h5 className="card-title">{newsItem.title}</h5>
        <p className="card-text">{newsItem.content}</p>
        <a href={newsItem.url} className="btn btn-outline-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
