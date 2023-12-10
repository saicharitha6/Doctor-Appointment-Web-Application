import React, { useState } from 'react';
import styles from './appointment_planning.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentPlanning() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      <h1>Select a Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy" // Customize date format if needed
        inline // Show the calendar as inline
      />
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
    </div>
    </div>
  );
}

export default AppointmentPlanning;
