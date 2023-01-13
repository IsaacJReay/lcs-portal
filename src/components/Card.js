import React from "react";

const Card = ({ description, title, image }) => {
  return (
    <div>
      <div className="bg-card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div
        //   className="cart-title-bg"
        //   style={{
        //     backgroundImage: `url(${image})`,
        //   }}
        >
          <div className="card-title">
            <h1>{title}</h1>
            <h4>{description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
