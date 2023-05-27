import React, {useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import CartModal from "./modals/CartModal";
import {ERoutes} from "../models/types/RouteType";
import {WidgetBoxProps} from "../models/types/props/WidgetBoxProps";

const WidgetBox: React.FC<WidgetBoxProps> = ({active, setActive}) => {
    const isAuth = false;
    const cartRef = useRef<HTMLDivElement>(null);


    const box = isAuth ? (<div className="right d-flex align-items-center justify-content-end">
        <ul className="main-menu__widge-box d-flex align-items-center ">
            <li className="d-lg-block d-none"><Link to={ERoutes.ACCOUNT_ROUTE}><i
                className="flaticon-user"></i> </Link></li>
            <li className="d-lg-block d-none"><Link to={ERoutes.WISHLIST_ROUTE} className="number"> <i
                className="flaticon-heart"></i> </Link></li>
           <div ref={cartRef}>
               <button
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
                <div ref={cartRef}>
                    <button
                        className="cartm btn-reset"
                        onClick={() => setActive(!active)}
                    ><i
                        className="flaticon-shopping-cart"></i><span
                        className="count">(0)</span>
                    </button>
                </div>
                <CartModal active={active} setActive={setActive} cartRef={cartRef}/>
            </ul>
        </div>
    )
    return box;
};

export default WidgetBox;