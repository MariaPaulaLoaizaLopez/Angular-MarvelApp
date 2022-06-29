import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../models/character';
import { ICharacterDataWrapper } from '../models/characterDataWrapper';
import { IComicSummary } from '../models/comicSummary';
import { Image } from '../models/image';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() image: Image;
  @Input() relatedComics:IComicSummary[];

  

  constructor() { }

  ngOnInit(): void {
    
    
    
  }



 
}
