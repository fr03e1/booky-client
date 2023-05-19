import React from 'react';
import ShopItem from "./ShopItem";
import image2 from '../assets/images/37.jpeg';

const ItemList = () => {
    const [active, setActive] = React.useState(false);

    return (
        <>
        <div className="row">
            <ShopItem title={'1984'} image={image2} price={15} authors={['ДЖОРДЖ ОРУЭЛЛ']}/>
            <ShopItem title={'1984'} image={image2} price={15} authors={['ДЖОРДЖ ОРУЭЛЛ']}/>
            <ShopItem title={'1984'} image={image2} price={15} authors={['ДЖОРДЖ ОРУЭЛЛ']}/>
            <ShopItem title={'1984'} image={image2} price={15} authors={['ДЖОРДЖ ОРУЭЛЛ']}/>
        </div>
        </>
    );
};

export default ItemList;