import * as React from 'react';

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    return ( 
        <>
            <div className="md:mx-32 mx-8 md:mb-32 mb-16">
                <h1 className="header text-gray-700 text-center mb-8">Client Testimonials</h1>
                <TestimonialCard />
            </div>
        </>
     );
}
 
export default Testimonials;