import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaShieldAlt,
} from "react-icons/fa";

import business from "../../data/business";
import Container from "../common/Container";

function Footer() {
  const services = [
    "CCTV Installation",
    "Electrical Repair",
    "CCTV Maintenance",
    "E-Mitra Services",
    "Home Wiring",
  ];

  return (
    <footer className="bg-slate-900 px-0 pb-5 pt-20 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-[15px]">
              <FaShieldAlt className="text-[35px] text-sky-400" />

              <h2 className="font-heading text-xl font-bold">
                RAMDEV CCTV
              </h2>
            </div>

            <p className="mb-6 leading-7 text-slate-300">
              {business.description}
            </p>

            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-green-600 px-[22px] py-3 font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col">
              <Link
                to="/"
                className="mb-3.5 text-slate-300 transition-all hover:translate-x-1 hover:text-sky-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="mb-3.5 text-slate-300 transition-all hover:translate-x-1 hover:text-sky-400"
              >
                About
              </Link>

              <Link
                to="/services"
                className="mb-3.5 text-slate-300 transition-all hover:translate-x-1 hover:text-sky-400"
              >
                Services
              </Link>

              <Link
                to="/gallery"
                className="mb-3.5 text-slate-300 transition-all hover:translate-x-1 hover:text-sky-400"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="mb-3.5 text-slate-300 transition-all hover:translate-x-1 hover:text-sky-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Services
            </h3>

            <div className="flex flex-col">
              {services.map((service) => (
                <span
                  key={service}
                  className="mb-3.5 text-slate-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-xl font-semibold">
              Contact
            </h3>

            <p className="mb-[18px] flex items-start gap-3 leading-7 text-slate-300">
              <FaPhoneAlt className="mt-1.5 shrink-0 text-sky-400" />
              {business.phone}
            </p>

            <p className="mb-[18px] flex items-start gap-3 leading-7 text-slate-300">
              <FaMapMarkerAlt className="mt-1.5 shrink-0 text-sky-400" />
              {business.address}
            </p>
          </div>
        </div>

        <div className="mt-[50px] border-t border-white/10 pt-5 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} {business.name}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
