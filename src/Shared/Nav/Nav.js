import React from 'react';
import { HiShoppingCart } from "react-icons/hi";



import logo from "../../images/logo2.png"
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container">
    <a className="navbar-brand" href="#"> <img className='w-25 logo' src={logo} alt="" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form className="">
        <button className="btn  fw-bolder rounded-pill px-5 pe-5 " type="submit">  <HiShoppingCart className='me-5 fs-3' ></HiShoppingCart> Log In</button>
        <button className="btn btn-outline-danger fw-bolder rounded-pill px-5" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>

    );
};

export default Nav;