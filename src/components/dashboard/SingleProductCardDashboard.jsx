import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SingleProductCardDashboard = ({ flower, onDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, price, description, image_url } = flower;

  const handleDelete = async () => {
    await fetch(
      `https://blooming-elegance-server.onrender.com/flowers/${_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product deleted");
        onDelete(_id);
      });
  };

  return (
    <div className="card flex-row mb-6 bg-pink-50 border-2 shadow-xl">
      <figure>
        <img className="w-72 h-44 rounded m-10" src={image_url} alt="flowers" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-pink-700 font-semibold">Brand: {brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn bg-indigo-500 w-1/4 text-white">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn w-1/4 bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn bg-red-500 text-white w-1/4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
