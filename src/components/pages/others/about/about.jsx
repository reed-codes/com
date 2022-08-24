import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Carousel from '../../../features/carousel';
import Breadcrumb from '../../../common/breadcrumb';

import { testimonial } from '../../../../utils/settings';

function About() {
    return (
        <>
            <Helmet>
                <title>Porto React Ecommerce - About Us Page </title>
            </Helmet>

            <h1 className="d-none">Porto React Ecommerce - About Us Page</h1>

            <div className="main">
                <div className="page-header page-header-bg text-left" style={ { background: `70%/cover #D4E1EA url('${ process.env.PUBLIC_URL }/assets/images/demo/page-header-bg.jpg')` } }>
                    <div className="container">
                        <h1><span>ABOUT US</span>
                                OUR COMPANY</h1>
                        <Link to="#" className="btn btn-dark">Contact</Link>
                    </div>
                </div>
                <Breadcrumb current="About Us" />
                <div className="about-section">
                    <div className="container">
                        <h2 className="subtitle">OUR STORY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <p className="lead">“ Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for evolved over sometimes by accident, sometimes on purpose ”</p>
                    </div>
                </div>

                <div className="features-section bg-gray">
                    <div className="container">
                        <h2 className="subtitle">WHY CHOOSE US</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-shipped"></i>

                                    <div className="feature-box-content">
                                        <h3>Free Shipping</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-us-dollar"></i>

                                    <div className="feature-box-content">
                                        <h3>100% Money Back Guarantee</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="feature-box">
                                    <i className="icon-online-support"></i>

                                    <div className="feature-box-content">
                                        <h3>Online Support 24/7</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials-section">
                    <div className="container">
                        <h2 className="subtitle text-center">HAPPY CLIENTS</h2>

                        <Carousel addClass="testimonials-carousel" settings={ testimonial }>
                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/clients/client1.png` } alt="client" />
                                    </figure>
                                    <div>
                                        <h4 className="testimonial-title">john Smith</h4>
                                        <span>Proto Co Ceo</span>
                                    </div>
                                </div>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing.</p>
                                </blockquote>
                            </div>

                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/clients/client2.png` } alt="client" />
                                    </figure>

                                    <div>
                                        <h4 className="testimonial-title">Bob Smith</h4>
                                        <span>Proto Co Ceo</span>
                                    </div>
                                </div>

                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing.</p>
                                </blockquote>
                            </div>

                            <div className="testimonial">
                                <div className="testimonial-owner">
                                    <figure>
                                        <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/clients/client1.png` } alt="client" />
                                    </figure>

                                    <div>
                                        <h4 className="testimonial-title">john Smith</h4>
                                        <span>Proto Co Ceo</span>
                                    </div>
                                </div>

                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing.</p>
                                </blockquote>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="counters-section bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-4 count-container">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="200" data-value="0">200</span>+
                                    </div>
                                <h4 className="count-title">MILLION CUSTOMERS</h4>
                            </div>

                            <div className="col-6 col-md-4 count-container">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="1800" data-value="0">1800</span>+
                                    </div>
                                <h4 className="count-title">TEAM MEMBERS</h4>
                            </div>

                            <div className="col-6 col-md-4 count-container">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="24" data-value="0">24</span><span>HR</span>
                                </div>
                                <h4 className="count-title">SUPPORT AVAILABLE</h4>
                            </div>

                            <div className="col-6 col-md-4 count-container">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="265" data-value="0">265</span>+
                                    </div>
                                <h4 className="count-title">SUPPORT AVAILABLE</h4>
                            </div>

                            <div className="col-6 col-md-4 count-container">
                                <div className="count-wrapper">
                                    <span className="count-to" data-from="0" data-to="99" data-value="0">99</span><span>%</span>
                                </div>
                                <h4 className="count-title">SUPPORT AVAILABLE</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default About;