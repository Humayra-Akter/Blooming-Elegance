import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import SearchByPrice from "./SearchByPrice";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:5000/flowers");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleSearchByPrice = (maxPrice) => {
    const maxPriceNum = parseFloat(maxPrice);
    if (!isNaN(maxPriceNum)) {
      const filtered = products.filter(
        (product) => parseFloat(product.price) <= maxPriceNum
      );
      setFilteredProducts(filtered);
    }
  };

  const handleDeleteProduct = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setFilteredProducts(
        filteredProducts.filter((product) => product._id !== _id)
      );
      setProducts(products.filter((product) => product._id !== _id));
    }
  };

  return (
    <div>
      <h1 className="text-5xl mb-7 text-primary font-bold text-center">
        All Products
      </h1>
      <SearchByPrice onSearch={handleSearchByPrice} />
      <div className="my-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((flower) => (
            <SingleProductCardDashboard
              key={flower._id}
              flower={flower}
              onDelete={handleDeleteProduct}
            />
          ))
        ) : (
          <div className="text-center text-2xl text-gray-500 w-full col-span-full">
            No products found within the specified price range.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
