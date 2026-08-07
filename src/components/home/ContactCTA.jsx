import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import business from "../../data/business";

import "../../styles/ContactCTA.css";


function ContactCTA(){


return(


<section className="contact-cta">


<div className="container">


<motion.div

className="cta-box"

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

>


<div className="cta-content">


<span>

Need Professional Service?

</span>


<h2>

Secure Your Home & Business Today

</h2>


<p>

Contact RAMDEV CCTV CAMERA for CCTV installation,
electrical work and E-Mitra services.

</p>


<div className="cta-buttons">


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

className="btn whatsapp"

>

<FaWhatsapp/>

WhatsApp

</a>



</div>


</div>


</motion.div>


</div>


</section>


)


}


export default ContactCTA;