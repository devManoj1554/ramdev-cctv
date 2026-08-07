import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";

import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Counter from "../components/home/Counter";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

function About() {
  return (
    <>
	
	<SEO
	title="About Us"
	description="Learn about RAMDEV CCTV CAMERA and our experience in CCTV installation, electrician services and E-Mitra."
	/>
	
      <Navbar />

      <PageBanner
        title="About RAMDEV CCTV CAMERA"
        subtitle="Trusted CCTV installation, electrician and E-Mitra services in Sri Ganganagar."
      />

      <AboutPreview />

      <WhyChooseUs />

      <Counter />

      <Testimonials />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default About;