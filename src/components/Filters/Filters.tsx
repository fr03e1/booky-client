import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomRangeSlider from "../CustomRangeSlider/CustomRangeSlider";


const Filters: React.FC = () => {
    const dispatch = useAppDispatch();
    const {authors} = useAppSelector(state => state.filterSlice);
    const [filterAuthors,setFilterAuthors] = useState([{id:1,author:'Пушкин'}])

    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar">
                <form>
                    <button className="remove-sidebar d-lg-none d-block"><i
                        className="flaticon-cross"> </i></button>
                    <div className="sidebar-holder">
                        <CustomSelect name={"Автор"}/>
                        <CustomSelect name={"Издательство"}/>
                        <CustomRangeSlider name={"цене"}/>
                        <CustomRangeSlider name={"году"}/>
                        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                            <h4>Переплет</h4>
                            <div className="checkbox-item">
                                <form>
                                    <div className="form-group"><input type="checkbox" id="bedroom"/> <label
                                        htmlFor="bedroom">Пушкин А С</label></div>
                                </form>
                            </div>
                        </div>

                        <button className="filterbtn"
                                type="submit"> Фильтровать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Filters;