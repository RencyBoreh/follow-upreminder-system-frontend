import 'bootstrap/dist/css/bootstrap.min.css';
import Boreh from '../assets/Muchiri.jpg';
import Muchiri from '../assets/Muchiri.jpg';
import Lagat from '../assets/Dr.Lagat.jpg';
import Joyce from '../assets/joyce.jpg';
function Doctors(){
  const textdeco={
    textDecoration:'none'
   }
  

  return(
    <div className="container-fluid mt-5  px-5 pt-4 pb-4">
      <h2 className="text-center text-primary">Our Doctors</h2>
      <div className="container-fluid row p-5">
  
        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card shadow-sm p-2">
            <div className="card-img-top">
              <img src={Boreh} alt="" />
            </div>
            <div className="card-title">
            <h5>Dr.Boreh <span className="text-info">(Psychologist)</span></h5>
            </div>
            <div className="card-text">Help with anxiety, eating disorders, panic attacks, and medications to improve mental health and well-being.</div>
            <div className="card-link my-2 d-grid"><button className="btn btn-success btn-block " data-bs-toggle='modal' data-bs-target='#myModal1'>See Profile</button></div>
            <div className="modal" id='myModal1'>
                    <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                          <h4 className="modal-title">About Dr.Muchiri</h4>
                          <button className="btn-close" data-bs-dismiss='modal'></button>
                         </div>
                         <div className="modal-body">
                                <p>Dr. Muchiri is a highly skilled dermatologist with a passion for providing top-notch care to his patients. With a wealth of experience in treating a wide range of skin conditions, Dr. Muchiri is dedicated to helping his patients achieve healthy and radiant skin. His expertise includes acne treatment, eczema management, psoriasis care, and skin cancer screenings. Dr. Muchiri stays abreast of the latest advancements in dermatology to ensure that his patients receive the most effective and up-to-date treatments. Known for his compassionate and patient-centered approach, Dr. Muchiri takes the time to listen to his patients' concerns and develops personalized treatment plans to meet their unique needs. Outside of his practice, he is actively involved in community outreach programs to promote skin health awareness.</p>
                              </div>
                         <div className="modal-footer">
                          <button className="btn btn-danger" data-bs-dismiss='modal'>Close</button>
                         </div>


                       </div>

                    </div>

                  </div>








          </div>
         
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card shadow-sm p-2 ">
            <div className="card-img-top">
              <img src={Muchiri} alt="" />
            </div>
            <div className="card-title"><h5>Dr.Muchiri <span className="text-info">(Dermatologist)</span></h5></div>
            <div className="card-text">Experienced in diagnosing and treating a wide range of dermatological conditions with personalized and expert care.</div>
            <div className="card-link my-2 d-grid"> <button className="btn btn-success btn-block" data-bs-toggle='modal' data-bs-target='#myModal1'><a href="#" style={textdeco} className='text-light'>See Profile</a></button>
            </div>
                  <div className="modal" id='myModal2'>
                    <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                          <h4 className="modal-title">About Dr.Muchiri</h4>
                          <button className="btn-close" data-bs-dismiss='modal'></button>
                         </div>
                         <div className="modal-body">
                                <p>Dr. Muchiri is a highly skilled dermatologist dedicated to providing exceptional care to his patients. With years of experience in diagnosing and treating various skin conditions, Dr. Muchiri combines his extensive medical knowledge with a compassionate approach to ensure the best outcomes for his patients.
                                He specializes in a wide range of dermatological services, including acne treatment, eczema management, psoriasis care, and skin cancer screenings. Dr. Muchiri is committed to staying updated with the latest advancements in dermatology to offer cutting-edge treatments and personalized care plans.
                                In addition to his clinical expertise, Dr. Muchiri is known for his friendly demeanor and ability to make patients feel comfortable and well-informed about their treatment options. His passion for dermatology and dedication to patient care make him a trusted and respected member of the healthcare community.</p>
                              </div>
                         <div className="modal-footer">
                          <button className="btn btn-danger" data-bs-dismiss='modal'>Close</button>
                         </div>


                       </div>

                    </div>

                  </div>

          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card p-2 shadow-sm">
            <div className="card-img-top">
              <img src={Joyce} alt="" className="img-fluid" />
            </div>
            <div className="card-title"><h5>Dr.Joyce <span className="text-info">(Nutritional Councellor)</span></h5></div>
            <div className="card-text">Expert nutritional counseling for optimal health and well-being through balanced diet plans tailored to individual needs.</div>
            <div className="card-link my-2 d-grid"> <button className="btn btn-success btn-block"><a href="#"style={textdeco} className='text-light' data-bs-toggle='modal' data-bs-target='#myModal3'>See Profile</a></button></div>
            <div className="modal" id='myModal3'>
                    <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                          <h4 className="modal-title">About Dr.Joyce</h4>
                          <button className="btn-close" data-bs-dismiss='modal'></button>
                         </div>
                         <div className="modal-body">
                                <p>Dr. Joyce is a distinguished expert in nutritional counseling 🥗, dedicated to helping individuals achieve optimal health 💪 through balanced and personalized nutrition plans. With a wealth of experience in the field, Dr. Joyce specializes in guiding patients to make informed dietary choices that support their overall well-being and specific health goals 👌.

                                She offers a range of services, including weight management ✔✔, dietary planning for chronic diseases 🤒, sports nutrition, and general nutritional assessments. Dr. Joyce is committed to using the latest scientific research to provide evidence-based advice tailored to each individual's needs and lifestyle.

                                Known for her empathetic and supportive approach, Dr. Joyce ensures that her patients feel understood ❣🤗 and motivated throughout their journey to better health. Her ability to translate complex nutritional information into practical, everyday advice has earned her the trust and respect of her patients.

                                Beyond her practice, Dr. Joyce is passionate about community health education and frequently conducts workshops and seminars on various nutrition-related topics. In her free time, she enjoys experimenting with healthy recipes , practicing yoga 🧘‍♀️, and spending time outdoors.</p>
                                                              </div>
                         <div className="modal-footer">
                          <button className="btn btn-danger" data-bs-dismiss='modal'>Close</button>
                         </div>


                       </div>

                    </div>

                  </div>



          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card p-2 shadow-sm">
            <div className="card-img-top">
              <img src={Lagat} alt="" className="img-fluid" />
            </div>
            <div className="card-title"><h5>Dr.Lagat <span className="text-info">(Gynecologist)</span></h5></div>
            <div className="card-text">Comprehensive gynecological care for women's health and well-being, ensuring personalized treatment through all life stag</div>
            <div className="card-link my-2 d-grid"> <button className="btn btn-success btn-block"><a href="#"style={textdeco} className='text-light' data-bs-toggle='modal' data-bs-target='#myModal4'>See Profile</a></button></div>

            <div className="modal" id='myModal4'>
                    <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                          <h4 className="modal-title">About Dr.Lagat</h4>
                          <button className="btn-close" data-bs-dismiss='modal'></button>
                         </div>
                         <div className="modal-body">
                                <p>Dr. Lagat is a highly respected gynecologist dedicated to providing comprehensive and compassionate care to women of all ages. With extensive experience in the field of gynecology, Dr. Lagat specializes in a wide range of services, including prenatal care, fertility counseling, menstrual disorder management, and menopausal care.

                                Dr. Lagat is committed to empowering women with the knowledge and support they need to make informed decisions about their health. He employs the latest medical advancements and evidence-based practices to ensure the best possible outcomes for his patients.

                                Known for his attentive and patient-centered approach, Dr. Lagat takes the time to listen to his patients' concerns and tailor treatment plans to meet their individual needs. His warm and professional demeanor helps create a comfortable and trusting environment for all his patients.

                                Outside the clinic, Dr. Lagat is actively involved in community health initiatives and educational programs aimed at promoting women's health awareness. He enjoys spending quality time with his family and exploring the great outdoors.</p>
                              </div>
                         <div className="modal-footer">
                          <button className="btn btn-danger" data-bs-dismiss='modal'>Close</button>
                         </div>


                       </div>

                    </div>

                  </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Doctors