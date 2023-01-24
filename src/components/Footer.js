import * as React from 'react';
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs"


const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    // console.log(currentYear)

    return ( 
        <>
            <footer className="bg-pink-400 md:py-12 py-6">
                <div className="md:flex md:justify-around justify-center items-center  text-center md:text-base text-sm">
                    <div>
                        <h1>Medical Zone</h1>
                    </div>

                    <div className="md:my-0 my-2">
                        <p>Copyright &copy; 
                            <span className="mx-1">{currentYear}</span>|  
                            <Link 
                                to='/'
                                className="text-white md:mll-2 ml-1"
                                > 
                               Medical Zone
                            </Link>
                        </p>
                    </div>

                    <div className="flex justify-center text-lg text-gray-900">
                        <Link to='/'  className="mx-2">
                            <BsGithub />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsFacebook />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsInstagram />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsTwitter />
                        </Link>
                        <Link to='/'  className="mx-2">
                            <BsLinkedin />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
 
export default Footer;