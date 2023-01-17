import { Link } from "react-router-dom";
import getInTouch from "../assets/get-in-touch.jpg"

function Inquiry () {
    return (
        <>
            <div className="bg-cover object-cover h-64 w-full" style={{ backgroundImage: `url(${getInTouch})` }}>
            <h2>
                Keep us updated for any inuiries
            </h2>
            
            </div>
            <Link to="/contact"
                className="btn text-white bg-blue-400 uppercase font-medium md:mx-8 mx-4 position-absolute right-0 top-0">
                Reach out
            </Link>
        </>
    )
}

export default Inquiry;


