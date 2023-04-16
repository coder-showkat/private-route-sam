import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const themes = [
  "light",
  "dark",
  "synthwave",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxary",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [selectedTheme, setSelectedTheme] = useState("synthwave");

  const hadleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    setSelectedTheme(theme);
    sessionStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const theme = sessionStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      setSelectedTheme(theme);
    } else document.documentElement.setAttribute("data-theme", "synthwave");
  }, []);

  // logout handler
  const handleLogout = () => {
    logOut()
      .then(() => alert("Logout successful!"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="navbar container mx-auto bg-base-100">
      {/* for small device */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
            >
              Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>

      {/* logo */}
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">SAM</a>
      </div>

      {/* for larger device */}
      <div className="hidden lg:flex flex-1 space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
        >
          Order
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "text-green-400" : "")}
        >
          Register
        </NavLink>
      </div>

      {/* themes, cart and profile */}
      <div className="flex-none">
        {/* themes */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </svg>
            <span className="hidden md:inline ml-1">Theme</span>
          </label>
          <ul
            tabIndex={0}
            className="menu horizontal dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 h-56 overflow-y-auto"
          >
            {themes.map((theme, i) => (
              <li key={i} className="w-full">
                <a
                  onClick={() => hadleThemeChange(theme)}
                  className={`w-full ${
                    selectedTheme === theme ? "bg-primary text-base-100" : ""
                  }`}
                >
                  {theme}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* cart */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* profile */}
        {!user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
