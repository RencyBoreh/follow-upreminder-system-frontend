import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

import './Error404.css';

const NotFound = () => {
  const body={
    height:'100vh'
  }
  const navigation =useNavigate()
  return (
    <div className='container-fluid  align-content-center' style={body}>
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">Page Not Found</p>
      <div className="error-animation">
      </div>
      <button className='btn btn-success px-5 mt-5' onClick={()=>navigation('/')}>Go Back Home</button>
    
    </div>
    </div>
  );
};

export default NotFound;


