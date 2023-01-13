const PatientList = () => {
    return ( 
        <>
            <div>
                <h1 className="header text-gray-700 text-center md:my-8 my-4">Patient List</h1>
                
                <div>
                    {/* <div className="md:my-16 my-8">
                    <div className="flex flex-col justify-center items-center mx-8 md:mx-0">
                        <h1 className="header text-gray-700">Calendar</h1>
                        <h2 className="font-light text-pink-500">Add New Appointment</h2>
                        <div className="md:flex flex-col justify-center items-center">
                            <div className="md:flex ">
                                <input 
                                    type="text" 
                                    className="title"
                                    placeholder="Add Title..." 
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
                                    placeholderText="Start Date..." 
                                    selected={newEvent.start} 
                                    onChange={(start) => setNewEvent({ ...newEvent, start })} 
                                />
                                <DatePicker
                                    className="datepicker" 
                                    placeholderText="End Date..." 
                                    selected={newEvent.end} 
                                    onChange={(end) => setNewEvent({ ...newEvent, end })} 
                                />
                            </div>
                            <button 
                                className="btn md:mt-8 mt-4 w-full"
                                onClick={handleAddEvent}
                            >
                                Add Appointment
                            </button>
                        </div>
                    </div>
                    <Calendar 
                        localizer={localizer}
                        appointments={allEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{height: 500, margin: "50px"}}
                    /> */}

                </div>
            </div>
        </>
     );
}
 
export default PatientList;