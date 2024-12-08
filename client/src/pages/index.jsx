import React from "react";
import { Link } from 'react-router-dom';

// Images and Logo
import Logo from '../misc/img/icon/logo.png';
import SliderImage2 from '../misc/img/slider/2.png';
import ServiceIcon1 from '../misc/img/icon/service-icon-1.png';
import ServiceIcon2 from '../misc/img/icon/service-icon-2.png';
import ServiceIcon3 from '../misc/img/icon/service-icon-3.png';
import AboutLogo from '../misc/img/other/about.png';
import CalltoactionLogo from '../misc/img/other/calltoaction.png';


function Index() {
    return (
        <>
            {/* header area start */}
            <header>
                <nav id="header-top" className="navbar navbar-expand-md">
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-bs-toggle="collapse"
                                data-bs-target="#navigation"
                                aria-controls="navigation"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link className="navbar-brand" to="#">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="img-responsive"
                                />
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="nav nav-pills navbar-nav navbar-right">
                                <li className="nav-item">
                                    <Link className="nav-link" to="#subscribe">
                                        Join the Movement
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link download-btn" to="#">
                                        Access EMDEEQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/* header area end */}
            {/* Slider Area Start */}
            <div className="background-area image-1" id="slider-area">
                <div className="slider-full-carousel owl-carousel">
                    <div className="single-carousel">
                        <div className="banner-content ">
                            <div className="container">
                                <div className="background-content">
                                    <div className="banner-image hand bnr-sm-none">
                                        <div className="watch">
                                            <img src={SliderImage2} alt="SliderImage2" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="text-content-wrapper slider">
                                                <div className="hero-text">
                                                    <h1>Take Control of Your Healthcare Journey</h1>
                                                    <p>
                                                        EMDEEQ is your AI-powered health advocate for navigating
                                                        diagnoses, interpreting medical scans, and simplifying
                                                        the complexities of healthcare.
                                                    </p>
                                                    <Link to="https://app.angelai.io" className="hero-btn">
                                                        Access EMDEEQ Now
                                                    </Link>{" "}
                                                    &nbsp;
                                                    <Link
                                                        className="hero-btn video-popup"
                                                        to="https://www.youtube.com/watch?v=DUVqASs7iGg"
                                                    >
                                                        <i className="icofont icofont-play-alt-2 mr-1" /> &nbsp;
                                                        Learn More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider Area End */}
            {/* service area start */}
            <section className="service-area gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="service-icon">
                                    <img src={ServiceIcon1} alt="ServiceIcon1" />
                                </div>
                                <div className="service-content">
                                    <h2>Always Available</h2>
                                    <p>
                                        At home or in the doctor’s office, EMDEEQ provides real-time
                                        support anywhere you need it.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="service-icon">
                                    <img src={ServiceIcon2} alt="ServiceIcon2" />
                                </div>
                                <div className="service-content">
                                    <h2>Reliable Insight</h2>
                                    <p>
                                        EMDEEQ draws on rigorously researched medical articles to
                                        provide well-informed insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="service-icon">
                                    <img src={ServiceIcon3} alt="ServiceIcon3" />
                                </div>
                                <div className="service-content">
                                    <h2>Informed Guidance</h2>
                                    <p>
                                        EMDEEQ helps you ask the right questions to ensure nothing is
                                        overlooked by your provider.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service area start */}
            {/* About area start */}
            <section id="about" className="about-area pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src={AboutLogo} alt="AboutLogo" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-content">
                                <h2>Empowering Patients by Demystifying Healthcare</h2>
                                <p>
                                    EMDEEQ can give you instant access to trusted, actionable
                                    information about your diagnosis and help you navigate the medical
                                    billing system at the same time.
                                </p>
                                <p>
                                    Prepare for every doctor’s visit and every phone call with
                                    confidence by knowing the right questions to ask. EMDEEQ empowers
                                    you in your healthcare journey.
                                </p>
                                <p>
                                    For deeper insights, EMDEEQ can analyze medical imaging like MRIs
                                    and CT scans, translating complex data into easy-to-understand
                                    information.
                                </p>
                                <Link
                                    className="hero-btn video-popup"
                                    to="https://www.youtube.com/watch?v=fkoEj95puX0"
                                >
                                    <i className="icofont icofont-play-alt-2" />
                                    Learn More
                                </Link>
                                <p />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About area End */}
            {/* Feature area start */}
            <section id="features" className="feature-area gray-bg pt-128 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading pb-55 text-center">
                                <h2>Essential Support Features</h2>
                                <p>
                                    EMDEEQ cuts through the noise, giving users instant access to
                                    actionable information with the press of a button.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-files" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Diagnostic Analysis</h5>
                                    <p>Expert insights into your medical diagnosis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-doctor" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Symptom Review</h5>
                                    <p>Review your symptoms for clarity and guidance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-idea" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Care Insights</h5>
                                    <p>Critically evaluate your providers plan of care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-ui-clip-board" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Imaging Upload</h5>
                                    <p>Imaging insights to help ensure nothing is overlooked.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-first-aid-alt" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Billing Guidance</h5>
                                    <p>
                                        Insights to help approach bureaucracy and billing strategically.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="awesome-feature text-center">
                                <div className="awesome-feature-icon">
                                    <span>
                                        <i className="icofont icofont-support" />
                                    </span>
                                </div>
                                <div className="awesome-feature-details">
                                    <h5>Open Chat</h5>
                                    <p>Discuss your issues with privacy, support, and dignity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feature feature area end */}
            {/* Call to Action area start */}
            <section id="call-to-action" className="about-area pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-content">
                                <h2>Review Your Diagnosis Now</h2>
                                <p>
                                    Access EMDEEQ now for free and experience the difference it makes
                                    in your health-care journey.
                                </p>
                                <p>
                                    EMDEEQ helps you understand diagnoses, explore treatments,
                                    interpret scans, and navigate all areas of the healthcare system.
                                    EMDEEQ is your advocate for better treatment.
                                </p>
                                <p>
                                    If you're looking for an informed second opinion - Chat with
                                    EMDEEQ now!
                                </p>
                                <Link className="hero-btn" to="#">
                                    Access EMDEEQ Now
                                </Link>
                                <p />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-img">
                                <img src={CalltoactionLogo} alt="CalltoactionLogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action area End */}
            {/* Subcribe Area Start */}
            <section id="subscribe" className="subcribe-area pt-130 pb-115 bg-6">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading pb-35 text-center">
                                <h2>Discoveries Await</h2>
                                <p>
                                    Sign up for EMDEEQ's newsletter to receive curated groundbreaking
                                    medical discoveries delivered directly to your inbox.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="subcribe-form text-center">
                                <form id="mc-form">
                                    <input
                                        autoComplete="off"
                                        placeholder="Enter Your Email"
                                        type="text"
                                    />
                                    <button type="submit">Subscribe</button>
                                    {/* mailchimp-alerts Start */}
                                    <div className="mailchimp-alerts text-centre">
                                        <div className="mailchimp-submitting" />
                                        <div className="mailchimp-success" />
                                        <div className="mailchimp-error" />
                                    </div>
                                    {/* mailchimp-alerts end */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Subcribe Area End */}
            {/* Contact Area Start */}
            <div id="contact" className="contact-area pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading pb-55 text-center">
                                <h2>Contact the Team</h2>
                                <p>
                                    Share insights about your medical journey to help develop a more
                                    empowered medical system. EMDEEQ keeps your information
                                    confidential and secure.
                                </p>
                                <p>
                                    <Link to="#">Learn More About Our Privacy Policies</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-wrap">
                                {/* Contact Form */}
                                <form
                                    id="contact-form"
                                    className="form contact-form"
                                    action="https://whizthemes.com/mail-php/other/mail.php"
                                >
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <input
                                                type="text"
                                                name="con_name"
                                                className="form-control"
                                                id="first-name"
                                                placeholder="Name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group col-12 mt-4">
                                            <input
                                                type="email"
                                                name="con_email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group col-12 mt-4">
                                            <input
                                                type="phone"
                                                name="con_phone"
                                                className="form-control"
                                                id="email"
                                                placeholder="Phone"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group description col-12 mbnone mt-4">
                                            <textarea
                                                rows={3}
                                                name="con_message"
                                                className="form-control"
                                                id="description"
                                                placeholder="Message"
                                                required="required"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="actions text-center">
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    className="btn btn-lg btn-contact-bg"
                                                    title="Submit Your Message!"
                                                >
                                                    submit
                                                </button>
                                                <p className="form-messege" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Area End */}
            {/* Copyright Area Start */}
            <div className="copyright-area bg-5 ptb-70">
                <div className="container">
                    {/* Contact address left */}
                    <div className="conct-border row"></div>
                    {/* Contact address left */}
                    {/* Copyright right */}
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-area text-center">
                                {/* Copyright social */}
                                <div className="contact-social text-center pt-70 pb-35">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont icofont-social-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont icofont-social-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont icofont-social-youtube-play" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* Copyright social */}
                                <div className="copyright-text">
                                    <p>© EMDEEQ LLC - 2024. All Rights Reserved.</p>
                                    <p>
                                        <Link
                                            to="https://terms.angelai.io/"
                                            id="openTermsModal"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Terms of Service
                                        </Link>{" "}
                                        | info@emdeeq.io
                                    </p>
                                </div>
                                {/* Copyright text */}
                            </div>
                        </div>
                    </div>
                    {/* Copyright right */}
                </div>
            </div>
            {/* Copyright Area End */}
            {/* all js here */}
        </>

    );
}

export default Index;
