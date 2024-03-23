export interface CardModel {
    id: string,
    name: string,
    price: number,
    discount?: number,
    details: string,
    imgSrc: string[]
}