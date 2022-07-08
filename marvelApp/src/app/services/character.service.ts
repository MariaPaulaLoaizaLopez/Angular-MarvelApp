import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Md5 } from 'ts-md5/dist/md5';
import { ICharacter } from '../models/character';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private PublicKEY = '73fab3c0768c55c6796f1e2065ebe484';

  constructor(private http: HttpClient) { }

  getURL(params:string):string{
    return this.baseUrl + params;
  }

  getCharacters(): Observable<ICharacter[]>{
    let params = `?limit=100&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  getCharacterById(characterId:number): Observable<ICharacter>{
    let params = `/${characterId}?apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter>(this.getURL(params)).pipe(map((data: any) => data.data.results[0]));
  }

  getCharactersNameAZ():Observable<ICharacter[]>{
    let params  = `?orderBy=name&limit=100&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  getCharactersNameZA():Observable<ICharacter[]>{
    let params  = `?orderBy=-name&limit=100&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  getCharactersModifiedASC():Observable<ICharacter[]>{
    let params  = `?orderBy=modified&limit=100&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  getCharactersModifiedDESC():Observable<ICharacter[]>{
    let params  = `?orderBy=-modified&limit=100&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  getComics(characterId:number):Observable<Comic[]>{
    let params  = `/${characterId}/comics?limit=4&apikey=${this.PublicKEY}`;
    return this.http.get<ICharacter[]>(this.getURL(params)).pipe(map((data: any) => data.data.results));
  }

  


  
}
