import React from 'react';
import {ItemPageBottomProps} from "../../models/types/props/ItemPageBottomProps";


const ItemPageReview:React.FC<ItemPageBottomProps> = ({active}) => {
    return (
        <div className={active ? "tab-pane fade show active" : "tab-pane fade show"} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
            <div className="product-drescription">
                <div className="review-single pt-0 hed">
                    <div className="ratting"><i className="flaticon-star-1"></i> <i
                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <i
                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <span
                        className="ps-2">1 отзыв</span></div>
                </div>
                <div className="review-single">
                    <div className="left">
                        <div className="ratting"><i className="flaticon-star-1"></i> <i
                            className="flaticon-star-1"></i> <i className="flaticon-star-1"></i> <i
                            className="flaticon-star-1"></i> <i className="flaticon-star-1"></i></div>
                        <h6>Круто<span>Fr03e 28 января 23</span></h6>
                        <p> Очень круто </p>
                    </div>
                </div>
                <div className="review-from-box mt-30">
                    <h6>Написать отзыв</h6>
                    <form action="#" className="review-from">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ratting-box">
                                    <p> Рейтинг </p>
                                    <div className="ratting"><i className="flaticon-star-1"></i> <i
                                        className="flaticon-star-1"></i> <i className="flaticon-star-1"></i>
                                        <i className="flaticon-star-1"></i> <i
                                            className="flaticon-star-1"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group"><label htmlFor="name">NAME</label> <input
                                    type="text" id="name" className="form-control"
                                    placeholder="David Warner"/></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group"><label htmlFor="number">Number</label> <input
                                    type="text" id="number" className="form-control"
                                    placeholder="Phone Number"/></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group"><label htmlFor="email"> Email </label> <input
                                    type="text" id="email" className="form-control"
                                    placeholder="support@gmail.com"/></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group"><label htmlFor="namee"> REVIEW TITLE</label>
                                    <input
                                        type="text" id="namee" className="form-control"
                                        placeholder="Give your review title"/></div>
                            </div>
                            <div className="col-12">
                                <div className="form-group m-0"><label htmlFor="email">BODY OF REVIEW (1500)
                                </label> <textarea
                                    placeholder="Write Your Comments Here"></textarea></div>
                            </div>
                        </div>
                        <button type="submit" className="btn--primary style2 ">Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemPageReview;