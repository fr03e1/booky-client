import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import {ERoutes} from "../../types/RouteType";
import {CartModalProps} from "../../types/props/CartModalProps";
import {popupClick} from "../../types/PopupClick";

const CartModal: React.FC<CartModalProps> = ({active, setActive, cartRef}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => { if(active)
    { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = 'unset' } },
        [active]);


    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const event = e as popupClick;
            if (modalRef.current && !event.composedPath().includes(modalRef.current)
                && cartRef.current && !event.composedPath().includes(cartRef.current)) {
                setActive(false);
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    return (
        <>
        <div className={active ? "side-cart-bottom" : "side-cart-closer"}></div>
        <div ref={modalRef}
             className={active ? "side-cart d-flex flex-column justify-content-between active" : "side-cart d-flex flex-column justify-content-between"}>
            <div className="top">
                <div className="content d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Ваша корзина (01)</h6> <span onClick={() => setActive(false)}
                                                                                className="cart-close text-uppercase">X</span>
                </div>
                <div className="cart_items">
                    <div className="items d-flex justify-content-between align-items-center">
                        <div className="left d-flex align-items-center"><a href="shop-details-1.html"
                                                                           className="thumb d-flex justify-content-between align-items-center">
                            <img
                                src="assets/images/shop/products-img1.jpg" alt=""/> </a>
                            <div className="text"><a href="shop-details-1.html">
                                <h6>Diamond Bracelet</h6>
                            </a>
                                <p>2 X <span>$350.00</span></p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="item-remove"><i className="flaticon-cross"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="total-ammount d-flex justify-content-between align-items-center">
                    <h6 className="text-uppercase">Общая стоимость:</h6>
                    <h6 className="ammount text-uppercase">$850.00</h6>
                </div>
                <div className="button-box d-flex justify-content-between"><Link onClick={()=>setActive(false)} to={ERoutes.CART_ROUTE}
                                                                                 className="btn_black"> В корзину
                </Link> <a href="#" className="button-2 btn_theme"> Оформить заказ </a></div>
            </div>
        </div>
        </>
    );
};

export default CartModal;