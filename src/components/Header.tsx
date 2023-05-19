import NavBar from './NavBar';
import React, {useEffect, useRef} from "react";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
import WidgetBox from "./WidgetBox";
import CartModal from "./modals/CartModal";
import {Link} from "react-router-dom";
import {ERoutes} from "../types/RouteType";

const Header = () => {
    const [active, setActive] = React.useState(false);

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
                                <div className="middle">
                                    <Link to={ERoutes.MAIN_ROUTE} className="logo">
                                        <img alt=""/><h2>Booky.</h2>
                                    </Link></div>
                            </div>
                            <div className="col-4 text-end">
                                <WidgetBox active={active} setActive={setActive}/>
                            </div>
                        </div>
                    </div>
                </div>
                <NavBar/>
            </div>
        </header>
    )
}

export default Header;