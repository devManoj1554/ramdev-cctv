import React from "react";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./WhyChooseUs.css";


function WhyChooseUs() {


  const reasons = [

    {
      icon: FaShieldAlt,
      title: "Trusted Security Solutions",
      text: "Quality CCTV systems designed to protect your home and business."
    },


    {
      icon: FaUserTie,
      title: "Experienced Technicians",
      text: "Professional service with proper installation and support."
    },


    {
      icon: FaClock,
      title: "Quick Response",
      text: "Fast service support for electrical and CCTV requirements."
    },


    {
      icon: FaTools,
      title: "Complete Maintenance",
      text: "Installation, repair and maintenance services at one place."
    }

  ];


  const points = [

    "Affordable and transparent pricing",

    "Quality products and professional work",

    "Local service support in Sri Ganganagar",

    "Customer satisfaction focused approach"

  ];



  return (


<section className="section why">


<div className="container">


<div className="why-grid">



<motion.div

className="why-content"

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<span className="small-title">

Why Choose Us

</span>


<h2>

Reliable CCTV & Electrical Services

<span>

 You Can Trust

</span>

</h2>



<p>

RAMDEV CCTV CAMERA provides dependable security,
electrical and digital solutions with quality service
and customer-focused support.

</p>



<div className="check-list">


{

points.map((point,index)=>(


<div className="check-item" key={index}>

<FaCheckCircle/>

<span>{point}</span>

</div>


))


}


</div>



<a href="/contact" className="btn">

Get Service Now

</a>


</motion.div>





<motion.div

className="reason-grid"

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


{

reasons.map((item,index)=>{


const Icon=item.icon;


return(


<div className="reason-card" key={index}>


<div className="reason-icon">

<Icon/>

</div>


<h3>

{item.title}

</h3>


<p>

{item.text}

</p>


</div>


)


})


}


</motion.div>



</div>


</div>


</section>


  );

}


export default WhyChooseUs;