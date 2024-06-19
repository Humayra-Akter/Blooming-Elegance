import { useState } from "react";

const SearchByPrice = ({ onSearch }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    if (minPrice && maxPrice) {
      onSearch(minPrice, maxPrice);
    } else {
      alert("Please enter both minimum and maximum prices");
    }
  };

  return (
    <div className="search-container flex justify-center mb-4">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="input input-bordered mx-2"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="input input-bordered mx-2"
      />
      <button onClick={handleSearch} className="btn btn-primary mx-2">
        Search
      </button>
    </div>
  );
};

export default SearchByPrice;
