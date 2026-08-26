import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import business from "../../data/business";
import Container from "../common/Container";

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-600 py-20 md:py-[90px]">
      <div className="absolute -right-[100px] -top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-500 opacity-20" />

      <Container>
        <motion.div
          className="relative z-10 overflow-hidden rounded-[35px] border border-white/20 bg-white/10 p-8 text-center text-white shadow-lg backdrop-blur-xl sm:p-10 md:p-[60px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="mb-[15px] inline-block font-bold text-sky-400">
              Need Professional Service?
            </span>

            <h2 className="mb-5 font-heading text-3xl font-bold sm:text-[2.5rem] md:text-[3rem]">
              Secure Your Home & Business Today
            </h2>

            <p className="mx-auto mb-9 max-w-[650px] leading-8 text-slate-200">
              Contact RAMDEV CCTV CAMERA for CCTV installation,
              electrical work and E-Mitra services.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactCTA;
