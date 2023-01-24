import React from 'react';
import { useNavigate } from 'react-router-dom';


const DepartmentProfile = ({ dept, setDoc, doctors }) => {
  let navigate = useNavigate();

  const handleClick = (id) => {
    setDoc(doctors.filter(d => d.id === id))
    navigate(`/doctors/${id}`)
  }
  
  return (
    <div className='dept-profile min-h-[80vh] md:mx-32 mx-8 my-8 rounded-xl bg-sky-200 flex flex-col items-center justify-center'>
      <h1 className='dept-title header md:text-3xl'>{dept[0].name}</h1>
      {/* <img src={dept[0].image} alt='img' className='dept-img'/> */}
      <div className='doc-list  '>
        <h3 className='header text-sky-500'>Doctor:</h3>
        {dept[0].doctors ? dept[0].doctors.map(doc => 
          <button 
            key={doc.id} 
            className='btn my-4'
            onClick={() => handleClick(doc.id)}
            >{`Dr. ${doc.name}, ${doc.title}`}</button>) 
        : null}
      </div>
    </div>
  )
}

export default DepartmentProfile;