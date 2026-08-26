import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import business from "../../data/business";
import Container from "../common/Container";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }) =>
    `relative py-1 font-semibold text-white transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:bg-cyan-500 after:transition-all after:duration-300 ${
      isActive
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full border-b border-white/5 backdrop-blur-[18px] transition-all duration-300 ${
        sticky
          ? "bg-slate-950/95 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
          : "bg-slate-950/90 py-[18px]"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3.5"
          onClick={closeMenu}
          aria-label="RAMDEV CCTV home"
        >
          <img
            src="/logo.webp"
            alt="RAMDEV CCTV"
            className={`w-auto object-contain transition-all duration-300 ${
              sticky ? "h-12" : "h-[60px]"
            }`}
          />
        </Link>

        <nav
          id="main-navigation"
          className={`fixed right-0 top-[82px] flex h-[calc(100vh-82px)] w-[260px] flex-col gap-6 bg-slate-900 p-[35px] transition-transform duration-300 md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:items-center md:gap-[34px] md:bg-transparent md:p-0 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          }`}
          aria-label="Main navigation"
        >
          <NavLink
            onClick={closeMenu}
            to="/"
            className={navLinkClasses}
          >
            Home
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/about"
            className={navLinkClasses}
          >
            About
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/services"
            className={navLinkClasses}
          >
            Services
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/gallery"
            className={navLinkClasses}
          >
            Gallery
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/contact"
            className={navLinkClasses}
          >
            Contact
          </NavLink>
        </nav>

        <a
          className="hidden items-center gap-2.5 rounded-full bg-blue-600 px-[22px] py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:flex"
          href={`tel:${business.phone}`}
        >
          <FaPhoneAlt />
          Call Now
        </a>

        <button
          type="button"
          className="rounded-md bg-transparent p-2 text-[26px] text-white transition-colors hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Container>
    </header>
  );
}

export default Navbar;
