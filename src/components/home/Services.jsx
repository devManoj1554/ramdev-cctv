import React from "react";
import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

import services from "../../data/services";

function Services() {
  return (
    <section className="bg-slate-50 py-20 md:py-[100px]">
      <Container>
        <SectionTitle
          title="Our Professional Services"
          subtitle="Complete CCTV, electrical and digital solutions under one roof."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="group relative overflow-hidden rounded-[25px] bg-white p-7 shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] sm:p-[35px]"
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full bg-blue-600/10" />

                <div className="relative z-10 mb-6 grid h-[75px] w-[75px] place-items-center rounded-[20px] bg-gradient-to-br from-blue-600 to-cyan-500 text-[32px] text-white">
                  <Icon />
                </div>

                <h3 className="relative z-10 mb-4 font-heading text-[22px] font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="relative z-10 mb-6 leading-7 text-slate-500">
                  {service.description}
                </p>

                <a
                  href="/contact"
                  className="relative z-10 font-bold text-blue-600 transition-colors hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Learn More →
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;
