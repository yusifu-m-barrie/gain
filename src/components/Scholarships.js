import "./Scholarships.css"
import Stud1 from "../assets/stud1.png"
import Stud2 from "../assets/stud2.jpg"
import Stud3 from "../assets/stud3.jpg"
import Stud4 from "../assets/stud4.jpg"
import ScholarshipData from "./ScholarshipData";
const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Scholarships</h1>
            <p>Scholarships give you the opportunity to study abroad</p>
            <ScholarshipData 
            className="first-des"
            heading="United State of America"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque consectetur ligula et accumsan. Fusce tempor magna quis venenatis malesuada. Integer scelerisque ac turpis non scelerisque. Nunc egestas at erat at eleifend. Vestibulum ultricies luctus odio nec finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In suscipit eget magna at egestas. In et orci viverra, pellentesque metus quis, convallis sapien. Phasellus rhoncus nulla in tristique commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            "
            img1={Stud1}
            img2={Stud2}
            />

            <br />
            <br />
            <br />

            <ScholarshipData 
            className="first-des-reverse"
            heading="Canada"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque consectetur ligula et accumsan. Fusce tempor magna quis venenatis malesuada. Integer scelerisque ac turpis non scelerisque. Nunc egestas at erat at eleifend. Vestibulum ultricies luctus odio nec finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In suscipit eget magna at egestas. In et orci viverra, pellentesque metus quis, convallis sapien. Phasellus rhoncus nulla in tristique commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            "
            img1={Stud3}
            img2={Stud4}
            />

        </div>
    );
};
export default Destination;

