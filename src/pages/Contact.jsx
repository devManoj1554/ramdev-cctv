import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";

import GoogleMap from "../components/home/GoogleMap";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

function Contact() {
  return (
    <>
	
	<SEO
	title="Contact Us"
	description="Call or WhatsApp RAMDEV CCTV CAMERA for CCTV installation, electrician and E-Mitra services."
	/>
	
      <Navbar />

      <PageBanner
        title="Contact Us"
        subtitle="Call, WhatsApp or visit our shop for CCTV installation, electrician and E-Mitra services."
      />

      <GoogleMap />

      <FAQ />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Contact;