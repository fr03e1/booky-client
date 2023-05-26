import {Image, ImageDataEntry} from "../../models/IBook";

export interface ShopItemProps {
    id: number
    title: string,
    price: number,
    authors: string[],
    images: Image,
}