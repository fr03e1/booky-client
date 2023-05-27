import {Images} from "../../models/IImages";


export interface ShopItemProps {
    id: number
    title: string,
    price: number,
    authors: string[],
    images: Images,
}