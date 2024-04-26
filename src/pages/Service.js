import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/mountain.jpg"
import Footer from "../components/Footer";
import Study from "../components/Study";

function Service() {
    return(
        <>
         <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Services"
        btnClass="hide"
        />

        <Study />
        <Footer />
    
        </>
    )
    
}

export default Service;