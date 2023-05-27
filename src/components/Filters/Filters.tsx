import React, {FormEventHandler, useEffect, useState} from 'react';
import { useGetFiltersQuery} from "../../services/bookService";
import {formatAuthorOptions, formatPrice, formatPublisherOptions, formatYear} from "../../helpers/helpers";
import Select, {SingleValue} from "react-select";
import {Slider} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {setAuthorId} from "../../redux/slices/filterSlice";

const Filters: React.FC = () => {
    const {data} = useGetFiltersQuery("");
    const dispatch = useAppDispatch();
    const [authorsOptions,setAuthorsOptions] = useState([{value:1,label:'2'}]);
    const [publisherOptions,setPublisherOptions] = useState([{value:1,label:'2'}]);
    const [priceValue,setPriceValue] = useState<number[]|number>([0,1500]);
    const [price,setPrice] = useState([0,100])
    const [yearValue,setYearValue] = useState<number[]|number>([0,1500]);
    const [year,setYear] = useState([0,100])
    const [author,setAuthor] = useState(0)

    const valueText = (value:number) => `${value}`

    const handlePriceChange = (event:Event, newValue:number[]|number) => {
        setPriceValue(newValue)
    }

    const handleYearChange = (event:Event, newValue:number[]|number) => {
        setYearValue(newValue)
    }

    const handleAuthor = (selected: SingleValue<{ value: number; label: string; }>) => {
        setAuthor(selected!.value)
    }

    useEffect(()=>{
        if(data && data.authors && data.publishers) {
            setAuthorsOptions(formatAuthorOptions(data.authors))
            setPublisherOptions(formatPublisherOptions(data.publishers))
        }
        if(data && data.price) {
            setPrice(formatPrice(data.price))
            setPriceValue(formatPrice(data.price))
        }

        if(data && data.year) {
            setYear(formatYear(data.year))
            setYearValue(formatYear(data.year))
        }
    },[data])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(author != 0) {
            dispatch(setAuthorId([author]))
        }
    }

    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar">
                <form onSubmit={handleSubmit}>
                    <button className="remove-sidebar d-lg-none d-block"><i
                        className="flaticon-cross"> </i></button>
                    <div className="sidebar-holder">
                        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                            <h4>Автор</h4>
                            <div className="checkbox-item">
                                <Select onChange={handleAuthor} options={authorsOptions} />
                            </div>
                        </div>
                        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                            <h4>Издательство</h4>
                            <div className="checkbox-item">
                                <Select options={publisherOptions}/>
                            </div>
                        </div>
                        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                            <h4>Фильтр по цене</h4>
                            <div className="slider-box">
                                <div id="price-range" className="slider"></div>
                                <Slider
                                    value={priceValue}
                                    min={price[0]}
                                    max={price[1]}
                                    valueLabelDisplay={"auto"}
                                    getAriaValueText={valueText}
                                    onChange={handlePriceChange}
                                />
                            </div>
                        </div>
                        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                            <h4>Фильтр по году</h4>
                            <div className="slider-box">
                                <div id="price-range" className="slider"></div>
                                <Slider
                                    value={yearValue}
                                    min={year[0]}
                                    max={year[1]}
                                    valueLabelDisplay={"auto"}
                                    onChange={handleYearChange}
                                    getAriaValueText={valueText}
                                />
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