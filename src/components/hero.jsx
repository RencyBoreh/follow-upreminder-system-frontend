import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/hero.png';
import {Link,useNavigate} from 'react-router-dom'
import Services from './services.jsx';
import Consultation from './consultation.jsx';
import Doctors from './doctors.jsx';
function Hero(){
 const textdeco={
  textDecoration:'none'
 }
 const navigation=useNavigate()
 const imagesetting={
  width:''
 }
 const body={
  height:'100vh'
 }
  return(
<>
    <div className="container-fluid mt-5 pt-4 row border-0" style={body}>
      <div className="col-sm-12 col-md-6 col-lg-5 container  justify-content-center align-content-center p-5">
        <div className="container align-content-center rounded-4 shadow p-3 ">
        <h2 className='my-4'>Consult Your Doctor From Home.</h2>
        <p>Choose the best online therapy services, begin your free assessment and speak to a licensed therapist. Help is at your fingertips.</p>
        <div className="mt-5">
        <button className="btn  btn-success me-3 px-4" onClick={()=>navigation('/meeting')}>Book a Meeting</button>
        <span>
          <Link to='/consultation'style={textdeco} >How it Works</Link></span>
        </div>
        
        </div>
       
      </div>
      <div className="col-sm-12 col-md-6 col-lg-7 align-content-center justify-content-end">
        <div className="container-fluid  d-flex justify-content-center">
        <img src={image1} alt=""  className='img-fluid' />
        </div>
      
      </div>
    </div>
   <Services/>
   <Consultation/>
   <Doctors/>

</>

  );
}
export default Hero