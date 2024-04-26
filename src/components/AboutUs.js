import "./AboutUs.css"
import CardData from "../components/CardData";


function AboutUs (){
    return(
        <div className="about-container">
            <h1 className="head">About Gain</h1>
            <p>
            The world is projected to reach a population of 9.7 billion in 2050 and could peak at nearly 11 billion around 2100 according to recent United Nations reports. The human capital development of youth, especially in the Global South, therefore plays a crucial role in enabling economic and social mobility. The United Nations expects that by 2030, the global majority of people under the age of 24 will live on the African continent. These young people will be instrumental in tackling the myriad of challenges from the climate crisis to food system security and migration not just on the continent but around the world. Therefore, the development of human capital is of paramount importance to meet the challenges of the emerging green and knowledge-based economy in the 21st century.

The Graduate Assistance Initiative Network (GAIN) was ideated in tandem with the UN SDG framework (1, 4, 5, and 10). Our goal is to increase the diversity and inclusion of underrepresented groups such as in higher education to promote human capital development and thus socio-economic growth.
            </p>
            <h1>Our core values</h1>
           <CardData />

           <br />
           
        
        </div>

        

    )
}

export default AboutUs;