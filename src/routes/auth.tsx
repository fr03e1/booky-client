import {ERoutes, RouteType} from "../types/RouteType";
import CartPage from "../pages/CartPage";

export const authRoutes: RouteType[] = [
    {
        path: ERoutes.CART_ROUTE,
        component: <CartPage />,
    },
];
