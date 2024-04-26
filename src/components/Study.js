import "./Study.css";
import StudyData from "./StudyData";
import Stud1 from "../assets/australia.jpg"
import Stud2 from "../assets/Japan.jpg"
import Stud3 from "../assets/china.jpg"

function Study() {
    return (
        <div className="study">
            <h1>Best Outstanding Scholarships</h1>
            <p>You can discover unique Scholarship throiugh GAIN</p>
        <div className="tripcard">
            <StudyData 
            image={Stud1}
            heading = "Study In Australia"
            text ="Integer et mauris cursus, cursus turpis blandit, imperdiet justo. Morbi bibendum velit quis molestie hendrerit. Maecenas cursus ultrices massa, nec posuere tellus lacinia nec. Suspendisse sollicitudin orci pretium, facilisis urna nec, condimentum nibh. Curabitur vel vulputate elit. Duis cursus dui in auctor cursus. Vivamus nibh turpis, efficitur at vestibulum sed, lobortis non felis. Vestibulum ac ligula id est iaculis semper. Curabitur semper consequat mi, non tristique lectus mollis vitae."
            />
            <StudyData 
            image={Stud2}
            heading = "Study In Japan"
            text ="Integer et mauris cursus, cursus turpis blandit, imperdiet justo. Morbi bibendum velit quis molestie hendrerit. Maecenas cursus ultrices massa, nec posuere tellus lacinia nec. Suspendisse sollicitudin orci pretium, facilisis urna nec, condimentum nibh. Curabitur vel vulputate elit. Duis cursus dui in auctor cursus. Vivamus nibh turpis, efficitur at vestibulum sed, lobortis non felis. Vestibulum ac ligula id est iaculis semper. Curabitur semper consequat mi, non tristique lectus mollis vitae."
            />
            <StudyData 
            image={Stud3}
            heading = "Study In China"
            text ="Integer et mauris cursus, cursus turpis blandit, imperdiet justo. Morbi bibendum velit quis molestie hendrerit. Maecenas cursus ultrices massa, nec posuere tellus lacinia nec. Suspendisse sollicitudin orci pretium, facilisis urna nec, condimentum nibh. Curabitur vel vulputate elit. Duis cursus dui in auctor cursus. Vivamus nibh turpis, efficitur at vestibulum sed, lobortis non felis. Vestibulum ac ligula id est iaculis semper. Curabitur semper consequat mi, non tristique lectus mollis vitae."
            />
        </div>
        </div>
    )
    
}
export default Study;