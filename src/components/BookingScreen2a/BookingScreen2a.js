import React from "react"

function BookingScreen2a(){

 return(
  <div>
  
    <div className="d-flex justify-content-center">
    <div className="container mt-5">
      <div className="card" style={{ "maxWidth": "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Gynecologist</h5>
              <p className="card-text">15 yrs of experience</p>
              <p className="card-text"><small className="text-muted">Gold Medalist</small></p>
            </div>
          </div>
          <div >
            <h4>Choose Time</h4>
            <p>Next available slot <button>Confirm Time Later</button></p>
          </div>
          <div >
            <h3>Morning</h3>
            <span>10:00 AM - 11:00 AM <br></br>11:00 AM - 12:00 AM 
            </span>
          </div>
          <div >
            <h3>Evening</h3>
            <span>06:00 AM - 07:00 AM <br></br>07:00 AM - 08:00 AM 
            </span><br></br>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  
</div>


 )
}
export default BookingScreen2a;


