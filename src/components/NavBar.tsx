import React from 'react';
import {ERoutes} from "../types/RouteType";
import {Link} from "react-router-dom";
import CartModal from "./modals/CartModal";

const NavBar:React.FC = () => {
    return (
        <div className="mega-menu-default mega-menu d-lg-block d-none">
            <div className="container position-relative">
                <div className="row">
                    <nav>
                        <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                            <li className="dropdown-list"><Link to={ERoutes.MAIN_ROUTE}> <span>Главная</span></Link></li>
                            <li className="dropdown-list"><Link to={ERoutes.SHOP_ROUTE}> <span>Магазин </span></Link></li>
                            <li className="dropdown-list megamenu "><Link to={ERoutes.BLOG_ROUTE}> <span>Блог </span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;