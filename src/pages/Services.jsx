import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";

import ServicesSection from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

function Services() {
  return (
    <>
	
	<SEO
	title="Our Services"
	description="Professional CCTV installation, electrical repair, wiring and E-Mitra services in Sri Ganganagar."
	/>
	
      <Navbar />

      <PageBanner
        title="Our Services"
        subtitle="Professional CCTV installation, electrical services and E-Mitra solutions in Sri Ganganagar."
      />

      <ServicesSection />

      <WhyChooseUs />

      <FAQ />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Services;