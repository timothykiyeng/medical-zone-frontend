import * as React from 'react';
import Gynecology from "../assets/sterility.jpg"
import Skin from "../assets/skin.jpg"
import Dentist from "../assets/dentist.jpg"
import Ear from "../assets/ear.jpg"
import { Fade } from "react-reveal"


const SpecialtyCard = () => {
    const specialties = [
        {id: 1, image: Gynecology, name: "Gynecology"}, 
        {id: 2, image: Skin, name: "Skin"}, 
        {id: 3, image: Ear, name: "Ear, Nose, Throat"}, 
        {id: 4, image: Dentist, name: "Dentist"}
    ]

    return ( 
        <>
            <div className="md:flex">
                <Fade left>
                    {specialties.map((specialty) => (
                        <div key={specialty.id} className="flex flex-col items-center rounded-2xl md:mx-8 mx-0 md:my-4 my-8 bg-white w-full pb-6 ">
                            <img className="w-full rounded-xl" src={specialty.image} alt=""/>
                            <p className="text-center md:pt-6 pt-4 text-gray-700 text-xl font-semibold uppercase px-2">{specialty.name}</p>
                        </div>
                    ))}
                </Fade>
            </div>
        </>
     );
}
 
export default SpecialtyCard;