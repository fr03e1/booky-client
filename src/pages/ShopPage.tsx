import React from 'react';
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import ItemList from "../components/ItemList";
import Filters from "../components/filters/Filters";

const ShopPage:React.FC = () => {

    return (
        <div className="product-grid pt-60 pb-120">
            <div className="container">
                <div className="row gx-4">
                    <Filters/>
                    <div className="col-xl-9 col-lg-8">
                        <SortBar/>
                        <ItemList/>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShopPage;