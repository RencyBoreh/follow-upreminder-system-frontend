import 'bootstrap/dist/css/bootstrap.min.css';



function Contact(){

  const deco={
    textDecoration:'none'
  }
 return(
<>
<div className='container-fluid mt-5 pt-4'>
<h2 className="text-center text-primary">Contact Us</h2>
<div className="container-fluid row  bg-light p-4 border-0">
 <div className="container col-lg-6 col-md-10 col-sm-12 rounded-4 shadow">
  <form className='px-2 py-3'>

    <label htmlFor="name" className="form-label my-2">Full Name:</label>
    <input type="text" className="form-control" id='name' />
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
    <label htmlFor="subject" className="form-label my-3">Subject:</label>
   <input type="text" className="form-control" id='subject' />
    <label htmlFor="message" className="form-label my-3">Message:</label>
    <textarea name="message" id="message" className="form-control"></textarea>
    <label htmlFor="attachments" className="form-label my-3">Attachments:</label>
    <input type="file" name="attachments" id="attachments" className='form-control' />
    <label htmlFor="language" className="form-label my-3">Preferred Language:</label>
    <select name="" id="" className="form-control">
      <option value="english">English</option>
      <option value="swahili">Swahili</option>
    </select>
     <label htmlFor='consent'>
        <input type="checkbox" name="consent" id="consent" className='my-2' />Consent to Share Information. 
     </label> <br />
     <label htmlFor='privacy'>
     <input type="checkbox" name="privacy" id="privacy" className='my-2' />Privacy Policy Agreement.
     </label>
    <div className="text-center">
      <button className="btn btn-success my-4 px-5"><a href="#" className='text-light' style={deco}>Submit</a></button>
    </div>
  </form>
  
 </div>
</div>
</div>
</>


 );
}

export default Contact