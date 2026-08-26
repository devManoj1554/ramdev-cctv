import React from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";
import Image from "../common/Image";

import gallery from "../../data/gallery";

function Gallery() {
  return (
    <section className="bg-slate-50 py-20 md:py-[100px]">
      <Container>
        <SectionTitle
          title="Our Recent Work"
          subtitle="Explore our CCTV installations, electrical projects and service work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              className="group relative h-[300px] cursor-pointer overflow-hidden rounded-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.12]"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/85 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <h3 className="font-heading text-xl font-semibold">
                    {item.title}
                  </h3>

                  <FaSearchPlus className="text-[28px] text-sky-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
