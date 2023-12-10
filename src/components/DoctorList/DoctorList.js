import React, { useState } from "react";
import doctorData from "./doctorData.json";
import { Link } from "react-router-dom";
import styles from "./doctor_list.module.css";
import { style } from "@mui/system";

const DoctorList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(doctorData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredDoctors = doctorData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialization.toLowerCase().includes(query)
    );
    setSearchResults(filteredDoctors);
    setSearchText(query);
  };

  return (
    <div className={style["main-container"]}>
      <div className={styles["nav"]}>
        <h2>Doctor Search</h2>
        <input
          type="text"
          className={styles["search-bar"]}
          placeholder="Search by name or specialization"
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className={styles["doctor-list"]}>
        {searchResults.map((doctor) => (
          <Link
            className={styles["doctor-card"]}
            to={`/doctorProfile/${doctor.id}`}
            key={doctor.id}
          >
            <img
              className={styles["doctor-image"]}
              src="https://th.bing.com/th?id=OIP.H67Ww3ck2u8oD-zDFlhOgwHaIk&w=232&h=268&c=8&rs=1&qlt=30&o=6&dpr=1.5&pid=3.1&rm=2"
              alt={doctor.name}
            />
            <h3>{doctor.name}</h3>
            <p>(Specialization: {doctor.specialization})</p>
            <p> {doctor.description}</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default DoctorList;
