import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ERoutes} from "../types/RouteType";
import {WidgetBoxProps} from "../types/props/WidgetBoxProps";
import CartModal from "./modals/CartModal";

const WidgetBox: React.FC<WidgetBoxProps> = ({active, setActive}) => {
    const isAuth = true;
    const cartRef = useRef<HTMLDivElement>(null);

    const box = isAuth ? (<div className="right d-flex align-items-center justify-content-end">
        <ul className="main-menu__widge-box d-flex align-items-center ">
            <li className="d-lg-block d-none"><Link to={ERoutes.ACCOUNT_ROUTE}><i
                className="flaticon-user"></i> </Link></li>
            <li className="d-lg-block d-none"><Link to={ERoutes.WISHLIST_ROUTE} className="number"> <i
                className="flaticon-heart"></i> </Link></li>
           <div ref={cartRef}>
               <button
                   id="cart-btn"
                   className="cartm btn-reset"
                   onClick={() => setActive(!active)}
               ><i
                   className="flaticon-shopping-cart"></i><span
                   className="count">(0)</span>
               </button>
           </div>
            <CartModal active={active} setActive={setActive} cartRef={cartRef}/>
        </ul>
    </div>) : (
        <div className="right d-flex align-items-center justify-content-end">
            <ul className="main-menu__widge-box d-flex align-items-center ">
                <li className="d-lg-block d-none"><Link to={ERoutes.LOGIN_ROUTE}>Войти</Link></li>
                <button
                    className="cartm"
                    onClick={() => setActive(true)}
                ><i
                    className="flaticon-shopping-cart"></i><span
                    className="count">(0)</span>
                </button>
            </ul>
        </div>
    )
    return box;
};

export default WidgetBox;