import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navlinks = [
        {path: '/about', name: 'About'},
        {path: '/contact', name: 'Contact'}
    ]

    return ( 
        <>
            <nav className='lg:px-64 md:px-40 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-sky-400 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-3xl text-xl uppercase font-semibold text-white'>
                            Medical Zone
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            {open ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                    
                    <div className={`${open ? "block" : "hidden"} md:flex`}>
                        <ul className="md:flex items-center md:text-lg font-medium uppercase">
                            {navlinks.map((navlink) => (
                                <li key={navlink.path} className='md:mx-8 md:my-0 my-4 hover:text-pink-100'>
                                    <Link to={navlink.path}>{navlink.name}</Link>
                                </li>
                            ))}
                            <li className='md:mx-8 md:my-0 my-4'>
                                <Link 
                                    className="bg-white px-4 py-2 hover:bg-pink-500 hover:text-white duration-500 rounded-md" 
                                    to='/login'>
                                        Login
                                    </Link>
                            </li>
                            <li className='md:mx-8 md:my-0 my-4'>
                                <Link 
                                    className="btn hover:text-pink-500 hover:bg-white" 
                                    to='/signup'>
                                        Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;