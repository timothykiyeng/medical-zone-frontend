import React from 'react';
//import './DoctorProfile.css'


const DoctorProfile = ({ doc }) => {

  return (
    <div className='md:flex md:justify-center md:space-x-8 xl:mx-32 mx-8 md:my-16 my-8 min-h-[60vh]'>
      <img className='md:w-[50%] rounded-xl' src = {doc[0].image_url} alt='img'/>
      <div className='mt-8'>
        <h1 className='font-medium text-gray-800 uppercase'>{`Dr. ${doc[0].name}, ${doc[0].title}`}</h1>
        <h3 className='my-2 font-light'>{doc[0].bio}</h3>
        <h5 className='font-medium text-gray-800 uppercase '>Contact: 
          <span className='mx-1 text-sky-500 lowercase'>{doc[0].email}</span>
        </h5>
      </div>
    </div>
  )
}

export default DoctorProfile