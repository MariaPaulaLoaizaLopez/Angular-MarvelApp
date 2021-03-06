import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchParams:string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search():void{
    this.searchService.setSearchParams(this.searchParams);
  }

}
