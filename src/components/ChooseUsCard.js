import * as React from 'react';

import data from "../data/data.json"
import { Slide } from "react-reveal";

const ChooseUsCard = () => {
    return ( 
        <>
            {data.chooseus.map((choose) => (
                <Slide right>
                    <div key={choose.id} className='md:flex items-center justify-center md:my-16 my-8 '>
                        <div>
                            <img className="rounded-lg" src={choose.image} alt=""/>
                        </div>
                        <div className="lg:mx-16 md:mx-8 mx-0 flex flex-col md:items-start items-center md:text-left text-center">
                            <h2 className="header ">{choose.title}</h2>
                            <p className="content">{choose.content}</p>
                            <button className="btn md:mt-8 mt-4 hover:bg-pink-600 hover:font-medium hover:scale-105 hover:translate-y-1 duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </Slide>
            ))}
        </>
     );
}
 
export default ChooseUsCard;