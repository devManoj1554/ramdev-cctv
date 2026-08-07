import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";


import business from "../../data/business";


import "../../styles/GoogleMap.css";


function GoogleMap(){


return(


<section className="section contact">


<div className="container">


<div className="contact-grid">



<div className="contact-info">


<h2>

Contact Us

</h2>


<p>

Get in touch for CCTV installation,
electrical services and E-Mitra solutions.

</p>



<div className="contact-item">


<FaPhoneAlt/>

<div>

<h4>Phone</h4>

<a href={`tel:${business.phone}`}>

{business.phone}

</a>

</div>


</div>




<div className="contact-item">


<FaMapMarkerAlt/>


<div>

<h4>Address</h4>

<p>

{business.address}

</p>

</div>


</div>




<div className="contact-item">


<FaClock/>


<div>

<h4>Opening Hours</h4>

<p>

{business.openingHours}

</p>

</div>


</div>



</div>





<div className="map-box">


<iframe
  title="RAMDEV CCTV CAMERA Location"
  src={business.mapEmbed}
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>


</div>



</div>


</div>


</section>


)

}


export default GoogleMap;