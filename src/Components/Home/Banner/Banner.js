import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='full-banner ' >
            <h1 className='text-center banner-text mb-4'> Best Food Waiting For Your Belly </h1>
            <div className="d-flex justify-content-center align-items-center banner-info ">
            <input className="form-control me-2 w-25 border-0 rounded-pill" type="search" placeholder="Search Food Item" aria-label="Search"/>
            <button className="btn btn-outline-danger fw-bolder rounded-pill px-5 banner-button" type="submit">Search</button>
            </div>
        </div>
    );
};

export default Banner;