import React from 'react';
import image from '../assets/images/inner-pages/4.png';

const Breadcrumb:React.FC = () => {
    return (
        <div className="overflow-hidden">
            <section className="breadcrumb-area"
                     style={{backgroundImage: `url(${image})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                                <h2>Магазин</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="#"><i className="flaticon-home pe-2"></i>Главная</a></li>
                                        <li><i className="flaticon-next"></i></li>
                                        <li className="active">Магазин</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Breadcrumb;