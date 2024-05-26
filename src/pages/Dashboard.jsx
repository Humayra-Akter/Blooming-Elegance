import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h1 className="p-10 text-2xl font-bold text-pink-700">Dashboard</h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gradient-to-b from-accent to-secondary text-sm font-bold text-pink-700">
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
