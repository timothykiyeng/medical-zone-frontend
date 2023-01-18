import { useEffect, useState } from "react";

function OurTeam  () {
    const [doctors, setDoctors] = useState([]);
    
  
    useEffect(() => {
      fetch(`http://localhost:3000/doctors`)
        .then((response) => response.json())
        .then((d) => setDoctors(d));
    }, []);
    return ( 
        <>
        <div className='team-main-container'>
        <h1>Meet The Team</h1>
        <div className='team-container'>
          {doctors ? doctors.map((doc) => {
              <div className='team-card'>
                <img
                  src={doc.image}
                  alt='Image by <a href="https://www.freepik.com/free-photo/front-view-nurse-wearing-stethoscope_32486202.htm#page=2&query=black%20woman%20doctor&position=7&from_view=keyword">Freepik</a>'
                />
                <h2>
                  MD. {doc.name}
                </h2>
                <p>{doc.doctor.bio} Specialist</p>
              </div>
            
          }) : <h1>Our Practitioners will appear here</h1>}
        </div>
      </div>
 </>
     );
}
 
export default OurTeam;