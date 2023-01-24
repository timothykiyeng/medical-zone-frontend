import * as React from 'react';

import SpecialtyCard from "./SpecialtyCard";


const Specialties = () => {

    return ( 
        <>
            <div className="md:my-32 my-16 bg-blue-200 md:py-20 py-8 md:px-64 px-8">
                <h1 className="header text-gray-800 text-center">Our Specialties</h1>
                <SpecialtyCard />
            </div>
        </>
     );
}
 
export default Specialties;