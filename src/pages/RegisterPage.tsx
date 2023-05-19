import React from 'react';
import image from '../assets/images/inner-pages/login-bg.png';
import Breadcrumb from "../components/Breadcrumb";
import {Link} from "react-router-dom";
import {ERoutes} from "../types/RouteType";

const RegisterPage = () => {

    return (
        <main className="overflow-hidden ">
            <Breadcrumb/>
            <section className="login-page pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-9 wow fadeInUp animated">
                            <div className="login-register-form"
                                 style={{backgroundImage: `url${image}`}}>
                                <div className="top-title text-center ">
                                    <h2>Регистрация</h2>
                                    <p>У вас уже есть аккаунт? <Link to={ERoutes.LOGIN_ROUTE}>Войти</Link></p>
                                </div>
                                <form className="common-form">
                                    <div className="form-group"><input type="text" className="form-control"
                                                                       placeholder="Ваше имя"/></div>
                                    <div className="form-group"><input type="text" className="form-control"
                                                                       placeholder="Юзернейм"/>
                                    </div>
                                    <div className="form-group"><input type="email" className="form-control"
                                                                       placeholder="Email"/></div>
                                    <div className="form-group eye">
                                        <div className="icon icon-1"><i className="flaticon-hidden"></i></div>
                                        <input
                                            type="password" id="password-field" className="form-control"
                                            placeholder="Парроль"/>
                                            <div className="icon icon-2 "><i className="flaticon-visibility"></i></div>
                                    </div>
                                    <div className="checkk ">
                                        <div className="form-check p-0 m-0"><input type="checkbox" id="remember"/> <label
                                            className="p-0" htmlFor="remember">Принимаю условия </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn--primary style2">Регистрация</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RegisterPage;