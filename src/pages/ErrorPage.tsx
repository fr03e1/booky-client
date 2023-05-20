import React from 'react';
import {Link} from "react-router-dom";
import {ERoutes} from "../types/RouteType";

const ErrorPage:React.FC = () => {
    return (
        <section className="error-page">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="error-page__inner text-center pt-120 pb-120">
                            <div className="thumb wow fadeInUp animated"><img src="assets/images/inner-pages/error.png"
                                                                              alt=""/>
                            </div>
                            <div className="error-page__content wow fadeInUp animated">
                                <h3>Упс! Такая страница не найдена.</h3>
                                <p>Похоже ничего не было найдено. Может попробовать одну из ссылок ниже?</p>
                                <div className="btn-box"><Link to={ERoutes.MAIN_ROUTE} className="btn--primary style2">На главную</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;