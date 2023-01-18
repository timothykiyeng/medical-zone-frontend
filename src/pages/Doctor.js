import { useState } from "react";
import BookAppointment from "../components/doctors/BookAppointments"
import PatientList from "../components/doctors/PatientList"

const Doctor = ({appointments}) => {
    // const { id } = useRef()
    const [show, setShow] = useState(true)
    const [open,  setOpen] = useState(false)


    return ( 
        <>
            <div className="md:mt-16 mt-12 md:mb-32 mb-16 md:mx-16 mx-6">
                <div className="md:flex justify-center items-center">
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className='btn text-white bg-blue-400 uppercase font-medium md:mx-8 mx-4'
                        >
                        Patient List
                    </button>
                    <button 
                        className='btn'
                        onClick={() => setShow((prev) => !prev)}
                        >
                        Book Appointment
                    </button>
                </div>

                {/* list of all patients */}
                <div className="">
                    <div className={`${open ? !show : "hidden" } `}>
                        <PatientList />
                    </div>
                    <div className={`${show ? !open : "hidden"}`}>
                        <BookAppointment appointments={appointments} />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Doctor;