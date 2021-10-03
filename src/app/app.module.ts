import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
   
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
