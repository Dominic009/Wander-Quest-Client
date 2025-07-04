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
import PageNotFound from "./Components/PageNotFound";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import { apiUrl } from "./utils/api/api";
import EditSpot from "./Pages/EditSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addspot",
        element: (
          <Private>
            <AddSpot />
          </Private>
        ),
      },
      {
        path: "/allspots",
        element: <AllSpots></AllSpots>,
        loader: async () =>
          fetch(apiUrl("/spot")),
      },
      {
        path: "/details/:id",
        element: (
          <Private>
            <Details />
          </Private>
        ),
        loader: async ({ params }) =>
          fetch(
            apiUrl(`/spot/${params.id}`)
          ),
      },
      {
        path: "/mylist",
        element: (
          <Private>
            <MyList />
          </Private>
        ),
        loader: async () =>
          fetch(apiUrl("/spot")),
      },
      {
        path: "/editspot/:id",
        element: (
          <Private>
            <EditSpot />
          </Private>
        ),
        loader: async ({ params }) => fetch(apiUrl(`/spot/${params.id}`))
      },
      {
        path: "/user-profile",
        element: (
          <Private>
            <Profile />
          </Private>
        ),
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
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
