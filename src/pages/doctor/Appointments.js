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


const events = [
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




const Appointments = () => {
    return ( 
        <>
            <div className="md:my-16 my-8">
                <Calendar 
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 500, margin: "50px"}}
                />
            </div>
        </>
     );
}
 
export default Appointments;