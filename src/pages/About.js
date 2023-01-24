import * as React from 'react';
import AboutBanner from '../assets/about.jpg'
import Inquiry from '../components/Inquiries';
import OurTeam from '../components/OurTeam';
import OurValues from '../components/OurValues';

const About = () => {
    return ( 
        <>
            <div>
                <div className="" 
                    style={{
                            backgroundImage: `url(${AboutBanner})`, 
                            backgroundSize: `cover`,
                            paddingTop: `100px`, 
                            paddingBottom: `100px` 
                        }}
                    >
                    <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6 md:mx-0 mx-4">
                        <h2 className="font-medium md:text-lg text-base text-white">
                            Home - 
                            <span className="text-pink-500 mx-2">About Us</span>
                        </h2>
                        <h1 className='md:text-5xl text-3xl font-bold uppercase text-gray-800 md:mt-8 mt-4 text-center'>Your Wellbeing & Satisfaction is Our Joy</h1>
                    </div>
                </div>
                
                <OurValues />
                <OurTeam />
                <Inquiry />
            </div>
        </>
     );
}
 
export default About;