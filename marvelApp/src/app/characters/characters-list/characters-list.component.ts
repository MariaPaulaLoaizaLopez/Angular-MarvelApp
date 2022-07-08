import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ICharacter } from '../../models/character';
import { Comic } from '../../models/comic';
import { CharacterService } from '../../services/character.service';
import { FavoriteComicService } from '../../services/favorite-comic.service';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characteres:ICharacter[];

  relatedComics:Comic[]=[];

  page:number;

  itemsPerPage: number;

  character:ICharacter;

  filter:string='';


  constructor(private characterService: CharacterService,
              private favoriteComicService:FavoriteComicService,
              private searchService:SearchService,
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.searchService.searchFilter.subscribe(param => 
      {
        if(param){
          this.performFilter(param);
        }
        else{
          this.getCharacters();
        }
      });

  }

  cutDescription(description:string):string{

    if(description==""){
      return "No description found";
    }
    else{
      return description.slice(0,100) + "...";
    }
  }

  setCharacters(option:string){
    switch(option) { 
      case "NameASC": { 
        this.getCharactersNameAZ();
         break; 
      } 
      case "NameDESC": { 
        this.getCharactersNameZA();
         break; 
      } 
      case "ModifiedASC": { 
        this.getCharactersModifiedASC();
         break; 
      } 
      case "ModifiedDESC": { 
        this.getCharactersModifiedDESC();
         break; 
      } 
      default: { 
         this.getCharacters();
         break; 
      } 
   } 
  }

  getCharacters():void{
    this.SpinnerService.show();  
    this.characterService.getCharacters()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()}
        
      );

  }


  getCharactersNameAZ():void{
    this.SpinnerService.show();  
    this.characterService.getCharactersNameAZ()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()}
        
      );
  }

  getCharactersNameZA():void{
    this.SpinnerService.show();  
    this.characterService.getCharactersNameZA()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()}
        
      );
  }

  getCharactersModifiedASC():void{
    this.SpinnerService.show();  
    this.characterService.getCharactersModifiedASC()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()}
        
      );
  }

  getCharactersModifiedDESC():void{
    this.SpinnerService.show();  
    this.characterService.getCharactersModifiedDESC()
      .subscribe(
        (data: any) => this.characteres = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()}
        
      );
  }

   getComics(characterId:number):void{
    this.characterService.getComics(characterId)
      .subscribe(
      (data: any) => this.relatedComics = data,
       (err: any) => console.log(err),
      () => console.log('All done getting comics.')
     );
   }

   getRelatedComics(characterId:number):Comic[]{
    this.getComics(characterId);
    return this.relatedComics;
   }

  performFilter(filterBy: string):void {
    filterBy = filterBy.toLocaleLowerCase();
    this.characteres = this.characteres?.filter((character: ICharacter) =>
      character.name.toLocaleLowerCase().includes(filterBy));

    console.log("el filtro: "+this.characteres.length);
  }

  filters(param:string):void{
    this.performFilter(param);
  }



  

}
