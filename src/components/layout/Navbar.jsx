import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

import business from "../../data/business";

import "./Navbar.css";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={sticky ? "navbar sticky" : "navbar"}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>⚡</span>
          <div>
            <h2>RAMDEV CCTV</h2>
            <small>Electrician • E-Mitra</small>
          </div>
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <NavLink onClick={closeMenu} to="/">
            Home
          </NavLink>

          <NavLink onClick={closeMenu} to="/about">
            About
          </NavLink>

          <NavLink onClick={closeMenu} to="/services">
            Services
          </NavLink>

          <NavLink onClick={closeMenu} to="/gallery">
            Gallery
          </NavLink>

          <NavLink onClick={closeMenu} to="/contact">
            Contact
          </NavLink>
        </nav>

        <a className="call-btn" href={`tel:${business.phone}`}>
          <FaPhoneAlt />
          Call Now
        </a>

        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;