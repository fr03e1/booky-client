import {Images} from "../../IImages";


export interface ShopItemProps {
    id: number
    title: string,
    price: number,
    authors: string[],
    images: Images,
}