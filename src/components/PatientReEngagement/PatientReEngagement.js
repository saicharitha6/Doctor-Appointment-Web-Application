import React, { useState } from 'react';
import styles from './slide20.module.css';

function PatientReEngagement() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFeelingBetter, setIsFeelingBetter] = useState(false);
  const [isNoImprovement, setIsNoImprovement] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const showFeelingBetter = () => {
    setIsFeelingBetter(true);
    setIsNoImprovement(false);
  };

  const showNoImprovement = () => {
    setIsFeelingBetter(false);
    setIsNoImprovement(true);
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
        <p>You had an appointment with Dr. Lavangi for Muthukumar yesterday. How is he feeling today?</p>
        <br />
        <button onClick={showFeelingBetter} className={styles['feeling']}>Feeling better </button>
        <button onClick={showNoImprovement} className={styles['feeling']}>No Improvement </button>
        {isFeelingBetter && (
          <div className={styles['suggestion']}>
            {/* <br /> */}
            Glad to hear that you are feeling better
          </div>
        )}
        {isNoImprovement && (
          <div className={styles['suggestion']}>
            {/* <br /> */}
            Took the prescribed medicine still no improvement
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientReEngagement;
