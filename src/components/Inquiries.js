import * as React from 'react';
import { Link } from "react-router-dom";
import getInTouch from "../assets/get-in-touch.jpg"

function Inquiry () {
    return (
        <>
            <div>
                <div className="" 
                    style={{
                            backgroundImage: `url(${getInTouch})`, 
                            backgroundSize: `cover`,
                            backgroundRepeat: `no-repeat`,
                            paddingTop: `100px`, 
                            paddingBottom: `100px` 
                        }}
                    >
                    <div className="flex md:flex-row flex-col justify-center items-center md:my-8 md:mx-0 mx-8">
                        <h2 className="header md:text-5xl text-gray-100 text-center md:mb-0 mb-8">
                            Keep us update for any inquiries
                        </h2>
                        <Link 
                            to="/contact"
                            className="btn text-white bg-sky-500 uppercase font-medium md:mx-8 mx-4">
                            Reach out
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Inquiry;


