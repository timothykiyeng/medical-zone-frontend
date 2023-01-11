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
        title: "Cadiology test for Njoroge",
        allDay: true,
        start: new Date(2023,0,15),
        end: new Date(2023,0,17 )
    },
    {
        title: "Cadiology test for MacDill",
        allDay: true,
        start: new Date(2023,0,22),
        end: new Date(2023,0,24)
    },
    {
        title: "Cadiology test for Priscilla",
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
        console.log('appointment created successfully')
        // for (let i=0; i<allAppointments.length; i++){
        //     const d1 = new Date (allAppointments[i].start);
        //     const d2 = new Date(newAppointment.start);
        //     const d3 = new Date(allAppointments[i].end);
        //     const d4 = new Date(newAppointment.end);

        //      if (
        //       ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
        //         (d4 <= d3) )
        //       )
        //     {   
        //         alert("CLASH"); 
        //         break;
        //      }
        // }
    }


    return ( 
        <>
            <div className="md:my-16 my-8">
                <div className="flex flex-col justify-center items-center mx-8 md:mx-0">
                    <h1 className="header text-gray-700">Calendar</h1>
                    <h2 className="font-light text-pink-500">Add New Appointment</h2>
                    <div className="">
                        <div className="md:flex ">
                            <input 
                                type="text" 
                                className="title "
                                placeholder="Add Title" 
                                value={newAppointment.title} 
                                onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })} 
                            />
                            <DatePicker
                                className="datepicker" 
                                placeholderText="Start Date" 
                                style={{ marginRight: "10px" }} 
                                selected={newAppointment.start} 
                                onChange={(start) => setNewAppointment({ ...newAppointment, start })} 
                            />
                            <DatePicker
                                className="datepicker" 
                                placeholderText="End Date" 
                                selected={newAppointment.end} 
                                onChange={(end) => setNewAppointment({ ...newAppointment, end })} 
                            />
                        </div>
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