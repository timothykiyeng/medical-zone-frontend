import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <div className="bg-blue-400 py-2 px-6">
            <nav className='md:py-6 py-4'>
                <div className="navbar justify-between items-center " >
                    <div className='flex items-center md:justify-around justify-between'>
                        <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>
                            Doctor's Appointment
                        </Link>
                        
                        <ul className="md:flex items-center md:text-lg font-medium hidden">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link 
                                    to='/contact' 
                                    className="border-2 bg-gray-800 px-4 py-1 hover:bg-gray-600 duration-500 text-white rounded-md">
                                        Contact
                                </Link>
                            </li>
                        </ul>

                        <button onClick={showMenu} className="md:hidden">
                            <FaBars />
                        </button>
                    </div>

                    <div ref={menuRef} className="md:hidden block">
                        <ul className="md:text-lg font-medium">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link 
                                    to='/contact' 
                                    className="border-2 bg-gray-800 px-4 py-1 hover:bg-gray-600 duration-500 text-white rounded-md">
                                        Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;