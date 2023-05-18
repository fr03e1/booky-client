import {ERoutes, RouteType} from "../types/RouteType";
import Shop from "../pages/Shop";
import ItemPage from "../pages/ItemPage";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
];