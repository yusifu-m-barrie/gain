// StaffList.js

import React from 'react';
import StaffCard from './StaffCard';
import './StaffList.css';

const StaffList = () => {
  const staffs = [
    {
      id: 1,
      name: 'Yusifu M. Barrie',
      photoUrl: 'https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png',
      nationality: 'USA',
      contact: '+1 123-456-7890'
    },
    {
      id: 2,
      name: 'Yusifu M. Barrie',
      photoUrl: 'https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png',
      nationality: 'UK',
      contact: '+44 123-456-7890'
    },
    {
      id: 3,
      name: 'Yusifu M. Barrie',
      photoUrl: 'https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png',
      nationality: 'Canada',
      contact: '+1 234-567-8901'
    },   
    {
        id: 4,
        name: 'Yusifu M. Barrie',
        photoUrl: 'https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_1280.png',
        nationality: 'UK',
        contact: '+44 123-456-7890'
      }
  ];

  return (
    <div className="staff-list">
      {staffs.map(staff => (
        <StaffCard
          key={staff.id}
          name={staff.name}
          photoUrl={staff.photoUrl}
          nationality={staff.nationality}
          contact={staff.contact}
        />
      ))}
    </div>
  );
};

export default StaffList;
