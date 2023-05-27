

export interface Images {
    preview: string,
    image2: string,
    image3: string,
    image4: string,
}

export interface ImageData {
    data: ImageDataEntry
}

export interface ImageDataEntry {
    [key:number]: Images
}
