import React, { useState } from 'react';
import styles from './booking_screen_2b.module.css';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { useHistory } from 'react-router-dom';

function BookScreen2b() {
  const [selectedTime, setSelectedTime] = useState('');

  const history = useHistory();

  const doctor = {
    name: 'Dr. John Doe',
    type: 'Cardiologist',
    experience: '10 years',
    image: 'https://cdn-icons-png.flaticon.com/512/3304/3304567.png',
    availableDates: ['Monday', 'Wednesday', 'Friday'],
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    history.push('/book-confirm')
    
  };

  return (
    <div className={styles['doctor-profile']}>
      <div className={styles['profile-container']}>
        <img src={doctor.image} alt={doctor.name} className={styles['doctor-image']} />
        <div className={styles['doctor-details']}>
          <h2 className={styles["heading2"]}>{doctor.name}</h2>
          <p>Type: {doctor.type}</p>
          <p>Experience: {doctor.experience}</p>
        </div>
      </div>
      <div className={styles['appointment-options']}>
        <div className={styles['time-selection']}>
          <label htmlFor="time">Next Available slot </label>
          <LocalizationProvider dateAdapter={AdapterDayjs} className={styles['centered-clock']}>
            <DemoContainer components={['TimeClock', 'TimeClock']}>
              <DemoItem label="Morning">
                <TimeClock defaultValue={dayjs('2022-04-17T11:30')} disabled />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <button className={styles["custom-button"]} onClick={handleBookAppointment}>Book Appointment</button>
      </div>
    </div>
  );
}

export default BookScreen2b;