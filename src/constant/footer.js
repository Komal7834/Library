import React from 'react';
import "./footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className='foot-column0'>
        <div></div><nav><a href="https://herosteels.com" target="_blank" rel="noopener noreferrer" >
            <img src="https://herosteels.in/images/logo.png" alt="Library Logo" class="logo1"/>
            </a> 
            </nav>
        </div>
        <div className="foot-column">
          <h4>Company</h4>
          <ul>
            <li><a href="https://www.herosteels.com/page-about-us">About Us</a></li>
            <li><a href="https://www.herosteels.com/hero-product-c4ca4238a0b923820dcc509a6f75849b">Products</a></li>
            <li><a href="https://www.herosteels.com/infrastructure">Plant and Facilities</a></li>
            <li><a href="https://www.herosteels.com/industries">Customers</a></li>
            <li><a href="https://www.herosteels.com/magazines">Media</a></li>
            <li><a href="https://www.herosteels.com/jobs">Careers</a></li>
          </ul>
        </div>
        <div className="foot-column">
          <h4>Contact Us</h4>
          <p>Hero Steels Limited</p>
          <p>Hero Nagar, G.T. Road</p>
          <p>Ludhiana – 141003, Punjab (INDIA)</p>
          <p>Email: <a href="mailto:info@herosteels.com">info@herosteels.com</a></p>
          <p>Phone: <a href="tel:+911615180000">+91 1615180000</a></p>
        </div>
        <div className="foot-column">
          <h4>Follow Us</h4>
          <ul className="socialMediaList">
            <li>
             <p> <a href="https://www.facebook.com/herosteels" target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a></p>
            </li>
            <li>
             <p> <a href="https://twitter.com/herosteels" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a></p>
            </li>
            <li>
              <p><a href="https://www.linkedin.com/company/herosteels" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a></p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomBar">
        <p>&copy; {new Date().getFullYear()} Hero Steels Limited | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
