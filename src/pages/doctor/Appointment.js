import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse, 
    startOfWeek,
    getDay, 
    locales
})


const appointments = [
    {
        title: "Cadiology test for Mercy",
        allDay: true,
        start: new Date(2023,0,11),
        end: new Date(2023,0,12)
    },
    {
        title: "Cadiology test for Mercy",
        allDay: true,
        start: new Date(2023,0,15),
        end: new Date(2023,0,17 )
    },
    {
        title: "Cadiology test for Mercy",
        allDay: true,
        start: new Date(2023,0,22),
        end: new Date(2023,0,24)
    },
    {
        title: "Cadiology test for Mercy",
        allDay: true,
        start: new Date(2023,0,26), 
        end: new Date(2023,0,26)
    }
]




const Appointment = () => {
    const [newAppointment, setNewAppointment] = useState({title: "", start: "", end: ""})
    const [allAppointments, setAllAppointments] = useState(appointments)

    const handleAddAppointment = () => {
        setAllAppointments([...allAppointments, newAppointment])
    }
    return ( 
        <>
            <div className="md:my-16 my-8">
                <div className="flex flex-col justi-center items-center">
                    <h1>Calendar</h1>
                    <h2>Add New Appointment</h2>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Add Title" 
                            style={{ width: "20%", 
                            marginRight: "10px" }} 
                            value={newAppointment.title} 
                            onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })} 
                        />
                        <DatePicker 
                            placeholderText="Start Date" 
                            style={{ marginRight: "10px" }} 
                            selected={newAppointment.start} 
                            onChange={(start) => setNewAppointment({ ...newAppointment, start })} 
                        />
                        <DatePicker 
                            placeholderText="End Date" 
                            selected={newAppointment.end} 
                            onChange={(end) => setNewAppointment({ ...newAppointment, end })} 
                        />
                        <button 
                            className="btn"
                            stlye={{ marginTop: "10px" }} 
                            onClick={handleAddAppointment}
                        >
                            Add Appointment
                        </button>
                    </div>
                </div>
                <Calendar 
                    localizer={localizer}
                    appointments={appointments}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 500, margin: "50px"}}
                />
            </div>
        </>
     );
}
 
export default Appointment;