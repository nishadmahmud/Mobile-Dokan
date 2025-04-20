import React, { useContext } from "react";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { CartContext } from "../providers/Context";

const Navbar = () => {
  const {cart, setCart} = useContext(CartContext);
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm rounded-xl mt-3">
      <div className="navbar-start pl-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/cart"
              >
                <MdShoppingCart size={20}></MdShoppingCart>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
                to="/favourites"
              >
                <MdBookmarkAdd size={20}></MdBookmarkAdd>
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold">
          Mobile Dokan
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/cart"
            >
              <MdShoppingCart size={20}></MdShoppingCart>
              <p className="absolute top-0 right-1">{cart.length}</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
              to="/favourites"
            >
              <MdBookmarkAdd size={20}></MdBookmarkAdd>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
