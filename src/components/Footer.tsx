import React from 'react';
import payment1 from '../assets/images/payment_method/payment_1.png';
import payment2 from '../assets/images/payment_method/payment_2.png';
import payment3 from '../assets/images/payment_method/payment_3.png';
import payment4 from '../assets/images/payment_method/payment_4.png';
import {Link} from "react-router-dom";
import {ERoutes} from "../models/types/RouteType";

const Footer:React.FC = () => {

    return (
        <footer className="footer-default footer-style-1">

            <div className="footer-default__main-footer position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="company-info">
                                    <div className="footer-logo"><Link to={ERoutes.MAIN_ROUTE}>Booky.</Link></div>
                                    <div className="text1">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cum dolor dolores, dolorum eligendi impedit inventore, laboriosam magni quaerat, repudiandae sunt! Alias autem ex nam odit quaerat soluta sunt?</p>
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
                                    <h4> Полезные ссылки </h4>
                                </div>
                                <ul className="footer-links">
                                    <li><Link to={ERoutes.ACCOUNT_ROUTE}>Аккаунт</Link></li>
                                    <li><Link to={ERoutes.LOGIN_ROUTE}>Войти</Link></li>
                                    <li><Link to={ERoutes.CART_ROUTE}>Корзина</Link></li>
                                    <li><Link to={ERoutes.WISHLIST_ROUTE}>Избранное</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="footer-title">
                                    <h4> Информация </h4>
                                </div>
                                <ul className="footer-links">
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Контакты </a></li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="#">Последний пост</a></li>
                                    <li><a href="#">Отслеживать товар</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-30 wow fadeInUp animated">
                            <div className="footer-default__single-box">
                                <div className="footer-title">
                                    <h4> Адрес офиса </h4>
                                </div>
                                <div className="footer-address-box ">
                                    <div className="text1 pt-3">
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div className="text2">
                                        <p>Lorem ipsum dolor. <br/> Lorem ipsum dolor.</p>
                                    </div>
                                    <div className="text3">
                                        <p>Lorem ipsum dolor sit.</p>
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
                            <p>© 2022 <Link to={ERoutes.MAIN_ROUTE}>Booky.</Link> Все права защищены.</p>
                        </div>
                        <div className="footer-payment wow fadeInUp animated"><a href="#"> <img
                            src={payment1} alt="payment"/> </a> <a href="#"> <img
                            src={payment2} alt="payment"/> </a> <a href="#"> <img
                            src={payment3} alt="payment"/> </a> <a href="#"> <img
                            src={payment4} alt="payment"/> </a></div>
                        <div className="footer-bottom-menu wow fadeInUp animated">
                            <ul className="d-flex align-items-center">
                                <li><a href="#">Карта сайта</a></li>
                                <li><a href="#">Условия</a></li>
                                <li><a href="#">Политики конфиденциальности</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;