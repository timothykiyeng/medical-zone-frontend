import { FaUserCircle } from 'react-icons/fa'
import { IoGridOutline } from 'react-icons/io'
import { MdLogout, MdAccountCircle } from 'react-icons/md'
import { TbListDetails } from 'react-icons/tb'
import { FaCalendarAlt } from 'react-icons/fa'



const Sidebar = () => {
    return ( 
        <>
            <div className='flex flex-col justify-center'>
                <h1>Medical Zone</h1>
                <span>
                    <FaUserCircle />
                </span>
                <h1>Hello
                    <span>Doctor</span>
                </h1>
                <p>Gerald Brooks</p>
                <div>
                    <div>
                        <IoGridOutline />
                        <p>Overview</p>
                    </div>
                    <div>
                        <MdAccountCircle />
                        <p>Account</p>
                    </div>
                    <div>
                        <FaCalendarAlt />
                        <p>Calender</p>
                    </div>
                    <div>
                        <TbListDetails />
                        <p>Details</p>
                    </div>
                    <div>
                        <MdLogout />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Sidebar;