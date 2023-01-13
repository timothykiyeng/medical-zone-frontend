import AboutBanner from '../assets/about.jpg'
import "./About.css" 
import {SlEmotsmile} from "react-icons/sl"
import {GiProgression} from "react-icons/gi"
import {BsHeart} from "react-icons/bs"
import {HiOutlineUserGroup} from "react-icons/hi"
import { IconContext } from 'react-icons'

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
                            
                            <span className="text-pink-500 mx-2">About Us</span>
                        </h2>
                        <h1 className='md:text-5xl text-3xl font-bold uppercase text-sky-400 md:mt-8 mt-4 text-center'>Your Wellbeing & Satisfaction is Our Joy</h1>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6 md:mx-0 mx-4">
                    <h2 className="font-medium md:text-lg text-base text-pink-500">Our Values</h2>
                    <h2 className='md:text-1xl font-medium text-2xl text-black text-center'>We're an ambitious and smart team with a shared mission</h2>

                </div>
                <div className='flex justify-center space-x-8 text-base font-semibold' >
                    <IconContext.Provider value={{size:'4rem' ,color: 'gb(236 72 153)' }} >
                    <h1><SlEmotsmile size='4rem' color='rgb(236 72 153)'/>Customer Happiness</h1>
                    <h1><GiProgression size='4rem' color='rgb(236 72 153)'/>Customer Progress</h1>
                    <h1><BsHeart size='4rem' color='rgb(236 72 153)'/>Customer Welfare</h1>
                    <h1><HiOutlineUserGroup size='4rem' color='rgb(236 72 153)'/>Customer Progress</h1>
                    </IconContext.Provider>
                    </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h1>Our Team</h1>
            </div>



            
            <div className='flex flex-col justify-center items-center pt-10 p-10 text-pink-700 font-semibold'>
                
                <h1>LINKS</h1>
                <ul>
                    <li className='p-4 font-normal'>Home</li>
                    <li className='p-4 font-normal'>About</li>
                    <li className='p-4 font-normal'>Services</li>
                    <li className='p-4 font-normal'>Contact</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center '>
                <h2>SUPPORT</h2>
            </div>
        </>
     );
}
 
export default About;