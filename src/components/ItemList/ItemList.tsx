import React from 'react';
import {useGetBooksQuery} from "../../services/bookService";
import LoadingErrorPage from "../../pages/LoadingErrorPage";
import ShopItem from "../ShopItem/ShopItem";
import {useAppSelector} from "../../hooks/redux";

const ItemList:React.FC = () => {
    const {authors} = useAppSelector(state => state.filterSlice)

    const {data,error,isLoading} = useGetBooksQuery("");


    if(error) return <LoadingErrorPage/>

    return (
        <>
            {isLoading ? <h1>Loading</h1> : ( <div className="row">
                {data && data.data.map(book =>
                    <ShopItem
                        key={book.id}
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