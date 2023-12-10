import React, { useState } from 'react';
import styles from './appointment_reschedule_by_doctor_copy_6.module.css';

function AppointmentReschedule() {

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
                Your appointment with {doctor.name} has been cancelled.<br></br>If you have paid consultation fee, 
                it will be refunded in 2 days.<br></br>Apologies for inconvenience caused.
            </p>
            <button className={styles['reschedule-btn']}>rescheule</button>   
        </div>

      
    
    </div>
  );
}

export default AppointmentReschedule;
