import UseFetch from "../useFetch";

const PatientList = () => {
    const {data: patients} = UseFetch("http://localhost:3000/patients")

    console.log(patients)
    return ( 
        <>
            <div>
                <h1 className="header text-gray-700 text-center md:my-8 my-4">Patient List</h1>
                
                <div>
                   
                </div>
            </div>
        </>
     );
}
 
export default PatientList;