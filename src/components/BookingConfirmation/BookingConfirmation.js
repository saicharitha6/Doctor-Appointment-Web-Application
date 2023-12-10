import React from 'react';
import styles from './booking_confirmation.module.css'
import {Link} from 'react-router-dom';

const BookingConfirmation = () => {
  const doctorInfo = {
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    date: 'November 15, 2023',
    time: '2:30 PM',
    img: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png"
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["contentContainer"]}>
        <div className={styles["leftContainer"]}>
          <img
            src={doctorInfo.img}
            alt="Doctor"
            className={styles["doctorImage"]}
          />
        </div>
        <div className={styles["rightContainer"]}>
          <div className={styles["doctorInfo"]}>
            <h2>{doctorInfo.name}</h2>
            <p>Specialization: {doctorInfo.specialization}</p>
            <p>Date: {doctorInfo.date}</p>
            <p>Time: {doctorInfo.time}</p>
          </div>
        </div>
      </div>
      <div className={styles["confirmationMessage"]}>
        <h3 className={styles["confirmationHeading"]}>Appointment Confirmed!</h3>
        <p className={styles["confirmationText"]}>
          Your appointment with {doctorInfo.name} has been confirmed. Your token number is #14, and your consulting time is 10:15 AM. Request you to report 15 minutes earlier. Thank You.
        </p>
      </div>
      <div className={styles["buttons"]}>
        <Link to="/AddPatientDetails"><button className={styles["button"]}>Add Patient Details</button></Link>
        <button className={styles["button"]}>Add to my Calendar</button>
        <Link to="/my-appointments"><button className={styles["button"]}>View my Appointment</button></Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
