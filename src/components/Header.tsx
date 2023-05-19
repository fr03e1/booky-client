import NavBar from './NavBar';
import React from "react";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
import WidgetBox from "./WidgetBox";

const Header = () => {


    return (
        <header className="header-default">

            <div className="menubox">
                <div className="top-info d-flex">
                    <div className="container">
                        <div className="row g-0 ">

                        </div>
                    </div>
                </div>
                <MobileMenu/>
                <div className="main-menu">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-4 text-start">
                                <Search/>
                            </div>
                            <div className="col-4 text-center">
                                <div className="middle"><a href="index.html" className="logo"> <img
                                    src="../assets;" alt=""/> </a></div>
                            </div>
                            <div className="col-4 text-end">
                             <WidgetBox/>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar/>
            </div>
            <div className="side-cart-closer"></div>
            <div className="side-cart d-flex flex-column justify-content-between">
                <div className="top">
                    <div className="content d-flex justify-content-between align-items-center">
                        <h6 className="text-uppercase">Your Cart (03)</h6> <span
                        className="cart-close text-uppercase">X</span>
                    </div>
                    <div className="cart_items">
                        <div className="items d-flex justify-content-between align-items-center">
                            <div className="left d-flex align-items-center"><a href="shop-details-1.html"
                                                                               className="thumb d-flex justify-content-between align-items-center">
                                <img
                                    src="assets/images/shop/products-img1.jpg" alt=""/> </a>
                                <div className="text"><a href="shop-details-1.html">
                                    <h6>Diamond Bracelet</h6>
                                </a>
                                    <p>2 X <span>$350.00</span></p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item-remove"><i className="flaticon-cross"></i></div>
                            </div>
                        </div>
                        <div className="items d-flex justify-content-between align-items-center">
                            <div className="left d-flex align-items-center"><a href="shop-details-1.html"
                                                                               className="thumb d-flex justify-content-between align-items-center">
                                <img
                                    src="assets/images/shop/products-img2.jpg" alt=""/> </a>
                                <div className="text"><a href="shop-details-1.html">
                                    <h6>Blacked Neckles </h6>
                                </a>
                                    <p>1 X <span>$150.00</span></p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item-remove"><i className="flaticon-cross"></i></div>
                            </div>
                        </div>
                        <div className="items d-flex justify-content-between align-items-center">
                            <div className="left d-flex align-items-center"><a href="shop-details-1.html"
                                                                               className="thumb d-flex justify-content-between align-items-center">
                                <img
                                    src="assets/images/shop/products-img3.jpg" alt=""/> </a>
                                <div className="text"><a href="shop-details-1.html">
                                    <h6>Diamond Ring </h6>
                                </a>
                                    <p>1 X <span>$200.00</span></p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item-remove"><i className="flaticon-cross"></i></div>
                            </div>
                        </div>
                        <div className="items d-flex justify-content-between align-items-center">
                            <div className="left d-flex align-items-center"><a href="shop-details-2.html"
                                                                               className="thumb d-flex justify-content-between align-items-center">
                                <img
                                    src="assets/images/shop/products-img4.jpg" alt=""/> </a>
                                <div className="text"><a href="shop-details-1.html">
                                    <h6>Women Earring</h6>
                                </a>
                                    <p>1 X <span>$150.00</span></p>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item-remove"><i className="flaticon-cross"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="total-ammount d-flex justify-content-between align-items-center">
                        <h6 className="text-uppercase">Total:</h6>
                        <h6 className="ammount text-uppercase">$850.00</h6>
                    </div>
                    <div className="button-box d-flex justify-content-between"><a href="cart.html"
                                                                                  className="btn_black"> View Cart
                    </a> <a href="cart.html" className="button-2 btn_theme"> Chekout </a></div>
                </div>
            </div>
            <div className="sidebar-content-closer"></div>
        </header>
    )
}

export default Header;