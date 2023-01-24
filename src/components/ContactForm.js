import * as React from 'react';
const ContactForm = () => {
    return ( 
        <>
            <form>
                <div className='md:flex items-center justify-between md:space-x-8'>
                    <input 
                        type="text" 
                        placeholder='First Name here...'
                        className='pl-1 pr-3 py-3 rounded-md my-4 outline-none border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                    <input 
                        type="text" 
                        placeholder='Last Name here...'
                        className='pl-1 pr-3 py-3 rounded-md my-4 outline-none border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Email here...'
                        className='pl-1 pr-3 py-3 rounded-md my-4 outline-none border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                </div>
                <div>
                    <textarea 
                        rows="4" 
                        cols="30" 
                        placeholder='Message here...'
                        className='pl-1 pr-3 py-3 rounded-md my-4 outline-none border-2 border-gray-400 focus:border-sky-400 w-full'
                        ></textarea>
                </div>
                <button type="submit" className='mt-4 py-3 px-4 w-full bg-sky-400 rounded-md'>
                    Send Message
                </button>
            </form>
        </>
     );
}
 
export default ContactForm;