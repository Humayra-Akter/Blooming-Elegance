import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/flowers")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-primary font-bold text-center">
        All Produts
      </h1>
      <div className="my-16 grid grid-cols-3 gap-4">
        {products.map((flower) => (
          <SingleProductCardDashboard
            key={flower._id}
            flower={flower}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
