import React from 'react';
import ShopItem from "./ShopItem";
import {useGetBooksQuery} from '../services/bookService';
import LoadingErrorPage from "../pages/LoadingErrorPage";


const ItemList:React.FC = () => {
    const {data,error,isLoading} = useGetBooksQuery("");

    if(error) return <LoadingErrorPage/>
    return (
        <>
            {isLoading ? <h1>Loading</h1> : ( <div className="row">
                {data && data.data.map(book =>
                    <ShopItem
                        id={book.id}
                        title={book.title}
                        price={book.price}
                        authors={book.authors}
                        images={book.images['data'][0]}
                    />
                )}
            </div>)}
        </>
    );
};

export default ItemList;