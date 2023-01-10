import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';


const Default = () => {
    return ( 
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> }/>
                    <Route path='/about' element={ <About /> }/>
                    <Route path='/contact' element={ <Contact /> }/>
                    <Route path='/login' element={ <Login /> }/>
                    <Route path='/signup' element={ <Signup /> }/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
 
export default Default;