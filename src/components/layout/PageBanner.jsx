import React from "react";
import { motion } from "framer-motion";
import "./PageBanner.css";

function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay"></div>

      <div className="container">
        <motion.div
          className="page-banner-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default PageBanner;