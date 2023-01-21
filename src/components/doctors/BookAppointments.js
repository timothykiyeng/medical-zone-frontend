import { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";

const BookAppointment = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/appointments`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data);
            
        })
    }, [])

    return ( 
        <>
            <h1 className='md:text-4xl text-3xl font-bold uppercase text-gray-800 md:mt-8 mt-4 text-center'>Book Appointment</h1>
            <p className="mt-4 text-lg font-light ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sapien aliquam, convallis nibh in, gravida orci. Vestibulum congue fermentum varius.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae sapien aliquam, convallis nibh in, gravida orci. Vestibulum congue fermentum varius.
            </p>

            <div className="">
                <AppointmentForm />
            </div>

            <div className="flex flex-col justify-center items-center md:mt-16 mt-8">
                <h1 className='md:text-4xl text-3xl font-bold uppercase text-gray-800 md:mt-8 md:my-8 my-4 text-center'>Appointment Summary</h1>
                <table>
                    <tr className="border-2 border-sky-500  text-gray-800 md:text-xl text-lg">
                        <th className="border-2 border-sky-500 p-3">ID</th>
                        <th className="border-2 border-sky-500 p-3">Patient Name</th>
                        <th className="border-2 border-sky-500 p-3">Date</th>
                        <th className="border-2 border-sky-500 p-3">Description</th>
                        <th className="border-2 border-sky-500 p-3">Edit</th>
                        <th className="border-2 border-sky-500 p-3">Delete</th>
                    </tr>
                    <tr className="border-2 border-sky-500 p-2">
                        <td className="border-2 border-sky-500 p-2">Alfreds Futterkiste</td>
                        <td className="border-2 border-sky-500 p-2">Maria Anders</td>
                        <td className="border-2 border-sky-500 p-2">Germany</td>
                        <td className="border-2 border-sky-500 p-2">Germany</td>
                    </tr>
                    <tr className="border-2 border-sky-500 p-2">
                        <td className="border-2 border-sky-500 p-2">Centro comercial Moctezuma</td>
                        <td className="border-2 border-sky-500 p-2">Francisco Chang</td>
                        <td className="border-2 border-sky-500 p-2">Mexico</td>
                        <td className="border-2 border-sky-500 p-2">Germany</td>
                    </tr>
                </table> 
            </div>
        </>
    );
}
 
export default BookAppointment;