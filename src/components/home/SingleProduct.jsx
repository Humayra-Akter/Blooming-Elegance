import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ flower }) => {
  const { id, title, brand, price, description, image_url } = flower;
  return (
    <div className="card w-96 rounded-xl shadow-xl">
      <figure>
        <img className="h-72 w-80" src={image_url} alt="flower" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
