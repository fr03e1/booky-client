import React from 'react';

const Search:React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default Search;