import {ERoutes, RouteType} from "../types/RouteType";
import CartPage from "../pages/CartPage";
import AccountPage from "../pages/AccountPage";
import WishListPage from "../pages/WishListPage";

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
