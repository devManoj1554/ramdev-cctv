import React from "react";
import {
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaTools,
} from "react-icons/fa";

import { motion } from "framer-motion";

import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";

import business from "../../data/business";

import "./AboutPreview.css";


function AboutPreview(){

  const features = [
    "Professional CCTV Camera Installation",
    "Home & Commercial Electrical Solutions",
    "Reliable E-Mitra Online Services",
    "Affordable and Quality Work"
  ];


  return(

    <section className="section about">

      <div className="container">


        <SectionTitle

          title="Trusted Security & Electrical Experts"

          subtitle="Providing reliable CCTV, electrical and digital services for homes, shops and businesses in Sri Ganganagar."

        />


        <div className="about-grid">


          {/* Image Area */}

          <motion.div

            className="about-image"

            initial={{opacity:0,x:-60}}

            whileInView={{opacity:1,x:0}}

            viewport={{once:true}}

            transition={{duration:.8}}

          >

            <img

              src="/images/about-cctv.jpg"

              alt="CCTV installation service"

            />


            <div className="experience-card">

              <FaAward/>

              <div>

                <h3>
                  {business.experience}
                </h3>

                <p>
                  Service Experience
                </p>

              </div>

            </div>


          </motion.div>



          {/* Content */}

          <motion.div

            className="about-content"

            initial={{opacity:0,x:60}}

            whileInView={{opacity:1,x:0}}

            viewport={{once:true}}

            transition={{duration:.8}}

          >


            <h2>

              Your Local Partner For

              <span> Security & Electrical Solutions</span>

            </h2>


            <p>

              {business.description}

            </p>


            <div className="feature-list">

            {

              features.map((item,index)=>(

                <div className="feature-item" key={index}>

                  <FaCheckCircle/>

                  <span>{item}</span>

                </div>

              ))

            }

            </div>


            <Button href="/contact">

              Contact Us

            </Button>


          </motion.div>


        </div>



        {/* Stats */}

        <div className="stats">


          <div className="stat-card">

            <FaUsers/>

            <h3>
              {business.customers}
            </h3>

            <p>
              Happy Customers
            </p>

          </div>



          <div className="stat-card">

            <FaTools/>

            <h3>
              {business.projects}
            </h3>

            <p>
              Completed Projects
            </p>

          </div>



          <div className="stat-card">

            <FaAward/>

            <h3>
              {business.rating}★
            </h3>

            <p>
              Google Rating
            </p>

          </div>


        </div>


      </div>


    </section>

  )

}


export default AboutPreview;