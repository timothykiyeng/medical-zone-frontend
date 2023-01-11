import AboutBanner from '../assets/about.jpg'
import "./About.css" 

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
                    <h2 className="font-medium md:text-lg text-base text-white">

                        <span className="text-pink-500 mx-2">Our Values</span>
                    </h2>
                    <h1 className='md:text-1xl font-medium text-2xl text-black md:mt-8 mt-4 text-center'>We're an ambitious and smart team with a shared mission</h1>

                    <div className="flex flex-col justify-center items-left left lg:my-24 md:my-16 my-6 md:mx-0 mx-4">
                    <h2 className="font-medium md:text-lg text-base text-white text-align: left">

                    <span className="text-black mx-2">Our team</span>
                    </h2>
                </div>
                </div>
              


            </div>
        </>
     );
}
 
export default About;