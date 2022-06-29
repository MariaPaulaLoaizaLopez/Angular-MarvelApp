import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacterDataWrapper } from '../models/characterDataWrapper';
import { map } from 'rxjs/operators';

import { Md5 } from 'ts-md5/dist/md5';
import { ICharacter } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  private PublicKEY = '73fab3c0768c55c6796f1e2065ebe484';
  private param = `?limit=100&apikey=${this.PublicKEY}`;
  private characterUrl = this.baseUrl + this.param;

  // protected ts = new Date().getTime() + '';
  // protected hash = Md5.hashStr(this.ts + this.PRIV_KEY + this.PUBLIC_KEY);
  // public httpOptions = {
  //   headers: new HttpHeaders({
  //     'ts': this.ts,
  //     'apikey':  this.PRIV_KEY,
  //     'hash': this.hash
  //   })
  // };
  // url = `https:gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.PUBLIC_KEY}&hash=${this.hash}`;

  // public params = `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.hash}`;
  // public httpHeaders = {
  //   headers: new HttpHeaders({
  //     'Accept': 'application/json'
  //   })
  // }

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacter[]>{
    return this.http.get<ICharacter[]>(this.characterUrl).pipe(map((data: any) => data.data.results));
  }

  getComics(): Observable<any>{
    return this.http.get<any>(this.characterUrl).pipe(map((data: any) => data.data.results));
  }
}
