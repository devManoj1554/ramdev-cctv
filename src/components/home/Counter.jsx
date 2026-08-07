import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaTools, FaAward, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

import business from "../../data/business";

import "../../styles/Counter.css";


function Counter(){

  const getNumber = (value) => {
    return parseInt(value.replace(/\D/g, ""));
  };


  const stats = [

{
icon: FaCalendarCheck,
number: parseInt(business.experience),
suffix:"+",
title:"Years Experience"
},


{
icon: FaTools,
number: parseInt(business.projects),
suffix:"+",
title:"Projects Completed"
},


{
icon: FaUsers,
number: parseInt(business.customers),
suffix:"+",
title:"Happy Customers"
},


{
icon: FaAward,
number: business.rating,
suffix:"★",
title:"Google Rating"
}

];


  return (

    <section className="counter-section">

      <div className="container">

        <div className="counter-grid">

          {
            stats.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  className="counter-card"

                  key={index}

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

                  transition={{
                    delay:index*.15
                  }}

                >

                  <div className="counter-icon">
                    <Icon/>
                  </div>


                  <h2>

                    <CountUp

                      start={0}

                      end={item.number}

                      duration={2}

                      decimals={
                        item.number % 1 !== 0 ? 1 : 0
                      }

                    />

                    {item.suffix}

                  </h2>


                  <p>
                    {item.title}
                  </p>


                </motion.div>

              )

            })
          }


        </div>

      </div>

    </section>

  )

}


export default Counter;