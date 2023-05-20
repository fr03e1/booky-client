import React, {useState} from 'react';
import image from '../assets/images/37.jpeg';
import ItemPageBottom from "../components/ItemPageComponents/ItemPageBottom";

const ItemPage = () => {

    return(
        <>
        <section className="shop-details-top two ">
            <div className="container">
                <div className="row mt--30">
                    <div className="col-xl-3 col-lg-4 mt-30 wow fadeInUp animated">
                        <div className="single-product-box one">
                            <div className="big-product single-product-one slider-for">
                                <div>
                                    <div className="single-item"><img src={image} alt=""/>
                                        <a href="#"
                                           className="love"> <i className="flaticon-like"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="navholder">
                                <div className="product-slicknav single-product-one-nav slider-nav">
                                    <div> <span className="single-item"> <img
                                        src="" alt=""/> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5"><ItemPageBottom/></div>
                    <div className="col-xl-4 col-lg-6 mt-30 wow fadeInUp animated">
                        <div className="shop-details-top-right ">
                            <div className="shop-details-top-right-content-box">

                                <div className="shop-details-top-title">
                                    <h5>Джордж Оруэлл</h5>
                                    <h3>1994</h3>
                                </div>
                                <div className="shop-details-top-price-box">
                                    <h3>1030.00 Р</h3>
                                </div>
                                <ul className="shop-details-top-info">
                                    <li><span>SKU:</span> 25d5214</li>
                                    <li><span>Издатель:</span> Flemeno</li>
                                </ul>
                                <ul className="shop-details-top-category-tags">
                                    <li>Категория: <span>Антиутопия</span></li>
                                    <li>Теги: <span>Редкая книга</span></li>
                                </ul>
                                <div className="product-quantity">
                                    <h4>Количество</h4>
                                    <div className="product-quantity-box d-flex align-items-center flex-wrap">
                                        <div className="qty mr-2">
                                            <div className="qtySelector text-center"> <span className="decreaseQty"><i
                                                className="flaticon-minus"></i> </span> <input type="number"
                                                                                               className="qtyValue"
                                                                                               value="1"/> <span
                                                className="increaseQty"> <i
                                                className="flaticon-plus"></i> </span></div>
                                        </div>
                                        <div className="product-quantity-check"><i className="flaticon-select"></i>
                                            <p>В наличии</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-details-top-free-shipping"><i className="flaticon-shipping"></i>
                                    <p>Потратьте еще <span>1500.00</span> для бесплатной доставки</p>
                                </div>
                                <div className="shop-details-top-cart-box-btn">
                                    <button className="btn--primary style2 "
                                            type="submit">Добавить в коризну
                                    </button>
                                </div>
                            </div>
                            <div className="shop-details">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ItemPage;