import React from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Counter from "../components/home/Counter";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import GoogleMap from "../components/home/GoogleMap";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";

function Home() {
  return (
    <>
      <SEO />

      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <WhyChooseUs />
        <Counter />
        <Gallery />
        <Testimonials />
        <FAQ />
        <ContactCTA />
        <GoogleMap />
      </main>

      <Footer />
    </>
  );
}

export default Home;
