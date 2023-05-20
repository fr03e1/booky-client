import React, {useState} from 'react';
import ItemPageBottom from "../components/itemPageComponents/ItemPageBottom";
import Carousel from "../components/carousel/Carousel";
import image from '../assets/images/37.jpeg';
import image2 from '../assets/images/12.jpeg';
import Breadcrumb from "../components/Breadcrumb";

const ItemPage:React.FC = () => {

    return(
        <>
        <section className="shop-details-top two ">
            <div className="container">
                <div className="row mt--30 d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-4 mt-30 wow fadeInUp animated">
                        <Carousel>
                            <img src={image}/>
                            <img src={image2}/>
                        </Carousel>
                    </div>
                    <div className="col-xl-5 ">
                            <div className="shop-details-top-title">
                            <h5>Джордж Оруэлл</h5>
                            <h3>1984</h3></div>
                        <ItemPageBottom/>
                    </div>
                    <div className="col-xl-4 col-lg-6 mt-30 wow fadeInUp animated">
                        <div className="shop-details-top-right ">
                            <div className="shop-details-top-right-content-box">
                                <div className="shop-details-top-price-box">
                                    <h3>Цена: 1030 ₽</h3>
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
                                <div className="shop-details-top-free-shipping"><i className="flaticon-shipping"></i>
                                    <p>Потратьте еще <span>1500 ₽</span> для бесплатной доставки</p>
                                </div>
                                <div className="shop-details-top-cart-box-btn">
                                    <button className="btn--primary style2 "
                                            type="submit">Добавить в коризну
                                    </button>
                                </div>
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