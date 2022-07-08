import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ICharacter } from '../../models/character';
import { IComicSummary } from '../../models/comicSummary';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id:number;
  name:string;
  description:string;
  relatedComics:IComicSummary[];
  character: ICharacter;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCharactersById(this.id);
  }

  getCharactersById(id:number):void{
    this.SpinnerService.show();
    this.characterService.getCharacterById(id)
      .subscribe(
        (data: any) => this.character = data,
        (err: any) => console.log(err),
        () => {console.log('All done getting characters.'); this.SpinnerService.hide()},
      );


  }

}
