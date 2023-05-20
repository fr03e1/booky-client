import React from 'react';

const SortBar:React.FC = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div
                    className="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                    <div className="left-box wow fadeInUp animated">
                        <p>Показано 1-12 из 50 товаров</p>
                    </div>
                    <div
                        className="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                        <div className="short-by">
                            <div className="select-box"><select className="wide">
                                <option data-display="Short by latest">Лучшее</option>
                                <option value="2">По Алфовиту, А-Я</option>
                                <option value="3">По Алфовиту, Я-А</option>
                                <option value="3">По цене, по возрт.</option>
                                <option value="3">По цене, по убыванию.</option>
                                <option value="3">По дате, по убыванию</option>
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