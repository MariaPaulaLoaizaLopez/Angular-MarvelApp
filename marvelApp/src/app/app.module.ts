import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { FavoritesComicsComponent } from './favorites-comics/favorites-comics.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    CharactersListComponent,
    SearchBarComponent,
    OrderMenuComponent,
    FavoritesComicsComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
