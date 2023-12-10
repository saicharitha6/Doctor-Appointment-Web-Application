import React, { useState } from 'react';
import styles from './co_patient_collaboration.module.css';

function CoPatientCollaboration() {

  const doctor = {
    name: 'Dr. Lavangi',
    type: 'Gynacologist',
    experience: '15 years',
    achievement: 'Gold Medalist',
    image: 'https://cdn-icons-png.flaticon.com/512/3304/3304567.png',
    availableDates: ['Monday', 'Wednesday', 'Friday'],
  };

  return (
    <div className={styles['doctor-profile']}>
      <div className={styles['profile-container']}>
        <img src={doctor.image} alt={doctor.name} className={styles['doctor-image']} />
        <div className={styles['doctor-details']}>
          <h2>{doctor.name}</h2>
          <p>Type: {doctor.type}</p>
          <p>Experience: {doctor.experience}</p>
          <p>Achievement: {doctor.achievement}</p>
        </div>
        </div>
        <div>
            <p>
                Would you like to connect with other new mothers who also visits {doctor.name}
            </p>
            <button className={styles['join-btn']}>yes, join me</button>   
        </div>

      
    
    </div>
  );
}

export default CoPatientCollaboration;
