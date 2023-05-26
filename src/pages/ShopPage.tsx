import React from 'react';
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import ItemList from "../components/ItemList";
import {useGetBooksQuery} from "../services/bookService";

const ShopPage:React.FC = () => {

    return (
        <div className="product-grid pt-60 pb-120">
            <div className="container">
                <div className="row gx-4">

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