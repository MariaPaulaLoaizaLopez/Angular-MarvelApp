import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/character';
import { ICharacterDataWrapper } from '../models/characterDataWrapper';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characteres:ICharacter[];

  relatedComics:string[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {

    this.characterService.getCharacters()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => console.log('All done getting books.')
      );

  }

  cutDescription(description:string):string{

    return description.slice(0,100) + "...";
  }

  // getRelatedComics():void{
  //   let comics = this.character.comics.items.slice(0,4);
  //   this.relatedComics.push(...comics)
  // }


  

}
