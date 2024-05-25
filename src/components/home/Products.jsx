import React from "react";
import SingleProduct from "./SingleProduct";

const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-6 px-6 justify-center items-center ">
        {data.slice(0, 3).map((flower) => (
          <SingleProduct key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default Products;
