import data from "../data/data.json"
// import FaHome from "react-icons/fa"
// import FaTimes from "react-icons/fa"
// import FaUserAlt from "react-icons/fa"
// import IoPeople from "react-icons/io"

const OurValues = () => {
    // const icons = [
    //     {id: 1, name: FaHome}, 
    //     {id: 2, name: FaTimes}, 
    //     {id: 3, name: FaUserAlt}, 
    //     {id: 4, name: IoPeople}
    // ]
    return ( 
        <>
            <div className="md:my-32 my-16 md:px-64 px-8 ">
                <h1 className="text-center md:text-2xl text-lg text-pink-500">Our Values</h1>
                <h2 className="header text-center">We’re an ambitious and smart team with a shared mission</h2>
                
                <div className="md:mt-16 mt-8 md:flex items-center justify-center">
                    {data.ourvalues.map((value) => (
                        <div className="flex flex-col items-center justify-center md:mx-6 mx-0 md:my-0 my-8">
                            {/* {icons.map((icon) => (
                                <i>{icon.name}</i>
                            ))} */}
                            <h2 className="content-header font-medium">{value.name}</h2>
                            <p className="content text-center">{value.content}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
     );
}
 
export default OurValues;