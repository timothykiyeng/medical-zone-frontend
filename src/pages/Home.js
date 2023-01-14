import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import Testimonials from "../components/Testimonials";

const Home = () => {
    return ( 
        <>
            <div>
                <Hero />
                <Specialties />
                <Testimonials />
            </div>
        </>
     );
}
 
export default Home;