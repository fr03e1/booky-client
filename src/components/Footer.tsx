import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-default footer-style-1">

            <div className="footer-default__main-footer position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="company-info">
                                    <div className="footer-logo"><a href="index.html"> <img
                                        src="assets/images/logo/logo-2.png"
                                        alt=""/> </a></div>
                                    <div className="text1">
                                        <p>Orchestrate maintainable mindshare through equity invested action items.
                                            Compellingly procrastinate...</p>
                                    </div>
                                    <div className="newsletter-bottom d-flex align-items-center">
                                        <ul className="footer__medio-boxx  medio-boxx  two d-flex align-items-center">
                                            <li><a href="https://www.facebook.com/" target="_blank"
                                                   className="active"><i
                                                className="flaticon-facebook-app-symbol"></i></a></li>
                                            <li><a href="https://www.youtube.com/" target="_blank"><i
                                                className="flaticon-youtube"></i></a></li>
                                            <li><a href="https://twitter.com/" target="_blank"><i
                                                className="flaticon-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i
                                                className="flaticon-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="footer-title">
                                    <h4> Useful Links </h4>
                                </div>
                                <ul className="footer-links">
                                    <li><a href="my-account.html">Account</a></li>
                                    <li><a href="login.html">Sign In</a></li>
                                    <li><a href="cart.html">View Cart</a></li>
                                    <li><a href="wishlist.html">My WishList</a></li>
                                    <li><a href="compare.html">Compare Products</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="footer-title">
                                    <h4> Information </h4>
                                </div>
                                <ul className="footer-links">
                                    <li><a href="about-us.html">About us</a></li>
                                    <li><a href="contact.html">Contact Us </a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="blog.html">Latest Posts</a></li>
                                    <li><a href="order-track.html">Order Track</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="footer-title">
                                    <h4> Office </h4>
                                </div>
                                <div className="footer-address-box ">
                                    <div className="text1 pt-3">
                                        <p>29 Holles Place, Dublin 2 D02 YY46</p>
                                    </div>
                                    <div className="text2">
                                        <p>68 Jay Street, Suite 902 New Side <br/> Brooklyn, NY 11201</p>
                                    </div>
                                    <div className="text3">
                                        <p>New York, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom position-relative">
                <div className="container">
                    <div className="footer_bottom_content">
                        <div className="copyright wow fadeInUp animated">
                            <p>© 2022 <a href="index.html">Booky.</a> Все права защищены.</p>
                        </div>
                        <div className="footer-payment wow fadeInUp animated"><a href="#0"> <img
                            src="assets/images/payment_method/payment_1.png" alt="payment"/> </a> <a href="#0"> <img
                            src="assets/images/payment_method/payment_2.png" alt="payment"/> </a> <a href="#0"> <img
                            src="assets/images/payment_method/payment_3.png" alt="payment"/> </a> <a href="#0"> <img
                            src="assets/images/payment_method/payment_4.png" alt="payment"/> </a></div>
                        <div className="footer-bottom-menu wow fadeInUp animated">
                            <ul className="d-flex align-items-center">
                                <li><a href="contact.html">Sitemap</a></li>
                                <li><a href="contact.html">Terms of Service</a></li>
                                <li><a href="contact.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;