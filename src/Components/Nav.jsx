import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";

const Nav = () => {
  const { logOut, user, loading, setLoading } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return (
      <span className="loading loading-bars flex justify-center items-center h-[100vh] w-[5%] mx-auto"></span>
    );
  }

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

  const navLinks = (
    <div className="list-none flex flex-col md:flex-row gap-6 font-semibold">
      <li className="hover:scale-105 hover:drop-shadow-lg transition-all ease-in-out duration-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-t p-2 rounded-lg"
              : "text-gray-500 hover:text-white "
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/allspots"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-t p-2 rounded-lg"
              : "text-gray-500 hover:text-white"
          }
        >
          All Spots
        </NavLink>
      </li>
      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/addspot"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-t p-2 rounded-lg"
              : "text-gray-500 hover:text-white"
          }
        >
          Add Spot
        </NavLink>
      </li>

      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/mylist"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-t p-2 rounded-lg"
              : "text-gray-500 hover:text-white"
          }
        >
          My list
        </NavLink>
      </li>

      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-t p-2 rounded-lg"
              : "text-gray-500 hover:text-white"
          }
        >
          About Us
        </NavLink>
      </li>

      {/* {user ? (
            <>
              <li className="hover:scale-105 hover:drop-shadow-lg">
                <NavLink
                  to="/updateProfile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-[#14213D] p-2 rounded-lg"
                      : "text-gray-500 hover:text-white"
                  }
                >
                  Update Profile
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )} */}
    </div>
  );

  return (
    <div>
      <div className="bg-[#042008] px-5 py-2 drop-shadow-xl ">
        <div className="flex  items-center justify-between">
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

          {/* Routes */}
          <div className="hidden lg:flex">{navLinks}</div>

          {/* Right side */}
          <div className="flex gap-2 items-center justify-center relative">
            {/* if User */}
            <div
              onMouseEnter={() => setIsClicked(true)}
              onMouseLeave={() => setIsClicked(false)}
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
              <div
                className={`absolute bg-black/90 backdrop-blur-3xl px-2 py-3 rounded-md -bottom-12 right-5 transition-all duration-300 ease-in-out transform w-32 flex flex-col justify-center ${
                  isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="flex items-center">
                  {user && (
                    <button
                      onClick={handleLogOut}
                      className="transition-all duration-500 text-white hover:text-red-600 bg-red-600 hover:bg-white flex items-center justify-center gap-1 p-1 rounded-md w-full"
                    >
                      <MdLogout className="font-semibold text-xl" />
                      <span className="font-semibold text-sm">Log Out</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {!user && (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className="hover:bg-green-700 hover:text-white bg-gray-200 px-4 py-2 rounded-full transition-all ease-in-out duration-75 active:scale-95 shadow-lg font-bold text-green-700 flex items-center justify-center gap-2 "
                >
                  <FaRegUserCircle className="text-2xl" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="hover:bg-green-700 hover:text-white bg-gray-200 px-4 py-2 rounded-full transition-all ease-in-out duration-75 active:scale-95 shadow-lg font-bold text-green-700 flex items-center justify-center gap-2"
                >
                  <FiUserPlus className="text-2xl" />
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
