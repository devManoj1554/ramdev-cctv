import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaShieldAlt,
} from "react-icons/fa";

import business from "../../data/business";

import "../../styles/Footer.css";

function Footer() {
  const services = [
    "CCTV Installation",
    "Electrical Repair",
    "CCTV Maintenance",
    "E-Mitra Services",
    "Home Wiring",
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaShieldAlt />
              <h2>RAMDEV CCTV</h2>
            </div>

            <p>{business.description}</p>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              className="footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h3>Services</h3>

            {services.map((service, index) => (
              <span key={index}>{service}</span>
            ))}
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>

            <p>
              <FaPhoneAlt />
              {business.phone}
            </p>

            <p>
              <FaMapMarkerAlt />
              {business.address}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {business.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;