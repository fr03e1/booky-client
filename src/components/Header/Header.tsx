import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Search from "./components/Search/Search";
import {ERoutes} from "../../models/types/RouteType";
import WidgetBox from "./components/WidgetBox/WidgetBox";
import NavBar from "./components/NavBar/NavBar";


const Header:React.FC = () => {
    const [active, setActive] = React.useState(false);

    return (
        <header className="header-default">
            <div className="menubox">
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
                                        <img alt=""/>
                                    </Link>
                                </div>
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