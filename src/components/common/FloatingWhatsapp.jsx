import { FaWhatsapp } from "react-icons/fa";

import business from "../../data/business";

import React from "react";

import "./FloatingWhatsapp.css";


function FloatingWhatsapp(){


return(

<a

href={`https://wa.me/${business.whatsapp}`}

target="_blank"

rel="noreferrer"

className="floating-whatsapp"

aria-label="Chat on WhatsApp"

>


<FaWhatsapp/>


<span>

WhatsApp

</span>


</a>


)

}


export default FloatingWhatsapp;