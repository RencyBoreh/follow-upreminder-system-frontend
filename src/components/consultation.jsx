import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
// import Darmatologist from './assets/Darmatologist.jpg';
import consultation from '../assets/consultation.jpg';
function Consultation(){
  const textdeco={
    textDecoration:'none'
   }
  const body={
    height:'100vh'
  }
 
  const navigation= useNavigate()
    return(
      <div className="container-fluid mt-5 row border-0" style={body}>
        <div className="col-sm-12 col-md-11 col-lg-7 container">
          <img src={consultation} alt=""  className='img-fluid'/>
        </div>
        <div className="col-sm-12 col-md-11 col-lg-5 container align-content-center  justify-content-center p-5">
          <div className="container bg-light align-content-center rounded-5 shadow py-4">
          <h2 className='my-3'>Consultation with our professional doctors.</h2>
          <p>Our doctors bring years of experience and specialized knowledge to the table, ensuring you receive the highest quality of care. We understand that every individual is unique. Our consultations are tailored to your specific needs, taking into account your medical history, lifestyle, and preferences.</p>
          <div className="d-grid">
          <button className="btn btn-success px-5" onClick={()=>navigation('/meeting')}>
           Book a Meeting</button>
          
          </div>
          
          </div>
         
        </div>
        
      </div>
    );
}
export default Consultation