import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/footer-logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-4  mb-4 mb-lg-0">
            <a href="#"><img src={footerLogo} alt="" /></a>
            <div className="mt-3 social-link">
              <ul>
                <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href=""><i className="fa-brands fa-behance"></i></a></li>
                <li><a href=""><i className="fa-brands fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4  mb-4 mb-lg-0">
                <div className="footer-link">
                  <h6>Quick Links</h6>
                  <ul>
                    <li><a href="">About Us </a></li>
                    <li><a href="">Pricing Table</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Meet Our Team</a></li>
                    <li><a href="">Latest News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4  mb-4 mb-lg-0">
                <div className="footer-link">
                  <h6>Company</h6>
                  <ul>
                    <li><a href="">Case Studies</a></li>
                    <li><a href="">FAQ’s</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Customer Support</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-link">
                  <h6>Legal</h6>
                  <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Use</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p> © {(new Date().getFullYear())} Web Olympus. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer              