import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b-2 text-white border-black">
      <div className="container w-[90%] mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <NavLink to="/">

         
          <img className="lg:w-[110px] w-[80px]" src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className="hidden text-black text-[1.5rem] md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-gray-500 border-b-2 border-gray-500' : 'hover:text-gray-500'
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/hours"
            className={({ isActive }) =>
              isActive ? 'text-gray-500 border-b-2 border-gray-500' : 'hover:text-gray-500'
            }
          >
            Hours
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? 'text-gray-500 border-b-2 border-gray-500' : 'hover:text-gray-500'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/find-us"
            className={({ isActive }) =>
              isActive ? 'text-gray-500 border-b-2 border-gray-500' : 'hover:text-gray-500'
            }
          >
            Find Us
          </NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes color="black" /> : <FaBars color="black" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-white bg-black px-4 py-2 rounded' : 'text-gray-300 hover:bg-black hover:text-white px-4 py-2 rounded'
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/hours"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-white bg-black px-4 py-2 rounded' : 'text-gray-300 hover:bg-black hover:text-white px-4 py-2 rounded'
              }
            >
              Hours
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-white bg-black px-4 py-2 rounded' : 'text-gray-300 hover:bg-black hover:text-white px-4 py-2 rounded'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/find-us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-white bg-black px-4 py-2 rounded' : 'text-gray-300 hover:bg-black hover:text-white px-4 py-2 rounded'
              }
            >
              Find Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
