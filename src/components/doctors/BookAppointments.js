import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Pregnancy test for Mercy",
        name: "Mercy Dale",
        allDay: false,
        start: new Date(2023,0,13),
        end: new Date(2023,0,14)
    },
    {
        title: "Cadiology test for Niha Raj",
        name: "Niha Raj",
        allDay: false,
        start: new Date(2023,0,15),
        end: new Date(2023,0,17 )
    },
    {
        title: "Chemotherapy test for MacDill",
        name: "John MacDill",
        allDay: false,
        start: new Date(2023,0,22),
        end: new Date(2023,0,24)
    },
    {
        title: "Ear test for Jennifer",
        name: "Jennifer Nate",
        allDay: false,
        start: new Date(2023,0,26), 
        end: new Date(2023,0,26)
    }
]

function BookAppointments() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) && (d4 <= d3) ))
            {   
                alert("Cannot make appointment!"); 
                break;
            }
        }
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="flex flex-col justify-center mx-2 md:mx-0 md:my-16 my-8">
            <h1 className="header text-gray-700 text-center">Calendar</h1>
            <h2 className="font-light text-pink-500 text-center">Add New Appointment</h2>
            <div className="md:flex flex-col justify-center items-center md:mb-16 mb-8">
                <div className="md:flex ">
                    <input 
                        type="text" 
                        className="title"
                        placeholder="Add Title" 
                        value={newEvent.title} 
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        className="title"
                        placeholder="Add Patient's Name..." 
                        value={newEvent.name} 
                        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} 
                    />
                    <DatePicker
                        className="datepicker"  
                        placeholderText="Start Date" 
                        selected={newEvent.start} 
                        onChange={(start) => setNewEvent({ ...newEvent, start })} 
                    />
                    <DatePicker
                        className="datepicker"  
                        placeholderText="End Date" 
                        selected={newEvent.end} 
                        onChange={(end) => setNewEvent({ ...newEvent, end })} 
                    />
                </div>
                <div className="flex justify-center items-center">
                    <button 
                        className="btn md:mt-8 mt-4 uppercase font-semibold"
                        onClick={handleAddEvent}>
                        Add Appointment
                    </button>
                </div>
            </div>

            <Calendar 
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 600}} />
        </div>
    );
}

export default BookAppointments;