
function Footer() {
  const deco={
    textDecoration:'none'
  }
  return (
    <>
    <footer className="bg-success text-white">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 col-sm-4 col-lg-4 text-center">
        <h5>Contact Information</h5>
        <p>Address: Reale, Eldoret,KE 45678</p>
        <p>Email: reale@healthcare.com</p>
        <p>Phone: (254) 456-7890</p>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4 text-center">
       <p>© 2025. All rights reserved.</p>
        
          <a href="https://facebook.com" className="text-white me-2"><i className="fab fa-facebook">Facebook</i></a>
          <a href="https://twitter.com" className="text-white me-2"><i className="fab fa-twitter">Twitter</i></a>
          <a href="https://linkedin.com" className="text-white me-2"><i className="fab fa-linkedin">LinkedIn</i> <br /></a>
          <a href="https://instagram.com" className="text-white me-3"><i className="fab fa-instagram">Instagram</i></a>
          <a href="https://tiktok.com" className="text-white"><i className="fab fa-instagram">Tiktok</i></a>
        
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4 text-center">
        <h5>Legal</h5>
        <ul className="list-unstyled">
          <li><a href="/privacy-policy" className="text-white" style={deco}>Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="text-white" style={deco}>Terms of Service</a></li>
          <li><a href="/disclaimer" className="text-white" style={deco}>Disclaimer</a></li>
        </ul>
      </div>
    </div>
    
  </div>
</footer>

    </>
   
  );
}
export default Footer