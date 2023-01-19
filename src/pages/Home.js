import ChooseUs from "../components/ChooseUs";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Specialties from "../components/Specialties";
import Testimonials from "../components/Testimonials";
import Inquiry from '../components/Inquiries';


const Home = () => {
    return ( 
        <>
            <div>
                <Hero />
                <Search />
                <Specialties />
                <ChooseUs />
                <Testimonials />
                <Inquiry />
            </div>
        </>
     );
}
 
export default Home;