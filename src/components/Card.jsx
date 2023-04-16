import React from "react";

const Card = ({ product }) => {
  const { _id, title, des, image } = product;
  return (
    <div className="card card-compact mx-auto w-full bg-base-100 shadow-xl">
      <figure className="h-80">
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{des.slice(0, 34)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
