import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { MenuIcon } from "lucide-react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { HiOutlineLocationMarker, HiLocationMarker } from "react-icons/hi";
import {
  IoMdInformationCircleOutline as About,
  IoMdInformationCircle as AboutFilled,
} from "react-icons/io";
import RouteLoader from "./loader/RouteLoader";

const navRoutes = [
  {
    route: "/",
    name: "Home",
    icon: <GoHome size={28} />,
    fillIcon: <GoHomeFill size={30} />,
  },
  {
    route: "/allspots",
    name: "Locations",
    icon: <HiOutlineLocationMarker size={25} />,
    fillIcon: <HiLocationMarker size={30} />,
  },
  {
    route: "/aboutus",
    name: "About",
    icon: <About size={28} />,
    fillIcon: <AboutFilled size={30} />,
  },
];

const NavLinks = () => (
  <ul className="hidden md:flex items-center justify-evenly text-sm font-medium">
    {navRoutes.map((r, i) => (
      <li key={i} className="relative">
        <NavLink
          to={r.route}
          className={({ isActive }) =>
            isActive
              ? "text-green-300 group"
              : "text-gray-200 hover:text-white transition group"
          }
        >
          {({ isActive }) => (
            <>
              <span className="hover:scale-125">
                {isActive ? r.fillIcon : r.icon}
              </span>
              <span className="absolute -bottom-10 -left-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 bg-gray-800 px-2 py-1 rounded-md text-white z-50">
                {r.name}
              </span>

            </>
          )}
        </NavLink>
      </li>
    ))}
  </ul>
);

const UserMenu = ({ onLogout, isOpen }) => (
  <div
    className={`absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out w-44 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
  >
    <Link to="/mylist" className="block px-4 py-2 hover:bg-gray-100">
      My List
    </Link>
    <Link to="/addspot" className="block px-4 py-2 hover:bg-gray-100">
      Add Spot
    </Link>
    <Link to="/user-profile" className="block px-4 py-2 hover:bg-gray-100">
      Profile
    </Link>
    <button
      onClick={onLogout}
      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
    >
      <MdLogout className="inline mr-2" /> Log Out
    </button>
  </div>
);

const Nav = () => {
  const { logOut, user, loading, setLoading } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoading(true);
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
          .then(() => navigate("/login"))
          .catch((error) => console.log(error.message));
        toast.success("Logout successfully");
        setLoading(false);
      }
    });
  };

  if (loading) return <RouteLoader />;

  return (
    <header className="bg-[#000]/50 md:border-2 border-green-500 backdrop-blur-md text-white drop-shadow-lg fixed top-0 md:top-5 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[80%] lg:w-[60%] md:rounded-2xl z-50">


      <div className="flex justify-between md:grid md:grid-cols-3 items-center px-4 py-4 md:py-3">
        {/* Mobile burger menu */}
        <div className="block md:hidden">
          <MenuIcon />
        </div>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="font-bold text-green-100 md:text-2xl">Wander Quest</h1>
        </Link>

        {/* Center Nav Links */}
        <NavLinks />

        {/* Right Side Actions */}
        <div className="flex items-center justify-end gap-4">
          {user ? (
            <div
              className="relative md:block"
              onMouseEnter={() => setIsClicked(true)}
              onMouseLeave={() => setIsClicked(false)}
            >
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://i.ibb.co/2kR5zq0/default-avatar.png";
                  }}
                />
              )}
              <UserMenu user={user} isOpen={isClicked} onLogout={handleLogOut} />
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/login"
                className="flex gap-2 items-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-950 transition-all duration-300 ease-in-out active:scale-95"
              >
                <FaRegUserCircle className="text-xl" /> Login
              </Link>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Nav;

UserMenu.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};