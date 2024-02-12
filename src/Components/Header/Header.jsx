import React from 'react'
import './Header.css'
import Logo from '../../assets/images/logo.png'

function Header() {
  return (
    <div className="header py-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body justify-content-between">
              <ul className="navbar-nav mx-auto justify-content-end align-items-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 d-none d-lg-flex">
                <li className="nav-item">
                  <a className="btn btn-theme" href="#">Contact us <i className="icon-right-arrow ms-2"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Header