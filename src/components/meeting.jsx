import 'bootstrap/dist/css/bootstrap.min.css';

function Meeting(){

  
  const deco={
    textDecoration:'none'
  }
 return(
<div className='container-fluid mt-5 pt-4'>

<h2 className="text-center text-primary">Book a Meeting</h2>
<div className="container-fluid row  bg-light p-4 border-0">
 <div className="container col-lg-6 col-md-10 col-sm-12 rounded-4 shadow">
  <form className='px-2 py-3'>

    <label htmlFor="name" className="form-label my-2">Full Name:</label>
    <input type="text" className="form-control" id='name' />
    <label htmlFor="dob" className="form-label my-2">Date of Birth:</label>
    <input type="date" className="form-control" />
    <label htmlFor="gender" className="form-label my-2">Gender:</label>
    <select name="gender" id="gender" className="form-control">
      <option value="">Select gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
      <option value="prefer_not_to_say">Prefer Not to Say</option>
    </select>
    <label htmlFor="email" className="form-label my-2">Email Address:</label>
    <input type="text" className="form-control" />
    <label htmlFor="number" className="form-label my-2">Phone Number:</label>
    <input type="text" className="form-control" id='number' />
    <label htmlFor="contact_method" className="form-label my-2">Preferred Contact Method:</label>
    <select name="contact_method" id="contact_method" className="form-control">
      <option value="">Select Preffered Method</option>
      <option value="email">Email</option>
      <option value="phone_call">Phone Call</option>
      <option value="sms">Text Message</option>
      <option value="whatsapp">WhatsApp</option>
      <option value="telegram">Telegram</option>
    </select>
    <label htmlFor="current_medication" className="form-label my-2">Current Medications:</label>
    <textarea name="current_medication" id="current_medication" className="form-control"></textarea>
    <label htmlFor="condition" className="form-label my-2">Existing Medical Conditions:</label>
    <textarea name="condition" id="condition" className="form-control"></textarea>
    <label htmlFor="allergies" className="form-label my-2">Allergies:</label>
    <input type="text" className="form-control" id='allergies' />
    <label htmlFor="doctor" className="form-label my-2">Doctor You want to See:</label>
    <select name="doctor" id="doctor" className="form-control">
      <option value="">Select Doctor</option>
      <option value="psychologist">Psychologist</option>
      <option value="dermatologist">Dermatologist</option>
      <option value="gynecologist">Gynecologist</option>
      <option value="nutritional_councellor">Nutritional Councellor</option>
    </select>
    <label htmlFor="appointment" className="form-label my-3">Preferred Appointment Date</label>
    <input type="date" className="form-control" />
    <label htmlFor="time" className="form-label my-3">Time:</label>
    <input type="time" className="form-control" id='time' />
    <label htmlFor="reason_for_appointment" className="form-label my-3">Reason for Appointment:</label>
    <textarea name="reason_for_appointment" id="reason_for_appointment" className="form-control"></textarea>
    <label htmlFor="insurance_info" className="form-label my-3">Insurance Information:</label>
    <textarea name="insurance_info" id="insurance_info" className="form-control"></textarea>
    <input type="checkbox" name="consent" id="consent" className='my-3' /> <span>Consent to Share Information.</span> <br />
    <input type="checkbox" name="policy" id="policy" className='my-3' /> <span>Privacy Policy Agreement.</span> <br />
    <div className="text-center">
      <button className="btn btn-success my-4 px-5"><a href="#" className='text-light' style={deco}>Book Appointment</a></button>
    </div>
  </form>
  
 </div>
</div>
</div>

);
}

export default Meeting