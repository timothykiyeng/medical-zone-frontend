import React, { useState } from 'react'
//import './ApptCollapsible.css'

const ApptCollapsible = ({ appt }) => {
  console.log('appt: ', appt);
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <div className='appt flex flex-col items-center justify-center md:my-16 my-8'>
      <div className="container flex flex-col items-center justify-center">
        <button className={expand ? 'btn-clicked': 'btn'} onClick={handleClick}>
        {appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}: 
          <br/> 
          <span className={expand ? 'hamburger cross' : 'hamburger'}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>

      <div className='pt-4 text-sky-500 font-medium text-lg '>{appt.title}</div>

      <div className='collapsible mt-8 md:text-xl text-lg text-center font-light'>
        <ul key={appt.id} className={expand ? "expanded" : 'collapsed'}>
          <li>Description: {appt.description}</li>
        </ul>
      </div>
    </div>
  )
}

export default ApptCollapsible