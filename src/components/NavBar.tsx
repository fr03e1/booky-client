import React from 'react';
import {ERoutes} from "../types/RouteType";
import {Link} from "react-router-dom";

const NavBar:React.FC = () => {
    return (
        <div className="mega-menu-default mega-menu d-lg-block d-none">
            <div className="container position-relative">
                <div className="row">
                    <nav>
                        <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                            <li className="dropdown-list"><Link to={ERoutes.MAIN_ROUTE}> <span>Главная</span></Link></li>
                            <li className="dropdown-list"><Link to={ERoutes.SHOP_ROUTE}> <span>Магазин</span> <span
                                className="menuarrow"> <i
                                className="flaticon-down-arrow"></i> </span> </Link>
                                <ul className="dropdown">
                                    <li className="submenu-parent"><a href="#0"> <span>Книги</span> <span
                                        className="menuarrow"> <i className="flaticon-next-1"></i> </span> </a>
                                        <ul className="submenu">
                                            <li><a href="shop-details-1.html">Классическая литература</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="dropdown-list megamenu "><Link to={ERoutes.BLOG_ROUTE}> <span>Блог </span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;