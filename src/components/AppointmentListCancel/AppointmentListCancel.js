import React, { useState, useEffect } from "react";
import styles from "./appointment_cancel.module.css";

const AppointmentListCancel = () => {
  const [appointments, setAppointments] = useState([]);
  const [canceledAppointments, setCanceledAppointments] = useState([]);
  const [isAppointmentCanceled, setIsAppointmentCanceled] = useState(false);
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the initial list of appointments
    fetchAppointments();
  }, [isAppointmentCanceled]);

  useEffect(() => {
    // Fetch patient profile data when the component mounts
    fetchPatientProfile(1);
  }, []);

  const fetchPatientProfile = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/patients/${id}`); // Replace with your actual API endpoint
      if (response.ok) {
        const data = await response.json();
        setPatientData(data);
      } else {
        setError("Failed to fetch patient profile data");
      }
    } catch (error) {
      setError("Error:", error.message);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:3001/appointments");
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteAppointment = async (id, doctor) => {
    try {
      const response = await fetch(`http://localhost:3001/appointments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // If the deletion was successful, update the canceledAppointments state
        setCanceledAppointments((prevAppointments) => [
          ...prevAppointments,
          doctor,
        ]);
        setIsAppointmentCanceled(true);
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    alert("Do you want to cancel the appointment");
  };

  return (
    <div>
      <div className={styles["container"]}>
        <h2 className="h2">Patient Profile</h2>
        {error && <p>{error}</p>}
        {patientData && (
          <div className={styles["align"]}>
            <p>Name: {patientData.name}</p>
            <p>Age: {patientData.age}</p>
            <p>Gender: {patientData.gender}</p>
            <p>Weight: {patientData.weight}</p>
            {/* Add more patient profile details as needed */}
          </div>
        )}
      </div>
      <div className={styles["cancel"]}>
        <h2 className="h2">Appointment Cancel</h2>
        <div className={styles["card-container"]}>
          {appointments.map((appointment) => (
            <div className={styles["card"]} key={appointment.id}>
              <div>
                <p>
                  <h3>{appointment.name}</h3>
                  <p>
                    Consulting Time: {appointment.appointmentDate}{" "}
                    {appointment.appointmentTime}
                  </p>
                </p>
                <p>Experience: {appointment.experience} Years</p>
                <p>Complaint: {appointment.complaint}</p>
                <p>Doctor Specialization: {appointment.specialization}</p>
              </div>

              {!canceledAppointments.includes(appointment.doctor) && (
                <button
                  onClick={() =>
                    handleDeleteAppointment(appointment.id, appointment.name)
                  }
                >
                  Cancel Appointment
                </button>
              )}
            </div>
          ))}
        </div>
        <div className={styles["cancel1"]}>
          {isAppointmentCanceled && <p>Appointment has been canceled.</p>}
        </div>
      </div>
    </div>
  );
};

export default AppointmentListCancel;
