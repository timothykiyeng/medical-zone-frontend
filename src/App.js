import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import UseFetch from './components/useFetch';


function App() {
  const [user, setUser] = useState(null)
  const {data:appointments} = UseFetch("http://localhost:3000/appointments")
  // const {data:patients} = UseFetch("http://localhost:3000/patients")
  
  // console.log(patients)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          <Route path='/login' element={ <Login setUser={setUser}  /> }/>
          <Route path='/signup' element={ <Signup setUser={setUser} /> }/>
          <Route path='/doctor' element={<Doctor appointments={appointments} />} />
          <Route path='/patient' element={<Patient /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
