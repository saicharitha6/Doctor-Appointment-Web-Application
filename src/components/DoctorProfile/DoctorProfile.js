import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./doctor_profile.module.css";


function DoctorProfile(props) {
  const { doctorData, match } = props;
  const doctorId = parseInt(match.params.id);
  const history = useHistory();
  // Find the selected doctor based on the id
  const selectedDoctor = doctorData.find((doctor) => doctor.id === doctorId);
  const handleClick = () => {
    history.push("/book-doc");
  };
  if (!selectedDoctor) {
    return (
      <div>
        <h1>Doctor Profile</h1>
        <p>No doctor found for the provided ID.</p>
      </div>
    );
  }

  return (
    <div className={styles["main-container"]}>
    <div className={styles["doctor-card"]}>
      <img
        className={styles["image"]}
        src="https://th.bing.com/th?id=OIP.Nm1veNvgPX_af5ZkMbngagHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        alt={selectedDoctor.name}
      />
      <div className={styles["doctor-details"]}>
        <h2 className={styles["doctor-name"]}>{selectedDoctor.name}</h2>
        <p className={styles["doctor-specialty"]}>
          {selectedDoctor.specialization}
        </p>
        <p className={styles["doctor-description"]}>
          {selectedDoctor.description}
        </p>
      </div>
      <div className={styles["services"]}>
        <h3 className={styles["h3"]}>Services</h3>
        <li>Heart problems</li>
        <div className={styles["avail"]}>
          <h3 className={styles["h3"]}>Availability For Consulting</h3>
          <p>Monday to Friday: 10AM-5PM</p>
          <p>Saturday: 2PM-5PM</p>
        </div>
      </div>
      <button className={styles["custom-button"]} onClick={handleClick}>Book Appointment</button>
      {/* <p>{selectedDoctor.experience}</p> */}
    </div>
    </div>
  );
}

export default DoctorProfile;
