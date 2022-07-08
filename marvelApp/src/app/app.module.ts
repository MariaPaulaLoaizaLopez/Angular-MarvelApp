import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './characters/card/card.component';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FavoritesComicsComponent } from './favorites-comics/favorites-comics-list/favorites-comics-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './favorites-comics/modal/modal.component';
import { FavoriteComicComponent } from './favorites-comics/favorite-comic-card/favorite-comic-card.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { NgxSpinnerModule } from "ngx-spinner";  




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    CharactersListComponent,
    SearchBarComponent,
    FavoritesComicsComponent,
    CharacterDetailComponent,
    FilterSelectorComponent,
    ModalComponent,
    FavoriteComicComponent,
    SearchCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule, 
    RouterModule.forRoot([
      {path: 'characters', component: CharactersListComponent},
      {path: 'characters/:id', component: CharacterDetailComponent},
      {path: '', redirectTo: 'characters', pathMatch: 'full'},
      {path: '**', redirectTo: 'characters', pathMatch: 'full'}
    ])
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
