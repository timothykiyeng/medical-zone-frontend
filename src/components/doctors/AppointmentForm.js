import { useState } from "react";


const AppointmentForm = () => {
    const [title, setTitle] = useState('')
    const [patient_name, setPatient_name] = useState('')
    const [appointment_date, setAppointment_date] = useState('')
    const [description, setDescription] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const appointments = {title, patient_name, appointment_date, description}

        fetch('https://localhost:3000/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointments)
            })
            .then(() => {
                alert('You added a new appointment successfully!')

                setTitle('')
                setPatient_name('')
                setAppointment_date('')
                setDescription('')
            })
    }

   
    


    return ( 
        <>
            <form 
                    onSubmit={handleSubmit} 
                    className="">
                    <div className="md:flex items-center justify-center mt-4">
                        <div className="md:mx-4">
                            <input 
                                onChange={(e) => setTitle(e.target.value)}
                                className="datepicker" 
                                type="text" 
                                name="title"
                                value={title} 
                                placeholder="Title"
                            />
                        </div>
                        <div className="md:mx-4">
                            <input 
                                onChange={(e) => setPatient_name(e.target.value)}
                                className="datepicker" 
                                type="text" 
                                name="patient_name" 
                                value={patient_name}
                                placeholder="Patient Name"
                            />
                        </div>
                        <div className="md:mx-4">
                            <input 
                                onChange={(e) => setAppointment_date(e.target.value)}
                                className="datepicker text-gray-600" 
                                type="date" 
                                name="appointment_date" 
                                value={appointment_date}
                                placeholder="Appointment Date"
                            />
                        </div>
                        <div className="md:mx-4">
                            <input 
                                onChange={(e) => setDescription(e.target.value)}
                                className="datepicker" 
                                type="text" 
                                name="description"
                                value={description} 
                                placeholder="Description"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn mt-2">
                            Submit Request
                        </button>
                    </div>
                </form>
        </>
    );
}
 
export default AppointmentForm;