import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookAppointment from "../components/doctors/BookAppointments";
import PatientList from "../components/doctors/PatientList";

const Doctor = ({ setUser }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="md:mt-16 mt-12 md:mb-32 mb-16 md:mx-16 mx-6">
        <div className="md:flex justify-center items-center">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="btn text-white bg-blue-400 uppercase font-medium md:mx-8 mx-4"
          >
            Patients
          </button>
          <button className="btn" onClick={() => setShow((prev) => !prev)}>
            Book Appointment
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* list of all patients */}
        <div className="">
          <div className={`${open ? !show : "hidden"} `}>
            <PatientList />
          </div>
          <div className={`${show ? "" : "hidden"}`}>
            <BookAppointment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
