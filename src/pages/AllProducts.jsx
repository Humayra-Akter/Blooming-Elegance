// import { useEffect, useState } from "react";
// import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [flowers, setFlowers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/flowers")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const handleDeleteProduct = (_id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this product?"
//     );
//     if (confirmDelete) {
//       setProducts(products.filter((product) => product._id !== id));
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-5xl text-primary font-bold text-center">
//         All Products
//       </h1>
//       <div className="my-16">
//         {products.map((flower) => (
//           <SingleProductCardDashboard
//             key={flower._id}
//             flower={flower}
//             onDelete={handleDeleteProduct}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;
import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";
import SearchByPrice from "./SearchByPrice";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:5000/flowers");
    const data = await response.json();
    setProducts(data);
  };

  const handleSearchByPrice = async (minPrice, maxPrice) => {
    const response = await fetch(
      `http://localhost:5000/flowers/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    if (response.ok) {
      const data = await response.json();
      setProducts(data);
    } else {
      console.error("Failed to fetch products by price range");
    }
  };

  const handleDeleteProduct = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      setProducts(products.filter((product) => product._id !== _id));
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-primary font-bold text-center">
        All Products
      </h1>
      <SearchByPrice onSearch={handleSearchByPrice} />
      <div className="my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
