import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FavoriteComic } from '../models/favoriteComic';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class FavoriteComicService {

  public favoritesComicsArray: FavoriteComic[] = [];

  private favoritesComics = new Subject<FavoriteComic[]>();

  public favoritesComicsObservable = this.favoritesComics.asObservable();

  AddComic(idComic:number,image:Image):void{
    // let uid = Math.floor(Math.random()*(3429-1718+1)+1718);
    let favoriteComic:FavoriteComic = {id:idComic,image:image};
    this.favoritesComicsArray.push(favoriteComic);
    this.favoritesComics.next(this.favoritesComicsArray);
  }

  RemoveComic(comicId:number):void{
    console.log(comicId);
    console.log(this.favoritesComicsArray.length);
    this.favoritesComicsArray = this.favoritesComicsArray.filter((item) => item.id !== comicId);
    console.log(this.favoritesComicsArray.length);
    this.favoritesComics.next(this.favoritesComicsArray);
  }

  constructor() { }
}
