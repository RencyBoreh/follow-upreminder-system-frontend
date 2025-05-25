import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ doctor: '', patient: '', time: '', phone: '' });
  const [loading, setLoading] = useState(false);

  // Fetch existing appointments on load
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('https://follow-up-reminder-system-backend.onrender.com/');
      setAppointments(res.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    try {
      await axios.post('https://follow-up-reminder-system-backend.onrender.com/', form);
      alert('Appointment Created!');
      setForm({ doctor: '', patient: '', time: '', phone: '' }); // Clear form
      fetchAppointments(); // Refresh the list
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Failed to create appointment. Please try again.');
    }
    setLoading(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid my-5 pt-5 row">
      <h2 className="text-center text-primary my-3">Book an Appointment Now</h2>
     <div className="container-fluid p-3 col-lg-6 col-md-10 col-sm-12 rounded-4 shadow">
      <form className="p-3 mb-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">Enter The Doctor Name:</label>
          <input
            className="form-control"
            placeholder="Doctor"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patient" className="form-label">Enter Your Name:</label>
          <input
            className="form-control"
            placeholder="Patient"
            name="patient"
            value={form.patient}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Enter the Date you want to Book for an Appointment:</label>
          <input
            type="datetime-local"
            className="form-control"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">Enter  Your PhoneNumber:</label>
          <input
            className="form-control"
            placeholder="Phone (e.g. +254...)"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary px-5" disabled={loading}>
          {loading ? 'Creating...' : 'Create Appointment'}
        </button>
        </div>
      </form>
      </div>
  <div className="container-fluid mt-5 row">
    <div className="container-fluid p-3 col-lg-9 col-md-12 col-sm-12 rounded-4 shadow">
    <h3 className='text-center'>Appointments</h3>
   <ul className="list-group">
  {Array.isArray(appointments) ? (
    appointments.map((appt, i) => (
      <li className="list-group-item" key={i}>
        {appt.patient_name} with Dr. {appt.doctor_name} at {new Date(appt.appointment_date).toLocaleString()} — Phone: {appt.phone_number}
      </li>
    ))
  ) : (
    <li className="list-group-item text-danger">Error loading appointments</li>
  )}
</ul>

</div>
</div>
    </div>
  );
}

export default App;
