import React from 'react';
import {ShopItemProps} from "../types/props/ShopItemProps";
import image from '../assets/images/37.jpeg';
const ShopItem:React.FC<ShopItemProps> = ({title,authors,price}) => {
    return (
        <div>
            <div className="product-grid-two list mt-30">
                <div className="product-grid-two-content text-center">
                    <div className="d-flex justify-content-between">
                        <div className="justify-content-around">
                            <span>Modern</span>
                            <h5><a href="#"> {title} </a>
                            </h5>
                            <p>{price} р.</p>
                            <p className="text"> Typi non habent claritatem insitam usus
                                legentis qui facit eorum claritatem Investigationes
                                demonstraverunt lectores legere mele lius quod legunt
                                saepius Claritas est etiam processus a capitalize on low
                                hanging </p>
                        </div>
                        <img width={200} height={255} src={image}/>
                    </div>
                    <div className="product-grid-two__overlay-box d-flex justify-content-end">
                        <div className="title">
                            <h6><a href="#">Добавить в корзину</a></h6>
                        </div>
                        <div className="icon">
                            <ul>
                                <li><a href="#" className="popup_link"><i
                                    className="flaticon-eye"></i></a></li>
                                <li><a href="#"><i
                                    className="flaticon-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;