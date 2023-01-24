import React, { useState } from 'react'
//import './PatientCollapsible.css'

const PatientCollapsible = ({ patient, docAppointments}) => {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <div className='patient'>
      <div className="container ">
        <button className={expand ? 'btn-clicked': 'btn'} onClick={handleClick}>
          {patient.name} ({patient.total_appts})
          <span className={expand ? 'hamburger cross' : 'hamburger'}>
            <span className="line line--top"></span>
            <span className="line line--middle"></span>
            <span className="line line--bottom"></span>
          </span>
        </button>
      </div>
      <div className='collapsible'>
        {docAppointments.map(appt => {
          if(appt.patient_id === patient.id) {
            return (
              <ul key={appt.id} className={expand ? "expanded" : 'collapsed'}>
                <h3 className='patient-list'>Date: 
                  <span className='patient-details-doc'>{appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}</span>
                </h3>
                <li className='patient-list'>Procedure: 
                  <span className='patient-details-doc'>{appt.title}</span>
                </li>
                <li className='patient-list'>Room: 
                  <span className='patient-details-doc'>{appt.location}</span>
                </li>
                <li className='patient-list'>Description: 
                  <span className='patient-details-doc'>{appt.description}</span>
                </li>
              </ul>
            )
          }
        })}
      </div>
    </div>
  )
}

export default PatientCollapsible