
import React, { useState } from 'react';
import styles from './MyAppointments.module.css';
import {Link} from "react-router-dom";

function Today() {
  return (
    <div className={styles.divv}>
      <p>
        1. Dr. Naresh -- Today 10 AM
        <Link to="/appointment_confirmation"><button className={styles['appoint-btn']}>View</button></Link>
      </p>
      <p>
        1. Dr. Daniel -- Today 01 PM
        <button className={styles['appoint-btn']}>View</button>
      </p>
      <p>
        1. Dr. Vishal -- Today 08 PM
        <button className={styles['appoint-btn']}>View</button>
      </p>
    </div>
  );
}

function Past() {
  return (
    <div className={styles.divv}>
      <p>
        1. Dr. Jadeja -- AUG 26 10 AM
        <Link to="/appointment_confirmation"><button className={styles['appoint-btn']}>View</button></Link>
        <button className={styles['appoint-cnc']}>Reports</button>
      </p>
      <p>
        1. Dr. Mahesh -- SEP 16 01 PM
        <button className={styles['appoint-btn']}>View</button>
        <button className={styles['appoint-cnc']}>Reports</button>
      </p>
      <p>
        1. Dr. Naveen -- SEP 02 08 PM
        <button className={styles['appoint-btn']}>View</button>
        <button className={styles['appoint-cnc']}>Reports</button>
      </p>
    </div>
  );
}

function Future() {
  return (
    <div className={styles.divv}>
      <p>
        1. Dr. Ganesh -- NOV-15-10AM
        <button className={styles['appoint-btn']}>View</button>
        <Link to="/appointment_cancellation"><button className={styles['appoint-rep']}>Cancel</button></Link>
      </p>
      <p>
        1. Dr. Vinaya -- NOV-20-08PM
        <button className={styles['appoint-btn']}>View</button>
        <button className={styles['appoint-rep']}>Cancel</button>
      </p>
      <p>
        1. Dr. Ashoka -- DEC-01-07AM
        <button className={styles['appoint-btn']}>View</button>
        <button className={styles['appoint-rep']}>Cancel</button>
      </p>
    </div>
  );
}

function First() {
  return (
    <div className={styles["divv"]}>
      Hey!! You can find your Appointments here by clicking on options above
    </div>
  );
}

function MyAppointments() {
  const [showToday, setShowToday] = useState(false);
  const [showPast, setShowPast] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  const [showCommon, setShowCommon] = useState(true);

  return (
    <>
      <div className={styles['head-div']}>
        <div className={styles['extra-options']}>
          <h1>My Appointments:-</h1>
          <div className={styles['link-container']}>
            <i className={`${styles.linku} fa fa-user-md`}></i> <Link to="/">Find Doctors</Link> |{' '}
            <i className={`${styles.linku} fas fa-dollar-sign`}></i>
            <a href="hello"> My Profile </a>|{' '}
            <a href="hello">Payments</a>
          </div>
        </div>
      </div>
      <div className="w-32 h-32 bg-red-500"></div>


      <div className={styles['down-bg']}>
        <div className="">
          <button onClick={() => { setShowCommon(false); setShowToday(true); setShowFuture(false); setShowPast(false) }} className={styles['btn1']}>
            Today
          </button>
          <button onClick={() => { setShowCommon(false); setShowToday(false); setShowFuture(true); setShowPast(false) }} className={styles['btn2']}>
            Future
          </button>
          <button onClick={() => { setShowCommon(false); setShowToday(false); setShowFuture(false); setShowPast(true) }} className={styles['btn3']}>
            Past
          </button>
        </div>
        <div className={styles['final']}>
          {showCommon && <First />}
          {showToday && <Today />}
          {showPast && <Past />}
          {showFuture && <Future />}
        </div>
      </div>
    </>
  );
}

export default MyAppointments;
