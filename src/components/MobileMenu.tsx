import React from 'react';

const MobileMenu = () => {
    return (
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
                    <li className="dropdown-list"><a href="#0"> <span>Главная </span> <span
                        className="menuarrow"> <i
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
                    <li className="dropdown-list"><a href="#0"> <span>Магазин </span> <span
                        className="menuarrow"> <i
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
    );
};

export default MobileMenu;