import React, {useEffect} from 'react';
import ShopItem from "../ShopItem/ShopItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBooks} from "../../redux/slices/bookSlice";

const ItemList:React.FC = () => {
    const dispatch = useAppDispatch();

    const {items} = useAppSelector(state => state.bookSlice);
    const {authors,price,year,publishers,pages,sorting,page} = useAppSelector(state => state.filterSlice);
    useEffect(()=>{
        const sortBy = sorting.replace("-", "");
        const order = sorting.includes("-") ? "asc" : "desc";
        dispatch(fetchBooks({authors,price, year, publishers,pages, sortBy,order,page}))
    },[authors,price,year,publishers,pages,page])

    return (
        <>
            <div className="row">
                {items && items.map(book =>
                    <ShopItem
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        price={book.price}
                        authors={book.authors}
                        images={book.images['data'][0]}
                    />
                )}
            </div>
        </>
    );
};

export default ItemList;