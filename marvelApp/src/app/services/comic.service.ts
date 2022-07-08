import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/comics';
  private PublicKEY = '73fab3c0768c55c6796f1e2065ebe484';

  constructor(private http: HttpClient) { }


  getURL(params:string):string{
    return this.baseUrl + params;
  }

  getComicById(comicId:number): Observable<Comic>{
    let params = `/${comicId}?apikey=${this.PublicKEY}`;
    return this.http.get<Comic>(this.getURL(params)).pipe(map((data: any) => data.data.results[0]));
  }
}
