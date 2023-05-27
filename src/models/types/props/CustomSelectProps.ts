import {IAuthor} from "../../IAuthor";

export type CustomSelectProps = {
    name: string,
    authors?: IAuthor[]
}
export type SelectOptions = {
    label: number;
    value: string
}