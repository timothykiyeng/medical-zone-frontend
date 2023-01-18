import './App.css';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import UseFetch from './components/useFetch';


function App() {
  const [user, setUser] = useState(null)
  const {data:appointments} = UseFetch("http://localhost:3000/appointments")
  // const {data:patients} = UseFetch("http://localhost:3000/patients")
    
  // user.doc ? console.log("doctor logged in") : console.log("you are not logged in")
  // console.log(patients)
  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/login' element={ <Login setUser={setUser}  /> }/>
          <Route path='/signup' element={ <Signup setUser={setUser} /> }/>
          <Route path='/patient' element={<Patient user={user} /> } />
          <Route path = '/dashboard' element={<Dashboard user={user} />}/>
          <Route path='/doctor' element={<Doctor appointments={appointments} />} />
          <Route path='/patient' element={<Patient /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
