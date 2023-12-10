import React from "react";
import styles from "./unable_to_book.module.css";

function UnableToBook() {
  const doctor = {
    name: "Dr. Lavangi",
    type: "Gynacologist",
    experience: "15 years",
    achievement: "Gold Medalist",
    image: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png",
    availableDates: ["Monday", "Wednesday", "Friday"],
  };

  return (
      <div className={styles["doctor-profile"]}>
        <div className={styles["profile-container"]}>
          <img
            src={doctor.image}
            alt={doctor.name}
            className={styles["doctor-image"]}
          />
          <div className={styles["doctor-details"]}>
            <h2 className={styles["heading2"]}>{doctor.name}</h2>
            <p>Type: {doctor.type}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Achievement: {doctor.achievement}</p>
          </div>
        </div>
        <div className={styles["appointment-options"]}>
          <p>
            Sorry, appt slot/consulting time is over. Would you like to make
            appointment with the next available slot?
          </p>
          <button className={styles["custom-button"]}>Yes</button>
        </div>
      </div>
  );
}

export default UnableToBook;
