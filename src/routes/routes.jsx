import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import AllProducts from "../pages/AllProducts";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://blooming-elegance-server.onrender.com/flowers"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://blooming-elegance-server.onrender.com/flowers/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://blooming-elegance-server.onrender.com/flowers"),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://blooming-elegance-server.onrender.com/user/get/${params.id}`
          ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://blooming-elegance-server.onrender.com/flowers/${params.id}`
          ),
      },
    ],
  },
]);
