import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import business from "../../data/business";
import Container from "../common/Container";

function GoogleMap() {
  return (
    <section className="bg-white py-20 md:py-[100px]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[50px]">
          <div>
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 sm:text-[2.5rem]">
              Contact Us
            </h2>

            <p className="mb-9 leading-8 text-slate-500">
              Get in touch for CCTV installation,
              electrical services and E-Mitra solutions.
            </p>

            <div className="mb-6 flex items-start gap-5">
              <FaPhoneAlt className="mt-1.5 shrink-0 text-[25px] text-blue-600" />

              <div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  Phone
                </h4>

                <a
                  href={`tel:${business.phone}`}
                  className="leading-7 text-slate-500 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-5">
              <FaMapMarkerAlt className="mt-1.5 shrink-0 text-[25px] text-blue-600" />

              <div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  Address
                </h4>

                <p className="leading-7 text-slate-500">
                  {business.address}
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start gap-5">
              <FaClock className="mt-1.5 shrink-0 text-[25px] text-blue-600" />

              <div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  Opening Hours
                </h4>

                <p className="leading-7 text-slate-500">
                  {business.openingHours}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[350px] overflow-hidden rounded-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.15)] sm:h-[450px]">
            <iframe
              title="RAMDEV CCTV CAMERA Location"
              src={business.mapEmbed}
              width="100%"
              height="450"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GoogleMap;
