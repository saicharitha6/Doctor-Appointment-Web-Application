import React, { useState } from "react";
import styles from "./appointmentConfirmation.module.css";
import { Link } from "react-router-dom";

const AppointmentConfirmation = ({ patientData }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(""); // State to store the selected doctor's name
  const [appointmentDetails, setAppointmentDetails] = useState("Dr. Smith"); // State to store the appointment details

  // Function to retrieve appointment details for the selected doctor
  const getAppointmentDetails = (doctorName) => {
    const selectedAppointment = patientData.consultations.find(
      (consultation) => consultation.doctorName === doctorName
    );

    if (selectedAppointment) {
      setAppointmentDetails(selectedAppointment);
    } else {
      setAppointmentDetails(null);
    }
  };

  return (
    <div>
      <div className={styles["row"]}>
        <div className={styles["patient-card"]}>
          <div className={styles["card-header"]}>Patient Information</div>
          <div className={styles["card-body"]}>
            <div className={styles["leftpatient"]}>
              <p>Name: {patientData.patientName}</p>
              <p>Age: {patientData.age}</p>
              <p>Sex: {patientData.sex}</p>
              <p>Weight: {patientData.weight} kg</p>
            </div>
            <div className={styles["schedule"]}>
              <select
                value={selectedDoctor}
                onChange={(e) => {
                  setSelectedDoctor(e.target.value);
                  getAppointmentDetails(e.target.value);
                }}
              >
                <option value="">Select a Doctor</option>
                {patientData.consultations.map((consultation, index) => (
                  <option key={index} value={consultation.doctorName}>
                    {consultation.doctorName}
                  </option>
                ))}
              </select>

              <button>Reschedule</button>
              <button>Waiting</button>
              <button>Consulted</button>
              <button>Unable to meet</button>
              <Link to="/appointment_cancellation">
                <button>Cancel</button>
              </Link>
            </div>
          </div>
        </div>

        {appointmentDetails && (
          <div className={styles["doctor-card"]}>
            <div className={styles["card-header"]}>Appointment Details</div>
            <div className={styles["card-body"]}>
              <div className={styles["doctor-info"]}>
                <div className={styles["doctor-photo"]}>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.IVwf85npYYUcwRp4EIhqDgHaJm&pid=Api&P=0&h=220"
                    alt="Doctor"
                  />
                </div>
                <div className={styles["doctor-name"]}>
                  {appointmentDetails.doctorName}
                </div>
              </div>
              <div className={styles["doctor-details"]}>
                <div className={styles["doctor-specialization"]}>
                  {appointmentDetails.specialization}
                </div>
                <p>Experience: {appointmentDetails.experience} Years</p>
                <p>Date: {appointmentDetails.appointmentDate}</p>
                <p>Time: {appointmentDetails.appointmentTime}</p>
                <p>Token: {appointmentDetails.token}</p>
                <p>Complaint: {appointmentDetails.complaint}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles["mid"]}>
        <h3>Live Tracking</h3>
        <h5>15 patients consulting. Expected consulting Time: 8:20pm</h5>
      </div>
      <div className={styles["mid"]}>
        <p className={styles["color"]}>
          Reduce your waiting time & visiting by paying the consultant fee
          upfront
        </p>
        <button>Make Payment</button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
