import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppointmentListCancel from "../components/AppointmentListCancel/AppointmentListCancel.js";
import AppointmentConfirmation from "../components/appointmentConfirmation/appointmentConfirmation.js";
import BookingScreen2a from "../components/BookingScreen2a/BookingScreen2a.js";
import BookScreen2b from "../components/BookingScreen2b/BookingScreen2b.js";
import BookingConfirmation from "../components/BookingConfirmation/BookingConfirmation.js";
import BookingScreen1 from "../components/BookingScreen1/BookingScreen1.js";
import UnableToBook from "../components/UnableToBook/UnableToBook.js";
import AppointmentPlanning from "../components/AppointmentPlanning/AppointmentPlanning.js.js";
import CoPatientCollaboration from "../components/CoPatientCollaboration/CoPatientCollaboration.js";
import Chat from "../components/Chat/chat.js";
import MyAppointments from "../components/MyAppointments/MyAppointments"
import DoctorProfile from "../components/DoctorProfile/DoctorProfile.js";
import DoctorList from "../components/DoctorList/DoctorList.js";
import AppointmentReschedule from "../components/AppointmentReschedule/AppointmentReschedule.js";
import PatientReEngagement from "../components/PatientReEngagement/PatientReEngagement.js";
import AptReschedule from "../components/AptReschedule/AptReschedule.js";
import ConsultingFeedback from "../components/ConsultingFeedback/ConsultingFeedback.js";
import AppointmentReminder from "../components/AppointmentReminder/AppointmentReminder.js";
import AddPatientDetails from "../components/AddPatientDetails/AddPatientDetails.js";
import PatientDetails from "../components/PatientDetails/PatientDetails.js";

const doctorData = require("../components/DoctorList/doctorData.json");
const data = require("../components/appointmentConfirmation/doctorAppointment.json");
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DoctorList} />
        <Route
          path="/doctorProfile/:id"
          render={(props) => (
            <DoctorProfile {...props} doctorData={doctorData} />
          )}
        />
        <Route
          path="/appointment_cancellation"
          component={AppointmentListCancel}
        />
        <Route
          path="/appointment_confirmation"
          render={() => <AppointmentConfirmation patientData={data} />}
        />
        <Route path="/book-doc/2a" component={BookingScreen2a} />
        <Route path="/book-doc/2b" component={BookScreen2b} />
        <Route path="/book-doc" component={BookingScreen1} />
        <Route path="/book-confirm" component={BookingConfirmation} />
        <Route path="/unable-to-book" component={UnableToBook} />
        <Route path="/plan-appointment" component={AppointmentPlanning} />
        <Route path="/co-patient-colab" component={CoPatientCollaboration} />
        <Route path="/chat" component={Chat} />
        <Route path="/my-appointments" component={MyAppointments} />
        <Route path="/appointment-reschedule" component={AppointmentReschedule} />
        <Route path="/patient-reengage" component={PatientReEngagement} />
        <Route path="/apt-reschedule" component={AptReschedule} />
        <Route path="/consult-feedback" component={ConsultingFeedback} />
        <Route path="/apt-reminder" component={AppointmentReminder} />
        <Route path="/AddPatientDetails" component={AddPatientDetails}/>
        <Route path="/PatientDetails" component={PatientDetails}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;
