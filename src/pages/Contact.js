import AboutBanner from '../assets/about.jpg'
import { HiOutlineMail } from 'react-icons/hi'
import { MdLocationPin } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'


const Contact = () => {
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
                    <div className="flex justify-center lg:my-24 md:my-16 my-6">
                        <h2 className="font-medium md:text-lg text-base text-white">
                            Home - 
                            <span className="text-pink-500 mx-2">Contact Us</span>
                        </h2>
                    </div>
                </div>

                <div className='md:flex justify-around md:mx-0 mx-8 md:my-16 my-8'>
                    <div>
                        <h1 className='md:text-4xl text-2xl mb-3 font-semibold text-gray-700'>Contact Us</h1>
                        <p className='md:text-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <form>
                            <div className='md:flex justify-between'>
                                <input 
                                    type="text" 
                                    placeholder='Write your FirstName here...'
                                    className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                                    />
                                <input 
                                    type="text" 
                                    placeholder='Write your LastName here...'
                                    className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                                    />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder='Write your email here...'
                                    className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                                    />
                            </div>
                            <div>
                                <textarea 
                                    rows="4" 
                                    cols="30" 
                                    placeholder='Write your message here...'
                                    className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                                    ></textarea>
                            </div>
                            <button type="submit" className='mt-4 py-2 px-4 w-full bg-sky-400 rounded-md'>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className='flex flex-col text-lg md:mt-0 mt-16'>
                        <div className='flex justify-between items-center bg-sky-400 md:px-12 md:py-8 p-4 md:m-6 m-4 rounded-lg'>
                            <FaPhone />
                            +2547 1234 5678
                        </div>
                        <div className='flex justify-between items-center bg-sky-400 md:px-12 md:py-8 p-4 md:m-6 m-4 rounded-lg'>
                            <HiOutlineMail />
                            info@mediheal.com
                        </div>
                        <div className='flex justify-between items-center bg-sky-400 md:px-12 md:py-8 p-4 md:m-6 m-4 rounded-lg'>
                            <MdLocationPin />
                            Langata, Nairobi
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;