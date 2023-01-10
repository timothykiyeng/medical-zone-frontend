const ContactForm = () => {
    return ( 
        <>
            <form>
                <div className='md:flex justify-between'>
                    <input 
                        type="text" 
                        placeholder='First Name here...'
                        className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                    <input 
                        type="text" 
                        placeholder='Last Name here...'
                        className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Email here...'
                        className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                        />
                </div>
                <div>
                    <textarea 
                        rows="4" 
                        cols="30" 
                        placeholder='Message here...'
                        className='pl-1 pr-3 py-2 rounded-md my-4 outline-none focus-within:ring-2 focus-within:ring-sky-400 border-2 border-gray-400 focus:border-sky-400 w-full'
                        ></textarea>
                </div>
                <button type="submit" className='mt-4 py-2 px-4 w-full bg-sky-400 rounded-md'>
                    Send Message
                </button>
            </form>
        </>
     );
}
 
export default ContactForm;