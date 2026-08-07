import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";

import GallerySection from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

function Gallery() {
  return (
    <>
	
	<SEO
	title="Gallery"
	description="View our CCTV installation projects, electrical work and completed security solutions."
	/>
	
      <Navbar />

      <PageBanner
        title="Our Gallery"
        subtitle="Explore our CCTV installations, electrical work and completed projects."
      />

      <GallerySection />

      <Testimonials />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Gallery;