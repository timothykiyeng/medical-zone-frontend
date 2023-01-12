import Button from "../components/Button";

const Doctor = () => {
    return ( 
        <>
            <div className="">
                <div className="md:flex ">
                    <Link to='/patients'>
                        Patients
                    </Link>
                    <Button>
                        Book Appointment
                    </Button>
                </div>

                {/* list of all patients */}
                <div>
                    
                </div>
            </div>
        </>
    );
}
 
export default Doctor;