import 'bootstrap/dist/css/bootstrap.min.css';
import Darmatologist from '../assets/Darmatologist.jpg';
import lagatprof from '../assets/DR.lagatprofile.png';
import muchiriprof from '../assets/DR.Muchiriprofile.png';
import joyceprof from '../assets/joyceprof.png';
import borehprof from '../assets/borehprof.png';
import Councellor from '../assets/councellor.jpg'


function Services(){



  const textdeco={
    textDecoration:'none'
   }
   const img={
    width:'100px'
   }
  
return(
  <>
  <div className='container-fluid mt-5 pt-4'>
    <h3 className="text-center text-primary my-5">Services We Offer</h3>
    <div className="container-fluid  row justify-content-center  p-5" id='accordation'>
  <div className="col-sm-8 col-md-6 col-lg-3  p-2">
    <img src={muchiriprof} alt="" style={img} className='rounded-circle me-4 img-fluid' />  <span className="text-primary">Dermatology</span>
    <div className="d-grid">
    <button type="button" class="btn btn-success mx-3 px-5" data-bs-toggle="collapse" data-bs-target="#demo1">Read More</button>
    </div>
 
  <div id="demo1" class="collapse px-4" data-bs-parent='#accordation'>
  <p>Our Dermatology specialists at Reale are dedicated to helping you achieve and maintain healthy, beautiful skin. We offer comprehensive dermatological care, including the diagnosis and treatment of skin conditions, cosmetic procedures, and personalized skincare plans. Whether you're dealing with acne, eczema, or seeking anti-aging treatments, our experienced professionals provide effective solutions tailored to your skin's unique needs.</p>
  <div className="text-center"> <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult Dermatologist</a></button></div>
  </div>
  </div>
  <div className="col-sm-8 col-md-6 col-lg-3  p-2">
  <img src={joyceprof} alt="" style={img} className='rounded-circle me-4 img-fluid' />  <span className="text-primary">Nutritional Counselling</span>
  <div className="d-grid">
  <button type="button" class="btn btn-success" data-bs-toggle="collapse" data-bs-target="#demo2">Read More</button>
  </div>
  <div className="collapse px-4" id='demo2'  data-bs-parent='#accordation'>
  <p>At REALE, we believe in the power of nutrition to enhance your overall health and well-being. Our Nutritional Counseling service provides personalized dietary advice and plans tailored to meet your unique health goals and medical needs. Whether you want to manage a chronic condition, achieve weight loss, or improve your overall diet, our registered dietitians offer expert guidance and support to help you make informed, healthy choices. With our comprehensive approach to nutrition, we empower you to lead a healthier, happier life.</p>
  <div className="text-center"> <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult the Doctor</a></button></div>
  </div>
  </div>
  <div className="col-sm-8 col-md-6 col-lg-3  p-2">
  <img src={borehprof} alt="" style={img} className='rounded-circle me-4 img-fluid' />  <span className="text-primary">Psychology</span>
    <div className="d-grid">
    <button type="button" class="btn btn-success" data-bs-toggle="collapse" data-bs-target="#demo3">Read More</button>
    <div className="collapse px-4" id='demo3'  data-bs-parent='#accordation'>
    <p>At REALE, we understand the importance of mental health and are committed to offering expert Psychological services. Our licensed psychologists and therapists provide therapy and counseling for various emotional and psychological issues, including anxiety, depression, stress, and relationship challenges. We create a safe and supportive environment where you can explore your feelings and work towards achieving mental well-being and resilience.</p>
    <div className="text-center"> <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult Psychologist</a></button></div>
    </div>
    </div>
  </div>
  <div className="col-sm-8 col-md-6 col-lg-3 p-2">
  <img src={lagatprof} alt="" style={img} className='me-4 img-fluid' />  <span className="text-primary">Gynecology</span>
   <div className="d-grid">
   <button type="button" class="btn btn-success" data-bs-toggle="collapse" data-bs-target="#demo4">Read More</button>
   </div>
   <div className="collapse px-4" id='demo4'  data-bs-parent='#accordation'>
   <p>Our expert Gynecology team at REALE is dedicated to providing comprehensive care for women's health. We offer a wide range of services, including routine check-ups, prenatal and postnatal care, and advanced treatments for gynecological conditions. Our compassionate and experienced professionals ensure personalized care tailored to meet your unique needs, promoting optimal health and well-being at every stage of life..</p>
   <div className="text-center"> <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult Gynecologist</a></button></div>
  
   </div>

  </div>
</div>

 

 </div>


 
  
  </>
);

}
export default Services