import {ImageData, Images} from "./IImages";

export interface IBook {
    id: number,
    title: string,
    description: number,
    price: number,
    count: number,
    year: number,
    binding: string,
    ISBN: string,
    publisher:[],
    images: ImageData,
    authors: string[],
    category:[],
}





