import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MdBloodtype } from "react-icons/md";
import { FaHeartbeat, FaMicroscope, FaBrain } from "react-icons/fa";
import { GiNightSleep, GiNoseSide, GiLoveInjection } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { GrEmergency } from "react-icons/gr";
import { IoIosBody } from "react-icons/io";


const Departments = ({ departments, setDept }) => {
  let navigate = useNavigate();

  const handleClick = (dept) => {
    setDept(departments.filter(d => d.id === dept.id))
    navigate(`/departments/${dept.id}`)
  }

  return (
    <div className='our-team min-h-[80vh] md:mx-32 mx-8'>
      <h1 className='header md:mb-16 mb-8 mt-4'>Departments:</h1>
      <div className='departments grid md:grid-cols-3 grid-cols-2 md:gap-16 gap-8 md:mb-16 mb-8'>
        <div className='dept-card' onClick={() => handleClick(departments[0])}>{<GiNightSleep className='dept-icon' />} {departments[0].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[1])}>{<FaHeartbeat className='dept-icon' />} {departments[1].name} </div>
        <div className='dept-card' onClick={() => handleClick(departments[2])}>{<GiNoseSide className='dept-icon' />} {departments[2].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[3])}>{<TbMoodKid className='dept-icon' />} {departments[3].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[4])}>{<GrEmergency className='dept-icon' />} {departments[4].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[5])}>{<IoIosBody className='dept-icon' />} {departments[5].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[6])}>{<MdBloodtype className='dept-icon' />} {departments[6].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[7])}>{<FaMicroscope className='dept-icon' />} {departments[7].name}  </div>
        <div className='dept-card' onClick={() => handleClick(departments[8])}>{<GiLoveInjection className='dept-icon' />} {departments[8].name} </div>
        <div className='dept-card' onClick={() => handleClick(departments[9])}>{<FaBrain className='dept-icon' />} {departments[9].name} </div>
      </div>
    </div>
  )
  
}

export default Departments