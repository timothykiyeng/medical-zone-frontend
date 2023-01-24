import * as React from 'react';
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
    return ( 
        <>
            <div className="md:mx-32 mx-8 md:mb-32 mb-16">
                <h1 className="header text-gray-700 text-center mb-8">Why Choose Us</h1>
                <div className="">
                    <ChooseUsCard />
                </div>
            </div> 
        </>
     );
}
 
export default ChooseUs;