import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";

const Nav = () => {
  const { logOut, user, setLoading } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Theme handler
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("ligth");
    } else {
      setTheme("coffee");
    }
  };

  // if (loading) {
  //   return (
  //     <span className="loading loading-bars bg-black flex justify-center items-center h-[100vh] w-[5%] mx-auto"></span>
  //   );
  // }

  const handleLogOut = () => {
    Swal.fire({
      title: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#355E3B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate("/login");
            setLoading(true);
          })
          .catch((error) => console.log(error.message));

        Swal.fire({
          title: "See you soon!",
          icon: "success",
        });
      }
    });
  };

  const navRoutes = [
    { route: "/", name: "Home" },
    { route: "/allspots", name: "All Spots" },
    { route: "/aboutus", name: "About Us" },
  ];

  const navLinks = (
    <div className="list-none flex flex-col md:flex-row gap-6 font-semibold">
      {navRoutes.map((route, idx) => (
        <div
          key={idx}
          className="transition-all ease-in-out duration-300 text-gray-400 hover:text-white flex items-center justify-center"
        >
          <NavLink
            to={route.route}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-800 px-2 py-1 rounded-md flex items-center justify-center"
                : ""
            }
          >
            {route.name}
          </NavLink>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="bg-[#042008] px-2 lg:px-5 py-2 drop-shadow-xl fixed top-0 right-0 left-0 z-50">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
          {/* <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-[300px]"
            >
              {navLinks}
            </ul>
          </div> */}
          <Link to="/home">
            <img
              src={logo}
              className="animate__animated animate__slideInLeft w-36 md:w-44 lg:w-52"
            />
          </Link>

          {/* Middle Routes */}
          <div className="hidden lg:flex justify-center">{navLinks}</div>

          {/* Right side */}
          <div className="flex gap-2 items-center justify-end relative">
            {/* Theme-Trigger */}
            <div className="flex justify-center items-center mr-3">
              <div className="flex items-center justify-center">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    onChange={handleToggle}
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-orange-400 w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-white w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>

            {/* if User */}
            <div
              onMouseEnter={() => setIsClicked(true)}
              onMouseLeave={() => setIsClicked(false)}
              className="flex items-center"
            >
              {/* Image */}
              {user && (
                <button className="hover:ring-4 ring-blue-400 rounded-full">
                  {user?.photoURL && (
                    <img
                      src={
                        user.photoURL ||
                        "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0"
                      }
                      className="rounded-full w-12 h-12"
                    />
                  )}
                </button>
              )}

              {/* Logout button */}
              {user && (
                <div
                  className={`absolute bg-black/90 backdrop-blur-3xl px-2 py-3 rounded-md -bottom-36 right-5 transition-all duration-300 ease-in-out transform flex flex-col w-40 justify-center ${
                    isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  <div className="flex items-center">
                    {user && (
                      <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col py-3 border-b border-b-gray-500 gap-2">
                          <Link
                            to={"/mylist"}
                            className="text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-semibold rounded-md px-2 transition-all ease-in-out duration-500"
                          >
                            My List
                          </Link>
                          <Link
                            to={"/addspot"}
                            className="text-gray-300 hover:bg-gray-300 hover:text-gray-900 font-semibold rounded-md px-2 transition-all ease-in-out duration-500"
                          >
                            Add Spot
                          </Link>
                        </div>
                        <button
                          onClick={handleLogOut}
                          className="transition-all duration-500 text-white hover:text-red-600 bg-red-600 hover:bg-white flex items-center justify-center gap-1 p-1 rounded-md w-full"
                        >
                          <MdLogout className="font-semibold text-xl" />
                          <span className="font-semibold text-sm">Log Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* If not user */}
            {!user && (
              <div
                onMouseEnter={() => setIsClicked(true)}
                onMouseLeave={() => setIsClicked(false)}
                className="flex items-center"
              >
                <button className="hover:ring-4 ring-blue-400 rounded-full relative">
                  <img
                    src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                    className="rounded-full w-10 h-10 lg:w-12 lg:h-12"
                  />
                </button>

                {/* User button */}
                <div
                  className={`absolute bg-white/90 backdrop-blur-3xl px-2 py-3 rounded-md -bottom-28 right-5 transition-all duration-300 ease-in-out transform flex flex-col justify-center gap-2 ${
                    isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                >
                  <Link
                    to="/login"
                    className="flex gap-2 items-center justify-center bg-gray-300 px-3 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition-all ease-in-out duration-300"
                  >
                    <FaRegUserCircle className="text-2xl" />
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="flex gap-2 items-center justify-center bg-gray-300 px-3 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition-all ease-in-out duration-300"
                  >
                    <FiUserPlus className="text-2xl" />
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
