import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FavoriteComic } from 'src/app/models/favoriteComic';
import { Comic } from '../../models/comic';
import { Image } from '../../models/image';
import { CharacterService } from '../../services/character.service';
import { ComicService } from '../../services/comic.service';
import { FavoriteComicService } from '../../services/favorite-comic.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() idComic:number;

  comic:Comic;

  comicLiked:boolean = false;

  constructor(public activeModal:NgbActiveModal, 
              private comicService:ComicService,
              private favoriteComicService:FavoriteComicService) {
  
               }

  ngOnInit(): void {
    let comicnumber =this.favoriteComicService.favoritesComicsArray.filter((item) => item.id == this.idComic).length
      if(comicnumber==1){
        console.log("si");
        this.comicLiked = true;
      }
     
   this.getComicById(this.idComic);
  }

  getComicById(comicId:number){
    this.comicService.getComicById(comicId)
      .subscribe(
      (data: any) => this.comic = data,
       (err: any) => console.log(err),
      () => console.log('All done getting comic.')
     );
  }

  Onclick(image: Image):void{
    this.comicLiked = !this.comicLiked;
    if(this.comicLiked == true){
      this.favoriteComicService.AddComic(this.idComic,image);
    }
    else this.favoriteComicService.RemoveComic(this.idComic);
  }

  addComic(image: Image):void{
    console.log(image);
    this.favoriteComicService.AddComic(this.idComic,image);
  }

  removeComic(){
    this.favoriteComicService.RemoveComic(this.idComic);
  }

  getImageURL(image:Image):string{
    return image?.path + image?.extension;
  }

  

}
