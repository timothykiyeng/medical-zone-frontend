import HeroBanner from '../assets/hero.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return ( 
        <>
            <div className="" 
                style={{
                        backgroundImage: `url(${HeroBanner})`, 
                        backgroundSize: `cover`,
                        paddingTop: `100px`, 
                        paddingBottom: `300px` 
                    }}
                >
                <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6 lg:mx-32 md:mx-16 mx-8">
                    <h2 className="font-medium md:text-lg text-base text-gray-500">
                        <span className="text-pink-500 mx-2">Home</span>
                    </h2>
                    <h1 className='mb-4 md:text-5xl text-3xl font-bold uppercase text-sky-600 md:mt-8 mt-4 text-center'>WELCOME TO OUR HOSPITAL WHERE HEALING BEGINS</h1>
                    <p className='text-center md:text-lg text-sm'>At our hospital, we believe in providing the highest quality of care to our patients, which is why we have invested in the latest technology, and have a team of highly skilled and compassionate healthcare professionals, ready to help you and your loved ones on your journey to wellness.</p>
                    <div className='md:flex justify-center items-center md:pt-16 pt-8'>
                        <Link to='/signup' className='btn bg-white text-black uppercase font-medium md:mr-8 mr-2'>
                            Get Started
                        </Link>
                        <Link to='/login' className='btn uppercase font-medium md:ml-8 ml-2'>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;