import React from 'react';
import {Slider} from "@mui/material";
import {CustomRangeSliderProps} from "../types/props/CustomRangeSliderProps";

const CustomRangeSlider:React.FC<CustomRangeSliderProps> = ({name}) => {
    return (
        <div className="single-sidebar-box mt-30 wow fadeInUp animated">
            <h4>Фильтр по {name}</h4>
            <div className="slider-box">
                <div id="price-range" className="slider"></div>
                <Slider value={[0,1500]} onChange={()=>console.log('h')} valueLabelDisplay="auto" />
            </div>
        </div>
    );
};

export default CustomRangeSlider;