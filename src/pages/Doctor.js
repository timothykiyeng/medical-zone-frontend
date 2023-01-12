import { useRef } from "react";

const Doctor = () => {
    const { id } = useRef()
    return ( 
        <>
            <div className="">
                <div className="md:flex ">
                    <Link to={`/doctor/${id}`}>
                        Patients
                    </Link>
                    <Link to={`/doctor/${id}`}>
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