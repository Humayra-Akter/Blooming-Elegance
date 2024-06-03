import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ flower }) => {
  const { _id, title, brand, price, description, image_url } = flower;
  return (
    <div className="card w-96 mb-20 rounded-xl shadow-xl">
      <figure>
        <img className="h-72 w-80" src={image_url} alt="flower" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions mt-3 justify-end">
          <button className="btn w-1/3 font-bold text-sm border-2 capitalize text-black border-primary bg-secondary">
            {/* <Link to={`/products/${id}`}>See details</Link>{" "} */}
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
