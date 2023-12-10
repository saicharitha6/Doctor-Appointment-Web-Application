import React, { useState } from "react";
import styles from "./AddPatientDetails.module.css";
import { useHistory } from 'react-router-dom';

const AddPatientDetails = () => {
  const doctorInfo = {
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: 15,
    img: "https://cdn-icons-png.flaticon.com/512/3304/3304567.png",
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    weight: "",
    complaint: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    age: "",
    sex: "",
    weight: "",
    complaint: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (!formData.name.trim()) {
      newFormErrors.name = "Name is required";
      isValid = false;
    } else {
      newFormErrors.name = "";
    }

    if (!formData.age.trim()) {
      newFormErrors.age = "Age is required";
      isValid = false;
    } else {
      newFormErrors.age = "";
    }

    if (!formData.sex.trim()) {
      newFormErrors.sex = "Sex is required";
      isValid = false;
    } else {
      newFormErrors.sex = "";
    }

    if (!formData.weight.trim()) {
      newFormErrors.weight = "Weight is required";
      isValid = false;
    } else {
      newFormErrors.weight = "";
    }

    if (!formData.complaint.trim()) {
      newFormErrors.complaint = "complaint is required";
      isValid = false;
    } else {
      newFormErrors.complaint = "";
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form data is valid, you can submit the form or perform other actions.
      console.log("Form submitted:", formData);
      history.push('/PatientDetails');
    } else {
      // Form data is invalid, do not submit.
      console.log("Form validation failed");
    }
    
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            <p>Experience: {doctorInfo.experience}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "400px", margin: "auto" }}
        >
          <h3>Patient Details</h3>
          <div className={styles["form"]}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <span style={{ color: "red" }}>{formErrors.name}</span>
          </div>

          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <span style={{ color: "red" }}>{formErrors.age}</span>
          </div>

          <div>
            <label htmlFor="sex">Sex:</label>
            <input
              type="text"
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <span style={{ color: "red" }}>{formErrors.age}</span>
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <span style={{ color: "red" }}>{formErrors.age}</span>
          </div>

          <div>
            <label htmlFor="complaint">complaint:</label>
            <select
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select Complaint
              </option>
              <option value="fever">Fever</option>
              <option value="Skin Allergy">Skin Allergy</option>
              <option value="other">Other</option>
            </select>
            <span style={{ color: "red" }}>{formErrors.gender}</span>
          </div>

          <div style={{ marginTop: "10px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientDetails;
