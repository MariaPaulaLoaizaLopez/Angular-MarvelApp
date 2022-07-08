import { Url } from "url"
import { IComicSummary } from "./comicSummary"
import { ISeriesSummary } from "./seriesSummary"
import { Image } from "./image"
import { TextObject } from "./textObject"
import { ComicDate } from "./comicDate"
import { ComicPrice } from "./comicPrice"
import { CreatorList } from "./creatorList"
import { CharacterList } from "./characterList"
import { IStoryList } from "./storyList"
import { IEventList } from "./eventList"

export interface Comic {
    id:number //The unique ID of the comic resource.,
    digitalId:number //The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
    title:string //The canonical title of the comic.,
    issueNumber:number //The number of the issue in the series (will generally be 0 for collection formats).,
    variantDescription:string //If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
    description:string //The preferred description of the comic.,
    modified:Date //The date the resource was most recently modified.,
    isbn:string //The ISBN for the comic (generally only populated for collection formats).,
    upc:string //The UPC barcode number for the comic (generally only populated for periodical formats).,
    diamondCode:string //The Diamond code for the comic.,
    ean:string //The EAN barcode for the comic.,
    issn:string //The ISSN barcode for the comic.,
    format:string //The publication format of the comic e.g. comic, hardcover, trade paperback.,
    pageCount:number //The number of story pages in the comic.,
    textObjects:Array<TextObject> //A set of descriptive text blurbs for the comic.,
    resourceURI:string //The canonical URL identifier for this resource.,
    urls:Array<Url> //A set of public web site URLs for the resource.,
    series:ISeriesSummary //A summary representation of the series to which this comic belongs.,
    variants: Array<IComicSummary> //A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
    collections:Array<IComicSummary> //A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
    collectedIssues:Array<IComicSummary> // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
    dates:Array<ComicDate> //A list of key dates for this comic.,
    prices:Array<ComicPrice> //A list of prices for this comic.,
    thumbnail:Image //The representative image for this comic.,
    images:Array<Image> //A list of promotional images associated with this comic.,
    creators:CreatorList //A resource list containing the creators associated with this comic.,
    characters:CharacterList //A resource list containing the characters which appear in this comic.,
    stories:IStoryList //A resource list containing the stories which appear in this comic.,
    events:IEventList //A resource list containing the events in which this comic appears.
}
