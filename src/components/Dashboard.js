import React from 'react'
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = ({user}) => {
   const navigate =  useNavigate(user)
   return (
         <div>
            {user.doc ? navigate('/doctor')
               :
               navigate('/patient')
            } 
         </div>
   )
}

export default Dashboard;