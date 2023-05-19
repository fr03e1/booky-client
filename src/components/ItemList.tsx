import React from 'react';
import ShopItem from "./ShopItem";
import ItemModal from "./modals/ItemModal";

const ItemList = () => {

    return (
        <>
        <div className="row">
            <div className="col-12">
                <ShopItem  title={'Первый'} image={'gawga'} price={1500} authors={['hello']}/>
            </div>
        </div>

        <ItemModal/>
        </>
    );
};

export default ItemList;