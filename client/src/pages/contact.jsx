import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => (
    <div className="header_top_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="header_top_main">
                        <div className="call_text">
                        <Link to="/call" className="padding_right0">
                            <span className="padding_right0">
                                <i className="fa fa-phone" aria-hidden="true"></i>
                            </span>
                            Call : +01 1234567890
                        </Link>
                        </div>
                        <div className="call_text_2">
                            <Link to="#">
                                <span className="padding_right0">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                                demo@gmail.com
                            </Link>
                        </div>
                        <div className="call_text_1">
                            <Link to="#">
                                <span className="padding_right0">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                Location
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Header = () => (
    <div className="header_section">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="index.html">
                    <img src="images/logo.png" alt="Logo" />
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
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="index.html">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about.html">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="treatment.html">
                                Treatment
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="doctors.html">
                                Doctors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="blog.html">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact.html">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);

const Contact = () => (
    <div className="contact_section layout_padding">
        <div className="container-fluid">
            <div className="contact_section_2">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="contact_taital">Get In Touch</h1>
                        <form>
                            <div className="mail_section_1">
                                <input
                                    type="text"
                                    className="mail_text"
                                    placeholder="Name"
                                    name="Name"
                                />
                                <input
                                    type="text"
                                    className="mail_text"
                                    placeholder="Phone Number"
                                    name="Phone Number"
                                />
                                <input
                                    type="text"
                                    className="mail_text"
                                    placeholder="Email"
                                    name="Email"
                                />
                                <textarea
                                    className="massage-bt"
                                    placeholder="Message"
                                    rows="5"
                                    id="comment"
                                    name="Message"
                                ></textarea>
                                <div className="send_bt">
                                    <Link to="#">SEND</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 padding_left_15">
                        <div className="map_main">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
                                    width="600"
                                    height="600"
                                    title="Map showing Eiffel Tower, Paris, France"
                                    style={{ border: 0, width: "100%" }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Footer = () => (
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
        </div>
    </div>
);

const App = () => (
    <div>
        <HeaderTop />
        <Header />
        <Contact />
        <Footer />
    </div>
);

export default App;
