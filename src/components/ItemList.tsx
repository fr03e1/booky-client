import React from 'react';
import book from '../assets/book.json';
import ShopItem from "./ShopItem";
import {ShopItemProps} from "../types/props/ShopItemProps";

const ItemList = () => {


    return (
        <div className="row">
            <div className="col-12">
                <ShopItem  title={'Первый'} image={'gawga'} price={1500} authors={['hello']}/>
            </div>
        </div>
    );
};

export default ItemList;