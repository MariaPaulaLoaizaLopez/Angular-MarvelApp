import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../favorites-comics/modal/modal.component';
import { ICharacter } from '../../models/character';
import { ICharacterDataWrapper } from '../../models/characterDataWrapper';
import { Comic } from '../../models/comic';
import { IComicSummary } from '../../models/comicSummary';
import { Image } from '../../models/image';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() idCharacter: number;
  @Input() name: string;
  @Input() description: string;
  @Input() image: Image;
  // @Input() image: string;
  @Input() relatedComics:IComicSummary[];

  

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
    // this.getComicId(this.relatedComics[0]);
    
    
  }

  openModal(idComic:number):void {
    const modalRef = this.modalService.open(ModalComponent,{centered:true});
    modalRef.componentInstance.idComic = idComic;
  }

  getComicId(comic:IComicSummary):number{
    console.log(comic);
    let URISplit = comic.resourceURI.split("/");
    let id = Number(URISplit[URISplit.length-1]);
    return id;
  }

  



 
}
