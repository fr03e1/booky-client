import Breadcrumb from "./Breadcrumb";
import React from "react";

const Header =  () => {

    return (
        <header className="header-default">

            <div className="menubox">
                <div className="top-info d-flex">
                    <div className="container">
                        <div className="row g-0 ">

                        </div>
                    </div>
                </div>
                <div className="mobile-menu d-lg-none d-block">
                    <div className="menu-closer"></div>
                    <div className="mobile-menu__sidebar-menu">
                        <div className="menu-closer two"><span> Close Menu</span> <span className="cross"><i
                            className="flaticon-cross"></i></span></div>
                        <div className="search-box-holder">
                            <form action="#0">
                                <div className="form-group search-box menu"><input type="text" className="form-control"
                                                                                   placeholder="Поиск товара"/> <span
                                    className="search-icon"> <i
                                    className="flaticon-magnifying-glass"></i> </span></div>
                            </form>
                        </div>
                        <ul className="page-dropdown-menu">
                            <li className="dropdown-list"><a href="#0"> <span>Главная </span> <span className="menuarrow"> <i
                                className="flaticon-next-1"></i> </span> </a>
                                <ul className="dropdown">
                                    <li><a href="index.html">Home Page 01</a></li>
                                    <li><a href="index-2.html">Home Page 02</a></li>
                                    <li><a href="index-3.html">Home Page 03</a></li>
                                    <li><a href="index-4.html">Home Page 04</a></li>
                                    <li><a href="index-5.html">Home Page 05</a></li>
                                    <li><a href="index-6.html">Home Page 06</a></li>
                                    <li><a href="index-7.html">Home Page 07</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-list"><a href="#0"> <span>Магазин </span> <span className="menuarrow"> <i
                                className="flaticon-next-1"></i> </span> </a>
                                <ul className="dropdown">
                                    <li className="subhed position-relative"><a href="#0">
                                        <span>Shop Details Style </span>
                                        <span className="menuarrowtwo"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="subdropdown">
                                            <li><a href="shop-details-1.html">Shop Details 01</a></li>
                                            <li><a href="shop-details-2.html">Shop Details 02</a></li>
                                            <li><a href="shop-details-3.html">Shop Details 03</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-grid.html"> Shop Grid</a></li>
                                    <li><a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                    <li><a href="shop-grid-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                    <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                    <li><a href="shop-list-left-sidebar.html">Shop LIst Left Sidebar</a></li>
                                </ul>
                            </li>
                            <li className="dropdown-list"><a href="#0"> <span>Features </span> <span
                                className="menuarrow"> <i
                                className="flaticon-next-1"></i> </span> </a>
                                <ul className="dropdown">
                                    <li className="subhed position-relative"><a href="#0"> <span>Category</span> <span
                                        className="menuarrowtwo"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="subdropdown">
                                            <li><a href="shop-grid.html">Latest Shoes</a></li>
                                            <li><a href="shop-grid.html">New Shoes</a></li>
                                            <li><a href="shop-grid.html">Casual Shoes</a></li>
                                            <li><a href="shop-grid.html">Office Shoes</a></li>
                                        </ul>
                                    </li>
                                    <li className="subhed position-relative"><a href="#0"> <span>Offers</span> <span
                                        className="menuarrowtwo"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="subdropdown">
                                            <li><a href="shop-grid.html">New Arrivals </a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Shirts</a></li>
                                            <li><a href="shop-grid-right-sidebar.html">Polos</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Jeans</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Casual Dress</a></li>
                                        </ul>
                                    </li>
                                    <li className="subhed position-relative"><a href="#0"> <span>accessories</span>
                                        <span
                                            className="menuarrowtwo"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="subdropdown">
                                            <li><a href="shop-grid-left-sidebar.html">Latest Items </a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Quick Deal</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Shoes Items</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Hot Deal</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Fast Services </a></li>
                                        </ul>
                                    </li>
                                    <li className="subhed position-relative"><a href="#0"> <span>Discount</span> <span
                                        className="menuarrowtwo"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="subdropdown">
                                            <li><a href="shop-grid-left-sidebar.html">10% Off</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">20% Off</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">30% Off</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">40% Off</a></li>
                                            <li><a href="shop-list-left-sidebar.html">50% Off</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-list"><a href="#0"> <span>Pages</span> <span className="menuarrow"> <i
                                className="flaticon-next-1"></i> </span> </a>
                                <ul className=" dropdown ">
                                    <li><a href="about-us.html"> About Us </a></li>
                                    <li><a href="cart.html"> Cart </a></li>
                                    <li><a href="compare.html"> Compare </a></li>
                                    <li><a href="wishlist.html"> Wishlist </a></li>
                                    <li><a href="order-track.html"> Order Track </a></li>
                                    <li><a href="my-account.html"> My Account </a></li>
                                    <li><a href="faq.html"> FAQ </a></li>
                                    <li><a href="error.html"> 404 </a></li>
                                    <li><a href="shop-grid.html">Shop Grid </a></li>
                                    <li><a href="shop-grid-left-sidebar.html"> Shop Grid Left Sidebar </a></li>
                                    <li><a href="shop-grid-right-sidebar.html"> Shop Grid Right Sidebar </a></li>
                                    <li><a href="shop-list-left-sidebar.html"> Shop List Left Sidebar </a></li>
                                    <li><a href="shop-grid-right-sidebar.html"> Shop List Right Sidebar </a></li>
                                </ul>
                            </li>
                            <li className="dropdown-list"><a href="#0"> <span>Blogs </span> <span className="menuarrow"> <i
                                className="flaticon-next-1"></i> </span> </a>
                                <ul className=" dropdown ">
                                    <li><a href="blog.html">Blog Single </a></li>
                                    <li><a href="blog-single.html">Blog Details </a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact </a></li>
                            <li><a href="login.html">Login </a></li>
                            <li><a href="register.html">Register </a></li>
                        </ul>
                    </div>
                </div>
                <div className="main-menu">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-4 text-start">
                                <div className="left d-lg-block d-none ">
                                    <div className="search-box-holder">
                                        <form action="#0">
                                            <div className="form-group search-box menu"><input type="text"
                                                                                               className="form-control"
                                                                                               placeholder="Поиск товара"/> <span
                                                className="search-icon"> <i
                                                className="flaticon-magnifying-glass"></i> </span></div>
                                        </form>
                                    </div>
                                </div>
                                <div className="right d-lg-none d-block">
                                    <ul className="main-menu__widge-box d-flex align-items-center ">
                                        <li className="menubar"><span></span> <span></span> <span></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="middle"><a href="index.html" className="logo"> <img
                                    src="../assets;" alt=""/> </a></div>
                            </div>
                            <div className="col-4 text-end">
                                <div className="right d-flex align-items-center justify-content-end">
                                    <ul className="main-menu__widge-box d-flex align-items-center ">
                                        <li className="d-lg-block d-none"><a href="my-account.html"><i
                                            className="flaticon-user"></i> </a></li>
                                        <li className="d-lg-block d-none"><a href="wishlist.html" className="number"> <i
                                            className="flaticon-heart"></i> </a></li>
                                        <li className="cartm"><a href="#0" className="number cart-icon"> <i
                                            className="flaticon-shopping-cart"></i><span className="count">(5)</span>
                                        </a>
                                        </li>
                                        <li className="menubar d-lg-block d-none"><span></span> <span></span>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mega-menu-default mega-menu d-lg-block d-none">
                    <div className="container position-relative">
                        <div className="row">
                            <nav>
                                <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                                    <li className="dropdown-list"><a href="#0"> <span>Home</span> <span
                                        className="menuarrow"> <i
                                        className="flaticon-down-arrow"></i> </span> </a>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home Page 01 <sup
                                                className="info three">Popular</sup></a>
                                            </li>
                                            <li><a href="index-2.html">Home Page 02 <sup className="info one">Hot</sup></a>
                                            </li>
                                            <li><a href="index-3.html">Home Page 03 </a></li>
                                            <li><a href="index-4.html">Home Page 04 </a></li>
                                            <li><a href="index-5.html">Home Page 05 <sup className="info two">New</sup></a>
                                            </li>
                                            <li><a href="index-6.html">Home Page 06 <sup className="info one">New</sup></a>
                                            </li>
                                            <li><a href="index-7.html">Home Page 07 <sup
                                                className="info three">New</sup></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-list"><a href="#0"> <span>Shop </span> <span
                                        className="menuarrow"> <i
                                        className="flaticon-down-arrow"></i> </span> </a>
                                        <ul className="dropdown">
                                            <li><a href="shop-grid.html">Shop Grid</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar </a></li>
                                            <li><a href="shop-grid-right-sidebar.html">Shop List Left Sidebar</a></li>
                                            <li><a href="shop-grid-right-sidebar.html">Shop Grid Right Sidebar </a></li>
                                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                            <li className="submenu-parent"><a href="#0">
                                                <span>Shop Details Style </span> <span
                                                className="menuarrow"> <i className="flaticon-next-1"></i> </span> </a>
                                                <ul className="submenu">
                                                    <li><a href="shop-details-1.html">Shop Details Style 01</a></li>
                                                    <li><a href="shop-details-2.html">Shop Details Style 02</a></li>
                                                    <li><a href="shop-details-3.html">Shop Details Style 03</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-list megamenu "><a href="#0"> <span>Features </span> <span
                                        className="menuarrow"> <i className="flaticon-down-arrow"></i> </span> </a>
                                        <div className="dropdown megamenu-dropdown">
                                            <div className="row g-0">
                                                <div className="col-xl-6 col-lg-7 megamenu-padding-one">
                                                    <div className="row g-0">
                                                        <div className="col-lg-4">
                                                            <div className="megamenu-box one">
                                                                <h6>Home Pages</h6>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="index.html">Home Page 01</a></li>
                                                                    <li><a href="index-2.html">Home Page 02</a></li>
                                                                    <li><a href="index-3.html">Home Page 03</a></li>
                                                                    <li><a href="index-4.html">Home Page 04</a></li>
                                                                    <li><a href="shop-details-1.html">Product Style
                                                                        1 </a>
                                                                    </li>
                                                                    <li><a href="shop-details-2.html">Product Style
                                                                        2 </a>
                                                                    </li>
                                                                    <li><a href="shop-details-3.html">Product Style
                                                                        3 </a>
                                                                    </li>
                                                                    <li><a href="contact.html">Contact </a></li>
                                                                    <li><a href="faq.html">FAQ</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="megamenu-box one">
                                                                <h6>Shop Pages</h6>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="shop-grid.html">Shop Grid </a></li>
                                                                    <li><a href="shop-list-left-sidebar.html">Shop
                                                                        list</a>
                                                                    </li>
                                                                    <li><a href="shop-grid-right-sidebar.html">Shop 2
                                                                        colums
                                                                    </a></li>
                                                                    <li><a href="shop-grid-left-sidebar.html">Shop 3
                                                                        colums
                                                                    </a></li>
                                                                    <li><a href="shop-grid.html">Shop 4 colums</a></li>
                                                                    <li><a href="shop-grid-left-sidebar.html">Shop Grid
                                                                        Left
                                                                        Sidebar </a></li>
                                                                    <li><a href="shop-grid-right-sidebar.html">Shop Grid
                                                                        Right Sidebar</a></li>
                                                                    <li><a href="shop-list-left-sidebar.html">Shop List
                                                                        Left
                                                                        Sidebar</a></li>
                                                                    <li><a href="shop-list-right-sidebar.html">Shop List
                                                                        Right Sidebar</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="megamenu-box four">
                                                                <h6>Others Pages</h6>
                                                                <ul className="megamenu-list">
                                                                    <li><a href="cart.html">Cart </a></li>
                                                                    <li><a href="compare.html">Compare </a></li>
                                                                    <li><a href="wishlist.html">Wishlist </a></li>
                                                                    <li><a href="order-track.html">Order Track </a></li>
                                                                    <li><a href="my-account.html">My Account </a></li>
                                                                    <li><a href="blog.html">Blog</a></li>
                                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                                    <li><a href="login.html">Login</a></li>
                                                                    <li><a href="register.html">Register</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-5 megamenu-padding background">
                                                    <div className="row g-0">
                                                        <div className="col-xl-6 col-lg-5">
                                                            <div className="content"><a href="shop-details-1.html"
                                                                                        className="thumb d-block"> <img
                                                                src="assets/images/menu/mega-menu.jpg" alt=""/> </a>
                                                                <a href="shop-details-1.html" className="title d-block">
                                                                    <h6> Super Comfort Sofa </h6>
                                                                </a> <a href="shop-details-1.html"
                                                                        className="price">$250.00</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-7">
                                                            <div className="offer">
                                                                <h6>Discount</h6>
                                                                <ul>
                                                                    <li><a href="shop-grid.html"> <span>%</span> 30% Off
                                                                        Everything! </a></li>
                                                                    <li><a href="shop-grid-left-sidebar.html">
                                                                        <span>%</span> Get an Extra 20% Off Sale! Use
                                                                        Code: Sale </a></li>
                                                                    <li><a href="shop-grid-right-sidebar.html">
                                                                        <span>%</span> Flash Sale Offers </a></li>
                                                                    <li><a href="shop-grid.html"> <span>%</span> Flash
                                                                        Sale
                                                                        Offers </a></li>
                                                                    <li><a href="shop-grid-left-sidebar.html">
                                                                        <span>%</span> 30% Off Everything! </a></li>
                                                                    <li><a href="shop-grid-right-sidebar.html">
                                                                        <span>%</span> Flash Sale Offers </a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="dropdown-list"><a href="#0"> <span>Blogs </span> <span
                                        className="menuarrow"> <i
                                        className="flaticon-down-arrow"></i> </span> </a>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">All Blog Posts</a></li>
                                            <li><a href="blog-single.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-list"><a href="#0"> <span>Pages </span> <span
                                        className="menuarrow"> <i
                                        className="flaticon-down-arrow"></i> </span> </a>
                                        <ul className="dropdown">
                                            <li><a href="about-us.html">About Us </a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="order-track.html">Order_Track</a></li>
                                            <li><a href="my-account.html">My_Account</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-list"><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticy-header">
                <div className="mobile-menu d-lg-none d-block ">
                    <div className="mobile-menu__menu-top border-bottom-0">
                        <div className="container ">
                            <div className="row">
                                <div className="menu-info d-flex justify-content-between align-items-center">
                                    <div className="menubar"><span></span> <span></span> <span></span></div>
                                    <a
                                        href="index.html" className="logo"> <img src="assets/images/logo/logo.png"
                                                                                 alt=""/> </a>
                                    <div className="cart-holder">
                                        <a href="#0" className="cart cart-icon position-relative">
                                            <i className="flaticon-shopping-cart"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container position-relative  d-lg-block d-none ">
                    <div className="d-flex align-items-center justify-content-between"><a href="index.html"
                                                                                          className="logo me-2">
                        <img src="assets/images/logo/logo.png" alt=""/> </a>
                        <div className="mega-menu-default mega-menu d-lg-block d-none">
                            <div className="container ">
                                <div className="row">
                                    <nav>
                                        <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                                            <li className="dropdown-list"><a href="#0"> <span>Home</span> <span
                                                className="menuarrow"> <i className="flaticon-down-arrow"></i> </span>
                                            </a>
                                                <ul className="dropdown">
                                                    <li><a href="index.html">Home Page 01 <sup
                                                        className="info three">Popular</sup></a></li>
                                                    <li><a href="index-2.html">Home Page 02 <sup
                                                        className="info one">Hot</sup></a>
                                                    </li>
                                                    <li><a href="index-3.html">Home Page 03 </a></li>
                                                    <li><a href="index-4.html">Home Page 04 </a></li>
                                                    <li><a href="index-5.html">Home Page 05 <sup
                                                        className="info two">New</sup></a>
                                                    </li>
                                                    <li><a href="index-6.html">Home Page 06 <sup
                                                        className="info one">New</sup></a>
                                                    </li>
                                                    <li><a href="index-7.html">Home Page 07 <sup
                                                        className="info three">New</sup></a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-list"><a href="#0"> <span>Магазин </span> <span
                                                className="menuarrow"> <i className="flaticon-down-arrow"></i> </span>
                                            </a>
                                                <ul className="dropdown">
                                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                                    <li><a href="shop-grid-left-sidebar.html">Shop Grid Left
                                                        Sidebar </a>
                                                    </li>
                                                    <li><a href="shop-grid-right-sidebar.html">Shop List Left
                                                        Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-grid-right-sidebar.html">Shop Grid Right
                                                        Sidebar </a>
                                                    </li>
                                                    <li><a href="shop-list-right-sidebar.html">Shop List Right
                                                        Sidebar</a>
                                                    </li>
                                                    <li className="submenu-parent"><a href="#0"> <span>Shop Details Style
                                                        </span> <span className="menuarrow"> <i
                                                        className="flaticon-next-1"></i>
                                                        </span> </a>
                                                        <ul className="submenu">
                                                            <li><a href="shop-details-1.html">Shop Details Style 01</a>
                                                            </li>
                                                            <li><a href="shop-details-2.html">Shop Details Style 02</a>
                                                            </li>
                                                            <li><a href="shop-details-3.html">Shop Details Style 03</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-list megamenu "><a href="#0"> <span>Features </span>
                                                <span
                                                    className="menuarrow"> <i
                                                    className="flaticon-down-arrow"></i> </span> </a>
                                                <div className="dropdown megamenu-dropdown">
                                                    <div className="row g-0">
                                                        <div className="col-xl-6 col-lg-7 megamenu-padding-one">
                                                            <div className="row g-0">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu-box one">
                                                                        <h6>Home Pages</h6>
                                                                        <ul className="megamenu-list">
                                                                            <li><a href="index.html">Home Page 01</a>
                                                                            </li>
                                                                            <li><a href="index-2.html">Home Page 02</a>
                                                                            </li>
                                                                            <li><a href="index-3.html">Home Page 03</a>
                                                                            </li>
                                                                            <li><a href="index-4.html">Home Page 04</a>
                                                                            </li>
                                                                            <li><a href="shop-details-1.html">Product
                                                                                Style
                                                                                1 </a></li>
                                                                            <li><a href="shop-details-2.html">Product
                                                                                Style
                                                                                2 </a></li>
                                                                            <li><a href="shop-details-3.html">Product
                                                                                Style
                                                                                3 </a></li>
                                                                            <li><a href="contact.html">Contact </a></li>
                                                                            <li><a href="faq.html">FAQ</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu-box one">
                                                                        <h6>Shop Pages</h6>
                                                                        <ul className="megamenu-list">
                                                                            <li><a href="shop-grid.html">Shop Grid </a>
                                                                            </li>
                                                                            <li><a href="shop-list-left-sidebar.html">Shop
                                                                                list</a></li>
                                                                            <li><a href="shop-grid-right-sidebar.html">Shop
                                                                                2 colums </a></li>
                                                                            <li><a href="shop-grid-left-sidebar.html">Shop
                                                                                3
                                                                                colums </a></li>
                                                                            <li><a href="shop-grid.html">Shop 4
                                                                                colums</a>
                                                                            </li>
                                                                            <li><a href="shop-grid-left-sidebar.html">Shop
                                                                                Grid Left Sidebar </a></li>
                                                                            <li><a href="shop-grid-right-sidebar.html">Shop
                                                                                Grid Right Sidebar</a></li>
                                                                            <li><a href="shop-list-left-sidebar.html">Shop
                                                                                List Left Sidebar</a></li>
                                                                            <li><a href="shop-list-right-sidebar.html">Shop
                                                                                List Right Sidebar</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu-box four">
                                                                        <h6>Others Pages</h6>
                                                                        <ul className="megamenu-list">
                                                                            <li><a href="cart.html">Cart </a></li>
                                                                            <li><a href="compare.html">Compare </a></li>
                                                                            <li><a href="wishlist.html">Wishlist </a>
                                                                            </li>
                                                                            <li><a href="order-track.html">Order
                                                                                Track </a>
                                                                            </li>
                                                                            <li><a href="my-account.html">My
                                                                                Account </a>
                                                                            </li>
                                                                            <li><a href="blog.html">Blog</a></li>
                                                                            <li><a href="blog-single.html">Blog
                                                                                Single</a>
                                                                            </li>
                                                                            <li><a href="login.html">Login</a></li>
                                                                            <li><a href="register.html">Register</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-5 megamenu-padding background">
                                                            <div className="row g-0">
                                                                <div className="col-xl-6 col-lg-5">
                                                                    <div className="content"><a
                                                                        href="shop-details-1.html"
                                                                        className="thumb d-block"> <img
                                                                        src="assets/images/menu/mega-menu.jpg"
                                                                        alt=""/> </a> <a href="shop-details-1.html"
                                                                                        className="title d-block">
                                                                        <h6> Super Comfort Sofa </h6>
                                                                    </a> <a href="shop-details-1.html"
                                                                            className="price">$250.00</a></div>
                                                                </div>
                                                                <div className="col-xl-6 col-lg-7">
                                                                    <div className="offer">
                                                                        <h6>Discount</h6>
                                                                        <ul>
                                                                            <li><a href="shop-grid.html">
                                                                                <span>%</span> 30%
                                                                                Off Everything! </a></li>
                                                                            <li><a href="shop-grid-left-sidebar.html">
                                                                                <span>%</span> Get an Extra 20% Off
                                                                                Sale! Use Code: Sale </a></li>
                                                                            <li><a href="shop-grid-right-sidebar.html">
                                                                                <span>%</span> Flash Sale Offers </a>
                                                                            </li>
                                                                            <li><a href="shop-grid.html"> <span>%</span>
                                                                                Flash Sale Offers </a></li>
                                                                            <li><a href="shop-grid-left-sidebar.html">
                                                                                <span>%</span> 30% Off Everything! </a>
                                                                            </li>
                                                                            <li><a href="shop-grid-right-sidebar.html">
                                                                                <span>%</span> Flash Sale Offers </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown-list"><a href="#0"> <span>Blogs </span> <span
                                                className="menuarrow"> <i className="flaticon-down-arrow"></i> </span>
                                            </a>
                                                <ul className="dropdown">
                                                    <li><a href="blog.html">All Blog Posts</a></li>
                                                    <li><a href="blog-single.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-list"><a href="#0"> <span>Pages </span> <span
                                                className="menuarrow"> <i className="flaticon-down-arrow"></i> </span>
                                            </a>
                                                <ul className="dropdown">
                                                    <li><a href="about-us.html">About Us </a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="order-track.html">Order_Track</a></li>
                                                    <li><a href="my-account.html">My_Account</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-list"><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            <div className="sidebar-content">
                <div className="sidebar-widget-container">
                    <div className="widget-heading d-flex justify-content-end align-content-center"> <span
                        className="close-side-widget">X</span></div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo"><a href="index.html"><img src="assets/images/logo/logo-2.png"
                                                                                alt=""/></a>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                    </div>
                                </div>
                                <div className="form_inner">
                                    <h4>Support</h4>
                                    <form action="index.html" method="post">
                                        <div className="form-group mt-4"><input type="text" name="name"
                                                                                placeholder="Name"
                                                                                required={false}/></div>
                                        <div className="form-group mt-4"><input type="email" name="email"
                                                                                placeholder="Email"
                                                                                required={false}/></div>
                                        <div className="form-group mt-4"> <textarea name="message"
                                                                                    placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn mt-4">
                                            <button type="submit"
                                                    className="btn--secondary"><span className="txt">Submit Now</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li><span className="flaticon-pin-1"></span> New York, United States</li>
                                        <li><span className="flaticon-telephone"></span> <a href="tel:+44203700001">+44
                                            123 456
                                            789</a></li>
                                        <li><span className="flaticon-mail"></span> <a
                                            href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="thm-medio-boxx1">
                                    <ul className="social-box">
                                        <li className="facebook"><a href="https://www.facebook.com/" target="_blank"><i
                                            className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li className="twitter"><a href="https://twitter.com/" target="_blank"><i
                                            className="flaticon-twitter"></i></a></li>
                                        <li className="instagram"><a href="https://www.instagram.com/"
                                                                     target="_blank"><i
                                            className="flaticon-instagram"></i></a></li>
                                        <li className="youtube"><a href="https://www.youtube.com/" target="_blank"><i
                                            className="flaticon-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;