import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <div className="bg-sky-400 py-2 px-6">
            <nav className='md:py-6 py-4'>
                <div className="navbar justify-between items-center " >
                    <div className='flex items-center md:justify-around justify-between'>
                        <Link to='/' className='md:text-3xl text-xl uppercase font-semibold text-white'>
                            Medical Zone
                        </Link>
                        
                        <ul className="md:flex items-center md:text-lg font-medium uppercase hidden">
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-2'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-8 md:my-0 md:py-0 py-3'>
                                <Link to='/login' className="py-2 px-4 rounded-lg bg-white">
                                    Login
                                </Link>
                            </li>
                            <li className='md:mx-8 md:my-0 md:py-0 py-3'>
                                <Link to='/signup' className="py-2 px-4 rounded-lg bg-pink-500 text-white">
                                    Signup
                                </Link>
                            </li>
                            
                        </ul>

                        <button onClick={showMenu} className="md:hidden">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;