import ChooseUs from "../components/ChooseUs";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return ( 
        <>
            <div>
                <Hero />
                <Specialties />
                <ChooseUs />
                <Testimonials />
            </div>
        </>
     );
}
 
export default Home;