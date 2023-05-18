import React from 'react';

const SortBar = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div
                    className="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                    <div className="left-box wow fadeInUp animated">
                        <p>Showing 1-12 of 50 Results</p>
                    </div>
                    <div
                        className="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                        <div className="short-by">
                            <div className="select-box"><select className="wide">
                                <option data-display="Short by latest">Featured</option>
                                <option value="1">Best selling</option>
                                <option value="2">Alphabetically, A-Z</option>
                                <option value="3">Alphabetically, Z-A</option>
                                <option value="3">Price, low to high</option>
                                <option value="3">Price, high to low</option>
                                <option value="3">Date, old to new</option>
                            </select></div>
                        </div>
                        <div
                            className="product-view-style d-flex justify-content-md-between justify-content-center">

                            <button className="slidebarfilter d-lg-none d-flex"><i
                                className="flaticon-edit"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBar;