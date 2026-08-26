import React from "react";
import { motion } from "framer-motion";

import Container from "../common/Container";

function PageBanner({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07142b] via-slate-900 to-blue-700 pb-[90px] pt-[150px] md:pb-[120px] md:pt-[180px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.45),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.35),transparent_45%)]" />

      <Container>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mb-4 font-heading text-4xl font-bold sm:text-[3.5rem]">
            {title}
          </h1>

          <p className="mx-auto max-w-[700px] text-base leading-7 text-blue-100 sm:text-[1.15rem] sm:leading-8">
            {subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default PageBanner;
