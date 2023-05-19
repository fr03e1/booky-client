import React from 'react';

const NavBar = () => {
    return (
        <div className="mega-menu-default mega-menu d-lg-block d-none">
            <div className="container position-relative">
                <div className="row">
                    <nav>
                        <ul className="page-dropdown-menu d-flex align-items-center justify-content-center">
                            <li className="dropdown-list"><a href="#0"> <span>Главная</span></a></li>
                            <li className="dropdown-list"><a href="#0"> <span>Магазин </span></a></li>
                            <li className="dropdown-list megamenu "><a href="#0"> <span>Блог </span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;