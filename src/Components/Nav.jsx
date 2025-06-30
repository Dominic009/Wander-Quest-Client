import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import { House, Info, MapPinned } from "lucide-react";

const Nav = () => {
  const { logOut, user, setLoading } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "light" : "coffee");
  };

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

  const navRoutes = [
    { route: "/", name: "Home", icon: <House size={28} /> },
    { route: "/allspots", name: "All Spots", icon: <MapPinned size={28} /> },
    { route: "/aboutus", name: "About Us", icon: <Info size={28} /> },
  ];

  const navLinks = (
    <ul className="hidden lg:flex items-center justify-center w-[50%] text-sm font-medium">
      {navRoutes.map((r, i) => (
        <li key={i} className="relative w-full flex items-center justify-center ">
          <NavLink
            to={r.route}
            className={({ isActive }) =>
              isActive ? "text-[#85ceff] border-b-4 rounded border-[#277ab1] pb-1 flex flex-col items-center group" : "text-gray-200 hover:text-white transition flex flex-col items-center group"
            }
          >
            <span className="">{r.icon}</span>
            <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-center bg-gray-800 px-2 py-0.5 rounded-md transition-opacity ease-in-out duration-300">{r.name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-[#08773f] backdrop-blur-md text-white shadow-md fixed w-full z-50 px-8">
      <div className="grid grid-cols-3 items-center px-4 py-3">
        <Link to="/" className="flex items-center">
          {/* <img src={logo} alt="Logo" className="w-36 md:w-44" /> */}
        </Link>

        <div className="flex items-center justify-center gap-2">
          {navLinks}
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input onChange={handleToggle} type="checkbox" className="theme-controller hidden" />
            <svg className="swap-off fill-orange-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="..." />
            </svg>
            <svg className="swap-on fill-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="..." />
            </svg>
          </label>

          {/* User Avatar & Dropdown */}
          {user && <div
            className="relative"
            onMouseEnter={() => setIsClicked(true)}
            onMouseLeave={() => setIsClicked(false)}
          >
            <img
              src={user?.photoURL || "https://i.ibb.co/LZf2Lcx/default-avatar.png"}
              className="w-10 h-10 rounded-full border border-gray-300"
              alt="user"
            />

            <div
              className={`absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out w-44 ${isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            >
              {user && (
                <>
                  <Link to="/mylist" className="block px-4 py-2 hover:bg-gray-100">My List</Link>
                  <Link to="/addspot" className="block px-4 py-2 hover:bg-gray-100">Add Spot</Link>
                  <Link to="/user-profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <button
                    onClick={handleLogOut}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                  >
                    <MdLogout className="inline mr-2" /> Log Out
                  </button>
                </>
              )}
            </div>
          </div>}

          {/* Login and Register Links */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className="flex gap-2 text-black items-center px-4 py-2 hover:bg-gray-100">
              <FaRegUserCircle className="text-xl" /> Login
            </Link>
            <Link to="/register" className="flex gap-2 text-black items-center px-4 py-2 hover:bg-gray-100">
              <FiUserPlus className="text-xl" /> Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
