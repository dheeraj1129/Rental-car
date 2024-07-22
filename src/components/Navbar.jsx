import React from "react";
import logo from "../images/download.png";

const Navbar = ({ handleSignIn }) => {
  return (
    <nav className="text-white w-screen bg-black h-24 justify-center items-center flex flex-col shadow-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-">
          <img alt="logo" src={logo} className="h-8 w-12" />
        </div>
        <div className="space-x-4 font-semibold text-xl">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/services" className="hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <button
          onClick={handleSignIn}
          className="font-medium text-xl text-black px-4 py-2 rounded bg-white hover:bg-gray-400">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
