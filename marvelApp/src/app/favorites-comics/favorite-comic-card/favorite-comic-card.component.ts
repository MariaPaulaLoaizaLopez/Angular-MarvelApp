import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteComic } from '../../models/favoriteComic';
import { Image } from '../../models/image';
import { FavoriteComicService } from '../../services/favorite-comic.service';

@Component({
  selector: 'app-favorite-comic',
  templateUrl: './favorite-comic-card.component.html',
  styleUrls: ['./favorite-comic-card.component.css']
})
export class FavoriteComicComponent implements OnInit {

  @Input() favoriteComic:FavoriteComic;

  @Output() ComicId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private favoriteComicService:FavoriteComicService) { }

  ngOnInit(): void {
  }

  close(favoriteComicId:number):void{
    this.favoriteComicService.RemoveComic(favoriteComicId);
    this.ComicId.emit();
  }

}
