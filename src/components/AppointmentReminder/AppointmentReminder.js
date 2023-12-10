import React, { useState } from 'react';
import styles from './appointment_reminder.module.css';

function AppointmentReminder() {

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

      <div className={styles['details']}>
        <p>  <b>#1 </b>You had an appointment with Dr. Lavangi at 10 AM Today for Muthukumar </p>
        <p><b>#2 </b>You had an appointment with Dr. Kumar at 11 AM Tomorrow for yourself </p>
      </div>
    </div>
  );
}

export default AppointmentReminder;
