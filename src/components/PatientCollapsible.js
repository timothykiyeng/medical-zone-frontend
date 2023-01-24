import { motion } from "framer-motion"


const PatientCollapsible = ({ patient, docAppointments}) => {

  return (
    <div className='patient grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
      <motion.div 
        whileInView={{ opacity: 1 }}
        whileHover={{  y: -16 }}
        transition={{type: 'spring', stiffness: 120}}
        className='border-2 border-sky-300 hover:bg-sky-100 rounded-xl my-4'>
        {docAppointments.map(appt => {
          if(appt.patient_id === patient.id) {
            return (
              <div 
                
                key={appt.id} 
                className='p-8'>
                <h3 className='patient-list'>Date: 
                  <span className='patient-details-doc font-normal text-sky-500'>{patient.name}</span>
                </h3>
                <h3 className='patient-list'>Date: 
                  <span className='patient-details-doc'>{appt.startDate.split('-')[1]}/{appt.startDate.split('-')[2].split('T')[0]}/{appt.startDate.split('-')[0]}</span>
                </h3>
                <p className='patient-list'>Procedure: 
                  <span className='patient-details-doc'>{appt.title}</span>
                </p>
                <p className='patient-list'>Room: 
                  <span className='patient-details-doc'>{appt.location}</span>
                </p>
                <p className='patient-list'>Description: 
                  <span className='patient-details-doc'>{appt.description}</span>
                </p>
              </div>
            )
          }
        })}
      </motion.div>
    </div>
  )
}

export default PatientCollapsible