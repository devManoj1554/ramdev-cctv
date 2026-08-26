import React from "react";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Container from "../common/Container";

function WhyChooseUs() {
  const reasons = [
    {
      icon: FaShieldAlt,
      title: "Trusted Security Solutions",
      text: "Quality CCTV systems designed to protect your home and business.",
    },
    {
      icon: FaUserTie,
      title: "Experienced Technicians",
      text: "Professional service with proper installation and support.",
    },
    {
      icon: FaClock,
      title: "Quick Response",
      text: "Fast service support for electrical and CCTV requirements.",
    },
    {
      icon: FaTools,
      title: "Complete Maintenance",
      text: "Installation, repair and maintenance services at one place.",
    },
  ];

  const points = [
    "Affordable and transparent pricing",
    "Quality products and professional work",
    "Local service support in Sri Ganganagar",
    "Customer satisfaction focused approach",
  ];

  return (
    <section className="bg-white py-20 md:py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-[15px] inline-block font-bold text-blue-600">
              Why Choose Us
            </span>

            <h2 className="mb-5 font-heading text-3xl font-bold leading-[1.3] text-slate-900 sm:text-[2.6rem]">
              Reliable CCTV & Electrical Services
              <span className="text-blue-600">
                {" "}You Can Trust
              </span>
            </h2>

            <p className="mb-8 leading-8 text-slate-500">
              RAMDEV CCTV CAMERA provides dependable security,
              electrical and digital solutions with quality service
              and customer-focused support.
            </p>

            <div className="mb-9 flex flex-col gap-[18px]">
              {points.map((point) => (
                <div
                  className="flex items-center gap-[15px] font-semibold text-slate-700"
                  key={point}
                >
                  <FaCheckCircle className="shrink-0 text-[22px] text-green-600" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get Service Now
            </a>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="rounded-[25px] bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2.5 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] sm:p-[30px]"
                  key={item.title}
                >
                  <div className="mb-5 grid h-[65px] w-[65px] place-items-center rounded-[18px] bg-gradient-to-br from-blue-600 to-cyan-500 text-[28px] text-white">
                    <Icon />
                  </div>

                  <h3 className="mb-3 font-heading font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-[0.95rem] leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
