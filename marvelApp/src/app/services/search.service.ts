import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchParams = new Subject<string>();

  public searchFilter = this.searchParams.asObservable();

  constructor() { }

  setSearchParams(param:string):void{
    this.searchParams.next(param);
  }

  getSearchParams(){
    return this.searchParams.asObservable();
  }
}
