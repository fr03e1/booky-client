
import CartPage from "../pages/CartPage";
import AccountPage from "../pages/AccountPage";
import WishListPage from "../pages/WishListPage";
import {ERoutes, RouteType} from "../models/types/RouteType";

export const authRoutes: RouteType[] = [
    {
        path: ERoutes.CART_ROUTE,
        component: <CartPage />,
    },
    {
        path: ERoutes.ACCOUNT_ROUTE,
        component: <AccountPage />,
    },
    {
        path: ERoutes.WISHLIST_ROUTE,
        component: <WishListPage />,
    },
];
