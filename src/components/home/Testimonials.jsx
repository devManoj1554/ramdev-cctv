import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-[100px]">
      <Container>
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Real feedback from customers who trusted our services."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="min-h-[280px] rounded-[25px] bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] sm:p-[35px]">
                  <FaQuoteLeft className="mb-4 text-[35px] text-blue-600 opacity-30" />

                  <div className="mb-5 flex gap-1 text-amber-500">
                    {Array.from({
                      length: item.rating,
                    }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p className="mb-6 leading-8 text-slate-600">
                    {item.review}
                  </p>

                  <h3 className="font-heading font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <span className="text-sm text-slate-500">
                    {item.role}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}

export default Testimonials;
