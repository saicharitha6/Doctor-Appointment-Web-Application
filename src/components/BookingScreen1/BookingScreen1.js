import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { stepLabelClasses } from '@mui/material';
import styles from './booking_screen_1.module.css'

function BookingScreen1() {
  const [appointmentType, setAppointmentType] = useState('regular');

  const history = useHistory();

  // Sample doctor data
  const doctor = {
    name: 'Dr. John Doe',
    type: 'Cardiologist',
    experience: '10 years',
    image: 'https://cdn-icons-png.flaticon.com/512/3304/3304567.png',
    availableDates: ['Monday', 'Wednesday', 'Friday'],
  };

  const handleAppointmentTypeChange = (event) => {
    setAppointmentType(event.target.value);

  };

  const handleBookAppointment = () => {
    console.log(`Booked appointment with ${doctor.name} for ${appointmentType} appointment.`);
    history.push('/book-doc/2b');

  };

  return (
    <div className={styles["doctor-profile"]}>
      <img src={doctor.image} alt={doctor.name} className={styles["doctor-image"]} />
      <div className={styles["doctor-details"]}>
        <div className= {styles["heading2"]}>{doctor.name}</div>
        <p>Type: {doctor.type}</p>
        <p>Experience: {doctor.experience}</p>
        <p>Available Dates: {doctor.availableDates.join(', ')}</p>
        <div className={styles["appointment-options"]}>
          <label htmlFor="appointment-type">Choose Appointment Type:</label>
          <select
            id="appointment-type"
            value={appointmentType}
            onChange={handleAppointmentTypeChange}
          >
            <option value="regular">Regular</option>
            <option value="online">Online</option>
          </select>
          <button className={styles["custom-button"]} onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default BookingScreen1;
