import * as React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Departments from './components/Departments';
import DepartmentProfile from './components/DepartmentProfile';
import DoctorProfile from './components/DoctorProfile';
import Portal from './components/Portal';
import PortalPatients from './components/PortalPatients';
import PortalAppts from './components/PortalAppts';
import PortalLabResults from './components/PortalLabResults';
import PortalCalendar from './components/PortalCalendar';

//import Doctor from './pages/Doctor';
//import Patient from './pages/Patient';
import { useState, useEffect } from 'react';
//import Dashboard from './components/Dashboard';
//import UseFetch from './components/useFetch';

import { useSelector, useDispatch } from "react-redux";
import { fetchAppointments } from './Features/appointmentsSlice.js'
import { fetchPatients } from './Features/patientsSlice.js'
import { fetchDepartments } from './Features/departmentsSlice.js'
import { fetchDoctors } from './Features/doctorsSlice.js'
import { fetchResults } from './Features/resultsSlice.js'

function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState(null)
  const [doc, setDoc] = useState(null)
  const [patientAppts, setPatientAppts] = useState([])
  const [patientNames, setPatientNames] = useState([])
  const dispatch = useDispatch();
  //const {data:appointments} = UseFetch("http://localhost:3000/appointments")
  // const {data:patients} = UseFetch("http://localhost:3000/patients")
    
  // user.doc ? console.log("doctor logged in") : console.log("you are not logged in")
  // console.log(patients)


  useEffect(() => {
    dispatch(fetchAppointments())
    .then(dispatch(fetchDepartments()))
    .then(dispatch(fetchPatients()))
    .then(dispatch(fetchDoctors()))
    .then(dispatch(fetchResults()))
  }, [dispatch]);

  
  const departments = useSelector(state => state.departments.entities)
  const patients = useSelector(state => state.patients.entities)
  const doctors = useSelector(state => state.doctors.entities)
  const results = useSelector(state => state.results.entities)
  const docAppointments = useSelector(state => state.appointments.entities)
  
  useEffect(() => {
    if(user && !user.doc){
      setPatientAppts(docAppointments.filter(appt => appt.patient_id === user.id))
    } 
    if(user && user.doc){
      setPatientNames(patients.map(p => ({id: p.id, text: p.name})))
    }
  }, [user])

  const filterPatients = () => {
    if(search === '' ){
      return patients
    } else {
      return patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }
  }
  



  return (
    <div className="App">
    
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route exact path = '/departments' element={<Departments departments={departments} setDept={setDept} />}/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/login' element={ <Login setUser={setUser}  /> }/>
          <Route path='/signup' element={ <Signup setUser={setUser} /> }/>
          <Route path = '/departments/:id' element={<DepartmentProfile dept={dept} doctors={doctors} setDoc={setDoc} />}/>
        <Route path = '/doctors/:id' element={<DoctorProfile doc={doc} />}/>
        <Route path = '/portal' element={<Portal user={user} />}/>
        <Route path = '/portal/patients' element={<PortalPatients patients={filterPatients()} docAppointments={docAppointments} search={search} setSearch={setSearch} user={user} />}/>
        <Route path = '/portal/calendar' element={<PortalCalendar docAppointments={docAppointments} user={user} patientAppts={patientAppts} patients={patients} patientNames={patientNames} />}/>
        <Route path='/portal/appointments' element={<PortalAppts patientAppts={patientAppts} user={user} /> } />
        <Route path='/portal/labresults' element={<PortalLabResults user={user} results={results} /> } />
          {/* <Route path='/doctor' element={<Doctor appointments={appointments} />} />
          <Route path='/patient' element={<Patient /> } /> */}
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
