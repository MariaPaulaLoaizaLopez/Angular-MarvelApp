import { IComicSummary } from "./comicSummary"

export interface IComicList {
    available:number //The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
    returned:number //The number of issues returned in this collection (up to 20).,
    collectionURI:string //The path to the full list of issues in this collection.,
    items:Array<IComicSummary> //The list of returned issues in this collection.
}
