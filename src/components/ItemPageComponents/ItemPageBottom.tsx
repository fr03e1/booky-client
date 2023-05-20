import React, {useState} from 'react';
import ItemPageDescription from "./ItemPageDescription";
import ItemPageReview from "./ItemPageReview";

const ItemPageBottom:React.FC = () => {
    const [activeDescription,setActiveDescription] = useState(true);
    const [activeReviews,setActiveReviews] = useState(false);

    const handleDescription = ()=> {
        setActiveReviews(false);
        setActiveDescription(true)
    }

    const handleReviews = ()=> {
        setActiveReviews(true);
        setActiveDescription(false)
    }
    return (
        <section className="product pt-60 pb-60 wow fadeInUp overflow-hidden ">
            <div className="container">
                <div className="row wow fadeInUp animated">
                    <div className="col-12">
                        <ul className="nav product-details-nav nav-one nav-pills justify-content-center" id="pills-tab-two"
                            role="tablist">
                            <li className="nav-item " role="presentation">
                                <button
                                        onClick={handleDescription}
                                        className={activeDescription ? "nav-link active" : "nav-link"}
                                        id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description"
                                        type="button" role="tab" aria-controls="pills-description" aria-selected="true">
                                    Описание
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                        onClick={handleReviews}
                                        className={activeReviews ? "nav-link active" : "nav-link"} id="pills-review-tab"
                                        data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab"
                                        aria-controls="pills-review" aria-selected="false"> Отзывы
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row wow fadeInUp animated">
                    <div className="tab-content" id="pills-tabContent-two">
                       <ItemPageDescription  active={activeDescription}/>
                       <ItemPageReview active={activeReviews}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemPageBottom;