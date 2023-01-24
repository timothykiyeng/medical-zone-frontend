import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const api = "http://127.0.0.1:3000"

const Navbar = ({user, setUser}) => {
    function handleLogout(){
        fetch(`${api}/logout`, {
            method: 'DELETE',
        }).then(() => {
            setUser(null)
        });
      }
    const [open, setOpen] = useState(false)

    const navlinks = [
        {path: '/', name: 'Home'},
        {path: '/about', name: 'About'},
        {path: '/contact', name: 'Contact'},
        {path: '/departments', name: 'Departments'}
    ]
    
    // const [doc, setDoc] = useState(false)

    return ( 
        <>
            <nav className=' lg:px-32  px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-sky-400 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between '>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='flex items-center lg:text-3xl md:2xl text-xl uppercase font-semibold text-white'>
                            <img className="md: md:w-16 w-8" src={Logo} alt="logo"/>
                            Medical Zone
                        </Link>
                        
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            {open ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                    
                    <div className={`${open ? "block" : "hidden"} md:flex`}>
                        <ul className="md:flex items-center md:text-lg text-base uppercase">
                            {navlinks.map((navlink) => (
                                <li key={navlink.path} className='md:mx-8 md:my-0 my-4 hover:text-pink-100'>
                                    <Link to={navlink.path}>{navlink.name}</Link>
                                </li>
                            ))}
                            
                            <NavLink 
                                className="mx-2" 
                                to='/portal'
                                // to={user(doc) ? ('/doctor') : ('/patient')}
                                >
                                {user ? 'Portal' : null}
                            </NavLink>
                            {user ?
                                <NavLink 
                                    to='/' 
                                    onClick={handleLogout}
                                    className="btn"
                                    >
                                        Log Out
                                </NavLink>
                                :
                                <>
                                <Link 
                                    className="bg-white px-4 py-2 hover:bg-pink-400 hover:text-white duration-500 rounded-md" 
                                    to='/login'>
                                        Login
                                </Link>
                                
                                <Link 
                                    className="btn mx-2 hover:text-pink-500 hover:bg-white" 
                                    to='/signup'>
                                        SignUp
                                    </Link>
                                </>
                            }
                                
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;