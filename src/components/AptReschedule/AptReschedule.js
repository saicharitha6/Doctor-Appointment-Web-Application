import React, { useState } from 'react';
import styles from './reschedule_slide_16.module.css';
import Select from './Select';

const morning_options = [
    { value: '08:00 AM - 09:00 AM', label: '08:00 AM - 09:00 AM' },
    { value: '09:00 AM - 10:00 AM', label: '09:00 AM - 10:00 AM' },
    { value: '10:00 AM - 11:00 AM', label: '10:00 AM - 11:00 AM' },
  ];
const evening_options = [
    { value: '01:00 PM - 02:00 PM', label: '01:00 PM - 02:00 PM' },
    { value: '03:00 PM - 04:00 PM', label: '03:00 PM - 04:00 PM' },
    { value: '05:00 PM - 06:00 PM', label: '05:00 PM - 06:00 PM' },
];
  
    

function AptReschedule() {

    const [isDisabled_morning, setIsDisabled_morning] = useState(false);
    const [isDisabled_evening, setIsDisabled_evening] = useState(false);

    const handleSelect_Morning = (selectedValue) => {
        console.log('Selected value:', selectedValue);
        if(selectedValue == "Select an option")
        {
            setIsDisabled_evening(false);
        }
        else{
            setIsDisabled_evening(true);
        }
        // Handle the selected value as needed
        };
    const handleSelect_Evening = (selectedValue) => {
        console.log('Selected value:', selectedValue);
        if(selectedValue == "Select an option")
        {
            setIsDisabled_morning(false);
        }
        else{
            setIsDisabled_morning(true);
        }
        // Handle the selected value as needed
        };

    const doctor = {
        name: 'Dr. Lavangi',
        type: 'Gynacologist',
        experience: '15 years',
        achievement: 'Gold Medalist',
        image: 'https://cdn-icons-png.flaticon.com/512/3304/3304567.png',
        availableDates: ['Monday', 'Wednesday', 'Friday'],
    };
    const consult_timing = {
        date: '7 oct 2023',
        time: '07:00 PM - 08:00 PM'
    }

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
            <h2>Choose another time: </h2>
            <h3>Morning</h3>
            <Select options={morning_options} onSelect={handleSelect_Morning} disabled={isDisabled_morning}/>
            <h3>Evening</h3>
            <Select options={evening_options} onSelect={handleSelect_Evening} disabled={isDisabled_evening}/>
            <br></br>
            <button className={styles['appointment-btn']}>Book Appointment</button>   
        </div>

      
    
    </div>
  );
}

export default AptReschedule;
