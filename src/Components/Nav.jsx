import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Logo.png'
import { FaRegUserCircle } from "react-icons/fa";


const Nav = () => {

    const user = null;

    const navLinks = (
        <div className="list-none flex flex-col md:flex-row gap-6 font-lobster font-semibold">
          <li className="hover:scale-105 hover:drop-shadow-lg ">
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
                  ? "text-white bg-[#14213D] p-2 rounded-lg"
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
                  ? "text-white bg-[#14213D] p-2 rounded-lg"
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
                  ? "text-white bg-[#14213D] p-2 rounded-lg"
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
                  ? "text-white bg-[#14213D] p-2 rounded-lg"
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
      <div className="bg-gradient-to-l from-[#088a1c] to-black to-20% backdrop-blur-xl px-5 py-2 drop-shadow-xl ">
        <div className="navbar gap-5 justify-between">
          <div className="max-w-72">
            <div className="dropdown z-20">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            </div>
            <Link to="/home">
              <img
              src={logo}
                className="animate__animated animate__slideInLeft"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">{navLinks}</div>
          <div className="justify-end gap-3 md:scale-100 md:w-[20%]">
            <div className="">
              {user ? (
                <div>
                  <Link to="/userprofile">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        title={user.displayName}
                        className="rounded-full scale-[50%]"
                      />
                    ) : (
                      <p className="text-lg font-bold mr-24 w-full border rounded-lg bg-current flex items-center justify-center">
                        <span className="text-white">{user.displayName}</span>
                      </p>
                    )}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className=" w-[40%]">
              {user ? (
                <button
                  className="hover:bg-green-700 hover:text-white bg-gray-200 px-4 py-2 rounded-full transition-all ease-linear active:scale-95 shadow-lg font-bold text-green-700 flex items-center justify-center gap-2"
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="hover:bg-green-700 hover:text-white bg-gray-200 px-4 py-2 rounded-full transition-all ease-in-out duration-75 active:scale-95 shadow-lg font-bold text-green-700 flex items-center justify-center gap-2 "
                >
                    <FaRegUserCircle className="text-2xl"/>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
