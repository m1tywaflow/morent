import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeart, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HeaderLog = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser ) => {
      setUser (currentUser );
    });
    return () => unsubscribe();
  }, []);

  // close menu after next step
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-white shadow-md transition-all duration-300">
      {/* logo */}
      <Link
        to={user ? "/home" : "/"}
        className="text-2xl font-bold text-blue-600"
      >
        MORENT
      </Link>

      {/* buger-menu (mobile) */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* navigate */}
      <nav
        className={`absolute md:top-0 top-16 md:relative flex flex-col md:flex-row items-center gap-6 bg-white md:bg-transparent left-0 w-full md:w-auto p-4 md:p-0 shadow-lg md:shadow-none transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { to: "/about", label: "About us" },
          { to: "/contact", label: "Contact us" },
          { to: "/rent", label: "Rent" },
          { to: "/rental-rules", label: "Rental Rules" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`text-lg font-semibold ${
              location.pathname === item.to ? "text-blue-600" : "text-gray-600"
            } hover:text-blue-500 transition duration-200 whitespace-nowrap`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="md:hidden flex items-center gap-10 mt-4">
            <Link to="/fav-car">
              <FaHeart className="text-gray-600 cursor-pointer hover:text-blue-500" size={36} />
            </Link>
            <Link to="/settings">
              <FaCog className="text-gray-600 cursor-pointer hover:text-blue-500" size={36} />
            </Link>
          </div>
      </nav>

      {/* icons */}
      <div className="hidden md:flex items-center gap-6">
        {user ? (
          <>
            <Link to="/fav-car">
              <FaHeart
                className="text-gray-600 cursor-pointer hover:text-blue-500"
                size={22}
              />
            </Link>
            <Link to="/settings">
              <FaCog
                className="text-gray-600 cursor-pointer hover:text-blue-500"
                size={22}
              />
            </Link>
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full text-lg font-bold">
              {user.email.charAt(0).toUpperCase()}
            </div>
          </>
        ) : (
          <Link
            to="/"
            className="text-gray-600 font-semibold hover:text-blue-500"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderLog;