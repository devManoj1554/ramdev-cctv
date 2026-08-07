import React from "react";

import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

import services from "../../data/services";

import "./Services.css";


function Services(){


return (

<section className="section services">


<div className="container">


<SectionTitle

title="Our Professional Services"

subtitle="Complete CCTV, electrical and digital solutions under one roof."

/>



<div className="services-grid">


{

services.map((service,index)=>{


const Icon = service.icon;


return(


<motion.div

className="service-card"

key={service.id}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.1
}}

>


<div className="service-icon">

<Icon/>

</div>



<h3>

{service.title}

</h3>


<p>

{service.description}

</p>


<a href="/contact">

Learn More →

</a>



</motion.div>


)


})


}


</div>


</div>


</section>


)


}


export default Services;