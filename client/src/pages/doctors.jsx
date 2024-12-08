import React from "react";
import { Link } from 'react-router-dom';

// Images and Logo
import Logo from '../misc/images/logo.png'
import crousalImage1 from '../misc/images/img-1.png';
import crousalImage2 from '../misc/images/img-2.png';
import crousalImage3 from '../misc/images/img-3.png';
import crousalImage4 from '../misc/images/img-4.png';
import crousalImage5 from '../misc/images/img-5.png';

function Doctors() {
    return (
        <>
            {/* header top section start */}
            <div className="header_top_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="header_top_main">
                                <div className="call_text">
                                    <Link to="#">
                                        <span className="padding_right0">
                                            <i className="fa fa-phone" aria-hidden="true" />
                                        </span>{" "}
                                        Call : +01 1234567890
                                    </Link>
                                </div>
                                <div className="call_text_2">
                                    <Link to="#">
                                        <span className="padding_right0">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>{" "}
                                        demo@gmail.com
                                    </Link>
                                </div>
                                <div className="call_text_1">
                                    <Link to="#">
                                        <span className="padding_right0">
                                            <i className="fa fa-map-marker" aria-hidden="true" />
                                        </span>{" "}
                                        Location
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header top section end */}
            {/* header section start */}
            <div className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt='Logo' />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/treatment">
                                        Treatment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/doctors">
                                        Doctors
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0"></form>
                        </div>
                    </nav>
                    <div className="custom_bg">
                        <div className="custom_menu">
                            <ul>
                                <li className="active">
                                    <Link to="">Home</Link>
                                </li>
                                <li>
                                    <Link to="about">About</Link>
                                </li>
                                <li>
                                    <Link to="treatment">Treatment</Link>
                                </li>
                                <li>
                                    <Link to="doctors">Doctors</Link>
                                </li>
                                <li>
                                    <Link to="blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <form className="form-inline my-2 my-lg-0">
                            <div className="search_btn">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-user" aria-hidden="true" />
                                        <span className="signup_text">Login</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-user" aria-hidden="true" />
                                        <span className="signup_text">Sign Up</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </Link>
                                </li>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* header section end */}
            {/* doctores section start */}
            <div className="doctores_section margim_90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="doctores_taital">Our doctores</h1>
                        </div>
                    </div>
                    <div className="doctores_section_2">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage1} alt='crousalImage1' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Humour <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage2} alt='crousalImage2' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Jenni <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage3} alt='crousalImage3' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Morco <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage1} alt='crousalImage1' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Humour <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage2} alt='crousalImage2' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Jenni <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage3} alt='crousalImage3' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Morco <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage1} alt='crousalImage1' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Humour <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage2} alt='crousalImage2' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Jenni <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="doctores_box">
                                                <div className="image_1">
                                                    <img src={crousalImage3} alt='crousalImage3' />
                                                </div>
                                                <h4 className="humour_text">
                                                    Morco <br />
                                                    <span className="mbbs_text">MBBS</span>
                                                </h4>
                                                <div className="social_icon">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-facebook" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-twitter" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa fa-instagram" aria-hidden="true" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link
                                className="carousel-control-prev"
                                to="#my_slider"
                                role="button"
                                data-slide="prev"
                            >
                                <i className="fa fa-angle-left" />
                            </Link>
                            <Link
                                className="carousel-control-next"
                                to="#my_slider"
                                role="button"
                                data-slide="next"
                            >
                                <i className="fa fa-angle-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* doctores section end */}
            {/* footer section start */}
            <div className="footer_section">
                <div className="container">
                    <div className="input_bt">
                        <input
                            type="text"
                            className="mail_bt"
                            placeholder="Enter Your Email"
                            name="Enter your email"
                        />
                        <span className="subscribe_bt" id="basic-addon2">
                            <Link to="#">Subscribe</Link>
                        </span>
                    </div>
                    <div className="footer_section_2">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <h3 className="footer_taital">Address</h3>
                                <div className="location_main">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-map-marker" aria-hidden="true" />
                                                <span className="padding_15">
                                                    Making this the first true
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                                <span className="padding_15">Call : +01 1234567890</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-envelope" aria-hidden="true" />
                                                <span className="padding_15">Email : demo@gmail.com</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer_social_icon">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-facebook" aria-hidden="true" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-twitter" aria-hidden="true" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h3 className="footer_taital">Useful Link</h3>
                                <div className="footer_menu">
                                    <ul>
                                        <li>
                                            <Link to="">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="about">About</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="doctors">Doctors</Link>
                                        </li>
                                        <li>
                                            <Link to="news">News</Link>
                                        </li>
                                        <li>
                                            <Link to="treatment">Treatment</Link>
                                        </li>
                                        <li>
                                            <Link to="contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h3 className="footer_taital">Help &amp; Support</h3>
                                <p className="ipsum_text">
                                    Opposed to using 'Content here, content here', making it look like
                                    readable English. Many desktop publishing packages and web page
                                </p>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h3 className="footer_taital">News</h3>
                                <div className="dryfood_text">
                                    <img src={crousalImage4} alt='crousalImage4' />
                                    <span className="padding_15">Normal distribution</span>
                                </div>
                                <div className="dryfood_text">
                                    <img src={crousalImage5} alt='crousalImage5' />
                                    <span className="padding_15">Normal distribution</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section end */}
            {/* copyright section start */}
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">
                        2024 All Rights Reserved. Design by{" "}
                        <Link to="https://html.design">Free Html Templates</Link> Distribution By{" "}
                        <Link to="https://themewagon.com">ThemWagons</Link>
                    </p>
                </div>
            </div>
            {/* copyright section end */}
        </>

    );
}

export default Doctors;
