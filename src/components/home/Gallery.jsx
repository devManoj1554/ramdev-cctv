import React from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

import SectionTitle from "../common/SectionTitle";

import gallery from "../../data/gallery";
import Image from "../common/Image";

import "../../styles/Gallery.css";


function Gallery(){


return(


<section className="section gallery">


<div className="container">


<SectionTitle

title="Our Recent Work"

subtitle="Explore our CCTV installations, electrical projects and service work."

/>



<div className="gallery-grid">


{

gallery.map((item,index)=>(


<motion.div


className="gallery-item"


key={item.id}


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


transition={{

duration:.4,

delay:index*.1

}}



>

<Image

src={item.image}

alt={item.title}

/>

<div className="gallery-overlay">


<div>

<h3>

{item.title}

</h3>


<FaSearchPlus/>


</div>


</div>


</motion.div>


))


}


</div>


</div>


</section>


)


}


export default Gallery;