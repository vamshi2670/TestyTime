// Navbar.js
import React, { useState } from 'react';
import { FaCartPlus, FaBars } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { MdTableChart } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="navbar px-4 d-flex justify-content-between align-items-center">
        <h3 className="text-primary">TestyTime.</h3>

        <div className="d-flex align-items-center gap-3">
        <Link to='/cart'> <FaCartPlus size={22} className='cartbtn' color="blue" style={{ cursor: 'pointer' }} /></Link>
          <MdWidgets size={22} id='widgetbtn' onClick={toggleMenu} style={{ cursor: 'pointer',color:"blue" }} />
        </div>
      </nav>

      {showDropdown && (
        <div className="dropdown-menu-box">
          <ul className="dropdown-list">
            <li><Link to="/" onClick={() => setShowDropdown(false)}><FaHome size={24} color="black" />Home</Link></li>
            <li><Link to="/menu" onClick={() => setShowDropdown(false)}><FaBars size={24} color="black" />Menu</Link></li>
            <li><Link to="/table" onClick={() => setShowDropdown(false)}><MdTableChart size={24} color="black" />Tables</Link></li>
            <li><Link to="/booktable" onClick={() => setShowDropdown(false)}><FaMobileAlt size={24} color="black" />Booking</Link></li>
            <li><Link to="/login" onClick={() => setShowDropdown(false)}><FaSignInAlt size={24} color="black" />Login</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
