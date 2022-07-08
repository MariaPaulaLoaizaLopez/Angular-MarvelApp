import { Component, OnInit } from '@angular/core';
import { FavoriteComic } from '../../models/favoriteComic';
import { Image } from '../../models/image';
import { FavoriteComicService } from '../../services/favorite-comic.service';

@Component({
  selector: 'app-favorites-comics',
  templateUrl: './favorites-comics-list.component.html',
  styleUrls: ['./favorites-comics-list.component.css']
})
export class FavoritesComicsComponent implements OnInit {

  constructor(private favoriteComicService:FavoriteComicService) { }

  favoritesComics: FavoriteComic[];

  ngOnInit(): void {
    this.getFavoritesComics();
  }

  getFavoritesComics():void{
    this.favoriteComicService.favoritesComicsObservable.subscribe(comics =>this.favoritesComics = comics);
  }

}
