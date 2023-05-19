import React from 'react';
import image from '../assets/images/shop/cart-product-thumb-1.jpg';

const WishListPage = () => {
    return (
        <section className="wishlist pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 wow fadeInUp animated">
                        <div className="wishlist-table-box">
                            <div className="wishlist-table-outer">
                                <table className="wishlist-table">
                                    <thead className="wishlist-header">
                                    <tr>
                                        <th>Изображение</th>
                                        <th>Товар</th>
                                        <th>Цена</th>
                                        <th>На складе</th>
                                        <th>Количество</th>
                                        <th>Общая цена</th>
                                        <th>Удалить</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="wishlist-thumb"><img
                                                src={image} alt=""/></div>
                                        </td>
                                        <td>
                                            <h5>Leather Bag </h5>
                                        </td>
                                        <td>
                                            <p className="price">$250.00</p>
                                        </td>
                                        <td>
                                            <p className="instock">В наличии</p>
                                        </td>
                                        <td className="add-to-cart-btn"><a href="#"
                                                                           className=" btn--primary style2 ">В корзину</a></td>
                                        <td>
                                            <p className="sub-total">$500.00</p>
                                        </td>
                                        <td>
                                            <div className="remove"><i className="flaticon-cross"></i></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WishListPage;