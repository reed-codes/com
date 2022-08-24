import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer bg-dark">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title">About Us</h4>
                                <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/logo-footer.png` } alt="Logo" className="m-b-3" />
                                <p className="m-b-4 pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                                <Link to="#" className="read-more text-white float-left">read more...</Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                            <div className="widget mb-2">
                                <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                                <ul className="contact-info m-b-4">
                                    <li>
                                        <span className="contact-info-label">Address:</span>123 Street Name, City, England
                                </li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span><Link to="tel:">(123) 456-7890</Link>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span> <Link to="mailto:mail@example.com">mail@example.com</Link>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Working Days/Hours:</span>
                                    Mon - Sun / 9:00 AM - 8:00 PM
                                </li>
                                </ul>
                                <div className="social-icons">
                                    <Link to="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook"></Link>
                                    <Link to="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter"></Link>
                                    <Link to="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin"></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title pb-1">Customer Service</h4>

                                <ul className="links">
                                    <li><Link to="#">Help & FAQs</Link></li>
                                    <li><Link to="#">Order Tracking</Link></li>
                                    <li><Link to="#">Shipping & Delivery</Link></li>
                                    <li><Link to="#">Orders History</Link></li>
                                    <li><Link to="#">Advanced Search</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/dashboard/account` }>My Account</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                    <li><Link to={ `${ process.env.PUBLIC_URL }/pages/about` }>About Us</Link></li>
                                    <li><Link to="#">Corporate Sales</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 pb-5 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title">Popular Tags</h4>

                                <div className="tagcloud">
                                    <Link to="#">Bag</Link>
                                    <Link to="#">Black</Link>
                                    <Link to="#">Blue</Link>
                                    <Link to="#">Clothes</Link>
                                    <Link to="#">Fashion</Link>
                                    <Link to="#">Hub</Link>
                                    <Link to="#">Jean</Link>
                                    <Link to="#">Shirt</Link>
                                    <Link to="#">Skirt</Link>
                                    <Link to="#">Sports</Link>
                                    <Link to="#">Sweater</Link>
                                    <Link to="#">Winter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                    <p className="footer-copyright py-3 pr-4 mb-0">© Porto eCommerce. 2020. All Rights Reserved</p>

                    <img src={ `${ process.env.PUBLIC_URL }/assets/images/demo/payments.png` } alt="payment methods" className="footer-payments py-3" />
                </div>
            </div>
        </footer>
    )
}

export default React.memo( Footer );