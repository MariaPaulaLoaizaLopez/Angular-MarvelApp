import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {

  searchParams:string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search():void{
    this.searchService.setSearchParams(this.searchParams);
  }

}
