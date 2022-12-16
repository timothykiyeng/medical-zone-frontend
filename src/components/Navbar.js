import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaUserMd, FaUser, FaBars } from "react-icons/fa";


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
                        <Link to='/' className='md:text-3xl text-xl uppercase font-semibold text-gray-100'>
                            MediHeal Hospital
                        </Link>
                        
                        <ul className="md:flex items-center md:text-lg font-medium uppercase hidden">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/signup'>
                                    <FaUser className="md:text-4xl text-3xl text-gray-100" />
                                </Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/signup'>
                                    <FaUserMd className="md:text-4xl text-3xl text-pink-500" />
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
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/signup'>
                                    <FaUser className="md:text-4xl text-3xl text-gray-100" />
                                </Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/signup'>
                                    <FaUserMd className="md:text-4xl text-3xl text-pink-500" />
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