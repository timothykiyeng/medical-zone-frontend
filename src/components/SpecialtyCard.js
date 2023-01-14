import Gynecology from "../assets/sterility.jpg"
import Skin from "../assets/skin.jpg"
import Dentist from "../assets/dentist.jpg"
import Ear from "../assets/ear.jpg"
import { Fade } from "react-reveal"


const SpecialtyCard = () => {
    const specialties = [
        {image: Gynecology, name: "Gynecology"}, 
        {image: Skin, name: "Skin"}, 
        {image: Ear, name: "Ear, Nose, Throat"}, 
        {image: Dentist, name: "Dentist"}
    ]

    return ( 
        <>
            <div className="md:flex">
                <Fade left>
                    {specialties.map((specialty) => (
                        <div className="flex flex-col items-center rounded-2xl md:mx-8 mx-0 md:my-4 my-8 bg-white w-full pb-6 ">
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