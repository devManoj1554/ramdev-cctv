import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

import faq from "../../data/faq";

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive((current) => (current === id ? null : id));
  };

  return (
    <section className="bg-slate-50 py-20 md:py-[100px]">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services."
        />

        <div className="mx-auto flex max-w-[900px] flex-col gap-5">
          {faq.map((item) => {
            const isActive = active === item.id;
            const answerId = `faq-answer-${item.id}`;

            return (
              <motion.div
                key={item.id}
                className="overflow-hidden rounded-[20px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 bg-white px-6 py-5 text-left text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-[30px] sm:py-6"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isActive}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>

                  {isActive ? (
                    <FaMinus className="shrink-0 text-blue-600" />
                  ) : (
                    <FaPlus className="shrink-0 text-blue-600" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-6 sm:px-[30px]">
                        <p className="leading-7 text-slate-500">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;
