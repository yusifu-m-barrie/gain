import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Scholarships from "../components/Scholarships"
import Study from "../components/Study"
import Footer from "../components/Footer"
function Home() {
    return(
        <>
         <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_640.jpg"
        title="Your Scholarship Journey Start Here"
        text="Choose Your Right Destination"
        buttonText="Scholarship Plan"
        url="/"
        btnClass="show"

        />
        <Scholarships />
        <br />
        <br />
        <Study />
        <br />
        <br />
        <Footer />
        </>
    )
    
}

export default Home;