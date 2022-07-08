import { CreatorSummary } from "./creatorSummary"

export interface CreatorList {
    available:number //The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
    returned:number //The number of creators returned in this collection (up to 20).,
    collectionURI:string //The path to the full list of creators in this collection.,
    items:Array<CreatorSummary> //The list of returned creators in this collection.
}
