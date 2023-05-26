export interface BookResponse {
    data: IBook[],
    meta: [],
    links: [],
}
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

export interface ImageData {
    data: ImageDataEntry
}
export interface ImageDataEntry {
   [key:number]: Image
}

export interface Image {
    preview: string,
    image2: string,
    image3: string,
    image4: string,
}

