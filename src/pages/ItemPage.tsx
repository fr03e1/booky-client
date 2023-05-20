import React, {useState} from 'react';
import image from '../assets/images/37.jpeg';
import ItemPageBottom from "../components/ItemPageComponents/ItemPageBottom";

const ItemPage = () => {

    return(
        <>
        <section className="shop-details-top two ">
            <div className="container">
                <div className="row mt--30">
                    <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
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
                                        src="assets/images/shop/shop-details-top-img-1.png" alt=""/> </span>
                                    </div>
                                    <div> <span className="single-item"> <img
                                        src="assets/images/shop/shop-details-top-img-2.png" alt=""/> </span>
                                    </div>
                                    <div> <span className="single-item"> <img
                                        src="assets/images/shop/shop-details-top-img-3.png" alt=""/> </span>
                                    </div>
                                    <div> <span className="single-item"> <img
                                        src="assets/images/shop/shop-details-top-img-1.png" alt=""/> </span>
                                    </div>
                                    <div> <span className="single-item"> <img
                                        src="assets/images/shop/shop-details-top-img-2.png" alt=""/> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
                        <div className="shop-details-top-right ">
                            <div className="shop-details-top-right-content-box">

                                <div className="shop-details-top-title">
                                    <h5>Джордж Оруэлл</h5>
                                    <h3>1994</h3>
                                </div>
                                <ul className="shop-details-top-info">
                                    <li><span>SKU:</span> 25d5214</li>
                                    <li><span>Издатель:</span> Flemeno</li>
                                </ul>
                                <div className="shop-details-top-price-box">
                                    <h3>1030.00 Р</h3>
                                </div>

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
                                <div className="shop-details-top-order-now"><i className="flaticon-point"></i>
                                    <p>Осталось меньше 10</p>
                                </div>
                                <div className="shop-details-top-cart-box-btn">
                                    <button className="btn--primary style2 "
                                            type="submit">Добавить в коризну
                                    </button>
                                </div>
                                <div className="shop-details-top-free-shipping"><i className="flaticon-shipping"></i>
                                    <p>Потратьте еще <span>1500.00</span> для бесплатной доставки</p>
                                </div>
                                <div className="shop-details-top-social-box">
                                    <p>Поделиться:</p>
                                    <ul className="ps-1 social_link d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/" className="active" target="_blank"><i
                                            className="flaticon-facebook-app-symbol"></i></a></li>
                                        <li><a href="https://www.youtube.com/" target="_blank"><i
                                            className="flaticon-youtube"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i
                                            className="flaticon-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i
                                            className="flaticon-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <div className="checked-box">
                                    <form>
                                        <div className="form-group"><input type="checkbox" id="html"/> <label
                                            htmlFor="html">Я согласен с правилами</label></div>
                                    </form>
                                </div>
                                <div className="shop-details-top-buy-now-btn"><a href="#" className="btn--primary">Купить сейчас</a></div>

                                <p className="shop-details-top-product-delivery">Доставка между
                                    <span> 27 ноября</span> <br/> <span>2 Октября</span></p>
                                <ul className="shop-details-top-category-tags">
                                    <li>Категория: <span>Антиутопия</span></li>
                                    <li>Теги: <span>Редкая книга</span></li>
                                </ul>
                            </div>
                            <div className="shop-details-top-review-box">
                                <div className="shop-details-top-review">
                                    <ul>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                        <li><i className="flaticon-star-1"></i></li>
                                    </ul>
                                    <p>(2 Отзыва)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <ItemPageBottom/>
        </>
    );
};

export default ItemPage;