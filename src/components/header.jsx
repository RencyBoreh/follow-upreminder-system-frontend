import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import React from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function Header(){
  const navigation= useNavigate();
 
 

  const logostyle={
    width:'200px',
  }
  const navs={
    fontWeight:'bold'
  }
  const textdeco={
    textDecoration:'none'
   }
 return(
<>

<nav className="navbar fixed-top justify-content-between navbar-dark navbar-expand-sm px-2 bg-success" id='navspy'>
<div>
<Link className='navbar-brand' ><img src={logo} style={logostyle} alt="" className='img-fluid' /></Link>
</div>
 <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#navs'>
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse p-2 px-3 pe-4 justify-content-center navbar-collapse" id='navs'>
<ul className="navbar-nav">
  <li className="nav-item">
    <Link className='nav-link me-2' to='/'>Home</Link>
    </li>
  <li className="nav-item">
    <Link className="nav-link me-2" to="/services">Services</Link>
  </li>
  <li className="nav-item">
    <Link className='nav-link me-2' to='/doctors'>Doctors</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link me-" to='/contact'>Contact </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/consultation'>Consultation </Link>
  </li>
</ul>

</div>
<button className="btn btn-warning px-5" onClick={()=>navigation('/meeting')}>
  Book an Appointment</button>
</nav>

</>
 


 );


}
export default Header