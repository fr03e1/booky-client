export interface BookRequest {
    authors: number[],
    price: number[],
    year: number[],
    publishers: number[],
    pages: number,
    sortBy: string,
    order: string,
    //page: number,
}