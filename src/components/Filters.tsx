import React from 'react';

const Filters = () => {
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar">
                <button className="remove-sidebar d-lg-none d-block"><i
                    className="flaticon-cross"> </i></button>
                <div className="sidebar-holder">
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                        <h4>Select Categories</h4>
                        <div className="checkbox-item">
                            <form>
                                <div className="form-group"><input type="checkbox" id="bedroom"/> <label
                                    htmlFor="bedroom">Bedroom</label></div>
                                <div className="form-group"><input type="checkbox" id="decoration"/> <label
                                    htmlFor="decoration">Decoration</label></div>
                                <div className="form-group"><input type="checkbox" id="kitchen"/> <label
                                    htmlFor="kitchen">Kitchen</label></div>
                                <div className="form-group"><input type="checkbox" id="clothing"/> <label
                                    htmlFor="clothing">Clothing</label></div>
                                <div className="form-group"><input type="checkbox" id="office"/> <label
                                    htmlFor="office">Office</label></div>
                                <div className="form-group m-0"><input type="checkbox" id="lighting"/> <label
                                    htmlFor="lighting">Lighting</label></div>
                            </form>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                        <h4>Filter By Price</h4>
                        <div className="slider-box">
                            <div id="price-range" className="slider"></div>
                            <div className="output-price"><label htmlFor="priceRange">Price:</label> <input
                                type="text" id="priceRange" readOnly/></div>
                            <button className="filterbtn"
                                    type="submit"> Filter
                            </button>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0">
                        <h4>Tags </h4>
                        <ul className="popular-tag">
                            <li><a href="#0">Tools</a></li>
                            <li><a href="#0">Store</a></li>
                            <li><a href="#0">Decoration</a></li>
                            <li><a href="#0">Online</a></li>
                            <li><a href="#0">Furnitures</a></li>
                            <li><a href="#0">Beauty</a></li>
                            <li><a href="#0">Fashion</a></li>
                            <li><a href="#0">Office</a></li>
                            <li><a href="#0">Clothing</a></li>
                            <li><a href="#0">Interior</a></li>
                            <li><a href="#0">Good</a></li>
                            <li><a href="#0">Standard</a></li>
                            <li><a href="#0">Chair’s</a></li>
                            <li><a href="#0">Living Room</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;