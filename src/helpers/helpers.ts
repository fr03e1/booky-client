import {IAuthor} from "../models/IAuthor";
import {IPublisher} from "../models/IPublisher";
import {IPrice} from "../models/IPrice";
import {IYear} from "../models/IYear";

export const formatAuthorOptions = (authors: IAuthor[]) => (authors.map(author => ({value:author.id,label:author.full_name})))
export const formatPublisherOptions = (publishers: IPublisher[]) => (publishers.map(publisher => ({value:publisher.id,label:publisher.name})))
export const formatPrice = (prices: IPrice) => ([(Number)(prices.min),(Number)(prices.max)])
export const formatYear = (prices: IYear) => ([(Number)(prices.old),(Number)(prices.new)])