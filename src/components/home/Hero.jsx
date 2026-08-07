import React from "react";
import { motion } from "framer-motion";

import {
FaWhatsapp,
FaPhoneAlt,
FaShieldAlt,
FaStar,
FaUserFriends,
FaTools,
FaCheckCircle
} from "react-icons/fa";

import business from "../../data/business";

import "./Hero.css";


function Hero(){


const stats=[

{
icon:<FaShieldAlt/>,
value:"4+",
label:"Years Experience"
},

{
icon:<FaTools/>,
value:"235+",
label:"Projects Completed"
},

{
icon:<FaUserFriends/>,
value:"50+",
label:"Happy Customers"
}

];



return(

<section className="hero">


<div className="hero-overlay"></div>



<div className="container">


<div className="hero-container">



{/* CONTENT */}


<motion.div

className="hero-content"

initial={{
opacity:0,
x:-60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>



<div className="hero-rating">

<FaStar/>

<span>
{business.rating} Google Rating
</span>

</div>



<span className="hero-badge">

Trusted CCTV & Electrical Experts
in Sri Ganganagar

</span>




<h1>

Secure Your Home & Business

<span>
 With Smart CCTV Solutions
</span>

</h1>




<p>

Professional CCTV installation,
electrical repair, wiring,
maintenance and E-Mitra services
for homes, shops and commercial
properties.

</p>




<ul className="hero-list">


<li>

<FaCheckCircle/>

Same Day Service

</li>


<li>

<FaCheckCircle/>

Genuine Products

</li>


<li>

<FaCheckCircle/>

Affordable Pricing

</li>


</ul>




<div className="hero-buttons">


<a
href={`tel:${business.phone}`}
className="btn"
>

<FaPhoneAlt/>

Call Now

</a>



<a

href={`https://wa.me/${business.whatsapp}`}

target="_blank"

rel="noreferrer"

className="btn btn-outline"

>

<FaWhatsapp/>

WhatsApp

</a>


</div>



</motion.div>





{/* IMAGE */}



<motion.div

className="hero-visual"

initial={{
opacity:0,
x:60
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

>



<div className="hero-image-wrapper">


<img

src="/images/hero-cctv.png"

alt="Professional CCTV camera installation in Sri Ganganagar"

className="hero-image"

/>




<motion.div

className="floating-card card-top"

animate={{
y:[-8,8,-8]
}}

transition={{
duration:4,
repeat:Infinity
}}

>


<FaShieldAlt/>

<div>

<h4>
100% Secure
</h4>

<p>
Reliable CCTV Systems
</p>

</div>


</motion.div>





<motion.div

className="floating-card card-bottom"

animate={{
y:[8,-8,8]
}}

transition={{
duration:4,
repeat:Infinity
}}

>


<FaStar/>

<div>

<h4>
{business.rating} Rating
</h4>

<p>
Trusted Local Service
</p>

</div>


</motion.div>




</div>


</motion.div>


</div>





{/* STATS */}



<div className="hero-stats">


{

stats.map((item,index)=>(


<motion.div

className="hero-stat"

key={index}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

>


<div className="hero-stat-icon">

{item.icon}

</div>


<h3>

{item.value}

</h3>


<p>

{item.label}

</p>


</motion.div>


))


}



</div>



</div>



</section>


)

}


export default Hero;