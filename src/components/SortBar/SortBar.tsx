import React from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {setPagination,setSorting} from "../../redux/slices/filterSlice";

export type SortItem = {
    id: number,
    title: string,
    value: string,
}

export type Pagination = {
    id: number,
    title: string,
    value: number,
}

const optionsPagination:Pagination[] = [
    {
        id:1,
        title: '8 товаров/страница',
        value: 8,
    },
    {
        id:2,
        title: '16 товаров/страница',
        value: 16
    }
]

const optionsSorting:SortItem[] = [{
    id: 1,
    title: 'По алфавиту А-Я',
    value: 'title'
},
    {
        id: 2,
        title: 'По цене(Возрст)',
        value: 'price',
    },{
        id: 3,
        title: 'По алфавиту Я-А',
        value: 'title-'
    },
    {
        id: 4,
        title: 'По цене(Убыв)',
        value: 'price-',
    }
]

const SortBar:React.FC = () => {

    const dispatch = useAppDispatch();

    const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSorting(event.target.value))
    }
    const handlePagination = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPagination(event.target.value))
    }

    return (
        <div className="row">
            <div className="col-xl-12">
                <div
                    className="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                    <div className="left-box wow fadeInUp animated">
                        <p>Показано 1-12 из 50 товаров</p>
                    </div>

                    <div className="short-by ">
                        <div className="select-box"><select onChange={handlePagination} className="wide">
                            {optionsPagination.map((obj) => (
                                <option key={obj.id} value={obj.value}>{obj.title}</option>
                            ))}
                        </select></div>
                    </div>

                    <div
                        className="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
                        <div className="short-by pe-5">
                            <div className="select-box"><select onChange={handleSorting} className="wide">
                                {optionsSorting.map((obj) => (
                                    <option key={obj.id} value={obj.value}>{obj.title}</option>
                                ))}
                            </select></div>
                        </div>
                        <div
                            className="product-view-style d-flex justify-content-md-between justify-content-center">

                            <button className="slidebarfilter d-lg-none d-flex"><i
                                className="flaticon-edit"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBar;