import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const flower = useLoaderData();

  const [title, setTitle] = useState(flower.title);
  const [price, setPrice] = useState(flower.price);
  const [brand, setBrand] = useState(flower.brand);
  const [id, setId] = useState(flower.id);
  const [description, setDescription] = useState(flower.description);
  const [image_url, setImageURL] = useState(flower.image_url);

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };

    await fetch(
      `https://blooming-elegance-server.onrender.com/flowers/${flower._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product updated successfully!");
        setSuccessMessage("Product updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-1/2 bg-red-500 text-white p-4"
              type="submit"
              value="Update product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
