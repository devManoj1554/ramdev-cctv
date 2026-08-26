import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import business from "../../data/business";

function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-[9999] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-[30px] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25d366] sm:bottom-6 sm:right-6 sm:h-[65px] sm:w-[65px] sm:text-[35px]"
    >
      <FaWhatsapp />

      <span className="pointer-events-none absolute right-[75px] hidden whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        WhatsApp
      </span>
    </a>
  );
}

export default FloatingWhatsapp;
