import React from 'react';

const CartPage = () => {
    return (
        <section className="cart-area pt-120 pb-120">
            <div className="container">
                <div className="row wow fadeInUp animated">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="cart-table-box">
                            <div className="table-outer">
                                <table className="cart-table">
                                    <thead className="cart-header">
                                    <tr>
                                        <th className="">Product Name</th>
                                        <th className="price">Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th className="hide-me"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="thumb-box"><a href="shop-details-1.html" className="thumb">
                                                <img src="assets/images/shop/cart-product-thumb-1.jpg" alt=""/>
                                            </a> <a href="shop-details-1.html" className="title">
                                                <h5> Leather Bag </h5>
                                            </a></div>
                                        </td>
                                        <td>$250.00</td>
                                        <td className="qty">
                                            <div className="qtySelector text-center"> <span className="decreaseQty"><i
                                                className="flaticon-minus"></i> </span> <input type="number"
                                                                                               className="qtyValue"
                                                                                               value="1"/> <span
                                                className="increaseQty"> <i
                                                className="flaticon-plus"></i> </span></div>
                                        </td>
                                        <td className="sub-total">$500.00</td>
                                        <td>
                                            <div className="remove"><i className="flaticon-cross"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="thumb-box"><a href="shop-details-1.html" className="thumb">
                                                <img src="assets/images/shop/cart-product-thumb-2.jpg" alt=""/>
                                            </a> <a href="shop-details-1.html" className="title">
                                                <h5> Blue Headphone </h5>
                                            </a></div>
                                        </td>
                                        <td>$250.00</td>
                                        <td className="qty">
                                            <div className="qtySelector text-center"> <span className="decreaseQty"><i
                                                className="flaticon-minus"></i> </span> <input type="number"
                                                                                               className="qtyValue"
                                                                                               value="1"/> <span
                                                className="increaseQty"> <i
                                                className="flaticon-plus"></i> </span></div>
                                        </td>
                                        <td className="sub-total">$500.00</td>
                                        <td>
                                            <div className="remove"><i className="flaticon-cross"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="thumb-box"><a href="shop-details-1.html" className="thumb">
                                                <img src="assets/images/shop/cart-product-thumb-3.jpg" alt=""/>
                                            </a> <a href="shop-details-1.html" className="title">
                                                <h5> Comport Chair </h5>
                                            </a></div>
                                        </td>
                                        <td>$250.00</td>
                                        <td className="qty">
                                            <div className="qtySelector text-center"> <span className="decreaseQty"><i
                                                className="flaticon-minus"></i> </span> <input type="number"
                                                                                               className="qtyValue"
                                                                                               value="1"/> <span
                                                className="increaseQty"> <i
                                                className="flaticon-plus"></i> </span></div>
                                        </td>
                                        <td className="sub-total">$500.00</td>
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
                <div className="row">
                    <div className="col-xl-12">
                        <div className="cart-button-box">
                            <div className="apply-coupon wow fadeInUp animated">
                                <div className="apply-coupon-input-box mt-30 "><input type="text" name="coupon-code"
                                                                                      value=""
                                                                                      placeholder="Coupon Code"/></div>
                                <div className="apply-coupon-button mt-30">
                                    <button className="btn--primary style2"
                                            type="submit">Apply Coupon
                                    </button>
                                </div>
                            </div>
                            <div className="cart-button-box-right wow fadeInUp animated">
                                <button className="btn--primary mt-30"
                                        type="submit">Continue Shopping
                                </button>
                                <button className="btn--primary mt-30"
                                        type="submit">Update Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-120">
                    <div className="col-xl-6 col-lg-7 wow fadeInUp animated">
                        <div className="cart-total-box">
                            <div className="inner-title">
                                <h3>Cart Totals</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-xl-6 col-lg-7 wow fadeInUp animated">
                        <div className="cart-total-box mt-30">
                            <div className="table-outer">
                                <table className="cart-table2">
                                    <thead className="cart-header clearfix">
                                    <tr>
                                        <th colSpan={1} className="shipping-title">Shipping</th>
                                        <th className="price">$2500.00</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="shipping"> Shipping</td>
                                        <td className="selact-box1">
                                            {/*<ul className="shop-select-option-box-1">*/}
                                            {/*    <li><input type="checkbox" name="free_shipping" id="option_1"*/}
                                            {/*               checked={false}/> <label htmlFor="option_1"><span></span>Free*/}
                                            {/*        Shipping</label></li>*/}
                                            {/*    <li><input type="checkbox" name="flat_rate" id="option_2"/> <label*/}
                                            {/*        htmlFor="option_2"/><span></span>Flat Rate</label></li>*/}
                                            {/*    <li><input type="checkbox" name="local_pickup" id="option_3"/>*/}
                                            {/*        <label htmlFor="option_3"><span></span>Local Pickup</label></li>*/}
                                            {/*</ul>*/}
                                            <div className="inner-text">
                                                <p>Shipping options will be updated during checkout</p>
                                            </div>
                                            <h4>Calculate Shipping</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4 className="total">Total</h4>
                                        </td>
                                        <td className="subtotal">$2500.00</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 wow fadeInUp animated">
                        <div className="cart-check-out mt-30">
                            <h3>Check Out</h3>
                            <ul className="cart-check-out-list">
                                <li>
                                    <div className="left">
                                        <p>Subtotal</p>
                                    </div>
                                    <div className="right">
                                        <p>$2500.00</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <p>Shipping</p>
                                    </div>
                                    <div className="right">
                                        <p><span>Flat rate:</span> $50.00</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <p>Total Price:</p>
                                    </div>
                                    <div className="right">
                                        <p>$2550.00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartPage;