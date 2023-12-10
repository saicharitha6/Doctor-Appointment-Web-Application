import React from "react";
import styles from "./PatientDetails.module.css";
// import {Link} from 'react-router-dom';

const PatientDetails = () => {
  const doctorInfo = {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    img: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png",
  };
  const patientInfo = {
    name: "Meena",
    age: 25,
    sex: "Female",
    weight: 60,
    complaint: "Fever",
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
          </div>
        </div>
      </div>

      <div className={styles["ri"]}>
        <h3 className={styles["confirmationHeading"]}>Patient Details</h3>
        <p>Name : {patientInfo.name}</p>
        <p>Age : {patientInfo.age}</p>
        <p>Sex : {patientInfo.sex}</p>
        <p>Weight : {patientInfo.weight}</p>
        <p>Complaint : {patientInfo.complaint}</p>
      </div>

      <div className={styles["mid"]}>
        <p className={styles["color"]}>
          Reduce your waiting time & visiting by paying the consultant fee
          upfront
        </p>
        <div className={styles["form-group"]}>
          <label className={styles["form-label"]} htmlFor="complaint">complaint:</label>
          <select className={styles["form-select"]} id="complaint" name="complaint" style={{ width: "100%" }}>
            <option value="" disabled>
              Select Complaint
            </option>
            <option value="First Time">First Time</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Report">Report</option>
          </select>
        </div>
        <button>Family Appointment</button>
        <button>Make Payment</button>
      </div>
    </div>
  );
};

export default PatientDetails;
