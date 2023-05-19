import {ERoutes, RouteType} from "../types/RouteType";
import ShopPage from "../pages/ShopPage";
import ItemPage from "../pages/ItemPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";

export const publicRoutes: RouteType[] = [
    {
        path: ERoutes.SHOP_ROUTE,
        component: <ShopPage />,
    },
    {
        path: ERoutes.LOGIN_ROUTE,
        component: <LoginPage />,
    },
    {
        path: ERoutes.REGISTRATION_ROUTE,
        component: <RegisterPage />,
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