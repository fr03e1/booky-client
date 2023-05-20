import React from 'react';
import {Slider} from "@mui/material";

const Filters:React.FC = () => {
    return (
        <div className="col-xl-3 col-lg-4">
            <div className="shop-grid-sidebar">
                <button className="remove-sidebar d-lg-none d-block"><i
                    className="flaticon-cross"> </i></button>
                <div className="sidebar-holder">
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                        <h4>Выберите категорию</h4>
                        <div className="checkbox-item">
                            <form>
                                <div className="form-group"><input type="checkbox" id="bedroom"/> <label
                                    htmlFor="bedroom">Редкие книги</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated">
                        <h4>Фильтр по цене</h4>
                        <div className="slider-box">
                            <Slider
                                defaultValue={30}
                                color="primary"
                            />
                            <button className="filterbtn"
                                    type="submit"> Выбрать
                            </button>
                        </div>
                    </div>
                    <div className="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0">
                        <h4>Тэги </h4>
                        <ul className="popular-tag">
                            <li><a href="#0">Выбор редакции</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;