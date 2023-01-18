import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import data from "../../data/data.json";

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
            description: "Mercy Dale",
            allDay: false,
            start: new Date(2023,0,13),
            end: new Date(2023,0,14)
        },
        {
            title: "Cadiology test for Niha Raj",
            description: "Niha Raj",
            allDay: false,
            start: new Date(2023,0,15),
            end: new Date(2023,0,17 )
        },
        {
            title: "Chemotherapy test for MacDill",
            description: "John MacDill",
            allDay: false,
            start: new Date(2023,0,22),
            end: new Date(2023,0,24)
        },
        {
            title: "Ear test for Jennifer",
            description: "Jennifer Nate",
            allDay: false,
            start: new Date(2023,0,26), 
            end: new Date(2023,0,26)
        }
    ]



function BookAppointments({appointments}) {
    // var events;
    // fetch('http://localhost:3000/appointments')
    // .then(res => res.json())
    // .then(data => {
    //     events = data;
    // })
    // .then(() => {
    //     console.log(events);
    // });
    // const events = data.appointments
    console.log(events);

    // {connect this to backend}
    const [newEvent, setNewEvent] = useState({ title: "", description: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
  

    const handleAddEvent = (e) => {
        e.preventDefault();
        
        setAllEvents([...allEvents, newEvent]);
    }

    // add new event onclick {connect this to backend}
    const handleSelectSlot = useCallback(
        ({ start, end }) => {
        const title = window.prompt('New Event Name') 

        if (title) {
            setAllEvents((prev) => [...prev, { start, end, title }])
        }
        },
        [setAllEvents]
    )

    // show more info onclick appointment
    const handleSelectEvent = useCallback(
        (event) => window.alert(`Title: ${event.title}  Desctiption: ${event.description}`),
        []
    )

    return (
        <div className="flex flex-col justify-center mx-2 md:mx-0 md:my-16 my-8">
            <h1 className="header text-gray-700 text-center">Calendar</h1>
            <h2 className="font-light text-pink-500 text-center">Add New Appointment</h2>
            <form onSubmit={handleAddEvent} className="md:flex flex-col justify-center items-center md:mb-16 mb-8">
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
                        value={newEvent.description} 
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} 
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
                        >
                        Add Appointment
                    </button>
                </div>
            </form>

            <Calendar 
                className="z-[0]"
                localizer={localizer} 
                events={allEvents} 
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 600}}
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                />
        </div>
    );
}

export default BookAppointments;