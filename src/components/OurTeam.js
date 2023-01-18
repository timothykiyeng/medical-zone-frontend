import data from "../data/data.json"
import { motion } from "framer-motion";

function OurTeam  () {
   
    return ( 
          <>
            <div className='team-main-container md:my-32 my-16 md:mx-64 mx-8'>
              <h1 className="header text-center">Our Team</h1>
              <div className='team-container grid grid-cols-2 md:grid-cols-4'>
                {data.ourteam.map((team) => (
                  <motion.div 
                    whileInView={{ opacity: 1 }}
                    whileHover={{  y: -16 }}
                    transition={{type: 'spring', stiffness: 120}}
                    key={team.id} 
                    className="flex flex-col teams-center rounded-3xl md:mx-8 mx-0 p-8 md:my-4 my-8 bg-white shadow-md hover:shadow-lg hover:bg-sky-100 pb-6 ">
                    <img className="rounded-3xl" src={team.image} alt=""/>
                    <div className="md:pt-6 pt-4 p-4 text-center">
                        <p className="text-sky-500 text-xl font-semibold uppercase px-2">{team.name}</p>
                        <p className="text-gray-700 font-light md:text-lg text-base">{team.remarks}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
     );
}
 
export default OurTeam;