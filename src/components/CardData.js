
import React from "react";
import "./Card.css";
import Card from "./Card";

const cardData = [
  {
    icon: <i className="fas fa-check"></i>,
    heading: 'Integrity',
    paragraph: 'We firmly believe in honesty and strong moral principles to guide our actions.',
  },
  {
    icon: <i className="fas fa-link"></i>,

    heading: 'Compassion',
    paragraph: 'Compassion drives our commitment to serving others with empathy, kindness, and dignity.',
  },
  {
    icon: <i className="fas fa-tags"></i>,
    heading: 'Altruism',
    paragraph: 'We strive selflessly for the welfare and well-being of others.',
  },
  {
    icon: <i className="fas fa-gavel"></i>,
    heading: 'Respect',
    paragraph: 'We seek an inclusive and friendly community for all through the principle of equal value and dignity.',
  },
  {
    icon: <i className="fas fa-puzzle-piece"></i>,
    heading: 'Empower',
    paragraph: 'We believe that everyone deserves to reach their fullest potential for self-actualization.',
  },
  {
    icon: <i className="fas fa-rotate"></i>,
    heading: 'Sustainability',
    paragraph: 'Our commitment to the democratization of graduate education remains steadfast in ensuring the resilience and continuity of our programs.',
  },

];


function App() {
  return (
    <div className="App">
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
