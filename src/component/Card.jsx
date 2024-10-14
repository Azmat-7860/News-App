import React from "react";

const Card = ({ newsItem }) => {
  // console.log(newsItem);

  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={newsItem.urlToImage}
        style={{ minHeight: "200px" }}
        class="card-img-top"
        alt="No image available"
      />
      <div class="card-body ">
        <h5 class="card-title">{newsItem.title}</h5>
        <p class="card-text">{newsItem.content}</p>
        <a href={newsItem.url} class="btn btn-outline-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
