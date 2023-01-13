import React from "react";

const Card = ({ description, title, image }) => {
  return (
    <div className="bg-card">
      <div className="card-glass">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div>
          <div className="card-title">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
