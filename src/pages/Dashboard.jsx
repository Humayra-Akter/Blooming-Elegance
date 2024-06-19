import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();
  const [salesData, setSalesData] = useState([
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 2000 },
    { month: "Apr", sales: 2780 },
    { month: "May", sales: 1890 },
    { month: "Jun", sales: 2390 },
    { month: "Jul", sales: 3490 },
    { month: "Aug", sales: 2000 },
    { month: "Sep", sales: 2780 },
    { month: "Oct", sales: 1890 },
    { month: "Nov", sales: 2390 },
    { month: "Dec", sales: 3490 },
  ]);

  useEffect(() => {
    fetch(`https://blooming-elegance-server.onrender.com/user/${user?.email}`)
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

      {/* Sales Graph */}
      <div className="mb-6 p-4 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Sales Data</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6 p-4 bg-white rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Sales Bar Chart</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
