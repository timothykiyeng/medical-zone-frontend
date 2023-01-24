import * as React from 'react';
import data from "../data/data.json"
import { motion } from "framer-motion";
import { Slide } from "react-reveal";

const TestimonialCard = () => {
    

    return ( 
        <>
           <div className="md:flex">
                <Slide bottom>
                    {data.testimonials.map((item) => (
                        <motion.div 
                            whileInView={{ opacity: 1 }}
                            whileHover={{  y: -16 }}
                            transition={{type: 'spring', stiffness: 120}}
                            key={item.id} 
                            className="flex flex-col items-center rounded-3xl md:mx-8 mx-0 p-8 md:my-4 my-8 bg-white shadow-md hover:shadow-lg hover:bg-sky-100 pb-6 ">
                            <img className="rounded-3xl" src={item.image} alt=""/>
                            <div className="md:pt-6 pt-4 p-4 text-center">
                                <p className="text-sky-500 text-xl font-semibold uppercase px-2">{item.name}</p>
                                <p className="text-gray-700 font-light md:text-lg text-base">{item.remarks}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slide>
           </div> 
        </>
     );
}
 
export default TestimonialCard;