import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Root";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddSpot from "./Pages/AddSpot";
import AuthProvider from "./Context/AuthProvider";
import AllSpots from "./Pages/AllSpots";
import Private from "./Private Route/Private";
import MyList from "./Pages/MyList";
import About from "./Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addspot",
        element: <Private><AddSpot/></Private>,
      },
      {
        path: '/allspots',
        element: <AllSpots></AllSpots>
      },
      {
        path: '/mylist',
        element: <Private><MyList/></Private>
      },
      {
        path: '/aboutus',
        element: <About></About>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
