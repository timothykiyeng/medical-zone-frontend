import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFilePerson, BsCalendarPlus } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
//import './PortalNav.css'

const PortalNav = ({ user }) => {
  return (
    <div className='portal-nav '>
      {user.doc ? 
        <div className='nav-links md:my-8 flex justify-center items-center'>
          <NavLink className='portal-nav' to='/portal/patients'><BsFilePerson className='portal-nav-icon text-pink-500' /> Patients</NavLink>
          <NavLink className='portal-nav' to='/portal/calendar'><BsCalendarPlus className='portal-nav-icon text-gray-700 ' /> Calendar</NavLink>
        </div>
      :
      <div className='patient-nav min-h-[50vh]'>
        <NavLink className='patient-nav-btn' to='/portal/labresults'><BiTestTube className='patient-nav-icon' /> Lab Results</NavLink>
        <NavLink className='patient-nav-btn text-pink-500' to='/portal/appointments'><AiOutlineSchedule className='patient-nav-icon' /> Appointments</NavLink>
        <NavLink className='patient-nav-btn text-sky-500' to='/portal/calendar'><BsCalendarPlus className='patient-nav-icon' /> Calendar</NavLink>
      </div>
      }
    </div>
  )
}

export default PortalNav