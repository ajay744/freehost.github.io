import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import AboutImg from "../assets/11.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home () {
    return(
     <>
    <Navbar/>
    
    <Hero
     cName="hero"
     heroImg={AboutImg}
     title="your journey your story"
     text="choose your favarat detination"
     buttonText="Travel plan"
     url="/"
     btnClass="show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
     </>
    )
}
export default Home;