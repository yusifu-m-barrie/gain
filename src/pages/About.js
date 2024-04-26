import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/sun.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import StaffList from "../components/StaffList";

function About() {
    return(
        <>
         <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
        />
        <AboutUs />

        <h1 className="staff">Our Staffs</h1>
        <StaffList />
        
        <Footer />
        </>
    )
    
}

export default About;