import React from 'react'
import './About.css'
import AboutImg1 from '../../assets/images/about-1.jpg'
import AboutImg2 from '../../assets/images/about-2.jpg'
import AboutImgHead from '../../assets/images/head.png'
import Zeus from '../../assets/images/zeus.png'
import Poseidon from '../../assets/images/poseidon.png'
import Hades from '../../assets/images/hades.png'
function index() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>About US.</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h2>Your Trusted Business Partner</h2>
              <p>At Web Olympus, we are a team of seasoned professionals driven by a common goal - to help businesses thrive in the digital landscape. With years of experience in the industry, we understand the ever-evolving nature of the web and the importance of staying ahead in the competitive online sphere.</p>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <img src={AboutImg1} alt="AboutImg1" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7">
              <img src={AboutImg2} alt="AboutImg2" />
            </div>
            <div className="col-lg-5 text-center align-self-center AboutImgHead mt-3 mt-lg-0">
              <img src={AboutImgHead} alt="AboutImgHead" />
            </div>
          </div>
        </div>
      </section>

      <section className="business-count pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="count-bg">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                    <h3 className="mb-3">Your Trusted<br />Business Partner</h3>
                    <p>From ideation to graphicdesign, UX/UI design is the<br /> historical discipline of our agency.</p>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5">
                    <div className="row row-gap-20">
                      <div className="col-lg-6">
                        <div className="count">300+</div>
                        <p>Working People</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="count">20+</div>
                        <p>Worldwide Offices</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="count">500+</div>
                        <p>Projects Delivered</p>
                      </div>
                      <div className="col-lg-6">
                        <div className="count">$23M</div>
                        <p>Funds Rasied</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="top-heading">OUR TEAM</p>
              <h2>Awesome Team Members</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="team-box">
                <div className="img-box mb-3">
                  <img src={Zeus} alt="" />
                  <div className="team-social">
                    <ul>
                      <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-behance"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h4>Zeus</h4>
                <p>CEO</p>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="team-box">
                <div className="img-box mb-3">
                  <img src={Poseidon} alt="" />
                  <div className="team-social">
                    <ul>
                      <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-behance"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h4>Poseidon</h4>
                <p>CEO</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-box">
                <div className="img-box mb-3">
                  <img src={Hades} alt="" />
                  <div className="team-social">
                    <ul>
                      <li><a href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-behance"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <h4>Hades</h4>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <a className='btn btn-theme' href="">VIEW ALL MEMBERS <i className="icon-right-arrow ms-2"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="top-heading">TELL US ABOUT YOUR PROJECT</p>
              <h2>Let’s Make Something Great Together!</h2>
              <div className="mt-4 cu-text">
                <a href="">Contact Us <i className="icon-right-arrow ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index