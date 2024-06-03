import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div className="p-6 bg-pink-50 flex-grow">
      {/* Welcome Message */}
      <div className="mb-6 p-4 bg-white rounded shadow-md flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold">Welcome {userInfo?.name}</h2>
          <h2 className="my-2 text-gray-600 font-bold">{userInfo?.email}</h2>
          <h2 className=" text-gray-600 font-bold">Age: {userInfo?.age}</h2>
          <h2 className="my-2 text-gray-600 font-bold">
            MobileNumber: {userInfo?.mobileNumber}
          </h2>
          <p>Here you can manage your products, orders, customers, and more.</p>
        </div>
        <div>
          <div className="absolute top-40 right-36">
            <img
              className="w-12 rounded-full border-2 border-black"
              src={user?.photoURL || "/public/placeholder.jpg"}
            />
          </div>
          <Link
            to={`/dashboard/profile/edit/${userInfo?._id}`}
            className="btn bg-red-500 text-white"
          >
            Edit profile
          </Link>
        </div>
      </div>

      {/* Product Overview */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Product Overview</h3>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product?._id} className="bg-white p-4 rounded shadow-md">
              <img
                src={product?.image_url}
                alt={product?.title}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h4 className="text-md font-bold mb-2">{product?.title}</h4>
              <p className="text-sm text-gray-600">{product?.description}</p>
              <p className="text-lg font-semibold mt-4">${product?.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <div className="bg-white p-4 rounded shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2 border-b">Order ID</th>
                <th className="pb-2 border-b">Customer</th>
                <th className="pb-2 border-b">Total</th>
                <th className="pb-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 border-b">{order.id}</td>
                  <td className="py-2 border-b">{order.customer}</td>
                  <td className="py-2 border-b">${order.total}</td>
                  <td className="py-2 border-b">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: "1",
    title: "Red Roses Bouquet",
    description:
      "A classic bouquet of fresh red roses, perfect for expressing love and admiration.",
    price: "50",
    image_url:
      "https://images.unsplash.com/photo-1431263154979-0982327fccbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Sunflower Delight",
    description:
      "Bright and cheerful sunflowers arranged in a beautiful bouquet, ideal for spreading joy.",
    price: "35",
    image_url:
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Orchid Elegance",
    description:
      "Elegant and exotic orchids that add a touch of sophistication to any setting.",
    price: "75",
    image_url:
      "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const orders = [
  {
    id: "001",
    customer: "Alice Johnson",
    total: "150",
    status: "Delivered",
  },
  {
    id: "002",
    customer: "Bob Smith",
    total: "60",
    status: "Processing",
  },
  {
    id: "003",
    customer: "Charlie Brown",
    total: "95",
    status: "Shipped",
  },
];

export default Dashboard;
