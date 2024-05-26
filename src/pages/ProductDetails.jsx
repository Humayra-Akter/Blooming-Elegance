import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const flower = useLoaderData();

  const { brand, description, image_url, price, title } = flower;

  return (
    <div className="mx-40">
      <h1 className="text-5xl text-center font-bold">{title}</h1>

      <div className="flex gap-20 my-20">
        <div>
          <img className="h-96 mt-12 rounded" src={image_url} alt="product image" />
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold">{price} $$</h3>
          <h3 className="text-xl font-semibold">{brand}</h3>
          <p className="text-lg font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
