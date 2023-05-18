import {ReactNode} from "react";

export enum ERoutes {
    LOGIN_ROUTE = "/login",
    REGISTRATION_ROUTE = "/registration",
    SHOP_ROUTE = "/",
    BASKET_ROUTE = "/basket",
    ITEM_ROUTE = "/item",
}

export type RouteType = {
    path: string,
    component: ReactNode
}