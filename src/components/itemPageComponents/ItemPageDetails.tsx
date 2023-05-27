import React from 'react';
import {ItemPageBottomProps} from "../../models/types/props/ItemPageBottomProps";


const ItemPageDetails: React.FC<ItemPageBottomProps> = ({active}) => {
    return (
        <div className={active ? "tab-pane fade show active" : "tab-pane fade show"} id="pills-review" role="tabpanel"
             aria-labelledby="pills-review-tab">
            <div className="shop-details">
                <ul className="shop-details-top-category-tags">
                    <li>ISBN: <span>1234568</span></li>
                    <li>Издательство: <span>Новая книга</span></li>
                    <li>Серия: <span>Новая серия</span></li>
                    <li>Категория: <span>Антиутопия</span></li>
                    <li>Теги: <span>Редкая книга</span></li>
                    <li>Год: <span>2023</span></li>
                    <li>Переплет: <span>Мягкий</span></li>
                    <li>Теги: <span>Новый тег</span></li>
                </ul>
            </div>
        </div>
    );
};

export default ItemPageDetails;