import {ERoutes, RouteType} from "../types/RouteType";
import Shop from "../pages/Shop";
import ItemPage from "../pages/ItemPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";

export const publicRoutes: RouteType[] = [
    {
        path: ERoutes.SHOP_ROUTE,
        component: <Shop />,
    },
    {
        path: ERoutes.LOGIN_ROUTE,
        component: <Login />,
    },
    {
        path: ERoutes.REGISTRATION_ROUTE,
        component: <Register />,
    },
    {
        path: ERoutes.ITEM_ROUTE + "/:id",
        component: <ItemPage />,
    },
    {
        path: ERoutes.MAIN_ROUTE,
        component: <MainPage />,
    },
    {
        path: ERoutes.BLOG_ROUTE,
        component: <BlogPage />,
    },
    {
        path: ERoutes.CART_ROUTE,
        component: <CartPage/>,
    },
];