const BookAppointment = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted successfully')
    }
    
    return ( 
        <>
            <div className="md:mx-64 mx-8">
                <div className="md:mt-16 mt-8 mb-8">
                    <h1 className="md:text-4xl text-3xl font-bold text-gray-800 mb-4">Book Appointment</h1>
                    <p className="md:text-lg text-base font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='flex items-center md:justify-center justify-start md:mb-36 mb-20'>
                    <div className="flex flex-col justify-center">
                        <div className="md:py-4">
                            <label for="department">Select Department</label> <br/>   
                            <select name='Select departnment' className="py-4 pl-2 pr-4 rounded-md w-full">
                                <option value="maternal-health">Maternal Health</option>
                                <option value="child-care">Child care</option>
                                <option value="eye-care">Eye care</option>
                                <option value="radiology">Radiology</option>
                                <option value="orthopedic">Orthopedic</option>
                                <option value="urology">Urology</option>
                                <option value="dermatology">Dermatology</option>
                                <option value="cardiology">Cardiology</option>
                                <option value="oncology">Oncology</option>
                                <option value="pediatric">Pediatric</option>
                            </select>
                        </div>
                        <div className="md:my-4 my-2">
                            <input className="py-4 pl-2 pr-4 rounded-md w-full border-2 outline-none focus-within:border-sky-400 " type="text" name="patient's name" placeholder="Patient's name"/>
                        </div>
                        <div className="md:my-4 my-2">
                            <input className="py-4 pl-2 pr-4 rounded-md w-full border-2 outline-none focus-within:border-sky-400 " type="text" name="appointment date" placeholder="Appointment date"/>
                        </div>
                        <div className="md:my-4 my-2">
                            <textarea 
                                rows="6" 
                                cols="30" 
                                className="py-4 pl-2 pr-4 rounded-md w-full border-2 outline-none focus-within:border-sky-400"
                                placeholder="Your Message">
                            </textarea>
                        </div>
                        <button className="btn hover:bg-pink-600 font-medium uppercase">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default BookAppointment;