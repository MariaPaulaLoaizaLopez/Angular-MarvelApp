import { IComicList } from "./comicList"
import { IEventList } from "./eventList"
import { ISeriesList } from "./seriesList"
import { IStoryList } from "./storyList"
import { IUrl } from "./url"
import { Image } from "./image"

export interface ICharacter {
    id:number //The unique ID of the character resource.,
    name:string //The name of the character.,
    description:string //A short bio or description of the character.,
    modified:Date //The date the resource was most recently modified.,
    resourceURI:string //The canonical URL identifier for this resource.,
    urls:Array<IUrl> //A set of public web site URLs for the resource.,
    thumbnail:Image//The representative image for this character.,
    comics:IComicList //A resource list containing comics which feature this character.,
    stories:IStoryList //A resource list of stories in which this character appears.,
    events:IEventList //A resource list of events in which this character appears.,
    series:ISeriesList //A resource list of series in which this character appears.
}
