import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ERoutes} from "../types/RouteType";

const WidgetBox = () => {
    const isAuth = false;
    const navigate = useNavigate();

    const box = isAuth ? (<div className="right d-flex align-items-center justify-content-end">
        <ul className="main-menu__widge-box d-flex align-items-center ">
            <li className="d-lg-block d-none"><a href="my-account.html"><i
                className="flaticon-user"></i> </a></li>
            <li className="d-lg-block d-none"><a href="wishlist.html" className="number"> <i
                className="flaticon-heart"></i> </a></li>
            <li className="cartm"><a href="#0" className="number cart-icon"> <i
                className="flaticon-shopping-cart"></i><span className="count">(5)</span>
            </a>
            </li>
        </ul>
    </div>) : (
        <div className="right d-flex align-items-center justify-content-end">
            <ul className="main-menu__widge-box d-flex align-items-center ">
                <li className="d-lg-block d-none"><Link to={ERoutes.LOGIN_ROUTE}>Войти</Link></li>
                <li className="cartm"><Link to={ERoutes.CART_ROUTE} className="number cart-icon"> <i
                    className="flaticon-shopping-cart"></i><span
                    className="count">(0)</span>
                </Link>
                </li>
            </ul>
        </div>
    )
    return box;
};

export default WidgetBox;