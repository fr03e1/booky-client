import React from 'react';
import Select from "react-select";
import {CustomSelectProps} from "../../models/types/props/CustomSelectProps";

const CustomSelect:React.FC<CustomSelectProps> = ({name}) => {

    const options = [
        {value: "Test",label: 'sv'},
        {value: 'English', label: 'en'},
    ]

    return (
        <div>
            <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                <h4>{name}</h4>
                <div className="checkbox-item">
                    <Select options={options} />
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;