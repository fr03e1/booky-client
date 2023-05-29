import React from 'react';
import Filters from "../components/Filters/Filters";
import SortBar from "../components/SortBar/SortBar";
import ItemList from "../components/ItemList/ItemList";
import Pagination from "../components/Pagination/Pagination";
import {useAppSelector} from "../hooks/redux";
import LoadingErrorPage from "./LoadingErrorPage";


const ShopPage:React.FC = () => {
    const {status} = useAppSelector(state => state.bookSlice);

    if(status === 'error') return <LoadingErrorPage/>

    return (
        <div className="product-grid pt-60 pb-120">
            <div className="container">
                <div className="row gx-4">
                    <Filters/>
                    <div className="col-xl-9 col-lg-8" >
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