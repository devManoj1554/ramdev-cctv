import React from "react";
import CountUp from "react-countup";
import {
  FaUsers,
  FaTools,
  FaAward,
  FaCalendarCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

import business from "../../data/business";
import Container from "../common/Container";

function Counter() {
  const stats = [
    {
      icon: FaCalendarCheck,
      number: parseInt(business.experience, 10),
      suffix: "+",
      title: "Years Experience",
    },
    {
      icon: FaTools,
      number: parseInt(business.projects, 10),
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: FaUsers,
      number: parseInt(business.customers, 10),
      suffix: "+",
      title: "Happy Customers",
    },
    {
      icon: FaAward,
      number: business.rating,
      suffix: "★",
      title: "Google Rating",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-800 py-20 md:py-[90px]">
      <div className="absolute -right-[150px] -top-[200px] h-[500px] w-[500px] rounded-full bg-cyan-500 opacity-15" />

      <Container>
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="rounded-[25px] border border-white/15 bg-white/10 px-5 py-8 text-center text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-2.5 hover:bg-white/20"
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="mx-auto mb-5 grid h-[70px] w-[70px] place-items-center rounded-full bg-sky-400 text-[30px] text-slate-900">
                  <Icon />
                </div>

                <h2 className="mb-2.5 font-heading text-[35px] font-bold sm:text-[42px]">
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    decimals={item.number % 1 !== 0 ? 1 : 0}
                  />
                  {item.suffix}
                </h2>

                <p className="text-base text-slate-200">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Counter;
