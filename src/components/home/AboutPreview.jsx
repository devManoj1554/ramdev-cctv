import React from "react";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import business from "../../data/business";

function AboutPreview() {
  const features = [
    "Professional CCTV Camera Installation",
    "Home & Commercial Electrical Solutions",
    "Reliable E-Mitra Online Services",
    "Affordable and Quality Work",
  ];

  return (
    <section className="bg-white py-20 md:py-[100px]">
      <Container>
        <SectionTitle
          title="Trusted Security & Electrical Experts"
          subtitle="Providing reliable CCTV, electrical and digital services for homes, shops and businesses in Sri Ganganagar."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/about-cctv.jpg"
              alt="CCTV installation service"
              className="h-[420px] w-full rounded-[30px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.15)] sm:h-[520px]"
            />

            <div className="absolute bottom-6 right-3 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.10)] sm:right-[-30px] sm:gap-[18px] sm:p-6">
              <FaAward className="shrink-0 text-[35px] text-blue-600 sm:text-[40px]" />

              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 sm:text-[28px]">
                  {business.experience}
                </h3>

                <p className="text-sm text-slate-500">
                  Service Experience
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-[2.5rem]">
              Your Local Partner For
              <span className="text-blue-600">
                {" "}Security & Electrical Solutions
              </span>
            </h2>

            <p className="mb-8 leading-8 text-slate-500">
              {business.description}
            </p>

            <div className="mb-9 flex flex-col gap-[18px]">
              {features.map((item) => (
                <div
                  className="flex items-center gap-[15px] font-semibold text-slate-700"
                  key={item}
                >
                  <FaCheckCircle className="shrink-0 text-[22px] text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button href="/contact">
              Contact Us
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3 lg:mt-20 lg:gap-[30px]">
          <div className="rounded-[25px] bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]">
            <FaUsers className="mx-auto text-[35px] text-blue-600" />

            <h3 className="my-4 font-heading text-[35px] font-bold text-slate-900">
              {business.customers}
            </h3>

            <p className="text-slate-500">
              Happy Customers
            </p>
          </div>

          <div className="rounded-[25px] bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]">
            <FaTools className="mx-auto text-[35px] text-blue-600" />

            <h3 className="my-4 font-heading text-[35px] font-bold text-slate-900">
              {business.projects}
            </h3>

            <p className="text-slate-500">
              Completed Projects
            </p>
          </div>

          <div className="rounded-[25px] bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)]">
            <FaAward className="mx-auto text-[35px] text-blue-600" />

            <h3 className="my-4 font-heading text-[35px] font-bold text-slate-900">
              {business.rating}★
            </h3>

            <p className="text-slate-500">
              Google Rating
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;
