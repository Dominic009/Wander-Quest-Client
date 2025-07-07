import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { navRoutes } from './Nav';

const SideNav = ({ setIsOpenSideMenu, isOpenSideMenu }) => {
    return (
        <>
            {isOpenSideMenu && (
                <div
                    className={`fixed w-[75%] max-w-xs bg-white shadow-lg z-50 rounded-lg transition-all duration-500 ease-linear 
    ${isOpenSideMenu ? "top-16 left-2" : "-left-28"}
  `}
                >
                    <div className="p-4 border-b flex justify-between items-center text-gray-900">
                        <h2 className="font-bold text-lg">Menu</h2>
                    </div>

                    {/* Navigation links */}
                    <ul className="p-4 space-y-3 text-gray-700 bg-white rounded-lg">
                        {navRoutes.map((r, i) => (
                            <li key={i}>
                                <NavLink
                                    to={r.route}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex items-center gap-3 font-semibold text-green-600"
                                            : "flex items-center gap-3 hover:text-green-800 transition"
                                    }
                                    onClick={() => setIsOpenSideMenu(false)}
                                >
                                    {r.icon}
                                    {r.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

SideNav.propTypes = {
    setIsOpenSideMenu: PropTypes.func.isRequired,
    isOpenSideMenu: PropTypes.bool,
};

export default SideNav;
