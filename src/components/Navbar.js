import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
            <nav className="bg-blue-400 p-6">
                <div className="flex md:justify-around justify-between">
                    <div>
                        Doctor's Appointment Booking
                    </div>

                    <div>
                        <ul className="md:flex">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;