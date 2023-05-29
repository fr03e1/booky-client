import {IAuthor} from "../IAuthor";
import {IPrice} from "../IPrice";
import {ICategories} from "../ICategories";
import {IPublisher} from "../IPublisher";
import {IYear} from "../IYear";

export interface FilterResponse {
    authors: IAuthor[],
    categories: ICategories[],
    price: IPrice,
    publishers: IPublisher[],
    year: IYear
}