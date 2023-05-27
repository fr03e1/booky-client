import React from 'react';

import {Link} from "react-router-dom";
import {ShopItemProps} from "../models/types/props/ShopItemProps";
import {ERoutes} from "../models/types/RouteType";


const ShopItem: React.FC<ShopItemProps> = (
    {
        title,
        price,
        authors,
        images
    }
) => {

    return (

        <div className="col-xl-3 col-lg-6 col-6 ">
            <div className="products-three-single w-100 h-300 mt-30">
                <div className="products-three-single-img">
                    <img
                        src={images.preview}
                        className="first-img" alt=""/>
                    <img
                        src={images.preview}
                        alt="" className="hover-img"/>
                    <a href="#" className="addcart btn--primary style2">
                        В корзину </a>
                    <div className="products-grid__usefull-links">
                        <ul>
                            <li><a href="#"> <i className="flaticon-heart">
                            </i> <span>В избранное</span> </a></li>
                            <li><Link to={ERoutes.ITEM_ROUTE + '/id'} className="popup_link"> <i
                                className="flaticon-visibility"></i>
                                <span> Просмотр</span>
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="products-three-single-content text-center"><span>{authors}</span>
                    <h5><Link to={ERoutes.ITEM_ROUTE + '/1'}> {title} </Link>
                    </h5>
                    <p>
                        {price} Р
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;