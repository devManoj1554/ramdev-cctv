import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

import faq from "../../data/faq";

import "../../styles/FAQ.css";


function FAQ(){


const [active,setActive]=useState(null);



const toggle=(id)=>{

setActive(
active===id ? null : id
);

};



return(


<section className="section faq">


<div className="container">


<SectionTitle

title="Frequently Asked Questions"

subtitle="Find answers to common questions about our services."

/>



<div className="faq-wrapper">


{

faq.map((item)=>(


<motion.div

key={item.id}

className="faq-item"

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<button

className="faq-question"

onClick={()=>toggle(item.id)}

>


<span>

{item.question}

</span>


{

active===item.id

?

<FaMinus/>

:

<FaPlus/>

}


</button>



{

active===item.id &&

<motion.div

className="faq-answer"

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

>


<p>

{item.answer}

</p>


</motion.div>


}



</motion.div>


))


}



</div>


</div>


</section>


)


}


export default FAQ;