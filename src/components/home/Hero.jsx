import React from "react";
import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaUserFriends,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import business from "../../data/business";
import Container from "../common/Container";

function Hero() {
  const stats = [
    {
      icon: <FaShieldAlt />,
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: <FaTools />,
      value: "235+",
      label: "Projects Completed",
    },
    {
      icon: <FaUserFriends />,
      value: "50+",
      label: "Happy Customers",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-700 pb-20 pt-[130px] md:pb-20 md:pt-[150px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,0.3),transparent_40%)]" />

      <Container>
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-[70px]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-white shadow-sm backdrop-blur-[15px] sm:px-[18px]">
              <FaStar className="text-amber-400" />
              <span>{business.rating} Google Rating</span>
            </div>

            <span className="mb-6 block w-fit rounded-full bg-sky-400/15 px-4 py-2.5 font-semibold text-sky-200 sm:px-[18px]">
              Trusted CCTV & Electrical Experts in Sri Ganganagar
            </span>

            <h1 className="font-heading text-4xl font-extrabold leading-[1.15] text-white sm:text-[3.5rem]">
              Secure Your Home & Business
              <span className="block text-sky-400">
                With Smart CCTV Solutions
              </span>
            </h1>

            <p className="my-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-[1.1rem]">
              Professional CCTV installation, electrical repair, wiring,
              maintenance and E-Mitra services for homes, shops and
              commercial properties.
            </p>

            <ul className="mb-9 flex flex-wrap justify-center gap-4 text-left lg:justify-start lg:gap-6">
              <li className="flex items-center gap-2 font-semibold text-white">
                <FaCheckCircle className="text-green-500" />
                Same Day Service
              </li>

              <li className="flex items-center gap-2 font-semibold text-white">
                <FaCheckCircle className="text-green-500" />
                Genuine Products
              </li>

              <li className="flex items-center gap-2 font-semibold text-white">
                <FaCheckCircle className="text-green-500" />
                Affordable Pricing
              </li>
            </ul>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky-400 bg-transparent px-7 py-3.5 font-semibold text-sky-400 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px]">
              <img
                src="/images/hero-cctv.png"
                alt="Professional CCTV camera installation in Sri Ganganagar"
                className="w-full rounded-[35px] border-8 border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              />

              <motion.div
                className="absolute left-2.5 top-10 flex min-w-[210px] items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:-left-[50px] sm:min-w-[230px] sm:gap-[15px] sm:px-[22px] sm:py-[18px]"
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <FaShieldAlt className="shrink-0 text-[30px] text-blue-600" />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    100% Secure
                  </h4>

                  <p className="mt-0.5 text-[0.85rem] text-slate-500">
                    Reliable CCTV Systems
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 right-2.5 flex min-w-[210px] items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:-right-[50px] sm:min-w-[230px] sm:gap-[15px] sm:px-[22px] sm:py-[18px]"
                animate={{ y: [8, -8, 8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <FaStar className="shrink-0 text-[30px] text-blue-600" />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {business.rating} Rating
                  </h4>

                  <p className="mt-0.5 text-[0.85rem] text-slate-500">
                    Trusted Local Service
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-14 grid gap-5 sm:grid-cols-3 md:mt-[70px]">
          {stats.map((item, index) => (
            <motion.div
              className="rounded-[25px] border border-white/15 bg-white/10 p-6 text-center text-white backdrop-blur-xl sm:p-[30px]"
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="mx-auto mb-4 grid h-[65px] w-[65px] place-items-center rounded-full bg-sky-400 text-[28px] text-slate-900">
                {item.icon}
              </div>

              <h3 className="font-heading text-[30px] font-bold sm:text-[35px]">
                {item.value}
              </h3>

              <p className="mt-1 text-sm text-slate-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
