import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-secondary min-h-screen p-12">
        <ul className=" items-center">
          <li className="text-primary font-bold text-xl p-4 text w-full">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className="text-primary font-bold text-xl p-4 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="text-primary font-bold text-xl p-4 text w-full">
            <Link to={"add-products"}>Add Product</Link>
          </li>
          <li className="text-primary font-bold text-xl p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
