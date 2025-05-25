import React from 'react';

import Header from "./components/header.jsx"
import Hero from './components/hero.jsx'
import Services from './components/services.jsx';
import Consultation from './components/consultation.jsx';
import Doctors from './components/doctors.jsx';
import Footer from "./components/footer.jsx";
import Contact from './components/contact.jsx'
import Meeting from './components/meeting.jsx';
import {Route,Routes} from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import App from './App.jsx';
function App2() {
  return(
    
    <>
     <Header />
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/consultation' element={<Consultation/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/meeting' element={<App/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   
    <Footer /> 
    </>
  
  );
 

}

export default App2
{/* <Hero/>
<Services/>
<Consultation/>
<Doctors/>
<Contact/>
<Meeting/> */}