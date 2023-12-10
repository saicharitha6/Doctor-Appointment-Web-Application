import React, { useState } from 'react';
import styles from './consulting_feedback.module.css';
import StarRating from './StarRating';

function ConsultingFeedback() {

    const [consulting_feedback, setConsultingFeedback] = useState(0);
    const [hospital_clinic_feedback, setHospitalClinicFeedback] = useState(0);
    const [waiting_time_feedback, setwaitingTimeFeedback] = useState(0);
    
    const handleConsultingFeedbackChange = (newRating) => {
        setConsultingFeedback(newRating);
    };
    
    const handleHospitalClinicFeedback = (newRating) => {
        setHospitalClinicFeedback(newRating);
    };

    const handleWaitingTimeFeedback = (newRating) => {
        setwaitingTimeFeedback(newRating);
    };
    
    const handleSubmit = () => {
        // Handle form submission with feedback and rating
        console.log('Consulting Feedback:', consulting_feedback);
        console.log('Hospital/Clinic Feedback:', hospital_clinic_feedback);
        console.log('Waiting Time Feedback:', waiting_time_feedback);
    };

    const doctor = {
        name: 'Dr. Lavangiss',
        type: 'Gynacologist',
        experience: '15 years',
        achievement: 'Gold Medalist',
        image: 'https://cdn-icons-png.flaticon.com/512/3304/3304567.png',
        availableDates: ['Monday', 'Wednesday', 'Friday'],
    };

    const consult_timing = {
        date: '7 oct',
        time: '10:00 AM - 11:00 AM'
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
            <b>Consulting Time:</b> {consult_timing.date} {consult_timing.time}
        </p>
        <label>
            <b>Consulting Feedback:</b>
            <StarRating totalStars={5} onChange={handleConsultingFeedbackChange} />
        </label>
        <br></br>
        <label>
            <b>Hospital/Clinic Feedback:</b>
            <StarRating totalStars={5} onChange={handleHospitalClinicFeedback} />
        </label>
        <br></br>
        <label>
            <b>Waiting Time:</b>
            <StarRating totalStars={5} onChange={handleWaitingTimeFeedback} />
        </label>
            <button className={styles['submit-btn']} onClick={handleSubmit}>Submit</button>   
        </div>

      
    
    </div>
  );
}

export default ConsultingFeedback;
