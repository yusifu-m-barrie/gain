// StaffCard.js

import React from 'react';
import './StaffCard.css';

const StaffCard = ({ photoUrl, name, nationality, contact }) => {
  return (
    <div className="card">
      <img src={photoUrl} alt="Alt" className="card-img-top" />
      <div className="card-body">
        <h5 className="name">Name: {name}</h5>
        <h5 className="nationality">Nationality: {nationality}</h5>
        <p className="card-text">Contact: {contact}</p>
      </div>
    </div>
  );
};

export default StaffCard;
