import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
// import Signup from './pages/doctor/Signup';
// import Signup from './pages/patient/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/services' element={ <Services /> }/>
          <Route path='/contact' element={ <Contact /> }/>
          {/* <Route path='/signup' element={ <Signup /> }/> */}
          {/* <Route path='/signup' element={ <Signup /> }/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
