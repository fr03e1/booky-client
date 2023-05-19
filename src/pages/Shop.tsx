import React from 'react';
import Filters from "../components/Filters";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import ItemList from "../components/ItemList";

const Shop = () => {
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

export default Shop;