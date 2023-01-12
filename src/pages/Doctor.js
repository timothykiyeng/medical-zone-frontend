import { useRef } from "react";
import { Link } from "react-router-dom";

const Doctor = () => {
    const { id } = useRef()
    
    return ( 
        <>
            <div className="md:mt-16 mt-12 md:mb-32 mb-16 md:mx-16 mx-6">
                <div className="md:flex justify-center items-center">
                    <Link 
                        to={`/doctor/${id}`}
                        className='btn text-white bg-blue-400 uppercase font-medium md:mx-8 mx-4'
                        >
                        Patients
                    </Link>
                    <Link 
                        to={`/doctor/${id}`}
                        className='btn'
                        >
                        Book Appointment
                    </Link>
                </div>

                {/* list of all patients */}
                <div>
                    
                </div>
            </div>
        </>
    );
}
 
export default Doctor;