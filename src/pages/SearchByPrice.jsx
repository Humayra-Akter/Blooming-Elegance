import { useState } from "react";

const SearchByPrice = ({ onSearch }) => {
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    if (maxPrice) {
      onSearch(maxPrice);
    } else {
      alert("Please enter a maximum price");
    }
  };

  return (
    <div className="search-container flex justify-center mb-4">
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
