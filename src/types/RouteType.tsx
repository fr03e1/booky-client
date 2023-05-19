import {ReactNode} from "react";

export enum ERoutes {
    LOGIN_ROUTE = "/login",
    REGISTRATION_ROUTE = "/registration",
    SHOP_ROUTE = "/shop",
    BASKET_ROUTE = "/basket",
    ITEM_ROUTE = "/item",
    MAIN_ROUTE = "/",
    BLOG_ROUTE = "/blog",
}

export type RouteType = {
    path: string,
    component: ReactNode
}