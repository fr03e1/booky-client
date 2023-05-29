import React from 'react';

const LoadingErrorPage = () => {
    return (
        <section className="error-page">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="error-page__inner text-center pt-120 pb-120">
                            <div className="thumb wow fadeInUp animated"><img src="../assets/images/inner-pages/error.png"
                                                                              alt=""/>
                            </div>
                            <div className="error-page__content wow fadeInUp animated">
                                <h3>Ошибка при загрузке.</h3>
                                <p>Попробуйте позже</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoadingErrorPage;