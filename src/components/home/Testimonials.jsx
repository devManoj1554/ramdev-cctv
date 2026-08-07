import React from "react";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { motion } from "framer-motion";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Autoplay
} from "swiper/modules";


import "swiper/css";


import SectionTitle from "../common/SectionTitle";

import testimonials from "../../data/testimonials";

import "./Testimonials.css";


function Testimonials(){


return(


<section className="section testimonials">


<div className="container">


<SectionTitle

title="What Our Customers Say"

subtitle="Real feedback from customers who trusted our services."

/>



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<Swiper


modules={[Autoplay]}


spaceBetween={30}


slidesPerView={1}


autoplay={{

delay:3000,

disableOnInteraction:false

}}



breakpoints={{

768:{

slidesPerView:2

},


1100:{

slidesPerView:3

}


}}



>



{

testimonials.map((item)=>(


<SwiperSlide key={item.id}>


<div className="testimonial-card">


<FaQuoteLeft className="quote"/>


<div className="stars">


{

Array.from({

length:item.rating

}).map((_,i)=>(


<FaStar key={i}/>


))


}


</div>


<p>

{item.review}

</p>


<h3>

{item.name}

</h3>


<span>

{item.role}

</span>


</div>


</SwiperSlide>


))


}



</Swiper>


</motion.div>


</div>


</section>


)


}


export default Testimonials;