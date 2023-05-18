import {ERoutes, RouteType} from "../types/RouteType";
import Basket from "../pages/Basket";

export const authRoutes: RouteType[] = [
    {
        path: ERoutes.BASKET_ROUTE,
        component: <Basket />,
    },
];
