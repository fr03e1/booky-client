import React from 'react';
import ShopItem from "./ShopItem";
import image2 from '../assets/images/37.jpeg';
import {useGetBooksQuery} from "../services/bookService";

const ItemList:React.FC = () => {
    const {data,error,isLoading} = useGetBooksQuery("");

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