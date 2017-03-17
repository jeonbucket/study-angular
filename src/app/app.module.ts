import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserFormComponent} from './user-form.component';
import {LoginComponent} from './login.component';
import {SearchComponent} from './search.component';
import {SpotifyComponent} from './spotify.component';
import {ArtistComponent} from './artist.component';

import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoginComponent,
    SearchComponent,
    SpotifyComponent,
    HomeComponent,
    NotFoundComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
